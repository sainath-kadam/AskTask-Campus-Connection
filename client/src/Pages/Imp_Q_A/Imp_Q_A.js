import React from "react";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Card from "./Card";

const Imp_Q_A = ({ slideIn, handleSlideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container">
      <h1>hlo</h1>
       <Card/>
      </div>
    </div>
  );
};

export default Imp_Q_A;
