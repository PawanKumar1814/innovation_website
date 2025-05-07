import React from 'react'

const MissionSection = () => (
    <section className="py-16 bg-trahsparent">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="./assets/images/about.jpg"
              alt="Innovation Lab Facility" 
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-6 text-blue-800">About Us</h2>
            <p className="text-lg mb-4">
            The CSquare Innovation CENTRE at IIT Palakkad is a well-equipped facility for fabricating any prototype, proof of concept idea, or project work. The facility is open to the IIT Palakkad community and the general public.  We operate out of two locations: C06 and below the auditorium in the Agora block, Nila Campus. The facility has state-of-the-art machines for prototyping: ranging from CNC machines, laser cutters, and 3D printers to hand tools for the fabrication of projects or products in any interdisciplinary field. Software required (like Fusion 360 and CAD) is available. The CSquare Innovation CENTRE also conducts events, talks, and workshops to help our stakeholders develop the skills needed to think, design, and create.
            </p>

          </div>
        </div>
      </div>
    </section>
  );

  export default MissionSection;