import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/Dashboard.css";

function DashBoard() {
  return (
    <>
      <SideBar />
      <div className="content-frame">
        <div className="top-bar">
          <div className="input">
            <div className="label">Search Item</div>

            <div className="input-field">
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
                <div className="product-image">
                  <div className="image">Image</div>
                </div>

                <div className="content">
                  <div className="item-name">Item Name</div>

                  <div className="small-description">Description</div>

                  <div className="action">
                    <div className="price">Price</div>

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
                <div className="product-image">
                  <div className="image">Image</div>
                </div>

                <div className="content">
                  <div className="item-name">Item Name</div>

                  <div className="small-description">Description</div>

                  <div className="action">
                    <div className="price">Price</div>

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
