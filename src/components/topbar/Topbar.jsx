import './topbar.scss'
import React from 'react';
import {Person, Mail} from "@material-ui/icons";


export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">Genius.</a>
                        <div className="itemContainer">
                            <Person/>
                            <span>+(863)-214-7285</span>
                        </div>
                        <div className="itemContainer">
                            <Mail/>
                            <span>Briancornine@gamil.com</span>
                        </div>
                    </div>                
                        <div className="right">
                            <div className="hamburger">
                                <span className="line1"></span>
                                <span className="line2"></span>
                                <span className="line3"></span>
                            </div>    
                        </div>
                    </div>
                </div>
    );
}

