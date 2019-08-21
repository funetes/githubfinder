import React, { useContext } from "react";
import UserItem from "./UserItem";
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

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem"
};

export default User;
