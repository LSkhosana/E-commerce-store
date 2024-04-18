import React from "react";
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/Dashboard.css";
import products from "./ProductInfo";

function DashBoard() {
  const firstRowProducts = products.slice(0, 4);
  const secondRowProducts = products.slice(4, 8);

  // Ensure a fixed number of item cards for each row
  const renderFixedRow = (rowProducts) => {
    const fixedNumberOfCards = 4;
    const emptyCard = { empty: true };

    // Fill the row with product cards or empty cards
    const rowItems = Array.from({ length: fixedNumberOfCards }, (_, index) => {
      const product = rowProducts[index];
      return product ? product : emptyCard;
    });

    // Render each item card
    return rowItems.map((item, index) => (
      <div key={index} className="item-card">
        {item.empty ? ( 
          <div className="empty-card">Empty</div>
        ) : (
          <>
            <div className="product-image">
              <img src={item.imageUrl} alt={item.title} />
            </div>
            <div className="content">
              <div className="item-name">{item.title}</div>
              <div className="small-description">{item.description}</div>
              <div className="action">
                <div className="price">{item.currency}{item.price}</div>
                <div className="view">View</div>
              </div>
            </div>
          </>
        )}
      </div>
    ));
  };

  return (
    <>
      <SideBar />
      <div className="content-frame">
        <div className="top-bar">
          <div className="input">
            <div className="label">Search Item</div>

            <div className="input-field">
              <div className="placeholder">
                Apple Watch, Samsung S21, Macbook Pro,..
              </div>
            </div>
          </div>
        </div>

        {/* Content-Area */}
        <div className="content-area">
          {/* First Row */}
          <div className="content-row">
            {renderFixedRow(firstRowProducts)}
          </div>

          {/* Second Row */}
          <div className="content-row">
            {renderFixedRow(secondRowProducts)}
          </div>
        </div>
      </div>
      <SideBar2 />
    </>
  );
}

export default DashBoard;
