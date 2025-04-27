import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import './Notification.css';

const Notification = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [username, setUsername] = useState("");
    const [doctorData, setDoctorData] = useState(null);
    const [appointmentData, setAppointmentData] = useState(null);

    useEffect(() => {
        const storedUsername = sessionStorage.getItem('email');
        const storedDoctorData = JSON.parse(localStorage.getItem('storedAppointments'));
        const storedAppointmentData = JSON.parse(localStorage.getItem('storedAppointments'));

        if (storedUsername) {
            setIsLoggedIn(true);
            setUsername(storedUsername);
        }

        if (storedDoctorData) {
            setDoctorData(storedDoctorData);
        }

        if (storedAppointmentData) {
            const relevantAppointment = storedAppointmentData[0];
            console.log("relevantAppointment:", relevantAppointment);
            setAppointmentData(relevantAppointment);
        }
    }, []);
    return (
        <div>
            <Navbar ></Navbar>
            {children}
            {isLoggedIn && appointmentData && (
                <>
                    <div className="notification-container">
                        <div className="notification-card">
                            <h3 className="notification-title">Appointment Details</h3>
                            <ul className="notification-list">
                                <li><strong>User:</strong> {username}</li>
                                <li><strong>Doctor:</strong> {doctorData?.name}</li>
                                <li><strong>Speciality:</strong> {appointmentData.doctorSpeciality}</li>
                                <li> <strong>Name:</strong> {appointmentData.name}</li>
                                <li> <strong>Phone Number:</strong> {appointmentData.phoneNumber}</li>
                                <li>  <strong>Date of Appointment:</strong> {appointmentData.appointmentDate}</li>
                                <li>  <strong>Time Slot:</strong> {appointmentData.selectedSlot}</li></ul>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Notification;