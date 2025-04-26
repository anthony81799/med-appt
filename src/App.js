import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/SignUp';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';

// Function component for the main App
function App() {

  // Render the main App component
  return (
    <div className="App">
      {/* Set up BrowserRouter for routing */}
      <BrowserRouter>
        {/* Display the Navbar component */}
        <Navbar />

        {/* Set up the Routes for different pages */}
        <Routes>
          {/* Define individual Route components for different pages */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/booking-consultation" element={<BookingConsultation />} />
          <Route path="/instant-consultation" element={<InstantConsultation />} />
        </Routes>
        <div className="doctor-cards-container" />
      </BrowserRouter>
    </div>
  );
}

// Export the App component as the default export
export default App;
