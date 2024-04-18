import React, { useState, useEffect } from "react";
import "../css/SideBar2.css";

const SideBar2 = ({ selectedItem }) => {
  const [bagItems, setBagItems] = useState([]);

  useEffect(() => {
    if (selectedItem) {
      setBagItems(prevBagItems => {
        const newBagItem = { id: prevBagItems.length + 1, imageUrl: selectedItem.imageUrl };
        return [...prevBagItems, newBagItem];
      });
    }
  }, [selectedItem]); // Include selectedItem in the dependency array


  // Group bag items into rows of three
  const rows = [];
  for (let i = 0; i < bagItems.length; i += 3) {
    rows.push(bagItems.slice(i, i + 3));
  }

  return (
    <div className="bag-area">
      <div className="title">
        <h3>bag</h3>
      </div>
      <div className="bag-items">
        {rows.map((row, index) => (
          <div className="row" key={index}>
            {row.map((item) => (
              <div className="bag-item" key={item.id}>
                <img src={item.imageUrl} alt="Bag item" />
              </div>
            ))}
          </div>
        ))}
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
