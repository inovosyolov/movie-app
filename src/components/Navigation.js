import React from 'react';
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navi">
      <div className="navi__container">
        <ul className="navi__list">
          <li className="navi__list-item"><Link to="/" className="navi__list-link">Home</Link></li>
          <li className="navi__list-item"><Link to="/about" className="navi__list-link">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
