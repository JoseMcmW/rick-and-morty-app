import { NavLink } from "react-router-dom";
import "./card.css";

export default function Card({ id, name, status, species, gender, origin, image, onClose }) {

   return (
      <div className="card-container">
         <button onClick={() => onClose(id)}>X</button>
         <img src={image} alt='' />

         <NavLink to={`/detail/${id}`}>
            <h2>{name}</h2>
         </NavLink>

         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
      </div>
   );
};