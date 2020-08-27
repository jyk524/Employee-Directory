// Imports from the React Library
import React from "react";
// some boring ass header from bootstrap
// Good enough for us ^.^
// Creates a NavBar Header, light color, that says Employee Search
function Header() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Employee Search</span>
      </nav>
    </div>
  );
}
export default Header;