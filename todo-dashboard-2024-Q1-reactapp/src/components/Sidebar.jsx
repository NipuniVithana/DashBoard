import React from 'react';
import { MdDashboard } from 'react-icons/md';



function Sidebar() {
  return (
    <aside id="sidebar">
      <div className="sidebar-title">
        <div className="sidebar-brand">
         <span className="sidebar-text">Acmy Solutions</span>
        </div>
        
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <span className="sidebar-list-item-icon"><MdDashboard/></span>
            <span className="sidebar-list-item-text">Dashboard</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
