import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";
import { connect } from "react-redux";

function Card({ id, name, status, species, gender, origin, image, onClose, addFavorite, deleteFavorite, myFavorites }) {

   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         deleteFavorite(id);
      }
      else {
         setIsFav(true);
         addFavorite({ id, name, status, species, gender, origin, image, onClose });
      }
   };

   useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

   return (
      <div className={styles.container}>
         {
            isFav ? (
               <button onClick={handleFavorite} className={styles.heartButton}>❤️</button>
            ) : (
               <button onClick={handleFavorite} className={styles.heartButton}>🤍</button>
            )
         }

         <button className={styles.closeButton} onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />

         <NavLink to={`/detail/${id}`} className={styles.name}>
            <h2>{name}</h2>
         </NavLink>

         <h2 className={styles.h2}>Specie: {species}</h2>
         <h2 className={styles.h2}>Gender: {gender}</h2>
      </div>
   );
};

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFavorite: (character) => { dispatch(addFavorite(character)) },
      deleteFavorite: (id) => { dispatch(deleteFavorite(id)) }
   }
};

export default connect (
   mapStateToProps,
   mapDispatchToProps
)(Card);