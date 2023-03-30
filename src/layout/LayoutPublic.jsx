import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

const LayoutPublic = () => {
  return (
    <div className="px-5 container mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPublic;
