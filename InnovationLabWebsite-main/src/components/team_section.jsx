import React from 'react'
import lbData from '../pages/data/lab_assistant.json';


const LabAssistantsSection = () => (
  <section className="relative py-12 md:py-24 px-4">
    <div className="container mx-auto relative z-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12 text-center text-white">Our Lab Assistants</h2>
      
      {/* Cards container */}
      <div className="mb-8 md:mb-12">
        <div className="flex justify-between flex-wrap gap-8 max-w-6xl mx-auto">
          {lbData.map((assistant, index) => (
            <div 
              key={index} 
              className="bg-#064449 rounded-lg shadow-lg overflow-visible transition-transform duration-300 hover:scale-105 flex flex-col items-center pt-16 pb-6 px-6 min-h-[380px]"
            >
              {/* Oversized Circular Image Container */}
              <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-blue-100 shadow-xl">
              <img 
                src={assistant.photo} 
                alt={assistant.name} 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = "/assets/default-profile.jpg"; }}
              />

              </div>
              
              <div className="text-center w-full mt-2">
                <h3 className="text-xl font-bold mb-2 text-white">{assistant.name}</h3>
                <p className="text-blue-600 text-base mb-3">{assistant.title}</p>
                <p>
                  <a href={`mailto:${assistant.email}`} className="text-blue-600 email-link underline">
                    {assistant.email}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Button
      <div className="text-center">
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
          Meet Our Team
        </button>
      </div> */}
    </div>
  </section>
);

export default LabAssistantsSection;