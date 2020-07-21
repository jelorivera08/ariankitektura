import React, { useState, useContext, useEffect } from "react";
import { Divider, Icon } from "semantic-ui-react";
import cs from "classnames";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import AppContext from "../../context";
import logo from "../../../assets/images/logo.png";
import arki from "../../../assets/images/architect.jpg";
import address from "../../../assets/images/address.png";

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
  const { appProjects } = useContext(AppContext);

  const [imgToDisplay, setImgToDisplay] = useState("");

  useEffect(() => {
    if (appProjects.length <= 0) return;

    setImgToDisplay(getRandomProjectImage(appProjects));

    const imgInterval = setInterval(() => {
      setImgToDisplay(getRandomProjectImage(appProjects));
    }, 5000);

    return () => clearInterval(imgInterval, () => {});
  }, [appProjects]);

  const [selections, setSelections] = useState([
    {
      text: "The Firm",
      selected: true,
      render: () => (
        <div key={1} className="flex justify-start">
          <div className="">
            <img src={arki} alt="archi arian" className="rounded" />
          </div>
          <div className="w-2/4 p-12 text-justify leading-loose text-xl ">
            <div className="pt-4">
              At ArianKitektura, we establish an honest and comfortable
              relationship with our clients, as building a relationship is one
              of the key drivers to bringing a vision to life. As a young
              architect, starting my own path was tedious, but what I learned
              from the field is this: first-hand experiences are what makes a
              great architect. I honestly believe that I have the capabilities
              to design and conceptualize the goals and dreams of our clients.
              As a determined architect, it is important for me to maximize the
              potential of our projects, while recognizing our clients' needs. I
              will make sure to go beyond their expectations because it is my
              duty as a consultant to provide an establishment that will satisfy
              and please the users.
            </div>
            <div className="mt-4">
              As the principal architect of ArianKitektura, you can always count
              on me for your architectural needs.
            </div>

            <div className="mt-4">
              Yours Truly, <br /> Arian Sustento <br />
              Principal Architect
            </div>
          </div>
        </div>
      ),
    },
    {
      text: "The Experiences",
      selected: false,
      render: (imgToDisplay) => (
        <div key={2} className="flex justify-center items-center ">
          <div className="">
            <ImageContainer>
              <img
                style={{
                  maxWidth: "none",
                  width: "55rem",
                }}
                src={imgToDisplay}
                alt="archi arian"
                className="rounded"
              />
            </ImageContainer>
          </div>

          <div className="px-16 py-16 text-xl text-justify leading-loose ">
            <div className="pt-4">
              Our design experience range from small to high-end residentials,
              site planning development of luxury resorts, hotels, events place,
              and commercial establishments. Whether it is a renovation or new
              construction, we understand the intricacy of each project and
              operate accordingly to accomplish the work precisely.
            </div>
            <div className="mt-4">
              Aside from the standard architectural services of consultation,
              designing, and construction supervision, we can also provide a
              study that will help you decide on the appropriate, practical,
              and/or profitable establishment on a particular site location
              through our feasibility method and site selection analysis.
            </div>

            <div className="mt-4">
              Our creative solutions also includes promotional services through
              our computer-rendered perspectives and video walkthroughs of our
              client’s proposed establishment so that they can visualize the
              project before it is constructed
            </div>
          </div>
        </div>
      ),
    },
    {
      text: "The Mission and Vision",
      selected: false,
      render: (imgToDisplay) => (
        <div key={2} className="flex  justify-center items-center">
          <ImageContainer className="">
            <img
              style={{
                maxWidth: "none",
                width: "55rem",
              }}
              src={imgToDisplay}
              alt="archi arian"
              className="rounded"
            />
          </ImageContainer>
          <div className="px-16 py-16 text-xl text-justify leading-loose ">
            <div className="pt-4">
              <div className="font-bold text-xl mb-4">MISSION STATEMENT</div>

              <div>
                {" "}
                It is our mission in ArianKitektura to provide and help our
                clients with visualizing their needs with utmost consideration
                to a high standard design, maximizing the use of their space,
                and incorporating design excellence with market feasibility,
                achieving all of these while working within their budget.
              </div>
            </div>
            <div className="mt-4">
              <div className="font-bold text-xl mt-12 mb-4">
                {" "}
                VISION STATEMENT
              </div>

              <div>
                {" "}
                ArianKitektura aims to be one of the well respected and highly
                recognized architectural firms in the Philippines.
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      text: "The Location",
      selected: false,
      render: () => (
        <div key={2} className="flex flex-col justify-center items-center">
          <div className="px-32">
            <img src={address} alt="archi arian" className="rounded" />
          </div>
          <div className="px-32 py-8 text-xl text-center leading-loose ">
            <div>
              Office Address: 2030B Ilustre St., Sta. Cruz, Manila City,
              Philippines{" "}
            </div>
            <div> Telephone: (02) 8253 6066</div>
            <div>Cellphone: (+63) 977 1184447 | (+63) 928 1686743</div>
            <div> E-mail: info.ariankitektura@gmail.com</div>

            <div className="flex justify-center mt-4">
              <div className="cursor-pointer">
                {" "}
                <Icon
                  onClick={() =>
                    window.location.replace(
                      "https://www.facebook.com/ArianKitektura/"
                    )
                  }
                  name="facebook"
                  size="large"
                />
              </div>
              <div className="ml-4 cursor-pointer">
                {" "}
                <Icon
                  onClick={() =>
                    window.location.replace(
                      "https://www.instagram.com/ariankitektura.designs/"
                    )
                  }
                  name="instagram"
                  size="large"
                />
              </div>
              <div className="ml-4 cursor-pointer">
                {" "}
                <Icon
                  onClick={() =>
                    window.location.replace(
                      "https://www.youtube.com/playlist?list=PLB33KZ33YbLRlDdrNZeUOD0nTogIvF9Vw"
                    )
                  }
                  name="youtube"
                  size="large"
                />
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]);

  return (
    <div className="h-screen">
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
        {selections.map((v) => v.selected && v.render(imgToDisplay))}
      </div>
    </div>
  );
};
