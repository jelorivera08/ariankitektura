import React from "react";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
import { Switch, Route } from "react-router-dom";

import Home from "./containers/Home";

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
