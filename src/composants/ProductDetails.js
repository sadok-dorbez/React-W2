import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from "../services/api";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProductById(id).then((data) => {
        console.log(data)
        setProduct(data);
    });

}, []);

  return (
    <div>
      {product ? (
        <div className="product-details">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Price: {product.price}$</p>
          <p>Quantity: {product.quantity}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default ProductDetails;
