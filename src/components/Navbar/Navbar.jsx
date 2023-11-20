import { Link } from "react-router-dom"
import '../../css/Navbar.css'
import React, { useState, useEffect } from "react";

export default function NavBar() {
    const [isAuth, setIsAuth] = useState(false);
    useEffect(() => {
      if (localStorage.getItem("access_token") !== null) {
        setIsAuth(true);
      }
    }, [isAuth]);
    return (
        <div className="NavBar">
            <h1>WaitLessWellness</h1>
        <nav>
        {isAuth ? (
            <>
            <Link to='/'>Home</Link>
            &nbsp; | &nbsp;
            <Link to='/form'>Physio Form</Link>
            &nbsp; | &nbsp;
            <Link to='/response'>Response Page</Link>
            &nbsp; | &nbsp;
            <Link to='/exercise'>Exercises</Link>
            &nbsp; | &nbsp;
            <Link to='/Management'>Management</Link>
            &nbsp; | &nbsp;
            <Link to='/faq'>FAQ</Link>
            &nbsp; | &nbsp;
            <Link to='/logout'>Logout</Link>
            </>
          ) : (
            <>
            <Link to='/login'>Login</Link>
            &nbsp; | &nbsp;
            <Link to='/signup'>Sign Up</Link>
            </>
          )}
        </nav>
        </div>
      )
}