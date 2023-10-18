import React from "react";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import HomeBanner from "./HomeBanner";


const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
      <HomeBanner/>
      </div>
    </div>
  );
};

export default Home;
