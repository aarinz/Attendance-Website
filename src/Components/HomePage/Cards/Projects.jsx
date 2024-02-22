import React, { useState } from 'react';
import { VscAccount } from 'react-icons/vsc';
import './Project.css';

const Project = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    teamLeader: '',
    members: '',
    startDate: '',
    completedDate: '',
    status: '',
  });
  const [projects, setProjects] = useState([]);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleFormChange = (field, value) => {
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = () => {
    const newProject = { ...formData };
    setProjects([...projects, newProject]);
    setFormData({
      title: '',
      description: '',
      teamLeader: '',
      members: '',
      startDate: '',
      completedDate: '',
      status: '',
    });
    setShowForm(false);
  };

  const handleRemove = (index) => {
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
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

      <div className={`project-container ${showSidebar ? 'content-sidebar-visible' : ''}`}>
        <button className={`add-project-button ${showSidebar ? 'button-sidebar-visible' : ''}`} onClick={toggleForm}>
          Add Project
        </button>
        {showForm && (
          <form className="form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="title">Project Title:</label>
            <input
              type="text"
              id="title"
              value={formData.title}
              onChange={(e) => handleFormChange('title', e.target.value)}
            />

            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleFormChange('description', e.target.value)}
            />

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="teamLeader">Team Leader:</label>
                <input
                  type="text"
                  id="teamLeader"
                  value={formData.teamLeader}
                  onChange={(e) => handleFormChange('teamLeader', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="members">Members:</label>
                <input
                  type="text"
                  id="members"
                  value={formData.members}
                  onChange={(e) => handleFormChange('members', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="startDate">Starting Date:</label>
                <input
                  type="text"
                  placeholder="Date Picker" 
                  id="startDate"
                  value={formData.startDate}
                  onChange={(e) => handleFormChange('startDate', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="completedDate">Completed Date:</label>
                <input
                  type="text"
                  placeholder="Date Picker" 
                  id="completedDate"
                  value={formData.completedDate}
                  onChange={(e) => handleFormChange('completedDate', e.target.value)}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="status">Status:</label>
                <input
                  type="text"
                  id="status"
                  value={formData.status}
                  onChange={(e) => handleFormChange('status', e.target.value)}
                />
              </div>
            </div>

            <button type="button" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        )}

        <ul className="project-list">
          {projects.map((project, index) => (
            <li key={index} className="project-card fade-in">
              <button className="remove-button" onClick={() => handleRemove(index)}>
                Remove
              </button>
              <h3>Project Title: <span style={{ color: 'white' }}>{project.title}</span></h3>
              <p>Description: <span style={{ color: 'white' }}>{project.description}</span></p>
              <p>Team Leader: <span style={{ color: 'white' }}>{project.teamLeader}</span></p>
              <p>Members: <span style={{ color: 'white' }}>{project.members}</span></p>
              <p>Start Date: <span style={{ color: 'white' }}>{project.startDate}</span></p>
              <p>Completed Date: <span style={{ color: 'white' }}>{project.completedDate}</span></p>
              <p>Status: <span style={{ color: 'white' }}>{project.status}</span></p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
