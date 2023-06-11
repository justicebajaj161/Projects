import React from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Navbar = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem('auth');
    navigate('/login');
    toast.success('Logged Out Successfully');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid navbar-bg">
          <a className="navbar-brand">Flight-Booking <i class="fa-solid fa-plane-departure"></i></a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
            <NavLink to="/">
                <a className="nav-link" id='start' activeClassName="active">
                  Flights
                </a>
              </NavLink>
              <NavLink to="/bookings">
                <a className="nav-link" id='start' activeClassName="active">
                  Bookings
                </a>
              </NavLink>
              <NavLink to="/login">
                <a className="nav-link" id="end" activeClassName="active">
                  Login
                </a>
              </NavLink>
              <NavLink to="/register">
                <a className="nav-link" id="end" activeClassName="active">
                  Register
                </a>
              </NavLink>
              <NavLink>
              <a className="nav-link" id="end" onClick={logOut}>
                <i className="fa-solid fa-arrow-right-from-bracket" />
              </a>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navbar;
