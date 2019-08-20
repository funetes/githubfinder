import React, { useState } from "react";
import Nav from "./components/layout/Nav";
import Users from "./components/users/Users";
import Search from "./components/layout/Search";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
import User from "./components/users/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);

  const searchUsers = async user => {
    try {
      setLoading(true);
      const {
        data: { items }
      } = await axios.get(`https://api.github.com/search/users?q=${user}`, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET
        }
      });
      setUsers(items);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getUser = async username => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET
          }
        }
      );
      setUser(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const getUserRepos = async username => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
        {
          params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET
          }
        }
      );
      setRepos(data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  const clearUser = () => {
    setUsers([]);
  };

  const setSearchAlert = (mag, type) => {
    console.log(mag, type);
    setAlert({ mag, type });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  };

  return (
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
                  <Search
                    searchUsers={searchUsers}
                    clearUser={clearUser}
                    showClear={users.length > 0 ? true : false}
                    setSearchAlert={setSearchAlert}
                  />
                  <Users users={users} loading={loading} error={error} />
                </>
              )}
            />
            <Route exact path='/about' component={About} />
            <Route
              exact
              path='/:login'
              render={props => (
                <User
                  {...props}
                  getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  loading={loading}
                  repos={repos}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
