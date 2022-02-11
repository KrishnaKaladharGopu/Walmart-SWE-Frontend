import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container d-flex justify-content-between'>
        <NavLink className='navbar-brand d-flex align-items-center' to='/'>
          <img
            className='mr-2'
            src='walmart.svg'
            alt='Company Logo'
            height='40'
          />
          <strong>SWE</strong>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
