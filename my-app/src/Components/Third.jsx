import React, { useState } from "react";
import "./Third.css"; 
import Pic3 from "./Images/Pic3.jpg";

export default function Third() {
  const [open, setOpen] = useState(null);

  const faqs = [
    { id: 1, q: "How much does it cost to fix yellow teeth?" },
    { id: 2, q: "What does it mean if you have yellow teeth?" },
    { id: 3, q: "How do you get rid of yellow teeth?" },
    { id: 4, q: "How do you prevent yellow teeth?" },
    { id: 5, q: "Why are my teeth yellow when I brush them everyday?" },
  ];

  return (
    <div className="wn-container">
      <h2 className="wn-title">What Next</h2>

      <p className="wn-description">
        Discover treatment options by exploring potential procedures. We suggest
        scheduling a dental appointment for personalized guidance regarding your
        condition. Book <span className="wn-link">book online</span> or call now to
        secure your appointment.
      </p>

      <div className="wn-card-wrapper">
        <div className="wn-card">
          <div className="wn-card-border">
            <img src={Pic3} alt="Tooth Icon" className="wn-icon" />
          </div>
          <p className="wn-card-title">Teeth Whitening Treatment</p>
        </div>
      </div>

      <h2 className="wn-faq-title">FAQs</h2>

      <div className="wn-faq-grid">
        {faqs.map((f) => (
          <div
            key={f.id}
            className="wn-faq-item"
            onClick={() => setOpen(open === f.id ? null : f.id)}
          >
            <span className="wn-faq-plus">{open === f.id ? "−" : "+"}</span>
            <p className="wn-faq-question">
              {String(f.id).padStart(2, "0")}. {f.q}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
