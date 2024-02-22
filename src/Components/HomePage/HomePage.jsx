import React, { useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import { VscBook } from "react-icons/vsc";
import { HiMiniPencilSquare } from "react-icons/hi2";
import { IoIosPeople } from "react-icons/io";
import './HomePage.css';
import { Routes, Route, Link } from 'react-router-dom';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const memberCount = 30;
  const ongoingProjectsCount = 10;
  const completedProjectsCount = 0;

  return (
    <div className='body'>
      <div className="top-navbar">
        <div className={`hamburger ${showSidebar ? 'sidebar-visible' : ''}`} onClick={toggleSidebar}>
          &#9776;
        </div>
        <div className="brand">Logo</div>
      </div>

      {showSidebar && (
        <div className="sidebar">
          <div className="profile">
            <VscAccount className="user-icon" />
            <div className="name">Username</div>
          </div>
          <div className="logout">Logout</div>
        </div>
      )}

      <div className={`content ${showSidebar ? 'content-sidebar-visible' : ''}`}>
        <div className="content-header">
          <p id="welcome">Welcome Back, <b>Username</b></p>
          <p id="updates">Here are your recent updates:</p>
          <div className="dashboard">
            <div className="stat-item">
              <div className="stat-count">{memberCount}</div>
              <div className="stat-title">Members</div>
            </div>
            <div className="stat-item">
              <div className="stat-count">{ongoingProjectsCount}</div>
              <div className="stat-title">Ongoing Projects</div>
            </div>
            <div className="stat-item">
              <div className="stat-count">{completedProjectsCount}</div>
              <div className="stat-title">Completed Projects</div>
            </div>
          </div>
        </div>

        <div className="card-container">
          <Link to="/attendance" className="card" style={{ textDecoration: 'none', color: '#d9521d' }}>
            <div className="card-body">
              <HiMiniPencilSquare className="icon" />
              <p className="card-title">Take <b>Attendance</b></p>
              <p className="card-text"></p>
            </div>
          </Link>

          <Link to="/projects" className="card" style={{ textDecoration: 'none', color: '#d9521d' }}>
            <div className="card-body">
              <VscBook className="icon" />
              <p className="card-title">Manage <b>Projects</b></p>
              <p className="card-text"></p>
            </div>
          </Link>

          <Link to="/Members" className="card" style={{ textDecoration: 'none', color: '#d9521d' }}>
            <div className="card-body">
              <IoIosPeople className="icon" />
              <p className="card-title">   Add<b> Members</b></p>
              <p className="card-text"></p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
