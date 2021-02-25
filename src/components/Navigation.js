import React from "react";
import {
    Link
} from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <ul class="nav flex-column">
                <li>
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li>
                    <Link class="nav-link" to="/About">About</Link>
                </li>

            </ul>

        </>
    )
}
export default Navigation;
