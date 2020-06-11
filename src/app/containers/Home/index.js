import React, { useState, useEffect } from "react";
import { importAll } from "../../helpers";
import logo from "../../../assets/images/logo.png";

import { Divider } from "semantic-ui-react";
import styled from "styled-components";

const images = importAll(
  require.context("../../../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

const ProjectsContainer = styled.div`
  height: 40rem;

  animation: fadeIn 5s infinite;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

const Header = styled.div`
  height: 2.5rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

const LogoContainer = styled.div`
  width: 15rem;
  min-width: 15rem;
`;

const ProjectLabel = styled.div`
  bottom: 1rem;
  right: 1rem;
`;

const ProjectImageContainer = styled.div`
  overflow: hidden;
  // height: 0;

  transition: height 0.3s ease;
`;

const ProjectImage = styled.img`
  transition: transform 0.5s;

  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
  }
`;

export default () => {
  const [displayImage, setDisplayImage] = useState("");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const imagesLength = images.length;
    const randomizeImage = () => Math.round(Math.random() * imagesLength);

    setDisplayImage(images[randomizeImage()]);

    setInterval(() => {
      setDisplayImage(images[randomizeImage()]);
    }, 5000);
  }, []);

  useEffect(() => {
    const sortedProjects = [];
    images.map((image) => {
      const imageProject = image.split("/")[3].split("-")[1];
      const existingProject = sortedProjects.find(
        (sortedProject) => sortedProject.projectName === imageProject
      );

      if (existingProject) {
        existingProject.images.push(image);
      } else {
        sortedProjects.push({
          projectName: imageProject,
          images: [image],
        });
      }

      setProjects(sortedProjects);
    });
  }, []);

  return (
    <div>
      <Header className="flex text-white justify-between items-center fixed w-full fixed top-0">
        <div className="mx-4 ">Ariankitektura</div>
        <div className="flex">
          <div className="mx-4">Projects</div>
          <div className="mx-4">Contact</div>
        </div>
      </Header>
      <ProjectsContainer className="w-full mt-16 flex justify-center">
        <img
          className="h-full rounded cursor-pointer"
          src={displayImage}
          alt="project"
        />
      </ProjectsContainer>

      <div className="m-16">
        <Divider />
      </div>

      <div className="flex justify-center items-center mx-64 mt-16">
        <LogoContainer className="ml-8">
          <img className="w-full" src={logo} alt="logo" />
        </LogoContainer>

        <div className="pr-24 text-lg leading-loose">
          <span className="font-bold">Ariankitektura Design Studio</span> is
          spearheaded by a bright and young architect winning multiple
          prestigous awards like the{" "}
          <span className="font-semibold">
            Asian Young Designer Award (3rd place and Best in Green Innovation
          </span>{" "}
          ) and
          <span className="font-semibold">
            United Nations Peace Marker Design Contest (1st Runner Up)
          </span>{" "}
          .
        </div>
      </div>

      <div className="m-16">
        <Divider />
      </div>

      <div className="bg-gray-500 mx-32 grid grid-cols-2">
        {projects.map((project) => (
          <ProjectImageContainer
            key={project.projectName}
            className="cursor-pointer relative"
          >
            <ProjectImage src={project.images[0]} alt="project-1" />
            <ProjectLabel className="absolute text-white font-bold text-4xl ">
              {project.projectName}
            </ProjectLabel>
          </ProjectImageContainer>
        ))}
      </div>
    </div>
  );
};
