import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/GithubContext";
const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, user, loading, getUserRepos, repos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repo,
    public_gists,
    hireable,
    company
  } = user;

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Link to='/' className='btn btn-light'>
            go to search
          </Link>
          hireable :{" "}
          {hireable ? (
            <i className='fas fa-check text-success' />
          ) : (
            <i className='fas fa-times-circle text-danger' />
          )}
          <div className='card grid-2'>
            <div className='all-center'>
              <img
                src={avatar_url}
                alt=''
                className='round-img'
                style={{ width: "150px" }}
              />
              <h1>{name}</h1>
              <p>location : {location}</p>
            </div>
            <div>
              {bio && (
                <>
                  <h3>Bio</h3>
                  <p>{bio}</p>
                </>
              )}
              <a href={html_url} className='btn btn-dark my-1'>
                Visit Github Profile
              </a>
              <ul>
                <li>
                  {login && (
                    <>
                      <strong>Username: </strong>
                      {login}
                    </>
                  )}
                </li>
                <li>
                  {company && (
                    <>
                      <strong>Company: </strong>
                      {company}
                    </>
                  )}
                </li>
                <li>
                  {blog && (
                    <>
                      <a href={blog} style={{ color: "inherit" }}>
                        {blog}
                      </a>
                    </>
                  )}
                </li>
              </ul>
            </div>
          </div>
          <div className='card text-center'>
            <div className='badge badge-primary'>Followers:{followers}</div>
            <div className='badge badge-success'>Following:{following}</div>
            <div className='badge badge-light'>Public Repos:{public_repo}</div>
            <div className='badge badge-dark'>Public Gist:{public_gists}</div>
          </div>
          <Repos repos={repos} />
        </>
      )}
    </>
  );
};

export default User;
