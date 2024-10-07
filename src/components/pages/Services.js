import React from "react";
import { useState } from 'react';
// import './Services.css';
import './Services.css';
import '../../App.css'

const Services = () => {
    // Array of content for each "slide"
    const content = [
      {
        largeImage: 'images/directL.jpg', 
        smallImage: 'images/directS.jpg',
        header: 'Directing',
        text: 'This is the description for the first content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        largeImage: 'images/vidEditL.jpg', 
        smallImage: 'images/VidEditS.jpg',
        header: 'Video Editing',
        text: 'This is the description for the second content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        largeImage: 'images/colorGradL.jpg', 
        smallImage: 'images/colorGradS.jpg',
        header: 'Color Grading',
        text: 'This is the description for the third content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      {
        largeImage: 'images/VFXL.jpg', 
        smallImage: 'images/VFXS.jpg',
        header: 'Post-Production & VFX',
        text: 'This is the description for the fourth content. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
      },
      // Add more slides as needed
    ];
  
    // State to track current slide
    const [currentSlide, setCurrentSlide] = useState(0);
    //DODANO
    const [slideIn, setSlideIn] = useState(true);
    // Function to go to the next slide
    // const nextSlide = () => {
    //   setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
    // };
    //DODANO
    const nextSlide = () => {
      setSlideIn(false); // Trigger slide-out before changing the slide
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % content.length);
        setSlideIn(true); // Trigger slide-in after the slide changes
      }, 500); // Duration of the slide-out animation
    };
  
    // Function to go to the previous slide
    const prevSlide = () => {
      setSlideIn(false); // Trigger slide-out before changing the slide
      setTimeout(() => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + content.length) % content.length);
        setSlideIn(true); // Trigger slide-in after the slide changes
      }, 500); // Duration of the slide-out animation
    };

    // Function to go to the previous slide
    // const prevSlide = () => {
    //   setCurrentSlide((prevSlide) => (prevSlide - 1 + content.length) % content.length);
    // };
  
    return (
      <div className="carousel-container">
        
        {/* Left Side: Images */}
        {/* <div className="image-section"> */}
        {/* DODANO */}
        <div className="image-section"> 
          <div className={`large-image ${slideIn ? 'slide-in' : 'slide-out'}`}>
            <img src={content[currentSlide].largeImage} alt="Large" />
          </div>
          <div className={`small-image ${slideIn ? 'slide-in' : 'slide-out'}`}>
            <img src={content[currentSlide].smallImage} alt="Small" />
          </div>
        </div>

        <div className="buttonText">
          {/* Top Right Corner: Buttons */}
          <div className="button-section">
            <button onClick={prevSlide}>←</button>
            <button onClick={nextSlide}>→</button>
          </div>

          {/* Right Side: Text */}
          <div className="text-section">
            <h2>{content[currentSlide].header}</h2>
            <p>{content[currentSlide].text}</p>
          </div>
        </div>

      </div>
    );
  };

export default Services