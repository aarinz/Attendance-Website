import React, { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import './Members.css';

const Members = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    URK: '',
    permission: '',
    kmail: '',
    contactNo: '',
  });

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleAddMember = () => {
    // Check if any field is empty
    if (Object.values(formData).some((value) => value === '')) {
      alert('Please fill in all fields.');
      return;
    }

    // All fields are filled, proceed to add member
    console.log('Member data added:', formData);
    alert('Member added!');

    // Reset the form state
    setFormData({
      name: '',
      URK: '',
      permission: '',
      kmail: '',
      contactNo: '',
    });
  };

  return (
    <div className={`body ${showSidebar ? 'sidebar-visible' : ''}`}>
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

      <div className="project-container">
        <form className="form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => handleFormChange('name', e.target.value)}
          />

          <label htmlFor="URK">URK:</label>
          <input
            type="text"
            id="URK"
            value={formData.URK}
            onChange={(e) => handleFormChange('URK', e.target.value)}
          />

          <label htmlFor="permission">Permission:</label>
          <input
            type="text"
            id="permission"
            value={formData.permission}
            onChange={(e) => handleFormChange('permission', e.target.value)}
          />

          <label htmlFor="kmail">Kmail:</label>
          <input
            type="text"
            id="kmail"
            value={formData.kmail}
            onChange={(e) => handleFormChange('kmail', e.target.value)}
          />

          <label htmlFor="contactNo">Contact No.:</label>
          <input
            type="text"
            id="contactNo"
            value={formData.contactNo}
            onChange={(e) => handleFormChange('contactNo', e.target.value)}
          />

          <button type="button" onClick={handleAddMember}>
            Add Member
          </button>
        </form>
      </div>
    </div>
  );
};

export default Members;
