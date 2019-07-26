import React from "react";

//components
import Copyright from "../Copyright";

const FooterNavbar = props => {
    return (
        <>
            <ul className="nav">
                <li className="nav__item"><a href="#" className="nav__link">Find your dream home</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Request proposal</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Download home planner</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contact us</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Submit your property</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Come work with us!</a></li>
            </ul>
            <Copyright />

        </>
    )
}

export default FooterNavbar;