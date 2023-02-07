import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts  } from '../reducers/productSlice';
import { Card,  Button, Row, Rate} from 'antd';
import React, { useEffect } from 'react';
import Sidebar from "../components/Sidebar";
import { Link } from 'react-router-dom';
import axios from 'axios';


const Product = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Sidebar>
     <Row gutter={16} justify="center" align="middle">
        {products.map((product, key) =>
        
          <Card key={key} style={{ width: 350, margin: '10px' }}>
            <img src={product.image} className="img-fluid" width={100} height={100} alt={product.name} />
            <p>{product.id}</p>
            <p>{product.title}</p>
            <p>{product.price}</p>
        
            <br></br>
            <Rate/>
            <br></br><br></br>
            <Link to={`/products/${product.id}`}>
            <Button type="primary">View</Button>
          </Link>
                
          </Card>
        )}
         </Row>

    </Sidebar>
  );
};

export default Product;