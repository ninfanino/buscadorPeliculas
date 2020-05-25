import React from 'react';
import { Switch, Route } from 'react-router-dom';

import DetailContainer from './containers/DetailContainer';
import HomeContainer from './containers/HomeContainer';
import NotFound from './pages/NotFound';

import 'bulma/css/bulma.css';
import './App.css';

const App = () => (
      <div className="App">
        <Switch>
          <Route exact path='/' component={HomeContainer}/>
          <Route path='/detail/:id' component={DetailContainer}/>
          <Route component={NotFound} />
        </Switch>
      </div>
)

export default App;
