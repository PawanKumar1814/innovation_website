// import React from 'react';
// import Header from '../components/header';
// import Footer from '../components/footer';
// import AboutAnimation from '../components/about-animation';
// import AboutInfoSection from '../components/about-info-section';
// import TeamSection from '../components/team_section';
// import TaSection from '../components/ta-member';
// import '../styles/about.css';  // Import CSS file

// const About = () => {
//     return (
//       <div>
//         <Header />
//         <main>   
//           {/* <AboutAnimation />   */}
          
//           {/* Wrapped the sections inside a div with a background */}
//           <div className="about-section-bg">
//             <AboutInfoSection />
//             <TeamSection />
//             <TaSection />
//           </div>
//         </main>
//         <Footer />
//       </div>
//     );
// };

// export default About;

import React from 'react'
import Header from '../components/header';
import Footer from '../components/footer';
// import HeroSection from './About_hero';
import MissionSection from '../components/about-info-section';
import TeachingAssistantsSection from '../components/team_member';
import LabAssistantsSection from '../components/team_section';
import '../styles/about.css';  // Import CSS file

export default function Newabout() {



    return (
          <div className="flex flex-col min-h-screen bg-fixed bg-cover bg-center " style={{backgroundImage:`url("./assets/9068.jpg")`}}  >
        
          <div className="sticky top-0 z-50">
            <Header />
          </div>
        
          <main className="flex-grow relative z-10 ">
            <MissionSection />
            <LabAssistantsSection/>
            <TeachingAssistantsSection /> 
          </main>
          
          <Footer className="relative z-10" />
        </div>
    );
};

