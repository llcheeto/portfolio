import './logo.scss';
import LogoB from '/home/llcheeto/portfolio/src/assets/images/B.png';
import { useRef, useEffect } from 'react' 
import gsap from 'gsap';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

const Logo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 8,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4.5,
        duration: 1,
      }
    )
  }, [])
	
	return (
      	<div className="logo-container" ref={bgRef}>
          <img 
            ref={solidLogoRef} 
            className="solid-logo" 
            src={LogoB} 
            alt="B" 
          />
          
          <svg
            width="800pt"
            height="897pt"
            version="1.0"
            viewBox="55 10 450 600"
            xml="http://www.w3.org/2000/svg"
			  >
					<g
						className="svg-container"
						transform="matrix(1 0 0 1 260 328)"
						fill="none"
					>
						<path
						 ref={outlineLogoRef}
						 d="m 73.38504,-120.7298 q 19.995117,0 32.08008,-8.78907 12.08496,-8.78906 15.60058,-25.92773 3.2959,-16.91895 -5.27343,-25.70801 -8.56934,-9.00879 -28.564456,-9.00879 H 40.426056 l -13.842774,69.4336 z M 47.457306,22.75164 q 25.488281,0 40.429687,-10.766601 15.161137,-10.7666018 19.555667,-32.519531 4.1748,-21.313477 -6.37207,-31.860352 Q 90.523712,-63.161446 64.815704,-63.161446 H 15.157501 L -2.2008972,22.75164 Z M 149.84988,-95.241524 q 25.70801,7.910157 36.25489,29.223633 10.7666,21.313477 4.61425,52.294922 -9.66796,47.460937 -46.3623,70.751953 Q 107.66238,80.32 42.183868,80.32 H -98.221405 l 65.698242,-328.05176 H 94.47879 q 68.33496,0 94.70215,20.6543 26.58691,20.6543 17.57812,66.13769 -4.83398,23.9502 -19.55566,40.86914 -14.50195,16.69922 -37.35352,24.829106 z"
             />
					</g>
					</svg>
          
				</div>


    )
}

export default Logo