import React from "react";

function App() {
  return (
    <>
      {/* Banner */}
      <div className="container-fluid p-5 bg-primary text-white text-center">
        <h2>Github Profile Search</h2>
        <p></p>
      </div>
      {/*Input or Button Components */}
      <div className="container mt-5 col-sm-6 text-center">
        <label className="control-label">Github Username</label>
        <input
          type="text"
          class="form-control"
          placeholder="Enter Username"
          id="username"
        />
        <button type="button" className="btn btn-primary col-sm-4 m-2">
          Find
        </button>
      </div>
      {/* Listing Components */}
      <div className="container">hii</div>
    </>
  );
}

export default App;
