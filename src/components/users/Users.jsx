import React, { useContext } from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/GithubContext";
import Spinner from "../layout/Spinner";
import Message from "../layout/Message";
const User = () => {
  const githubContext = useContext(GithubContext);
  const { users, loading, error } = githubContext;
  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div style={userStyle}>
          {users.map(user => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      )}
      {error && <Message text={error} />}
    </>
  );
};

User.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default User;
