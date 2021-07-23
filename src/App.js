import React from 'react';
import ViewItem from './components/ViewItem';
import './App.css';
import CreateItem from './components/CreateItem';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <ViewItem />
        </Route>
        <Route path="/add">
          <CreateItem />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
