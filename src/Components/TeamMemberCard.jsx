import React from 'react';
import './TeamMemberCard.css';


function TeamMemberCard({ name, imageUrl, linkedInLink, githubLink, info }) {
  return (
    <div className="team-member-card">
        <hr />
      <img src={imageUrl} alt={`Profile of ${name}`} className="profile-image"  />
      <h3>{name}</h3>
      <p>{info}</p>
      <div className="social-links">
        <a href={linkedInLink} target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <br />
        <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
        <br /><br />
        <hr />
      </div>
    </div>
  );
}

export default TeamMemberCard;
