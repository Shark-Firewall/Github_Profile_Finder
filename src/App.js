import React, { useState } from "react";

function App() {
  const [userName, setuserName] = useState("");
  const [Data, setData] = useState({});
  const onChangeHandler = (e) => {
    setuserName(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/users/${userName}`)
      .then((r) => {
        return r.json();
      })
      .then((value) => {
        console.log(value);
        setData(value);
      });
  };
  return (
    <>
      {/* Banner */}
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h2>Github Profile Search</h2>
        <p>By Rajnish Kumar</p>
      </div>
      {/*Input or Button Components */}
      <form autoComplete="off" onSubmit={onSubmitHandler}>
        <div className="container mt-5 col-sm-6 text-center">
          <label className="control-label">Github Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
            value={userName}
            onChange={onChangeHandler}
          />
          <button type="submit" className="btn btn-primary col-sm-4 m-2">
            Search
          </button>
        </div>
      </form>
      {/* Listing Components */}
      <div className="container table-responsive mt-3 text-center">
        <table className="table">
          <thead>
            <tr>
              <th>Avatar</th>
              <th>Name</th>
              <th>Location</th>
              <th>Repo</th>
              <th>Following</th>
              <th>Followers</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={Data.avatar_url} className="img_control" />
              </td>
              <td>{Data.name}</td>
              <td>{Data.location}</td>
              <td>{Data.public_repos}</td>
              <td>{Data.following}</td>
              <td>{Data.followers}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
