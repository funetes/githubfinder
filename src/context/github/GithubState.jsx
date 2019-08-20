import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./GithubContext";
import GithubReducer from "./GithubReducer";
import {
  SEARCH_USERS,
  SET_LOADING,
  SET_ERROR,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS
} from "../type";
const GithubState = ({ children }) => {
  // states
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    error: null
  };

  // state 변경은 모두 reducer가 담당한다.
  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // functions

  // searchUsers
  const searchUsers = async user => {
    try {
      console.log("searchUsers");
      setLoading();
      const {
        data: { items }
      } = await axios.get(`https://api.github.com/search/users?q=${user}`, {
        params: {
          client_id: process.env.GITHUB_CLIENT_ID,
          client_secret: process.env.GITHUB_CLIENT_SECRET
        }
      });
      dispatch({
        type: SEARCH_USERS,
        payload: items
      });
    } catch (error) {
      setError(error);
    }
  };
  // getUser
  const getUser = async username => {
    try {
      setLoading();
      const { data } = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET
          }
        }
      );
      dispatch({
        type: GET_USER,
        payload: data
      });
    } catch (error) {
      setError(error);
    }
  };
  // get Repos
  const getUserRepos = async username => {
    try {
      setLoading();
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
        {
          params: {
            client_id: process.env.GITHUB_CLIENT_ID,
            client_secret: process.env.GITHUB_CLIENT_SECRET
          }
        }
      );
      dispatch({
        type: GET_REPOS,
        payload: data
      });
    } catch (error) {
      setError(error);
    }
  };
  // clear User
  const clearUser = () => {
    dispatch({ type: CLEAR_USERS });
  };
  // set Loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };
  // set Error
  const setError = error => {
    dispatch({
      type: SET_ERROR,
      payload: error
    });
  };
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        // user: state.user,
        // repos: state.repos,
        loading: state.loading,
        error: state.error,
        searchUsers
        // clearUser,
        // getUser,
        // getUserRepos
      }}>
      {" "}
      {children}{" "}
    </GithubContext.Provider>
  );
};

export default GithubState;
