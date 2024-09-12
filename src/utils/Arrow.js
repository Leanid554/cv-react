import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import arrow from '../img/icons/arrow.png';
import '../components/navbar/style.css';

const Arrow = () => {
    const { pathname } = useLocation();

    // Use a regular expression to match the /project/:id pattern
    const isProjectPath = /^\/project\/\d+$/.test(pathname);
    const arrowClass = isProjectPath ? 'arrow arrow--black' : 'arrow';

    return (
        <NavLink to="/projects">
            <img className={arrowClass} src={arrow} alt="Back" />
        </NavLink>
    );
}

export default Arrow;
