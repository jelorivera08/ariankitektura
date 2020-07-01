import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Header = styled.div`
  height: 2.5rem;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
`;

export default () => {
  const history = useHistory();

  const handleProjectsClick = () => {
    history.push("/");

    try {
      const el = document.getElementById("projet-divider");

      window.scrollTo({ behavior: "smooth", top: el.offsetTop });
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogoClick = () => {
    history.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleContactClick = () => {
    history.push("/contact");
  };

  return (
    <Header className="flex text-white justify-between items-center fixed w-full fixed top-0">
      <div onClick={handleLogoClick} className="mx-4 cursor-pointer ">
        Ariankitektura
      </div>
      <div className="flex">
        <div onClick={handleProjectsClick} className="mx-4 cursor-pointer">
          Projects
        </div>
        <div onClick={handleContactClick} className="mx-4 cursor-pointer">
          Contact
        </div>
      </div>
    </Header>
  );
};
