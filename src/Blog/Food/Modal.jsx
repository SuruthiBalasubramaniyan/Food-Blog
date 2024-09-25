import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from '../Food/Context';

const CartModal = ({ show, onHide }) => {
  const { cart, clearCart } = useCart();

  return (
    <Modal show={show} onHide={onHide} className="cart-modal" centered closeButton>
       <Modal.Header closeButton>
        <Modal.Title>Your Cart</Modal.Title>
       </Modal.Header>
       <Modal.Body>
         <ul className='cart-items'>
           {cart.length === 0 ? (
             <p>Your cart is empty</p>
           ) : (
             cart.map((item, index) => (
               <li key={index}>
                 {item.name} - {item.price.toFixed(2)} Rs
               </li>
           ))
           )}
         </ul>
       </Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={clearCart}>Clear Cart</Button>
         <Button variant="primary" onClick={onHide}>Close</Button>
       </Modal.Footer>
    </Modal>
  );
};

export default CartModal;