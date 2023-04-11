import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((p) => p.id === id);
    setProduct(selectedProduct);
  }, [id, products]);

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
