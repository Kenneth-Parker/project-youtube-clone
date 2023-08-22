import React from "react";
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import HomeNavBar from "./HomeNavBar";
import TeamMemberCard from './TeamMemberCard'; 

const AboutPage = () => {

    const teamMembers = [
        {
            name: 'Kenia Decoteau',
            imageUrl: 'https://avatars.githubusercontent.com/u/131702982?v=4',
            linkedInLink: 'https://www.linkedin.com/in/kenia-decoteau/',
            githubLink: 'https://github.com/KeniaD1',
            info: 'I am a Pursuit fellow future Software Developer I find joy in sharing my knowledge with others that may lack the resources .'
        },
        {
            name: 'Kenneth Parker',
            imageUrl: 'https://avatars.githubusercontent.com/u/131785555?v=4',
            linkedInLink: 'https://www.linkedin.com/in/-KennethParker',
            githubLink: 'https://github.com/Kenneth-Parker',
            info: `As a Pursuit full stack web developer with an entrepreneurial mindset, I'm passionate about building innovative web applications that solve real-world problems`
        },
        {
            name: 'Anthony Owens',
            imageUrl: 'https://avatars.githubusercontent.com/u/129772708?v=4',
            linkedInLink: 'https://www.linkedin.com/in/ako90z/',
            githubLink: 'https://github.com/AttorneyMan',
            info: 'Looking to use my knowledge to improve my skills and career effectiveness.'
        },

        {
            name: 'Tyrell Oliver',
            imageUrl: 'https://avatars.githubusercontent.com/u/131703401?v=4',
            linkedInLink: 'https://www.linkedin.com/in/tyrell-kamara-oliver/',
            githubLink: 'https://github.com/TyrellOliver',
            info: `I am a Pursuit fellow studying to become a FSW Developer`
        },
        {
            name: 'Natalie Vargas',
            imageUrl: 'https://avatars.githubusercontent.com/u/131725590?v=4',
            linkedInLink: 'https://www.linkedin.com/in/natalie-vargas-nyc/',
            githubLink: 'https://github.com/Nat485',
            info: `FSW Developer passionate about making a difference in people's life, one code at a time.`
        },
    ];


    return (
        <>

            <header>
                <HomeNavBar />
            </header>

            <div className="about-page">
                <h1>About the Team</h1>
                <hr />
                <div className="team-members">
                    {teamMembers.map((member, index) => (
                        <TeamMemberCard
                            key={index}
                            name={member.name}
                            imageUrl={member.imageUrl}
                            linkedInLink={member.linkedInLink}
                            githubLink={member.githubLink}
                            info={member.info}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default AboutPage;
