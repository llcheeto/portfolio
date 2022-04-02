import './intro.scss';
import { init } from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {
    const textRef = useRef();
    
    useEffect(() => {
        init(textRef.current, {  
            showCursor: true,
            backDelay: 1500,
            backSpeed: 50,
            strings: ["Developer", "Designer", "Content Creator"],
        });  
    },  []);
    
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainter">
                    <img src="assets/man.png" alt=""></img>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm </h2>
                    <h1>Brian Cornine</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/downarrow.png" alt="">
                </img></a> 
            </div>
        </div>    
    )
}