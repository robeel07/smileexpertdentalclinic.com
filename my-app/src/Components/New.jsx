import React from "react";
import "./New.css";
import Pic from "./Images/Pic.jpg"; 

export default function New() {
  return (
    <div className="yt-wrapper">

      <div className="yt-intro , align-center">
        <p text-align="center">
          Concerned about yellow teeth? You’re not alone. We understand. Despite your efforts with brushing, whitening toothpaste, and flossing, 
          your teeth may still appear yellow.
          Don’t worry. Professional treatment 
          can effectively address yellow teeth. Visit SmileOn for a discussion on 
          yellow teeth treatment. Stained or yellow teeth can affect your confidence, 
          but there are affordable and durable solutions available.
        </p>
      </div>

      <div className="yt-section">

        <div className="yt-text">
          <h2>Symptoms of yellow teeth</h2>

          <p>
            Yellow teeth can be disheartening, whether it’s a few teeth or all of 
            them. The signs are usually noticeable, standing out against your normal 
            tooth color. If you’re concerned about the color of your teeth, schedule a 
            dentist appointment for yellow teeth treatment to explore your options.
          </p>

          <p>
            Sometimes all of your teeth will be discoloured or stained and you notice 
            it in a photograph with other people. If you’re worried about the colour 
            of your teeth, book an appointment with a dentist for yellow teeth 
            treatment to discuss your options.
          </p>
        </div>

        <div className="yt-image">
          <img src={Pic} alt="Dentist checking patient" />
        </div>

      </div>

    </div>
  );
}
