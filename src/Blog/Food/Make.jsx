import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import Footer from "../Footer";

const recipes = [
  { id: 1, name: 'Brownie ',  imageUrl: '/images/bro.jpg', rating: 4 },
  { id: 2, name: 'Span  ', imageUrl: '/images/span.jpg', rating: 3 },
  { id: 3, name: 'Oat Bran', imageUrl: '/images/egg.jpg', rating: 5 },
  { id: 4, name: 'Fruit Pizza', imageUrl: '/images/Pizza.jpg', rating: 4 },
  { id: 5, name: 'Chicken Tinga', imageUrl: '/images/Tinga.jpg', rating: 4 },
  { id: 6, name: 'Egg Bosch', imageUrl: '/images//omlet.webp', rating: 5 },
  { id: 7, name: 'Sichuhan spicy Noodles', imageUrl: '/images/Fried.jpg', rating: 5 },
  { id: 8, name: 'Honey cheese Burger', imageUrl: '/images/honey.webp', rating: 5 },
 ];
  const Rating = ({ rating }) => {
  const stars = Array(5).fill(false).map((_, index) => index < rating);
  return (
    <div className='rating'>
      {stars.map((filled, index) => (
        <span key={index} className={filled ? 'star filled' : 'star'}>★</span>
      ))}
    </div>
  );
};
function Make() {
  return (
    <> 
       
     <div className='recip'>
      <h2 className='parag'>Recipes</h2>
      <p>Weve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, were sure youll find just what you were looking for.</p>
            
        <div className='input-wrapper' >
          <FaSearch id='search-icon'/> 
          <input className='input-place' placeholder= 'search by keyword' />
         </div>
         </div>
        <div className='container'>
        <h3>Recipe List</h3>
        <Row xs={1} sm={2} md={3} lg={4} className='g-4'>
          {recipes.map(recipe => (
            <Col key={recipe.id}>
              <Link to={`/recipe/${recipe.id}`} className='text-decoration-none'>
                <Card className='shadow'>
                  <Card.Img variant="top" src={recipe.imageUrl} alt={recipe.name}  style={{height:'213.79px'}} />
                  <Card.Body>
                    <Card.Title>{recipe.name}</Card.Title>
                    <Rating rating={recipe.rating} />
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Make;
