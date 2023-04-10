import { NavLink } from "react-router-dom";
import styles from "./Card.module.css"

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

   return (
      <div className={styles.container}>
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />

         <NavLink to={`/detail/${id}`} className={styles.name}>
            <h2>{name}</h2>
         </NavLink>

         <h2 className={styles.h2}>Specie: {species}</h2>
         <h2 className={styles.h2}>Gender: {gender}</h2>
      </div>
   );
};