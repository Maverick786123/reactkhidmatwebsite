import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Website Under Construction
        </p>
        <p className='footer-subscription-text'>
          Thank You!
        </p>
        <div className='input-areas'>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contents</h2>
            <Link to='/'>Home</Link>
            <Link to='/our-centers'>Our Centers</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Services</h2>
            <Link to='/fir'>Copy of FIR</Link>
            <Link to='/lr'>Loss Report</Link>
            <Link to='/cr'>Crime Report</Link>
          </div>
        </div>
      </div>


      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              <img               src="https://pkm.punjab.gov.pk/assets/frontend/images/margo.png"
              alt="bionk" />
            </Link>
          </div>
          <small class='website-rights'>Khidmat Markaz © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;