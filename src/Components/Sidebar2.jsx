import React from "react";
import "../css/SideBar2.css";
import bag2 from "../Assets/Bag2.svg";

const SideBar2 = () => {
  return (
    <div className="bag-area">
      <div className="title">
        <h3>bag</h3>
      </div>
      <div className="bag-items">
        <div className="row">
          <div className="bag-item">
            {/* Your bag items */}
          </div>
        </div>
        <div className="row">{/* Other bag items */}</div>
      </div>
      <div className="button">
        <button>
          <img src={bag2} alt="Logo" />
        </button>
      </div>
    </div>
  );
};

export default SideBar2;
