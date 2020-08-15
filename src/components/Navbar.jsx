import React from 'react';

const Navbar = ({ totalCounters }) => (
  <nav className="navbar navbar-dark bg-dark">
    <a className="navbar-brand" href="/">
      Counter App
      <span className="badge badge-pill badge-success ml-1">
        {totalCounters}
      </span>
    </a>
  </nav>
);

export default Navbar;
