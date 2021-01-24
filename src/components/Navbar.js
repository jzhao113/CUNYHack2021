import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links">
                <Link to="/profile">
                    <li>Profile</li>
                </Link>
                <Link to="/">
                    <li>Main</li>
                </Link>
                <Link to="/bookmarks">
                    <li>Bookmarks</li>
                </Link>
                <Link to="/">
                    <li>Edits</li>
                </Link>
                <Link to="/login">
                    <li>Login</li>
                </Link>
            </ul>
            {/* <Profile />
            <Postings />
            <Bookmarks />
            <Edits /> */}
        </nav>
    )
}

export default Navbar