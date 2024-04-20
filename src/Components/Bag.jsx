import React, { useState } from "react";
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/Dashboard.css";
import "../css/ShoppingCart.css";
import products from "./ProductInfo";
import bagadd from "../Assets/Bag add.svg";





function Bag() {

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

    return (
      <> <div className="shopping-bag">
      <h2>Shopping Bag</h2>
      {cartItems.length === 0 ? (
        <p className="empty-message">Your bag is empty.</p>
      ) : (
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="item-card">
              <div className="product-image">
                <img src={item.imageUrl} alt={item.title} />
              </div>
              <div className="product-details">
                <div className="title">{item.title}</div>
                <div className="price">
                  ${item.price}
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="checkout">
        <button disabled={cartItems.length === 0}>Checkout</button>
      </div>
    </div>
      
       <SideBar2/></>
    );
  }
  
  export default Bag ;