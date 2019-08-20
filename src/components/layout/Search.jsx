import React, { useState } from "react";
import PropTypes from "prop-types";
const Search = ({ searchUsers, clearUser, showClear, setSearchAlert }) => {
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
      {showClear && (
        <button className='btn btn-light btn-block' onClick={clearUser}>
          Clear
        </button>
      )}
    </form>
  );
};

Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUser: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setSearchAlert: PropTypes.func.isRequired
};

export default Search;
