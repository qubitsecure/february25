import { Link } from 'react-router-dom';
import './SidebarStyle.css';
// import React, { useState } from 'react';

const Sidebar = () => {
  return (
    <div>
      <aside className="sidebar">
        <nav>
          <ul className="sidebar__nav">
            <li>
              <Link to="/Home" className="sidebar__nav__link">
                <i className="material-icons">palette</i>
                <span className="sidebar__nav__text">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/Portraits" className="sidebar__nav__link">
                <i className="material-icons">account_box</i>
                <span className="sidebar__nav__text">Portraits in Watercolour</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">query_builder</i>
                <span className="sidebar__nav__text">Previous Commissions</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">settings_system_daydream</i>
                <span className="sidebar__nav__text">Gallery</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">camera</i>
                <span className="sidebar__nav__text">Exhibitions</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">person</i>
                <span className="sidebar__nav__text">About Me</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">chat_bubble_outline</i>
                <span className="sidebar__nav__text">Contact</span>
              </Link>
            </li>
            <li>
              <Link to="#" className="sidebar__nav__link">
                <i className="material-icons">settings</i>
                <span className="sidebar__nav__text">Information</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;