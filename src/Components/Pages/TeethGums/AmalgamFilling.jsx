import React from "react";
import { Link } from "react-router-dom";
import fiftyfive from "../../Images/fiftyfive.jpg";
import fiftysix from "../../Images/fiftysix.jpg";
import fiftyseven from "../../Images/fiftyseven.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function AmalgamFilling() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${fiftyfive})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
       Amalgam Filling Replacement in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/amalgamfilling"></Link>}


<div
  style={{
    maxWidth: "1300px",
    margin: " 40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
If you have concerns about the health impact of amalgam fillings, replacing them with <span style={{color:"blue"}}>teeth filling</span> might be the optimal choice. The trend of replacing amalgam fillings has grown in popularity, often accompanied by a holistic approach. If you have conducted thorough research, possess specific health concerns, a relevant medical history, or personal convictions, you have the option to replace amalgam fillings.
  </p>
</div>

<div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "40px",
        padding: "60px 40px",
        maxWidth: "1200px",
        margin: "auto",
        flexWrap: "wrap",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* LEFT CONTENT */}
      <div style={{ flex: 1, minWidth: "280px" }}>
        <h2
          style={{
            color: "#0a1f44",
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          Why Would You Replace Amalgam Filling?
        </h2>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.7",
            color: "#444",
            marginBottom: "20px",
          }}
        >
          The decision to replace amalgam fillings with another dental material
          is a matter of personal choice. People have various reasons for opting
          to do so, often based on personal research, health concerns, prior
          medical conditions, and religious beliefs. Some of the main reasons for
          replacing amalgam fillings are:
        </p>

        <ul
          style={{
            paddingLeft: "20px",
            color: "#444",
            fontSize: "16px",
            lineHeight: "1.8",
            listStyleType: "disc",
          }}
        >
          <li>
            Amalgam contains mercury, which for certain people may be a health
            danger.
          </li>
          <li>
            Composite fillings are more aesthetic and look like natural teeth.
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1, minWidth: "280px", textAlign: "right" }}>
        <img
          src={fiftysix}
          alt="Dental Treatment"
          style={{
            width: "100%",
            maxWidth: "620px",
            borderRadius: "18px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     <div
      style={{
        backgroundColor: "#f5f9fc",
        padding: "70px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          gap: "50px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <img
            src={fiftyseven}
            alt="Dental Process"
            style={{
              maxwidth: "620%",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1", minWidth: "280px" }}>
          <h2
            style={{
              color: "#0a1f44",
              fontSize: "30px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            The Process of Replacing Amalgam Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            After deciding to remove an amalgam filling, book a consultation
            appointment with your dentist to discuss the best long-term
            restorative option.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            During the amalgam removal process, your dentist will follow
            protocols to protect you from exposure to the old filling material.
          </p>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#333",
            }}
          >
            Once the amalgam is removed, your dentist will rebuild the tooth
            using appropriate non-metallic material.
          </p>
        </div>
      </div>
    </div>

    <div style={{ padding: "70px 40px" }}>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      color: "#0a1f44",
      fontSize: "32px",
      fontWeight: "700",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ CONTAINER */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ flex: 1, minWidth: "300px" }}>
      {[
        "01. How much does it cost to replace amalgam fillings?",
        "02. Should all amalgam fillings be replaced?",
        "03. When can you eat after amalgam filling?",
        "04. How long does an amalgam filling last?",
        "05. Does it hurt to replace amalgam fillings?",
      ].map((text, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#69bebc",
            padding: "18px 22px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ flex: 1, minWidth: "300px" }}>
      {[
        "06. Can fillings be prevented?",
        "07. Which is better amalgam or composite filling?",
        "08. What happens if you swallow amalgam filling?",
        "09. Which amalgam is used for dental filling?",
      ].map((text, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#69bebc",
            padding: "18px 22px",
            marginBottom: "14px",
            display: "flex",
            alignItems: "center",
            gap: "14px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "22px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  </div>
</div>

<div className="w-full h-[180px] overflow-hidden mt-4">
  <iframe
    title="clinic-map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0390050498395!2d71.9162331!3d30.292951199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b557588a60575%3A0x79afa5462675bee1!2sSmile%20expert%20dental%20clinic!5e0!3m2!1sen!2s!4v1767274320473!5m2!1sen!2s"
    width="100%"
    height="450"
    style={{ border: "0" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  />
</div>

<div className="bg-[#0c2340] text-white pt-[60px] pb-[60px] px-[40px] mt-0">
  <div className="flex justify-between flex-wrap max-w-[1400px] mx-auto gap-[40px]">
    {/* COLUMN 1 */}
    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Useful Links</h3>
      <p className="my-[6px]">About Us</p>
      <p className="my-[6px]">Contact Us</p>
      <p className="my-[6px]">Meet the Team</p>
      <p className="my-[6px]">Before & After</p>
      <p className="my-[6px]">Blogs</p>
    </div>

    
    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Treatments</h3>
      <p className="my-[6px]">Exam & X-Rays Check-Up</p>
      <p className="my-[6px]">Dental Emergency</p>
      <p className="my-[6px]">Smile Makeover</p>
      <p className="my-[6px]">Veneers</p>
      <p className="my-[6px]">Dental Implants</p>
      <p className="my-[6px]">Root Canal Treatment</p>
      <p className="my-[6px]">Orthodontic Braces</p>
      <p className="my-[6px]">Clear Aligners</p>
    </div>

    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>
      <p className="my-[6px]">Yellow Teeth</p>
      <p className="my-[6px]">Teeth Cleaning</p>
      <p className="my-[6px]">Missing Teeth</p>
      <p className="my-[6px]">Broken Chipped Tooth</p>
      <p className="my-[6px]">Gum Disease</p>
      <p className="my-[6px]">Crooked Teeth</p>
      <p className="my-[6px]">Sensitive & Sore Teeth</p>
      <p className="my-[6px]">Dental Anxiety</p>
    </div>

    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Patient Safety</h3>
      <p className="my-[6px]">7X SAFETY</p>
      <p className="my-[6px]">4 Step Sterilization</p>
      <p className="my-[6px]">Safety Equipment</p>
      <p className="my-[6px]">Equipment & Technology</p>
      <p className="my-[6px]">Quality</p>
    </div>

    <div className="min-w-[250px]">
      <h3 className="text-[20px] mb-[20px]">Get in touch</h3>

      <p className="my-2 flex gap-[10px]">✉ aneelabrar555@gmail.com</p>

      <p className="my-2 flex gap-[10px] ">☏ 03008395562</p>

      <p className="my-2 flex gap-[10px] leading-[1.4]">
        ⚲ Saddique hospital stadium road khanewal
      </p>

      <p className="mt-6 font-semibold">🕒 Clinic Timing<br/> 11:00am to 9:00pm</p>

      <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
        <div className="flex gap-[15px] mt-[20px]">
          <a
            href="#"
            className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
          >
            <FaFacebookF size={20} color="white" />
          </a>

          <a
            href="#"
            className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
          >
            <FaInstagram size={20} color="white" />
          </a>

          <a
            href="#"
            className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
          >
            <FaYoutube size={22} color="white" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>



</>
  )
}