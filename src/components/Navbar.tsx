import React from 'react';
import { SignOut } from './AuthComponents';
import '../css/Navbar.css';

interface NavbarProps {
  username: string;
}

const Navbar: React.FC<NavbarProps> = ({ username }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.02663 7L0.333333 5.41597L2.31846 1.91739L5.01333 3.4987L5.01487 0.333333H8.98513L8.98667 3.4987L11.6815 1.91739L13.6667 5.41597L10.9733 7L13.6667 8.58403L11.6815 12.0826L8.98667 10.5013L8.98513 13.6667H5.01487L5.01333 10.5013L2.31846 12.0826L0.333333 8.58403L3.02663 7Z" fill="white" className='logo'/>
        </svg>
        <h1 className="navbar-logo">skillPath.AI</h1>
      </div>
      <div className="navbar-right">
        <span className="navbar-username">Welcome, {username}</span>
        <SignOut />
      </div>
    </nav>
  );
};

export default Navbar;
