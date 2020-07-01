import React, { useState, useEffect, useContext } from "react";
import logo from "../../../assets/images/logo.png";
import cx from "classnames";
import { Divider } from "semantic-ui-react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import Header from "../../components/Header";
import AppContext from "../../context";

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
  opacity: 0;
  transition: opacity 2s ease;

  &.isVisible {
    opacity: 1;
  }
`;

const ProjectImage = styled.img`
  transition: transform 0.5s;

  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
  }
`;

export default ({ images }) => {
  const [displayImage, setDisplayImage] = useState("");
  const [projectsInViewport, setProjectsInViewport] = useState([]);
  const { appProjects } = useContext(AppContext);

  const history = useHistory();

  useEffect(() => {
    const imagesLength = images.length;
    const randomizeImage = () => Math.round(Math.random() * imagesLength);

    setDisplayImage(images[randomizeImage()]);

    const intervalImage = setInterval(() => {
      setDisplayImage(images[randomizeImage()]);

      return () => clearInterval(intervalImage);
    }, 5000);
  }, [images]);

  useEffect(() => {
    const isInViewport = (el, offset = -150) => {
      if (!el) return false;
      const top = el.getBoundingClientRect().top;
      return top + offset >= 0 && top - offset <= window.innerHeight;
    };

    document.addEventListener("scroll", () => {
      const tempprojectsInViewport = [];
      appProjects.forEach((project, i) => {
        const el = document.getElementById("project-" + i);

        if (isInViewport(el)) {
          tempprojectsInViewport.push(i);
        }
      });

      setProjectsInViewport((projectsInViewport) => [
        ...projectsInViewport,
        ...tempprojectsInViewport,
      ]);
    });

    return document.removeEventListener("scroll", () => {});
  }, [appProjects]);

  return (
    <div>
      <Header />
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
          <img
            onClick={() => history.push("/")}
            className="cursor-pointer"
            className="w-full"
            src={logo}
            alt="logo"
          />
        </LogoContainer>

        <div className="pr-24 text-lg leading-loose">
          <span className="font-bold">Ariankitektura Design Studio</span> is
          spearheaded by a bright and young architect who has won multiple
          prestigious awards like the{" "}
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

      <div id="projet-divider" className="m-16">
        <Divider />
      </div>

      <div className="bg-gray-300 mx-32 grid grid-cols-2">
        {appProjects.map((project, i) => {
          return (
            <ProjectImageContainer
              onClick={() => {
                history.push(`/${project.projectName.toLowerCase()}`);
              }}
              id={"project-" + i}
              key={project.projectName}
              className={cx("cursor-pointer relative", {
                isVisible: projectsInViewport.includes(i),
              })}
            >
              <ProjectImage
                src={project.images[project.imageToDsiplay]}
                alt="project-1"
              />
              <ProjectLabel className="absolute text-white font-bold text-4xl ">
                {project.projectName.toUpperCase()}
              </ProjectLabel>
            </ProjectImageContainer>
          );
        })}
      </div>
    </div>
  );
};
