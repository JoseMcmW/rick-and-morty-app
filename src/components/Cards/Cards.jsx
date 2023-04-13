import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({characters, onClose}) {

   return (
   <div className={styles.container}>
            <h1 className={styles.title}>Added Characters</h1>
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
