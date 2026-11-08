
import React, { useContext } from 'react';
import { Context } from './Context';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

function Cart() {
  const { cart,carttoggle} = useContext(Context);

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  const toggleorder=()=>{
    alert('Your Order Confirmed')
  }



  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">My Cart 🛒</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty!</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item d-flex align-items-center justify-content-start  gap-3 mb-3 p-3 border rounded" 
            key={item.id}>

              <img
                src={item.image}
                alt={item.name}
                width="100"
                height="100"
                style={{ objectFit: 'cover' }}
              />
              
              <div  className='w-50'>
                <h5>{item.name}</h5>
                <p> {item.rating} / 5</p>
                <h6>₹{item.price}</h6>
              </div>

             <div className=' d-flex  justify-content-end w-100'>
              <button onClick={()=>{carttoggle(item)}} className='card-btn2 '>Remove</button>
             </div>
            </div>
          ))}
          <button className=" mt-4 bg-success border rounded p-2" style={{border:'2px solid green', alignItems:'center'}}  
          onClick={toggleorder}>Place Order</button>
          <div className="text-end mt-4">
            <h4>Total: ${total}</h4>
          </div>
        </>
      )}
    </Container>
  );
}

export default Cart;
