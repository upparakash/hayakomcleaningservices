import React, { useRef, useState } from "react";
import "./Teams.css";
import RajababuImg from "./images/rajababu.jpeg";
import SrinivasImg from "./images/manager.jpeg";
import AkashImg from "./images/TeamLead.jpeg";


const Teams = () => {
  const sliderRef = useRef(null);
  const [activeMember, setActiveMember] = useState(null);
  const VijayImg =
  "https://www.svgrepo.com/show/384674/account-avatar-profile-user-11.svg";
  const slideLeft = () => {
    sliderRef.current.scrollBy({ left: -360, behavior: "smooth" });
  };

  const slideRight = () => {
    sliderRef.current.scrollBy({ left: 360, behavior: "smooth" });
  };

  const teamMembers = [
    
    {
      img: SrinivasImg,
      name: "Srinivas",
      role: "Operations Manager",
      short:
        "Oversees daily operations and ensures smooth service delivery across projects.",
      full: `Srinivas is the Operations Manager at Hayakom Cleaning Services, responsible for overseeing daily operations and ensuring smooth service delivery across all projects.

With strong leadership skills and a hands-on approach, Srinivas manages teams, schedules, and resources efficiently. He ensures that every job is completed on time, with proper quality checks and safety standards in place.

Srinivas is committed to customer satisfaction and continuous improvement. His dedication, professionalism, and strong work ethic make him a key pillar of the Hayakom Cleaning Services team.`,
    },
    {
      img: RajababuImg,
      name: "Rajababu",
      role: "Sales Executive (Operations)",
      short:
        "Dedicated Sales Executive managing sales operations and customer coordination.",
      full: `Rajababu is a dedicated Sales Executive at Hayakom Cleaning Services, playing a key role in managing sales operations and customer coordination. He is passionate about understanding client needs and delivering the right cleaning solutions with clarity and confidence.

With a strong focus on business growth, Rajababu handles client inquiries, service planning, pricing discussions, and follow-ups to ensure smooth operations from start to finish. His friendly and humble nature makes him easy to approach, and customers appreciate his clear communication and honest guidance.

Rajababu works closely with the operations team to ensure services are delivered on time and as promised. His commitment to customer satisfaction and operational excellence helps Hayakom Cleaning Services build long-term relationships and trust across Kuwait.`,
    },
    {
      img: AkashImg,
      name: "Akash",
      role: "Team Lead",
      short:
        "Guides field teams and ensures smooth execution of daily cleaning operations.",
      full: `Akash is a dedicated Team Lead at Hayakom Cleaning Services, responsible for guiding field teams and ensuring smooth execution of daily cleaning operations.

With a strong sense of responsibility and teamwork, Akash coordinates schedules, assigns tasks, and ensures all cleaning activities follow company standards and safety guidelines.

Akash’s leadership, attention to detail, and commitment to quality play an important role in delivering reliable and professional cleaning services to our clients throughout Kuwait.`,
    },
    {
      img: VijayImg,
      name: "VijayKumar",
      role: "Team Lead",
      short:
        "Supervises on-site teams and ensures high-quality service delivery.",
      full: `VijayKumar is a reliable Team Lead at Hayakom Cleaning Services, responsible for supervising on-site teams and ensuring high-quality service delivery.

With a practical and organized approach, VijayKumar ensures that team members follow proper cleaning procedures, safety standards, and work schedules.

VijayKumar’s leadership, commitment, and focus on quality help Hayakom Cleaning Services deliver consistent and dependable cleaning solutions across Kuwait.`,
    },
  ];

  return (
    <section className="teams-container">
      <h2 className="teams-title">Our Team</h2>

      {/* FULL VIEW */}
      {activeMember && (
        <div className="team-fullview">
          <button
            className="close-btn"
            onClick={() => setActiveMember(null)}
          >
            ✕
          </button>

          <img src={activeMember.img} alt={activeMember.name} />
          <h2>{activeMember.name}</h2>
          <h4>{activeMember.role}</h4>

          {activeMember.full.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}

      {/* SLIDER */}
      {!activeMember && (
        <>
          <button className="team-arrow left" onClick={slideLeft}>
            ◀
          </button>
          <button className="team-arrow right" onClick={slideRight}>
            ▶
          </button>

          <div className="teams-slider" ref={sliderRef}>
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
               <center><img src={member.img} alt={member.name} /></center> 

                <h3>{member.name}</h3>
                <span>{member.role}</span>

                <p>{member.short}</p>

                <button
                  className="read-more"
                  onClick={() => setActiveMember(member)}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Teams;
