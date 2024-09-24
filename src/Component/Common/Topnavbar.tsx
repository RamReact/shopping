import React, { Component } from "react";
import Logo from '../../Assets/images/rustoleum-logo-black.png';
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
class TopNav extends Component<{}, {}> {
    render() {
        return (
            <div className="topnav">
                <div>
                    <Link to={`/`}>
                    <img src={Logo} className="site-logo" />
                    </Link>
                   
                </div>
                <div className="right-side">
                    <div className="navbar-menu">Our Products</div>
                    <div className="navbar-menu">Professional Solutions</div>
                    <div className="navbar-menu">Inspiration</div>
                    <div className="navbar-menu">Resource Center</div>
                    <div className="navbar-menu">About</div>
                    <div className="navbar-menu"><CiSearch size={25} className="searchicon" /></div>
                </div>
            </div>
        )
    }

}
export default TopNav;