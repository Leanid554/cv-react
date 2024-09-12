import { NavLink, useLocation } from "react-router-dom";
import BtnDarkMode from "../BtnDrkMode/btnDarkMode";
import Arrow from "../../utils/Arrow";
import "./style.css";

const Navbar = () => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link ';
    const { pathname } = useLocation();

    const isContactsPath = pathname === '/contacts';
    const containerClass = isContactsPath ? 'container no-scroll' : 'container';

    return ( 
        <nav className="nav">
            <div className={containerClass}>
                <div className="nav-row">
                    <Arrow />

                    <NavLink to="/" className="logo">
                        <strong>Freelancer</strong> portfolio
                    </NavLink>

                    <BtnDarkMode/>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Projects
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                                Contacts
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
