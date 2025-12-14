import React from "react";
import "./Teams.css";
import OperationalManager from './images/OperationalManager.jpeg';
import TeamLead from './images/TeamLead.jpeg';

const Teams = () => {
  const teamMembers = [
    {
      img: "https://i.ibb.co/2PZQF39/profile1.jpg",
      name: "Raja Babu",
      role: "Sales Executive",
      desc: "A Sales Executive at BLEACH®, Raja is a fanatic when it comes to driving business sales for us. He is a humble guy who is easy to approach. Ahmed loves playing football when away from work."
    },
    {
      img: OperationalManager,
      name: "SARAH SMITH",
      role: "Operations Manager",
      desc: "Sarah manages day-to-day operations and ensures customer satisfaction. Her leadership and work ethic make her a key pillar of our team."
    },
    {
      img: TeamLead,
      name: "Uppar Akash",
      role: "Team Lead",
      desc: "Akash specializes in deep cleaning and customer service. He takes pride in delivering exceptional results with every task."
    },
  ];

  return (
    <div className="teams-container">
      <h1 className="teams-title">Our Team</h1>

      <div className="teams-grid">
        {teamMembers.map((member, index) => (
          <div className="team-card" key={index}>
            <div className="team-header">
              <img src={member.img} alt={member.name} className="team-img" />

              <div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
              </div>
            </div>

            <div className="team-line"></div>

            <p className="team-desc">{member.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
