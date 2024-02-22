import React from 'react';
import { Link } from 'react-router-dom';

function Header(props) {
  const userType = props.type;
  const userName = props.name;
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="http:/localhost:3000">
            <img src="https://e7.pngegg.com/pngimages/294/851/png-clipart-recycling-symbol-plastic-recycling-logo-e-waste-s-leaf-text-thumbnail.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top mx-3" />
            E-TERRA
          </a>
          <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                <Link to={`/user/home?userName=${userName}&userType=${userType}`} aria-current="page" className="nav-link">Home</Link>
                <Link to={`/user/AboutUS?userName=${userName}&userType=${userType}`} className="nav-link">About Us</Link>
                <Link to={`/user/services?userName=${userName}&userType=${userType}`} className="nav-link">Services</Link>
                </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
