import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import AppContext from "../../context";
import styled from "styled-components";
import Header from "../../components/Header";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProjectHeaderImage = styled.div`
  height: 50rem;
  background-image: url(${(props) => props.img});
  animation: fadeIn 2s forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const ProjectName = styled.div`
  bottom: 2rem;
  left: 1rem;

  font-size: 5rem;
`;

export default () => {
  const { projectName } = useParams();
  const [selectedProject, setSelectedProject] = useState({});
  const [displayIndex, setDsiplayIndex] = useState(0);
  const { appProjects } = useContext(AppContext);

  useEffect(() => {
    setSelectedProject(
      appProjects.find(
        (appProject) =>
          appProject.projectName.toLowerCase() === projectName.toLowerCase()
      ) || {}
    );

    if (selectedProject.images) {
      setDsiplayIndex(
        Math.floor(Math.random() * selectedProject.images.length)
      );
    }
  }, [projectName, appProjects, selectedProject.images]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (selectedProject.images) {
    return (
      <div>
        <Header />

        <ProjectHeaderImage
          img={selectedProject.images[displayIndex]}
          className="bg-gray-300 relative"
        >
          <ProjectName className="absolute text-white ">
            {selectedProject.projectName}
          </ProjectName>
        </ProjectHeaderImage>

        <div className="py-16 px-32">
          <Divider />
        </div>

        <div
          className="flex justify-center items-center mb-4 text-gray-700"
          style={{ fontSize: "4rem", lineHeight: "100%" }}
        >
          <div>Gallery</div>
        </div>

        <div className="p-8">
          <Carousel>
            {selectedProject.images.map((projImage) => (
              <div key={projImage}>
                <img src={projImage} alt="proj" />
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }

  return <div>loading</div>;
};
