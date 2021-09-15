import React from "react";
import { ProjectEntry } from "./ProjectEntry";
import chatExample from './media/chatExample.mov'

const Projects = () => {
  const chatDescrption =
    "A simple chat app used to practice using graphQL and the Apollo Server/Client. I created a simple login/ sign up system using MongoDB as a database, and helped me get started on learning authentication and tokens. After that I created a simple UI to allow the user to send a message to an added friend. By using subscriptions, the friend would receive the message and have it appear on screen without having to refresh the page, or refetch the query";
  const chatSkillsUsed = [
    "graphQL",
    "Subscriptions",
    "Apollo Client/Server",
    "Mongoose",
    "Express",
    "React",
    "Node.js",
  ];
  const chatGithubRepositoryLink = "https://github.com/JustinKim3420/Chat";

  return (
    <div className="homepage">
      <div className="project">
        <ProjectEntry
          example={chatExample}
          projectTitle={"Chats"}
          description={chatDescrption}
          skillsUsed={chatSkillsUsed}
          githubRepositoryLink={chatGithubRepositoryLink}
        />
      </div>
    </div>
  );
};

export default Projects;
