import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";
import { useDispatch, useSelector } from "react-redux"; //usamos useDispatch por el mapDispatchToProps
import { useState, useEffect } from "react";
import { addFavorite, deleteFavorite } from "../../redux/actions";

function Card({ id, name, status, species, gender, origin, image, onClose }) {
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = useState(false);

   const handleFavorite = () => {
      if(isFav) {
         setIsFav(false);
         dispatch(deleteFavorite(id))
      }
      else {
         setIsFav(true);
         dispatch(addFavorite({ id, name, status, species, gender, origin, image, onClose }))
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

export default Card;