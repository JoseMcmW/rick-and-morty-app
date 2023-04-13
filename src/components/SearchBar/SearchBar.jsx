import styles from "./searchBar.module.css";
import { useState } from "react";

export default function SearchBar({onSearch}) {

   const [ id, setId ] = useState("");

   const handleChange = (event) => {
      setId(event.target.value);
   };

   return (
      <div className={styles.container}>
         <input type='search' placeholder="Character ID" onChange={handleChange} value={id}/>
         <button onClick={() => {onSearch(id); setId('')}}>Add Character</button>
      </div>
   );
};