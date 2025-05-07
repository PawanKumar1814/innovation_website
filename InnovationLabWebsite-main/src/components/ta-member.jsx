
import React from "react";
import TeamMember from "../components/team_member";
import "../styles/team_section.css"; 

const members = [
  {
    name: "Jenny",
    // role: "Web Analyst",
    image: "./assets/images/person.jpg", 
    email: "something@iitpkd.ac.in",
  },
  {
    name: "Alex Smith",
    // role: "UI Designer",
    image: "./assets/images/person.jpg",
    email: "something@iitpkd.ac.in",
  },
  {
    name: "Alex Smith",
    // role: "UI Designer",
    image: "./assets/images/person.jpg",
    email: "something@iitpkd.ac.in",
  },
  {
    name: "Alex Smith",
    // role: "UI Designer",
    image: "./assets/images/person.jpg",
    email: "something@iitpkd.ac.in",
  },
  // Add more members here
];

const TaSection = () => {
    return (
      <div className="team-section-container">
        <h2 className="team-section-heading">TA Members</h2>
        <div className="team-section">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    );
  };

export default TaSection;
