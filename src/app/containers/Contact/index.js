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

        <div className="text-center">
          <div>Contact Information</div>
          <div>
            Office Address: 2030B Ilustre St., Sta. Cruz, Manila City,
            Philippines{" "}
          </div>
          <div> Telephone: (02) 8253 6066</div>
          <div>Cellphone: (+63) 977 1184447 | (+63) 928 1686743</div>
          <div> E-mail: info.ariankitektura@gmail.com</div>
        </div>
      </div>

      <div className="px-24">
        <Divider />
      </div>
    </div>
  );
};
