import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/Dashboard.css";

function DashBoard() {
  return (
    <>
      <SideBar />
      <div className="content-frame">
        {/* Top-bar */}
        <div className="top-bar">
          {/* Input */}
          <div className="input">
            {/* Label */}
            <div className="label">Search Item</div>
            {/* Input-Field */}
            <div className="input-field">
              {/* Placeholder */}
              <div className="placeholder">
                Apple Watch,Samsung S21,Macbook Pro,..
              </div>
            </div>
          </div>
        </div>

        {/* Content-Area */}
        <div className="content-area">
          {/* First Row */}
          <div className="content-row">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="item-card">
                {/* Product-Image */}
                <div className="product-image">
                  {/* Image */}
                  <div className="image">Image</div>
                </div>
                {/* Content */}
                <div className="content">
                  {/* Item Name */}
                  <div className="item-name">Item Name</div>
                  {/* Small Description */}
                  <div className="small-description">Small Description</div>
                  {/* Action */}
                  <div className="action">
                    {/* Price */}
                    <div className="price">Price</div>
                    {/* View */}
                    <div className="view">View</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="content-row">
            {Array.from({ length: 4 }, (_, index) => (
              <div key={index} className="item-card">
                {/* Product-Image */}
                <div className="product-image">
                  {/* Image */}
                  <div className="image">Image</div>
                </div>
                {/* Content */}
                <div className="content">
                  {/* Item Name */}
                  <div className="item-name">Item Name</div>
                  {/* Small Description */}
                  <div className="small-description">Small Description</div>
                  {/* Action */}
                  <div className="action">
                    {/* Price */}
                    <div className="price">Price</div>
                    {/* View */}
                    <div className="view">View</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <SideBar2 />
    </>
  );
}

export default DashBoard;
