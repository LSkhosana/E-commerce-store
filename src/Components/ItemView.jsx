import React from 'react';
import SideBar from "./SideBar";
import SideBar2 from "./Sidebar2";
import "../css/ItemView.css"
import watch from "../Assets/Name=Watch.jpg"

const products = [
  {
    id: 1,
    title: "Apple watch",
    description: "Series 5 SE",
    rating: "",
    price: 529.99,
    currency: "$",
    imageUrl: watch,
    detailedDescription: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur ipsum rem exercitationem, vitae nesciunt tempora cumque laboriosam minima, temporibus suscipit aperiam dolor. Quibusdam architecto vitae delectus iure voluptates error repellendus!",
    ],
  }
];


function ItemView() {
    return (
     <> 
      <SideBar />
      <div className="product-list">
        {products.map(product => (
          <div className="product" key={product.id}>
           <div className="Container">
              <div className="smallImg">
                <img className="smallImage" src={product.imageUrl} alt={product.title} />
                <img className="smallImage" src={product.imageUrl} alt={product.title} />
                <img className="smallImage" src={product.imageUrl} alt={product.title} />
               </div>
              <div className="bigImg">
                <img className="bigImage" src={product.imageUrl} alt={product.title} />
              </div>
          </div>
            <div className="product-details">
              <h1>{product.title}</h1>
              <h3>{product.description}</h3>
              <p>{product.currency}{product.price}</p>
              <p>{product.detailedDescription[0]}</p>
            </div>
          </div>
        ))}
      </div>

      <SideBar2 />
      
    </>

    );
  }
  
  export default ItemView ;