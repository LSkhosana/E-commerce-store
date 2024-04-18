import React from "react";
import "../css/SideBar2.css";

const SideBar2 = () => {
  return (
    <div className="bag-area">
      <div className="title">
        <h3>bag</h3>
      </div>
      <div className="bag-items">
        <div className="row">
          <div className="bag-item">{/* Your bag items */}</div>
        </div>
        <div className="row">{/* Other bag items */}</div>
      </div>
      <div className="button">
        <button>
          <img src={""} alt="Logo" />
          <span>View Bag</span>
        </button>
      </div>
    </div>
  );
};

export default SideBar2;
