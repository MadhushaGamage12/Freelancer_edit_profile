import React from 'react';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Dashboard</h2>
      <ul>
        <li><a href="#">Profile</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Settings</a></li>
        <li><a href="#">Logout</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
