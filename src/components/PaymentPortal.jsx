import React from "react";
import "./PaymentPortal.css";

const PaymentPortal = () => {
  const subtotal = (Math.random() * 1000 + 100).toFixed(2);

  return (
    <div className="payment-portal">
      <h2>Payment Portal</h2>
      <div className="payment-details">
        <div className="card-image">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/009/384/393/small_2x/credit-card-clipart-design-illustration-free-png.png"
            alt="Credit Card"
          />
        </div>
        <div className="payment-info">
          <h3>Card Details</h3>
          <form>
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number:</label>
              <input type="text" id="cardNumber" name="cardNumber" required />
            </div>
            <div className="form-group">
              <label htmlFor="expiryDate">Expiry Date:</label>
              <input type="text" id="expiryDate" name="expiryDate" required />
            </div>
            <div className="form-group">
              <label htmlFor="cvv">CVV:</label>
              <input type="text" id="cvv" name="cvv" required />
            </div>
          </form>
        </div>
        <div className="subtotal">
          <h3>Subtotal</h3>
          <p>${subtotal}</p>
        </div>
        <button type="submit" className="pay-now-btn">
          Pay Now
        </button>
      </div>
    </div>
  );
};

export default PaymentPortal;
