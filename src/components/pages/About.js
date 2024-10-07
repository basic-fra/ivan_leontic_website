import React from "react";
import './About.css';
import '../../App.css'

const About = () => {
    return (
      <section className="about-me" id="about">
        <div className="about-me-content">
          {/* Profile Picture */}
          <div className="profile-picture">
            <img src='/images/randomMan.jpg'alt="Your Name" />
          </div>
  
          {/* Text & Social Links */}
          <div className="about-me-text">
            <h2>About Me</h2>
            <p>
              Hi, I'm [Your Name]! I'm a [profession or hobby] who loves creating, learning, and sharing my journey.
              Lorem Ipsum je jednostavno probni tekst koji se koristi u tiskarskoj i slovoslagarskoj industriji. 
              Lorem Ipsum postoji kao industrijski standard još od 16-og stoljeća, kada je nepoznati tiskar uzeo 
              tiskarsku galiju slova i posložio ih da bi napravio knjigu s uzorkom tiska. Taj je tekst ne samo 
              preživio pet stoljeća, već se i vinuo u svijet elektronskog slovoslagarstva, ostajući u suštini 
              nepromijenjen. Postao je popularan tijekom 1960-ih s pojavom Letraset listova s odlomcima Lorem Ipsum-a,
                a u skorije vrijeme sa software-om za stolno izdavaštvo kao što je Aldus PageMaker koji također sadrži 
                varijante Lorem Ipsum-a.
            </p>
  
            {/* Social Media Links */}
            <div className="social-links">
              <a href="https://www.instagram.com/leontiiic/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.facebook.com/yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://www.tiktok.com/@yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-tiktok"></i>
                </a>
              <a href="https://www.youtube.com/@yourusername" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;