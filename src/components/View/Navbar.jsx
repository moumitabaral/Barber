import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from './img/logo.png'

export default function Navbar() {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 90) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <div>
            <div className='fixed-top'>
                <div className=''>
                    <nav className={colorChange ? 'navbar colorChange navbar-expand-lg navbar-light nav_head ' : 'navbar navbar-expand-lg navbar-light nav_head '}>
                        <div className="container">
                            <Link className="navbar-brand" to="/"><img src={logo} /></Link>
                            <button className="navbar-toggler border-0 " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                {/* <span className="navbar-toggler-icon text-white"></span> */}
                                <i class="bi bi-list text-white "></i>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item   me-md-3">
                                        <NavLink className="nav-link  navLink text-white" to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item  me-md-3">
                                        <NavLink activeClassName="active" className="nav-link  navLink text-white" to="/about">About Us</NavLink>
                                    </li>

                                    <li className="nav-item  me-md-3">
                                        <NavLink activeClassName="active" className="nav-link  navLink text-white" to="/services">Services</NavLink>
                                    </li>
                                    <li className="nav-item ">
                                        <NavLink activeClassName="active" className="nav-link  navLink text-white" to="/gallery">Gallery</NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <Link to="booking_now">
                                        <button className="btn btn-sm btnLink px-3" style={{ background: '#BDA78A', color: '#222124' }} type="submit">Book Now</button>
                                    </Link>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
