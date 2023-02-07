import React from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios'

function ViewProduct() {
  let { id } = useParams();
  const [product, setProduct] = React.useState({});

  React.useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data);
      });
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  );
}

export default ViewProduct;