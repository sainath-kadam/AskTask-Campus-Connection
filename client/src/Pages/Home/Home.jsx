import React from "react";
import "../../App.css";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import HomeBanner from "./HomeBanner";
import TrendingTech from "./Trending_tech"


const Home = ({ slideIn }) => {
  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} />
      <div className="home-container-2">
      <HomeBanner/>
      <TrendingTech/>
      </div>
    </div>
  );
};

export default Home;
