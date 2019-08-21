import React from "react";
import Nav from "./components/layout/Nav";
import Home from "./components/pages/Home";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className='App'>
          <Nav />
          <div className='container'>
            <Alert />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/:login' component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
