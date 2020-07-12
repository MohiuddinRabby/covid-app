import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
    return (
        <div className="header ">
            <nav >
                <span> <Link to="/"><i className="fas fa-globe"></i> Global</Link></span>
                <span><Link to="/search/country"><i className="fas fa-flag"></i> Countries</Link></span>
                <span><Link to="/about"><i className="fas fa-question"></i> About</Link></span>
            </nav>
        </div>
    );
};

export default Nav;