import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import Footer from '../Footer';
import VideoGallery from '../VideoGallery';

function Home () {
    return (
        <>
          <HeroSection /> 
          <Cards /> 
          <VideoGallery />
          <Footer />
        </>
    )
}

export default Home;