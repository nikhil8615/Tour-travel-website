import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import TripDetails from "./routes/TripDetails";
import BookingForm from "./components/BookingForm";
import PaymentPortal from "./components/PaymentPortal"; // Import the PaymentPortal component

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/trip/:id" element={<TripDetails />} />{" "}
        <Route path="/booking" element={<BookingForm />} />{" "}
        <Route path="/payment" element={<PaymentPortal />} />{" "}
      </Routes>
    </>
  );
};

export default App;
