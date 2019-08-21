import React from "react";

export default ({ history }) => (
  <>
    <h1>Not Found</h1>
    <p className='lead'>Page not found...</p>
    <button
      onClick={() => {
        history.push("/");
      }}
      className='btn btn-dark btn-block'>
      go Home
    </button>
  </>
);
