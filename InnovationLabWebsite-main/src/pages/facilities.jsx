import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import FacilitiesHero from '../components/facilities-hero';
import PowerMachine from '../components/power-machine';


const Facilities = () => {
    return (
      <div>
        <Header />
        <main>   
          {/* <FacilitiesHero /> */}
          <PowerMachine />
        </main>
        <Footer/>
      </div>
    );
  };
  
  export default Facilities;

