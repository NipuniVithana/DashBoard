import React from 'react';
import { FaBell } from 'react-icons/fa'; 
import profileImage from '../assets/image.svg'; 

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="header-right">
        <FaBell className="header-icon" />
        <img src={profileImage} alt="Profile" className="profile-image" />
      </div>
    </header>
  );
};

export default Header;
