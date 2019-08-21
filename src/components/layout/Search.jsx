import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";

export default () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { clearUser, users, searchUsers } = githubContext;
  const { setSearchAlert } = alertContext;
  const [value, setValue] = useState("funetes");
  const onChange = e => {
    const {
      target: { value }
    } = e;
    setValue(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    if (value === "") {
      setSearchAlert("검색어를 입력해주세요.", "light");
    } else {
      searchUsers(value);
      setValue("");
    }
  };
  return (
    <form className='form' onSubmit={onSubmit}>
      <input
        type='text'
        value={value}
        onChange={onChange}
        placeholder='search'
      />
      <input type='submit' value='search' className='btn btn-dark btn-block' />
      {users.length > 0 && (
        <button className='btn btn-light btn-block' onClick={clearUser}>
          Clear
        </button>
      )}
    </form>
  );
};
