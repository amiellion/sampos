import { useDispatch, useSelector } from 'react-redux';
import { Card, Row, Col, Button } from 'antd';
import { removeFromCart, clearCart } from '../reducers/productSlice';
import Sidebar from "../components/Sidebar";

const Addtocart = () => {

    const { cart } = useSelector(state => state.products);
    const dispatch = useDispatch();

    
    return (
        <Sidebar>
                  <>
                  <Button type="primary" style={{ background: "red", borderColor: "white" }} onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <br></br> <br></br>
      <Row gutter={16}>
        {cart.map(product => (
          <Col key={product.id} span={8}>
       
            <Card
              cover={<img alt={product.time}  src={product.image} width={30} height={350}/>}
              actions={[
                <Button type="primary" style={{ background: "blue", borderColor: "white" }}
                  onClick={() => dispatch(removeFromCart(product.id))}
                >
                  Remove
                </Button>,
              ]}
            >
              <Card.Meta title={product.title} description={product.price}/>
            </Card>
          </Col>
        ))}
      </Row>

     
    </>

        </Sidebar>
    );
}

export default Addtocart;