import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  GET_REPOS,
  CLEAR_USERS,
  SET_ERROR
} from '../type';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      console.log("searchuser run...");
      console.log(action.payload);
      return {
        ...state,
        users: action.payload,
          loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
          loading: false
      };
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
          loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
          loading: false
      };
    case SET_ERROR: {
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    }
    default:
      break;
  }
}