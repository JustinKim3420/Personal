import { React } from "react";

export const ProjectEntry = ({
  example,
  projectTitle,
  description,
  skillsUsed,
  githubRepositoryLink,
}) => {
  return (
    <div>
      <h1>{projectTitle}</h1>
      <a href={githubRepositoryLink}>Github Repository Link</a>
      {example ? (
        <div>
          <h3>Example</h3>
          <video controls="controls" width="600" height="300" className="video">
            <source src={example} />
          </video>
        </div>
      ) : null}
      <h3>Skills Used</h3>
      <ul>
        {skillsUsed.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      <h3>Description</h3>
      <p>{description}</p>
    </div>
  );
};
