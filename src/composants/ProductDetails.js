import React, { useState, useEffect } from 'react';
import { getProductById } from '../services/api';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ match }) => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(parseInt(id));
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <img src={product.image} alt={product.name} />
    </div>
  );
};

export default ProductDetails;
