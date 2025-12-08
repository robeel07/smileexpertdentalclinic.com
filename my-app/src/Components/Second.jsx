import React from "react";
import "./Second.css";
import Pic2 from "./Images/Pic2.jpg";

export default function CausesYellowTeeth() {
  return (
    <div className="causes-wrapper">

      <div className="causes-card">
        
        <div className="cause-img-col">
          <img src={Pic2} alt="Dentist treating patient" />
        </div>

        <div className="cause-text-col">
          <h2>Causes of yellow teeth</h2>

          <p>
            Yellow teeth can be caused by various factors. Regular smoking 
            and coffee consumption can lead to staining. Fizzy drinks and red 
            wine can also contribute to yellowing. Additionally, thin tooth 
            enamel can be a potential cause of yellow teeth. There are also a 
            few other causes of yellow teeth including:
          </p>

          <ul>
            <li>Some diseases</li>
            <li>Certain medications</li>
            <li>Your age</li>
            <li>Trauma or injury to your teeth</li>
          </ul>
        </div>

      </div>

    </div>
  );
}
