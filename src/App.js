import React from 'react';
import ViewItem from './components/ViewItem';
import './App.css';
import CreateList from './components/createList/CreateList';
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
          <CreateList />
        </Route>
      </Switch>
      <Navbar />
    </Router>
  );
}

export default App;
