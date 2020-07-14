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
    <Container className="flex flex-col h-screen justify-center items-center w-full">
      <img
        onClick={() => history.push("/")}
        className="cursor-pointer"
        src={logo}
        alt="logo"
      />
      <div className="w-full mt-4 flex justify-center flex-col items-center ">
        <div className="py-4 italic text-4xl">
          "Interpreted{" "}
          <span
            style={{
              color: "#fe0000",
            }}
          >
            {" "}
            design{" "}
          </span>{" "}
          is our passion."
        </div>

        <div className="flex my-8 justify-around py-4 text-5xl bg-black text-white w-full ">
          <div
            onClick={() => history.push("/aboutUs")}
            className="cursor-pointer hover:text-red-500"
          >
            About us
          </div>
          <div
            onClick={() => history.push("/portfolio")}
            className="cursor-pointer hover:text-red-500"
          >
            Portfolio
          </div>
          <div
            onClick={() => history.push("/contact")}
            className="cursor-pointer hover:text-red-500"
          >
            Contact us
          </div>
        </div>
      </div>
    </Container>
  );
};
