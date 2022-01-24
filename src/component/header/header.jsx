import React from "react";
import { Link } from "react-router-dom";
import { Dummy } from "../dummy";
export function Header () { 
    return (
        <div>
            <Dummy />
            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='/aboutUs'> About Us</Link>
                </li>
                <li>
                    <Link to='/contactUs'> Contact Us</Link>
                </li>
                <li>
                    <Link to='/fakeData'> Fake API Data</Link>
                </li>
                <li>
                    <Link to='/reactQuery'> reactQuery </Link>
                </li>
            </ul>
        </div>
    )
}

