import React from 'react';
import { useCart } from './Context';
import { CiCirclePlus } from "react-icons/ci";
import { Row, Col, Card} from 'react-bootstrap';
import Footer from "../Footer";


const foodItems = [
  { id: 1, name: 'Pizza', price: 150, imageurl: '/images/bro.jpg', rating: 4 },
  { id: 2, name: 'Burger', price: 259, imageurl: '/images/egg.jpg', rating: 4 },
  { id: 3, name: 'Pasta', price: 199, imageurl: '/images/Fried.jpg', rating: 5 },
  { id: 4, name: 'Omlet', price: 245, imageurl: '/images/omlet.webp', rating: 4 },
  { id: 5, name: 'Pizza', price: 245, imageurl: '/images/Pizza.jpg', rating: 4 },
  { id: 6, name: 'Span', price: 245, imageurl: '/images/span.jpg', rating: 4 },
  { id: 7, name: 'Tinga', price: 245, imageurl: '/images/Tinga.jpg', rating: 4 },
  { id: 8, name: 'HoneyChese', price: 245, imageurl: '/images/honey.webp', rating: 4 },

];

const getStarRating = (rating) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

const Menu = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
   };

  return (
    <>
       
      <div className='menu-container'>
        <h2>Menu</h2>
        <Row md={2} xs={1} lg={4} className='g-3'>
          {foodItems.map((item) => (
            <Col key={item.id} className='menu-item'>
              <Card classname='shadow h-100'>
                <Card.Img vriant='top' src={item.imageurl} alt={item.name}    
                style={{  height:'200px', objectFit:'cover',}}/>
                <Card.Body className='d-flex fex-coloumn'>
           <Card.Title className='d-flex jsutify-content-between align-items-baseline mb-4 '>
            <span >  {item.name} </span>{' '} 
           <span className='ms-2 text-muted'> {item.price.toFixed(2)} Rs</span>{' '}
           <span className="rating">
                {getStarRating(item.rating)}
              </span>   
           </Card.Title>
            <button className='btn btn-primary'  onClick={() => handleAddToCart(item)}>
                <CiCirclePlus />
              </button>
              </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
};

export default Menu;



