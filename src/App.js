import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/SignUp';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                <Navbar />
                <Notification>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/Sign_Up/Sign_Up.html" element={<SignUp />} />
                        <Route path="/Login/Login.html" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;
