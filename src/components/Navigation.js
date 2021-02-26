import React from "react";
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul className="nav flex-column">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="nav-link" to="/About">About</Link>
                </li>

            </ul>

        </>
    )
}
export default Navigation;
