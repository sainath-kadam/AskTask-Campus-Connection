import React from "react";
import "./RightSidebar.css";
import comment from "../../assets/comment-alt-solid.svg";
import pen from "../../assets/pen-solid.svg";
import blackLogo from "../../assets/icon.png";

const Widget = () => {
  return (
    <div className="widget">
      <h4>AskTask Blog</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>
            How to effectively debug your code and solve software problems
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={pen} alt="pen" width="18" />
          <p>10 essential tips for software developers</p>
        </div>
      </div>
      <h4>Featured on Meta</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>Introducing the AskTask Campus Program</p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={comment} alt="pen" width="18" />
          <p>
            Join our software discussion forum and collaborate with fellow
            students
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <img src={blackLogo} alt="pen" width="18" />
          <p>
            New feature: Enhanced search functionality for better question and
            answer discovery
          </p>
        </div>
      </div>
      <h4>Hot Meta Posts</h4>
      <div className="right-sidebar-div-1">
        <div className="right-sidebar-div-2">
          <p>38</p>
          <p>
            Tips for writing clear and concise questions that get quick
            responses
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>20</p>
          <p>
            How to effectively provide helpful answers and contribute to the
            community
          </p>
        </div>
        <div className="right-sidebar-div-2">
          <p>14</p>
          <p>How to format code snippets in your questions and answers</p>
        </div>
      </div>
    </div>
  );
};

export default Widget;
