import React from "react";
import SkillBar from "./SkillBar";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="text-container">
        <h1 className="header remove-bottom-margin">ABOUT ME</h1>
        <p className="center-text">
          My name is Justin and I graduated from Stony Brook University with a
          Bachelors of Engineering in Biomedical Engineering. Currently, I work
          at Zimmer Biomet as a quality engineer, and I've been taking an online
          course for web dev,{" "}
          <a href="https://fullstackopen.com/en/">FullStackOpen</a>, courtesy of the
          University of Helsinki.
        </p>
      </div>
      <div className="skill-section">
        <h1 className="header">SKILLS</h1>
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
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className='skill-name'>MongoDB</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>Node.js</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className='skill-name'>Public Speaking</span>
            <SkillBar rank={1} />
          </div>
          <div className="skill">
            <span className='skill-name'>Communication</span>
            <SkillBar rank={5} />
          </div>
          <div className="skill">
            <span className='skill-name'>Flexibility</span>
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className='skill-name'>Dark humor</span>
            <SkillBar rank={5} />
          </div>
        </div>
      </div>
      <div className='text-container'>
        <h1 className="header remove-bottom-margin">WORK EXPERIENCE</h1>
        <div className='work-exeperience-entry'>
          <h2>Quality Engineer</h2>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
