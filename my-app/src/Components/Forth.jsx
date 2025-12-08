import React from "react";
import "./Forth.css";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Forth() {
  return (
    <>
<div className="map-container">
  <iframe
    title="clinic-map"
    src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13615.739324467939!2d74.268749!3d31.443461!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzHCsDI2JzM2LjUiTiA3NMKwMTYnMDcuNSJF!5e0!3m2!1sen!2sus!4v1764858838559!5m2!1sen!2sus"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>



    
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-column">
          <h3>Useful Links</h3>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Meet the Team</p>
          <p>Before & After</p>
          <p>Blogs</p>
        </div>

        
        <div className="footer-column">
          <h3>Treatments</h3>
          <p>Exam & X-Rays Check-Up</p>
          <p>Dental Emergency</p>
          <p>Smile Makeover</p>
          <p>Veneers</p>
          <p>Dental Implants</p>
          <p>Root Canal Treatment</p>
          <p>Orthodontic Braces</p>
          <p>Clear Aligners</p>
        </div>

        
        <div className="footer-column">
          <h3>Dental Problems</h3>
          <p>Yellow Teeth</p>
          <p>Teeth Cleaning</p>
          <p>Missing Teeth</p>
          <p>Broken Chipped Tooth</p>
          <p>Gum Disease</p>
          <p>Crooked Teeth</p>
          <p>Sensitive & Sore Teeth</p>
          <p>Dental Anxiety</p>
        </div>

        
        <div className="footer-column">
          <h3>Patient Safety</h3>
          <p>7X SAFETY</p>
          <p>4 Step Sterilization</p>
          <p>Safety Equipment</p>
          <p>Equipment & Technology</p>
          <p>Quality</p>
        </div>

        
        <div className="footer-column">
          <h3>Get in touch</h3>

          <p className="footer-icon-text">
            <FaEnvelope /> info@smileon.pk
          </p>

          <p className="footer-icon-text">
            <FaPhone /> 0331 1066666
          </p>

          <p className="footer-icon-text">
            <FaMapMarkerAlt /> 
            335-B Iqbal Avenue, Khayaban-e-Jinnah Service Road,<br />
            Near Shokat Khanum Hospital Johar Town, Lahore
          </p>

          <p className="footer-icon-text">
            <FaClock /> <strong>Clinic Timing</strong><br />
            11:00am to 9:00pm
          </p>

          
          <div className="footer-social">
          <FaFacebookF className="social-icon" />
          <FaInstagram className="social-icon" />
          <FaYoutube className="social-icon" />
          </div>

        </div>
      </div>
    </footer>
    </>
  );
}
