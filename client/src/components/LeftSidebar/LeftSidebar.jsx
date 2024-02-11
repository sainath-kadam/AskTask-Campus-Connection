import React from "react";
import "./LeftSidebar.css";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";

const LeftSidebar = ({ slideIn, handleSlideIn }) => {
  const slideInStyle = {
    transform: "translateX(0%)",
  };

  const slideOutStyle = {
    transform: "translateX(-100%)",
  };

  return (
    <div className="left-sidebar" style={slideIn ? slideInStyle : slideOutStyle}>
      <nav className="side-nav">
        <button onClick={() => handleSlideIn()} className="nav-btn">
          <NavLink to="/" className="side-nav-links" activeClassName="active">
            <p className="nav-text">Home</p>
          </NavLink>
        </button>
        <div className="side-nav-div">
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Questions" className="side-nav-links" activeClassName="active">
              <p className="nav-text">Questions</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Tags" className="side-nav-links" activeClassName="active">
              <p className="nav-text">Tags</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Users" className="side-nav-links" activeClassName="active">
              <p className="nav-text">Users</p>
            </NavLink>
          </button>
          <button onClick={() => handleSlideIn()} className="nav-btn">
            <NavLink to="/Imp_Q_A" className="side-nav-links" activeClassName="active">
              <p className="nav-text">Imp_Q_A</p>
            </NavLink>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default LeftSidebar;
