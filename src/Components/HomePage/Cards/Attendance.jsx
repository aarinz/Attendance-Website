import React, { useState, useEffect } from 'react';
import { VscAccount } from 'react-icons/vsc';
import './Attendance.css';

const HomePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [buttonStates, setButtonStates] = useState([]);
  const [workDoneValues, setWorkDoneValues] = useState([]);
  const [userData] = useState([
    { joined_date: "12-12-1212", id: 22, regno: "123ABC", project: "Project XYZ" },
    // Add more mock data if needed
  ]);

  useEffect(() => {
    setButtonStates(Array(userData.length).fill({ present: false, absent: false }));
    setWorkDoneValues(Array(userData.length).fill(''));
  }, [userData]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleButtonClick = (rowIndex, buttonType) => {
    setButtonStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[rowIndex] = {
        ...newStates[rowIndex],
        [buttonType]: !newStates[rowIndex][buttonType],
        [buttonType === 'present' ? 'absent' : 'present']: false,
      };
      return newStates;
    });
  };

  const handleWorkDoneChange = (rowIndex, value) => {
    setWorkDoneValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[rowIndex] = value;
      return newValues;
    });
  };

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
          <p id="welcome">Username's Attendance Dashboard</p>
          <p id="updates">Attendance for <b>Tuesday, January 16, 2024</b></p>
          <div className="dashboard"></div>
        </div>

        <div className="attendance-chart-container">
          <ul className="attendance-chart">
            <li className="attendance-heading">
              <span>Date</span>
              <span>User ID</span>
              <span>Reg No.</span>
              <span>Project</span>
              <span>Attendance</span>
              <span>Work Done</span>
            </li>
            {userData.map((user, index) => (
              <li key={index} className="attendance-row">
                <span>{user.joined_date}</span>
                <span>{user.id}</span>
                <span>{user.regno}</span>
                <span>{user.project}</span>
                <span>
                  <button
                    className={`attendance-button ${buttonStates[index]?.present ? 'active present' : ''}`}
                    onClick={() => handleButtonClick(index, 'present')}
                  >
                    P
                  </button>
                  <button
                    className={`attendance-button ${buttonStates[index]?.absent ? 'active absent' : ''}`}
                    onClick={() => handleButtonClick(index, 'absent')}
                  >
                    A
                  </button>
                </span>
                <span>
                  <input
                    type="text"
                    value={workDoneValues[index]}
                    onChange={(e) => handleWorkDoneChange(index, e.target.value)}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
