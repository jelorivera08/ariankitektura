import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/home";
import AboutUs from "./containers/aboutUs";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import AppContext from "./context";

import { importAll } from "./helpers";

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
      const projectYear = image.split("/")[3].split("-")[0];

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
          projectYear: projectYear,
        });
      }
    });

    setAppProjects(
      sortedProjects.sort((a, b) => (a.projectYear > b.projectYear ? -1 : 1))
    );
  }, [setAppProjects, appProjects.length]);

  return (
    <AppContext.Provider
      value={{
        appProjects,
        setAppProjects,
      }}
    >
      <Switch>
        <Route path="/portfolio">
          <Portfolio ignoreScrollBehavior />
        </Route>

        <Route path="/aboutUs">
          <AboutUs ignoreScrollBehavior />
        </Route>

        <Route path="/contact">
          <Contact ignoreScrollBehavior />
        </Route>

        <Route path="/">
          <Home ignoreScrollBehavior />
        </Route>
      </Switch>
    </AppContext.Provider>
  );
}

export default App;
