import React from "react";
import { useNavigate } from "react-router-dom";
import "./BookingForm.css";

const BookingForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/payment");
  };

  return (
    <div className="booking-form-container">
      <div className="booking-form">
        <h2>Enter Your Details</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address:</label>
            <textarea id="address" name="address" rows="3" required></textarea>
          </div>
          <button>Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
