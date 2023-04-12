import Card from '../Card/Card';
import styles from './Cards.module.css';
import home from "../../img/home.png"

export default function Cards({characters, onClose}) {

   return (
   <div className={styles.container}>
      <div className={styles.divImg}>
            <img src={home} alt="home" className={styles.imgHome}/>
      </div>
      {
         characters.map(p => {
            return(
               <Card
                  key={p.id}
                  id = {p.id}
                  name={p.name}
                  status={p.status}
                  species={p.species}
                  gender={p.gender}
                  origin={p.origin.name}
                  image={p.image}
                  onClose={onClose}
               />
            )
         })
      }
   </div>);
}
