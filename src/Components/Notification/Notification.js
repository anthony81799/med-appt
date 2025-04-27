import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [appointments, setAppointments] = useState([]);
    const [showNotification, setShowNotification] = useState(true);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedAppointmentData = JSON.parse(localStorage.getItem('storedAppointments'));

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        if (storedAppointmentData) {
            const relevantAppointment = storedAppointmentData[0];
            setAppointments([relevantAppointment]);
            setShowNotification(true);
        }
    }, []);

    useEffect(() => {
    }, [appointments]);

    return (
        <div>
            <Navbar />
            {children}
            {isLoggedIn && appointments.length > 0 && showNotification && (
                <div className="notification-container">
                    <div className="notification-content">
                        <h3>Appointment Details</h3>
                        {appointments.map(appointment => (
                            <div key={appointment.id} className="appointment-details">
                                <p><strong>User:</strong> {username}</p>
                                <p><strong>Doctor:</strong> {appointment.doctorName}</p>
                                <p><strong>Speciality:</strong> {appointment.doctorSpeciality}</p>
                                <p><strong>Name:</strong> {appointment.name}</p>
                                <p><strong>Phone Number:</strong> {appointment.phoneNumber}</p>
                                <p><strong>Date:</strong> {appointment.date}</p>
                                <p><strong>Time:</strong> {appointment.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Notification;
