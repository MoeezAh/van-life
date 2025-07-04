import React from 'react';
import { Link, NavLink, Outlet } from 'react-router';

export default function HostLayout() {
  const activeStyle = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616',
  };

  return (
    <>
      <nav className='host-nav'>
        <NavLink to="." end style={({ isActive }) => isActive ? activeStyle : null }>Dashboard</NavLink>
        <NavLink to="Income" style={({ isActive }) => isActive ? activeStyle : null }>Income</NavLink>
        <NavLink to="vans" style={({ isActive }) => isActive ? activeStyle : null }>Vans</NavLink>
        <NavLink to="reviews" style={({ isActive }) => isActive ? activeStyle : null }>Reviews</NavLink>
      </nav>
      <Outlet />
    </>
  );
}
