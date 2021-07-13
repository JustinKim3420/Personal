import React from "react";
import SkillBar from "./SkillBar";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-section background-white">
        <div className="text-container">
          <h1 className="header">ABOUT ME</h1>
          <p className="center-text">
            My name is Justin and I graduated from Stony Brook University with a
            Bachelors of Engineering in Biomedical Engineering. Currently, I
            work at Zimmer Biomet as a quality engineer, and I've been taking an
            online course for web dev,{" "}
            <a href="https://fullstackopen.com/en/">FullStackOpen</a>, courtesy
            of the University of Helsinki.
          </p>
        </div>
      </div>
      <div className="homepage-section background-gray">
        <h1 className="header">SKILLS</h1>
        <div className="skill-list">
          <div className="skill">
            <span className="skill-name">Javascript</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className="skill-name">HTML</span>
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className="skill-name">CSS</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className="skill-name">React</span>
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className="skill-name">MongoDB</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className="skill-name">Node.js</span>
            <SkillBar rank={3} />
          </div>
          <div className="skill">
            <span className="skill-name">Public Speaking</span>
            <SkillBar rank={1} />
          </div>
          <div className="skill">
            <span className="skill-name">Communication</span>
            <SkillBar rank={5} />
          </div>
          <div className="skill">
            <span className="skill-name">Flexibility</span>
            <SkillBar rank={4} />
          </div>
          <div className="skill">
            <span className="skill-name">Dark humor</span>
            <SkillBar rank={5} />
          </div>
        </div>
      </div>

      <div className="homepage-section background-teal">
        <div className="text-container">
          <h1 className="header">WORK EXPERIENCE</h1>
          <div className="work-experience-entry">
            <h2 className="work-experience-title">Quality Engineer</h2>
            <h5 className="work-experience-description">
              Zimmer Biomet
            </h5>
            <h5 className="work-experience-description">
              February 2020 - Current
            </h5>
            <ul className='work-experience-list'>
              <li>Identify recurring issues and nonconformances, and develop corrective and prventive action plants to resolve these issues</li>
              <li>Analyze complaints and complete a complaint history to determine if additional correction/ preventive actions are needed</li>
              <li>Maintain up-to-date knowledge of 6 product lines by researching their blue prints and following change notices</li>
              <li>Analyze more than 6 FMEA files for gaps in failure modes and harm</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
