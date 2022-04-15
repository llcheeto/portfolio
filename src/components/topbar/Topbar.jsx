import './topbar.scss'
import React from 'react';
import {Person, Mail} from "@material-ui/icons";
import topLogo from '../../assets/images/topLogo.png';

export default function Topbar( {menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src={topLogo} alt="logo" />
                    </a>
                    <div className="itemContainer">
                        <Person className="icon" />
                        <span>+(863)-214-7285</span>
                    </div>
                    <div className="itemContainer">
                        <Mail className="icon"/>
                        <span>Briancornine@gamil.com</span>
                    </div>
                </div>                
                    <div className="right">
                        <div className="hamburger" onClick={() =>setMenuOpen(!menuOpen)}>
                            <span className="line1"></span>
                            <span className="line2"></span>
                            <span className="line3"></span>
                        </div>    
                    </div>
                </div>
            </div>
    );
}

