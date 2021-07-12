import React from "react";
import SkillBar from "./SkillBar";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-container">
        <h1 className="header remove-bottom-margin">About Me</h1>
        <p className="center-text">
          My name is Justin and I graduated from Stony Brook University with a
          Bachelors of Engineering in Biomedical Engineering. Currently, I work
          at Zimmer Biomet as a quality engineer, and I've been taking an online
          course for web dev,{" "}
          <a href="https://fullstackopen.com/en/">FullStackOpen</a>, courtesy of
          University of Helsinki.
        </p>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-list">
          <div className="skill">
            <span className='skill-name'>Javascript</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>HTML</span>
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className='skill-name'>CSS</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>React</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>CSS</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>React</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>Javascript</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>HTML</span>
            <SkillBar rank={4} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
