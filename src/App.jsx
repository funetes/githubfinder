import React, { useState } from "react";
import Nav from "./components/layout/Nav";
import Users from "./components/users/Users";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [alert, setAlert] = useState(null);

  const setSearchAlert = (mag, type) => {
    console.log(mag, type);
    setAlert({ mag, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className='App'>
          <Nav />
          <div className='container'>
            <Alert alert={alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <>
                    <Search setSearchAlert={setSearchAlert} />
                    <Users />
                  </>
                )}
              />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/:login'
                render={props => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
