import { useSelector } from "react-redux";
import styles from "./Favorites.module.css";
import { NavLink } from "react-router-dom";
import favorites from "../../img/favorites.png"

const Favorites = () => {
    const { myFavorites } = useSelector(state => state)
    return (
            <div className={styles.favorites}>
                <div>
                    <img src={favorites} alt="favorites" className={styles.imgFavorites}/>
                </div>

                {
                    myFavorites.map((character) => {
                        return (
                            <div key={character.id} className={styles.container}>
                                <button className={styles.closeButton}>X</button>
                                <img src={character.image} alt={character.image} />

                                <NavLink to={`/detail/${character.id}`} className={styles.name}>
                                    <h2>{character.name}</h2>
                                </NavLink>

                                <h2 className={styles.h2}>Specie: {character.species}</h2>
                                <h2 className={styles.h2}>Gender: {character.gender}</h2>
                            </div>
                        )
                    })
                }
            </div>
    )
}

export default Favorites