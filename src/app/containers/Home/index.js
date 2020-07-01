import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

const Container = styled.div`
  background-color: #f1f1f1;
`;

export default () => {
  const history = useHistory();

  return (
    <Container className="flex flex-col h-screen justify-center items-center">
      <img
        onClick={() => history.push("/")}
        className="cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div>
        <div className="py-4 text-4xl">
          Interpreted{" "}
          <span
            style={{
              color: "#fe0000",
            }}
          >
            {" "}
            design{" "}
          </span>{" "}
          is our passion.
        </div>

        <div className="flex justify-around py-4 text-3xl">
          <div
            onClick={() => history.push("/aboutUs")}
            className="cursor-pointer"
          >
            About us
          </div>
          <div
            onClick={() => history.push("/portfolio")}
            className="cursor-pointer"
          >
            Portfolio
          </div>
          <div
            onClick={() => history.push("/contact")}
            className="cursor-pointer"
          >
            Contact us
          </div>
        </div>
      </div>
    </Container>
  );
};
