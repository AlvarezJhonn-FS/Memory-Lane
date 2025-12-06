import React from "react";
import "../styles/Header.scss"
import { Link } from "gatsby";


const Header = () => {
    return (
        <div className="header">
            <h1 className="header-title"><Link to="/">Memory Lane</Link></h1>
            <nav className="header-nav">
                 <Link to="/">Home</Link>
                <Link to="About">About</Link>
            </nav>
        </div>
    )
}

export default Header;