import React from 'react'
import taData from '../pages/data/ta.json';

// Component for teaching assistants with transparent cards, 4 in a row
const TeachingAssistantsSection = () => (
    <section className="py-16 bg-transparent">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center text-blue-800">Our Teaching Assistants</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {taData.map((ta, index) => (
            <div key={index} className=" bg-opacity-100 rounded-lg shadow-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:bg-opacity-70 hover:shadow-xl" style = {{backgroundColor: 'black'}}>
              <div className="p-4 flex flex-col items-center">
                <img 
                  src={ta.photo}
                  alt={ta.name} 
                  className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-200"
                />
                <h4 className="font-bold text-center">{ta.name}</h4>
                <p className="text-blue-600 text-sm mb-2 text-center">{ta.title}</p>
                <p className="text-gray-700 text-sm text-center">{ta.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

export default TeachingAssistantsSection;
