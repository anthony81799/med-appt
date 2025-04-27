import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import LandingPage from './Components/Landing_Page/LandingPage';
import Login from './Components/Login/Login';
import SignUp from './Components/Sign_Up/SignUp';
import InstantConsultation from './Components/InstantConsultationBooking/InstantConsultation.js';
import BookingConsultation from './Components/BookingConsultation/BookingConsultation';
import Notification from './Components/Notification/Notification';
import ReviewForm from './Components/ReviewForm/ReviewForm.js';
import ReportLayout from './Components/ReportsLayout/ReportsLayout';

// Function component for the main App
function App() {

    // Render the main App component
    return (
        <div className="App">
            {/* Set up BrowserRouter for routing */}
            <BrowserRouter>
                <Notification>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/instant-consultation" element={<InstantConsultation />} />
                        <Route path="/booking-consultation" element={<BookingConsultation />} />
                        <Route path="/reviews" element={<ReviewForm />} />
                        {/* <Route path="/profile" element={<ReviewForm />} /> */}
                        <Route path="/reports" element={<ReportLayout />} />
                    </Routes>
                </Notification>
            </BrowserRouter>
        </div>
    );
}

// Export the App component as the default export
export default App;
