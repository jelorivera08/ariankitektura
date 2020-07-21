import React, { useState, useContext, useEffect } from "react";
import { Divider, Icon } from "semantic-ui-react";
import cs from "classnames";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import AppContext from "../../context";
import logo from "../../../assets/images/logo.png";
import { youtubeVideos } from "./constants";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import ReactPlayer from "react-player";

const ProjectImage = styled.img`
  transition: transform 0.5s;

  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
  }
`;

const ImageContainer = styled.div`
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

const getRandomProjectImage = (appProjects) => {
  if (appProjects.length <= 0) return "static/media/2019-AVIDA-1.d99f92a6.jpg";

  try {
    const randomProjectIndex = Math.round(
      Math.random() * appProjects.length - 1
    );

    const randomImageIndex = Math.round(
      Math.random() * appProjects[randomProjectIndex].images.length - 1
    );
    return appProjects[randomProjectIndex].images[randomImageIndex];
  } catch (err) {
    return "static/media/2019-AVIDA-1.d99f92a6.jpg";
  }
};

export default () => {
  const history = useHistory();
  const { appProjects, exteriorImages, interiorImages } = useContext(
    AppContext
  );

  const [selections, setSelections] = useState([
    {
      text: "Exterior",
      selected: true,
      render: (exteriorImages) => (
        <div className="grid grid-cols-3 grid-rows-3 px-8 mt-8 ">
          {exteriorImages.map((image, i) => {
            return (
              <div className="overflow-hidden">
                <ProjectImage src={image} />{" "}
              </div>
            );
          })}
        </div>
      ),
    },
    {
      text: "Interior",
      selected: false,
      render: (interiorImages) => (
        <div className="grid grid-cols-3 grid-rows-3 px-8 mt-8 ">
          {interiorImages.map((image, i) => {
            return (
              <div className="overflow-hidden">
                <ProjectImage src={image} />{" "}
              </div>
            );
          })}
        </div>
      ),
    },
    {
      text: "Walkthroughs",
      selected: false,
      render: () => (
        <div className="grid  grid-cols-2 px-8 mt-8">
          {youtubeVideos.map((yt) => (
            <div className="w-full" key={yt}>
              <ReactPlayer url={yt} />
            </div>
          ))}
        </div>
      ),
    },
  ]);

  return (
    <div>
      <div className="flex justify-center items-center pt-12">
        <div>
          <img
            onClick={() => history.push("/")}
            className="cursor-pointer"
            style={{
              height: "7rem",
            }}
            src={logo}
            alt="logo"
          />
        </div>

        {selections.map((v, i) => (
          <div
            key={v.text}
            className={cs("px-4 text-xl cursor-pointer", {
              "text-red-600": v.selected,
            })}
            onClick={() => {
              setSelections(
                [...selections].map((s, ii) => ({
                  ...s,
                  selected: i === ii ? true : false,
                }))
              );
            }}
          >
            {v.text}
          </div>
        ))}
      </div>

      <div className="px-24">
        <Divider />
      </div>

      <div className="flex w-100 justify-center items-center">
        {selections.map(
          (v, i) =>
            v.selected && v.render(i === 0 ? exteriorImages : interiorImages)
        )}
      </div>
    </div>
  );
};
