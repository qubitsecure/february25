import { Link } from 'react-router-dom';
import './SidebarStyle.css';
import React, { useState } from 'react';

const Sidebar = () => {


  return (
    <div>
       <aside class="sidebar">
          <nav>
              <ul class="sidebar__nav">
                  <li>
                      <Link to="../../Home" class="sidebar__nav__link">
                          <i class="material-icons">palette</i>
                          <span class="sidebar__nav__text">Home</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="../../Portraits" class=" sidebar__nav__link">
                        <i class="material-icons">account_box</i>
                          <span class="sidebar__nav__text">Portraits in Watercolour</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="#" class="sidebar__nav__link">
                        <i class="material-icons">query_builder</i>
                          <span class="sidebar__nav__text">Previous Commissions</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="#" class="sidebar__nav__link">
                        <i class="material-icons">settings_system_daydream</i>
                          <span class="sidebar__nav__text">Gallery</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="#" class="sidebar__nav__link">
                        <i class="material-icons">camera</i>
                          <span class="sidebar__nav__text">Exhibitions</span>
                      </Link>
                  </li>
                  <li>
                      <Link to="#" class="sidebar__nav__link">
                        <i class="material-icons">person</i>
                          <span class="sidebar__nav__text">About Me</span>
                      </Link>
                  </li>
                <li>
                    <Link to="#" class="sidebar__nav__link">
                      <i class="material-icons">chat_bubble_outline</i>
                        <span class="sidebar__nav__text">Contact</span>
                    </Link>
                </li>
                  <li>
                      <Link to="#" class="sidebar__nav__link">
                        <i class="material-icons">settings</i>
                          <span class="sidebar__nav__text">Information</span>
                         
                      </Link>
                      </li>
                      </ul>
  
                      </nav>
                      </aside>
                      </div>
  );
};

export default Sidebar;