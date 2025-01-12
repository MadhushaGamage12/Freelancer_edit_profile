import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import './App.css';

function App() {
  return (
    <div className="layout-container">
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
