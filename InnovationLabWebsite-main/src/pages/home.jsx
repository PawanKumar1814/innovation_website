import React from 'react';
import Header from '../components/header';
import ImageSlider from '../components/slider';
import HeroSection from '../components/herosection';
import NewsAndUpdates from '../components/news_updates';
import Footer from '../components/footer';
import AnimatedPinDemo from '../components/card';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HeroSection />
      {/* This section will have the background image */}
      <div className="content-background">
        {/* <AnimatedPinDemo /> */}
        <NewsAndUpdates />
        <ImageSlider />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
