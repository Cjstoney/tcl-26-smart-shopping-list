import React from 'react';
import ViewItem from './components/ViewItem';
import './App.css';
import CreateItem from './components/CreateItem';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';

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
      <Navbar />
    </Router>
  );
}

export default App;
