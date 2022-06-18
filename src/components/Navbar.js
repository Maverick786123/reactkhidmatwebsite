import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="https://pkm.punjab.gov.pk/assets/frontend/images/margo.png"
              alt="bionk"
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <div className="dropdown">
            <Link
                to="/#"
                onClick={closeMobileMenu}
              >
              <button className="dropbtn">Services</button>
              </Link>
              <div className="dropdown-content">
              <Link to='/fir'>Copy of FIR</Link>
              <Link to='/lr'>Loss Report</Link>
              <Link to='/cr'>Crime Report</Link>
              </div>
            </div>

            <li className="nav-item">
              <Link
                to="/our-centers"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Our Centers
              </Link>
            </li>

            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">اردو</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
