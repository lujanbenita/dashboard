import React from 'react';

const SideNav = () => {
  return (
    <nav className="sidebar">
      <h1>Dashboard <span>Demo</span></h1>
      <ul className="sidebar__list">
        <li className="sidebar__list-item">Home</li>
        <li className="sidebar__list-item">Profile</li>
        <li className="sidebar__list-item">Covid</li>
        <li className="sidebar__list-item">Prices</li>
        <li className="sidebar__list-item">Todo</li>
        <li className="sidebar__list-item">Calendar</li>
        <li className="sidebar__list-item">Form</li>
      </ul>
    </nav>
  );
};

export default SideNav;