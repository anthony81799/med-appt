
import React, { useState } from 'react';
import ProfileForm from '../ProfileForm/ProfileForm'; // Ensure the path is correct
import "./ProfileCard.css";
import { useNavigate } from "react-router-dom";


const ProfileCard = () => {
    const [showProfileForm, setShowProfileForm] = useState(false);
    const navigate = useNavigate();

    const handleCardClick = (type) => {
        if (type === 'profile') {
            setShowProfileForm(true);
        } else if (type === 'report') {
            setShowProfileForm(false);
            navigate("/reports");
        }
    };

    const handleClose = () => {
        setShowProfileForm(false);
    };

    return (
        <div className="profile-card">
            {showProfileForm ? (
                <ProfileForm onClose={handleClose} />
            ) : (
                <>
                    <div className="profile-card__info" onClick={() => handleCardClick('profile')}>
                        Your Profile
                    </div>
                    <div className="report-content" onClick={() => handleCardClick('report')}>
                        Your Reports
                    </div>
                </>
            )}
        </div>
    );
};

export default ProfileCard;
