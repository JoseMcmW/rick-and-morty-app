import SearchBar from "../SearchBar/SearchBar";
import styles from "./Nav.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import navBrand from "../../img/title-nav.png"
import about from "../../img/about.png"
import home from "../../img/home.png"
import logout from "../../img/LOGOUT.png"

const Nav = ({onSearch, setAccess}) => {

    const handleLogOut = () => {
        setAccess(false);
    }

    return(
        <nav className={styles.container}>
            <img src={navBrand} alt="title-nav"></img>
            <NavLink to="/about">
                <img src={about} alt="about" className={styles.menu}/>
            </NavLink>
            <NavLink to="/home">
                <img src={home} alt="home" className={styles.menu}/>
            </NavLink>
            <NavLink to="/home">
                <img src={logout} alt="logout" className={styles.menu} onClick={handleLogOut}/>
            </NavLink>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;