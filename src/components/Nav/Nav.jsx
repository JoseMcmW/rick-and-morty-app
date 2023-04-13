import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";
import navBrand from "../../img/title-nav.png"

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return(
        <nav className={styles.container}>
            <img src={navBrand} alt="title-nav"></img>
            <NavLink to="/home" className={styles.menu}>Home</NavLink>
            <NavLink to="/favorites" className={styles.menu}>Favorites</NavLink>
            <NavLink to="/about" className={styles.menu}>About</NavLink>
            <NavLink to="/home" className={styles.menu} onClick={handleLogOut}>Log Out</NavLink>

            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;