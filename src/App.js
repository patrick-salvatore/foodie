import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

// COMPONENTS
import Home from './components/Home/Home';
import Recipe from './components/Recipes/Recipe';

function App() {
  return (
    <Switch>
      <Route exact path = '/' component={Home}></Route>
      <Route path = '/recipe/:id' component={Recipe}></Route>
    </Switch>
  
  );
}

export default App;
