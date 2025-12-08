import React from "react";
import "./Navbar.css";
import logo from "./Images/logo.png";
import before from "./Images/before.jpg";
import circle from "./Images/circle.jpg";
import after from "./Images/after.jpg";
import braces from "./Images/braces.jpg";
import box from "./Images/box.jpg";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="Logo" className="nav-logo" />
      </div>

      <ul className="nav-menu">
        <li className="nav-item dropdown">
          About <span className="arrow">▾</span>
          <ul className="dropdown-menu">
            <div class="about-dropdown">
    <div class="about-left">
    <a href="#">Meet the Team</a>
    <a href="#">Our Values</a>
    </div>

    <div class="about-right">
    <img src={logo} alt="Logo" />
    </div>
    </div>
          </ul>
        </li>
<li className="nav-item dropdown dental-dropdown">
  Dental Problems <span className="arrow">▾</span>

  <div className="dental-popup">
    <div className="col">
      <h3>Teeth & Gums</h3>
      <a>Wisdom Teeth</a>
      <a>Broken Chipped Tooth</a>
      <a>Toothache</a>
      <a>Receding Gums</a>
      <a>Teeth Cleaning</a>
      <a>Gum Disease</a>
      <a>Teeth Grinding</a>
      <a>Jaw Pain</a>
      <a>Bad Breath</a>
      <a>Sensitive & Sore Teeth</a>
      <a>Tooth Abscess</a>
      <a>Mouth Sores</a>
      <a>Teeth Filling</a>
      <a>Replacing Amalgam Fillings</a>
      <a>Dry Mouth</a>
    </div>

    <div className="col">
      <h3>Cosmetic<br/>Improvement</h3>
      <a>Yellow Teeth</a>
      <a>Missing Teeth</a>
      <a>Worn Teeth</a>
      <a>Crooked Teeth</a>

      <div className="image-wrapper">
        <img src={braces} alt="" />
      </div>
    </div>

    <div className="col">
      <h3>Common Issues</h3>
      <a>Emergency Dentist</a>
      <a>Dental Anxiety</a>
      <a>Oral Cancer</a>

      <div className="image-wrapper">
        <img src={box} alt="" />
      </div>
    </div>
  </div>
</li>

        

        <li className="nav-item mega-parent">
  Treatments <span className="arrow">▾</span>

  <div className="mega-menu">
    
    
    <div className="mega-col">
      <h3>Dental Services</h3>
      <a href="#">Scaling & Polishing</a>
      <a href="#">Fillings</a>
      <a href="#">Emergency Dentists</a>
      <a href="#">Exam & X-Rays Check-Up</a>
      <a href="#">Dentures</a>
      <a href="#">Tooth Extraction</a>
      <a href="#">Wisdom Teeth Removal</a>
      <a href="#">Root Canals</a>
      <a href="#">TMJ Treatment</a>
    </div>

    
    <div className="mega-col">
      <h3>Cosmetic Dental Services</h3>
      <a href="#">Teeth Whitening Treatment</a>
      <a href="#">Invisalign Clear Aligners</a>
      <a href="#">Dental Braces</a>
      <a href="#">Dental Crowns</a>
      <a href="#">Dental Bridge</a>
      <a href="#">Dental Implants</a>
      <a href="#">Dental Veneers</a>
      <a href="#">Orthodontics</a>
      <a href="#">Smile Makeover</a>
    </div>

    <div className="mega-col">
      <h3>Dental Specialists</h3>
      <a href="#">Endodontist Services</a>
      <a href="#">Oral & Maxillofacial Surgeon</a>
      <a href="#">Orthodontist Specialists</a>
      <a href="#">Pediatric Dentist</a>
      <a href="#">Periodontist Services</a>
      <a href="#">Prosthodontist Services</a>

      <div className="mega-img">
        <img src={circle} alt="Dental Icon" />
      </div>
    </div>

  </div>
</li>



<li className="nav-item mega-dropdown">
  <span className="nav-link">Before & After ▾</span>

  <div className="before-after-menu">
    <div className="ba-left">
      <h3>Before & After</h3>
      <ul>
        <li>Braces — Before and After</li>
        <li>Invisalign — Before and After</li>
        <li>Crowns — Before and After</li>
        <li>Veneers — Before and After</li>
        <li>Teeth Whitening — Before and After</li>
        <li>Dental Implants — Before and After</li>
        <li>Dental Bonding — Before and After</li>
      </ul>
    </div>

    <div className="ba-right">
      <img src={before} alt="Before After" />
    </div>

    
  </div>
</li>

 <li className="nav-item mega-dropdown">
  Patient Safety <span className="arrow">▾</span>

  <div className="patient-safety-menu">
    <div className="ps-left">
      <h3>Patient Safety</h3>
      <ul>
        <li>7X SAFETY</li>
        <li>4 Step Sterilization</li>
        <li>Safety Equipment</li>
        <li>Equipment & Technology</li>
        <li>Quality</li>
      </ul>
    </div>

    <div className="ps-right">
      <img src={after} alt="Patient Safety" />
    </div>
  </div>
</li>


        <li className="nav-item">Contact</li>
        <li className="nav-item">Blog</li>
      </ul>

      <div className="nav-buttons">
        <button className="btn-call">Call Now</button>
        <button className="btn-appointment">Book Appointment</button>
      </div>
    </nav>
  );
}

export default Navbar;
