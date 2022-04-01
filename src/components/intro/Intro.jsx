import './intro.scss'

export default function Intro() {
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
                    <h3>Freelance<span></span></h3>
                </div>
                <a href="#portfolio">
                    <img src="assets/downarrow.png" alt="">
                </img></a> 
            </div>
        </div>    
    )
}