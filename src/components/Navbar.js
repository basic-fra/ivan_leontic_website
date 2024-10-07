import React, {useState, useEffect} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () =>  setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const scrollToTop = () => {
            window.scrollTo({
            top: 0,
            behavior: 'auto', 
            });
    };

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/home" className="navbar-logo" onClick={() => {closeMobileMenu(); scrollToTop();}}>
                    <div className='text-with-lines'>
                        <h1>IVAN LEONTIĆ</h1> 
                        <p>Visual Arts <i className='fa-solid fa-video' /></p> 
                    </div>
                    {/* &nbsp;<i className='fa-solid fa-gamepad' /> */}
                     {/* &nbsp;<i className='fa-solid fa-camera' /> */}
                    {/* &nbsp;<i className="fa-solid fa-camera-retro" /> */}
                    
                    {/* &nbsp;<i className="fa-solid fa-video" /> */}
                    
                    {/* &nbsp;<i className="fa-solid fa-clapperboard" />  */}
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars' } /> 
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={() => {closeMobileMenu(); scrollToTop();}}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/option2' className='nav-links' onClick={closeMobileMenu}>
                            About 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/option3' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/option4' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Contact me
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'> Contact me </Button>}
            </div>
        </nav>
    </>
  )
}

export default Navbar