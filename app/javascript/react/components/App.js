import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import PlannersIndexContainer from './PlannersIndexContainer';
import FlightsIndexContainer from './FlightsIndexContainer';

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={FlightsIndexContainer}/>
        <Route exact path='/planners' component={PlannersIndexContainer}/>
      </Switch>
    </BrowserRouter>
  )
};

export default App;
