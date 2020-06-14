import React, { useState, useEffect } from "react";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";

import { importAll } from "./helpers";

import Home from "./containers/Home";
import Project from "./containers/Project";
import Contact from "./containers/Contact";

import AppContext from "./context";

const images = importAll(
  require.context("../assets/projects", false, /\.(png|jpe?g|svg)$/)
);

function App() {
  const [appProjects, setAppProjects] = useState([]);

  useEffect(() => {
    if (appProjects.length !== 0) return;

    const sortedProjects = [];
    images.forEach((image) => {
      const imageProject = image.split("/")[3].split("-")[1];
      const existingProject = sortedProjects.find(
        (sortedProject) => sortedProject.projectName === imageProject
      );

      if (existingProject) {
        existingProject.images.push(image);
        existingProject.imageToDsiplay = Math.floor(
          Math.random() * existingProject.images.length
        );
      } else {
        sortedProjects.push({
          projectName: imageProject,
          images: [image],
        });
      }
    });

    setAppProjects(sortedProjects);
  }, [setAppProjects, appProjects.length]);

  if (appProjects.length <= 0) return null;

  return (
    <AppContext.Provider
      value={{
        appProjects,
        setAppProjects,
      }}
    >
      <Switch>
        <Route ignoreScrollBehavior path="/contact">
          <Contact />
        </Route>

        <Route ignoreScrollBehavior path="/:projectName">
          <Project />
        </Route>

        <Route path="/">
          <Home ignoreScrollBehavior images={images} />
        </Route>
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
