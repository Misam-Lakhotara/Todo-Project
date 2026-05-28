import React, { useState } from "react";

function ProductCard() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const data = await fetch("https://dummyjson.com/products");
      const res = await data.json();
      console.log(res);
      setProducts(res.products || []);
    } catch (err) {
      console.error("Failed to fetch products", err);
    }
  };

  return (
    <div>
      <button onClick={fetchProducts}>Fetch Products</button>
      {products.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.title}</div>
            <div>{item.description}</div>
            <div>{item.price}</div>
            <div>
              <img src={item.thumbnail} alt={item.title} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductCard;
