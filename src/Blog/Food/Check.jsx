import React, { useState } from 'react';
import { useCart } from '../Food/Context';
import { Modal, Button } from 'react-bootstrap';
import { BsBasketFill } from 'react-icons/bs';
import { RxCrossCircled } from "react-icons/rx";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Check = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleToggleModal = () => setShowModal((prevShowModal) => !prevShowModal);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name && address && phone) {
      toast.success("Order placed successfully!");  
      clearCart();
      setShowModal(false);  
      setName('');
      setAddress('');
      setPhone('');
    } else {
      toast.error('Please fill all fields!');  
    }
  };

  return (
    <div>
      <Button variant="outline-secondary" onClick={handleToggleModal} className="basket-btn rounded-circle">
        <BsBasketFill />
      </Button>
      <Modal show={showModal} onHide={handleToggleModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Your Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ul>
            {cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cart.map((item, index) => (
                <li key={index} className="cart-item">
                  {item.name} - {item.price.toFixed(1)} Rs
                  <Button size="sm" className="ms-2" onClick={() => removeFromCart(item)}>
                    {<RxCrossCircled />}
                  </Button>
                </li>
              ))
            )}
          </ul>
          <h4>Total: {cart.reduce((acc, item) => acc + item.price, 0).toFixed(1)} Rs</h4>
          <Button className='btn btn-info' onClick={clearCart}>Clear Cart</Button>
        </Modal.Body>
        <Modal.Footer>
          <form onSubmit={handleSubmit} className="w-100">
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                required
                className="form-control mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                required
                className="form-control mb-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                required
                className="form-control mb-2"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <Button className='btn btn-info' type="submit">Place Order</Button>
          </form>
        </Modal.Footer>
      </Modal>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick />
    </div>
  );
};

export default Check;
