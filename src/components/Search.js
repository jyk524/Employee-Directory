import React from "react";
// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// ReactDOM.render(<App />, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA?

// Search function to export into App.js
// onChange is to have the table change as the searchbar 
// onchange is called in app.js  - handleCahnge
function Search({ onChange }) {
  return (
    <div>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          // When the state changes, the page will automatically change
          onChange={onChange}
        />
      </form>
    </div>
  );
}
export default Search;