import React from "react";
import "./App.css";

const Header = () => {
  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2>Profile Manager</h2>&nbsp;by{" "}
        <a href="gttps://github.com/PrerakMathur20">Prerak Mathur</a>

        <div className="right menu">
          <div className="item">
          <a
            href="https://github.com/PrerakMathur20/profile-manager"
            className="item"
            target="_blank"
            rel="noopener noreferrer">
            <i className="github icon"></i>
            Source Code
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Header;
