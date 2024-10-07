import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Footer() {

  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the contact page
    navigate('/option4');
  };
    
  return (
    <div className='footer-container'>
      {/* <div className='footer-text'> */}
        <h2 className='footer-q'>Want to work on your project?</h2>
        <button className='contact-btn' onClick={handleClick}>
          Contact me
        </button>
      {/* </div> */}
      {/* <div className='footer-links'>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>About</h2>
            <Link to='/option4'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Contact</h2>
            <Link to='/option4'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div className='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div className='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='https://www.instagram.com/ivan.leontic/'>Instagram</Link>
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Tiktok</Link>
          </div>
        </div>
      </div> */}
      {/*DODANO */}
      {/* <div>
        <Contact />
      </div> */}
      {/*DODANO */}
      <section className='social-media'>
        <div className='social-media-wrap'>
          <div className='footer-logo'>
            <div className='social-logo'>
              Ivan Leontić&nbsp; 
              <i className="fa-solid fa-video" />
              </div>
            {/* </Link> */}
          </div>
          <small className='website-rights'> All rights reserved ©2020</small>
          <div className='social-icons'>
            {/* <h3>Social media</h3> */}
            <Link
              className='social-icon-link facebook'
              to='/'
              target='_blank'
              aria-label='Facebook'
            >
              <i className='fab fa-facebook-f' />
            </Link>
            <Link
              className='social-icon-link instagram'
              to='https://www.instagram.com/ivan.leontic/'
              target='_blank'
              aria-label='Instagram'
            >
              <i className='fab fa-instagram' />
            </Link>
            <Link
              className='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i className='fab fa-youtube' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i className='fa-brands fa-tiktok' />
            </Link>
            <Link
              className='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='Whatsapp'
            >
              <i className='fa-brands fa-whatsapp' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;