import { useParams } from 'react-router-dom';

const ProductDetails = ({ products, match }) => {
    const { id } = useParams();
  
    const product = products.find((product) => product.id === parseInt(id));
  
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
  
