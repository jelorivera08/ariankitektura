import React, { useContext } from "react";
import Header from "../../components/Header";
import styled from "styled-components";
import { Icon, Grid } from "semantic-ui-react";
import { useHistory } from "react-router-dom";

import logo from "../../../assets/images/logo.png";

import AppContext from "../../context";

const ProjectImageContainer = styled.div`
  overflow: hidden;
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

const LogoContainer = styled.div`
  width: 15rem;
  min-width: 15rem;
`;

const ProjectImage = styled.img`
  transition: transform 0.5s;

  :hover {
    transform: scale(1.3);
    transform-origin: 50% 50%;
  }
`;

export default () => {
  const { appProjects } = useContext(AppContext);
  const history = useHistory();

  const generateRandomProjectImage = () => {
    const randomProject =
      appProjects[Math.floor(appProjects.length * Math.random())];

    return randomProject.images[
      Math.floor(Math.random() * randomProject.images.length)
    ];
  };

  return (
    <>
      <Header></Header>
      <div className="mt-24">
        <Grid columns={3}>
          <Grid.Row style={{ padding: 0 }}>
            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>

            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>

            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ padding: 0 }}>
            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>

            <Grid.Column>
              <div className="flex h-full w-full justify-center items-center">
                <LogoContainer className="w-1/2">
                  <img
                    onClick={() => history.push("/")}
                    className="cursor-pointer"
                    src={logo}
                    alt="ariankitektura"
                  />
                </LogoContainer>

                <div className=" ml-4">
                  <div className="flex mt-2">
                    <div>
                      <Icon name="mail" />{" "}
                    </div>
                    <div className="ml-2">info.ariankitektura@gmail.com</div>
                  </div>
                  <div className="flex mt-2">
                    <div>
                      <Icon name="facebook" />{" "}
                    </div>
                    <div className="ml-2">facebook/com/ariankitektura</div>
                  </div>{" "}
                  <div className="flex mt-2">
                    <div>
                      <Icon name="instagram" />{" "}
                    </div>
                    <div className="ml-2">instagram.com/arianktitektura</div>
                  </div>{" "}
                  <div className="flex mt-2">
                    <div>
                      <Icon name="youtube" />{" "}
                    </div>
                    <div className="ml-2">Ariankitektura</div>
                  </div>{" "}
                </div>
              </div>
            </Grid.Column>

            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ padding: 0 }}>
            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>
            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>

            <Grid.Column style={{ padding: 0 }}>
              <ProjectImageContainer className="cursor-pointer relative">
                <ProjectImage
                  src={generateRandomProjectImage()}
                  alt="project-1"
                />
              </ProjectImageContainer>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </>
  );
};
