import SearchBar from "../SearchBar/SearchBar";
import "./nav.css"
import { NavLink } from "react-router-dom";

const Nav = ({onSearch}) => {
    return(
        <nav className="nav">
            <button>
                <NavLink to="/about">
                    About
                </NavLink>
            </button>
            <button>
                <NavLink to="/home">
                    Home
                </NavLink>
            </button>
            <SearchBar onSearch={onSearch} />
        </nav>
    )
}

export default Nav;