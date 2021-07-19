import React from "react";
import SkillBar from "./SkillBar";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="homepage-section background-white">
        <div className="text-container">
          <h1 className="header">ABOUT ME</h1>
          <p className="center-text">
            Ambitious to learn and always better than I was yesterday. My name
            is Justin and I graduated from Stony Brook University with a
            Bachelors of Engineering in Biomedical Engineering. I am a self
            taught programmer. Currently, I work at Zimmer Biomet as a quality
            engineer, and I've been taking an online course for web dev,
            <a href="https://fullstackopen.com/en/">FullStackOpen</a>, courtesy
            of the University of Helsinki.
          </p>
          <p className="remove-bottom-margin">
            I have experience working primarily with the MERN stack. Here's a
            quick rundown of the thing's I've been doing this past year:
          </p>
          <div className="skill">
            Created simple CRUD API using the MERN stack
          </div>
          <div className="skill">
            Implemented JWT Authenication within web applications
          </div>
          <div className="skill">
            Utilized MongoDB to store user information
          </div>
          <div className="skill">
            Replaced traditional state management with Redux and graphQL
          </div>
          <div className="skill">Created this personal landing page!</div>
          <p>
            I'm interested in any business and field that aims to improve. From
            farming, medical devices, and even finances, ask me to make an
            improvement in the industry, and you'll keep me occupied for a hot
            minute. I look forward to any challenges thrown, so definitely shoot
            me an email if you have any!
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
            <span className="skill-name">graphQL</span>
            <SkillBar rank={2} />
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
            <h4 className="work-experience-description">Zimmer Biomet</h4>
            <h4 className="work-experience-description">
              February 2020 - Current
            </h4>
            <ul className="work-experience-list">
              <li>
                Identify recurring issues and nonconformances, and develop
                corrective and prventive action plants to resolve these issues
              </li>
              <li>
                Address incoming complaints and complete a complaint history
                search to determine if additional correction/ preventive actions
                are needed
              </li>
              <li>
                Maintain up-to-date knowledge of 6 product lines by researching
                their blue prints and following change notices
              </li>
              <li>
                Analyze more than 6 FMEA files for gaps in failure modes and
                harm
              </li>
              <li>
                Consistently communicate with the development and manufacturing
                team to adress complaints and possible issues
              </li>
            </ul>
          </div>
          <div className="work-experience-entry">
            <h2 className="work-experience-title">Supervisor</h2>
            <h4 className="work-experience-description">
              Stony Brook University
            </h4>
            <h4 className="work-experience-description">
              August 2018 - September 2019
            </h4>
            <ul className="work-experience-list">
              <li>
                Oversaw and delegated tasks to 20 employees and set all
                expectations at the beginning of each night
              </li>
              <li>
                Administered evaluations to assess employees' performance and
                communicated shortcomings
              </li>
              <li>
                Maintained more than 60 employees' personnel records and
                organized training for new employees
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="homepage-section background-white">
        <div className="text-container">
          <h1 className="header">EDUCATION</h1>
          <div className="work-experience-entry">
            <h2 className="work-experience-title">Stony Brook University</h2>
            <h4 className="work-experience-description">
              Bachelor of Engineering in Biomedical Engineering; Minor in
              Mechanical Engineering
            </h4>
            <h4 className="work-experience-description">
              Graduation date: May 2019
            </h4>
            <h4 className="work-experience-description">GPA: 3.69</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
