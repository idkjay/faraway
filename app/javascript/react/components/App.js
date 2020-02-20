import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import PlannersIndexContainer from "./planners/PlannersIndexContainer";
import FlightsIndexContainer from "./flights/FlightsIndexContainer";

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={FlightsIndexContainer}/>
        <Route exact path="/planners" component={PlannersIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
