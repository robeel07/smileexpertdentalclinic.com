import React from "react";
import { Link } from "react-router-dom";
import seventeen from "../../Images/seventeen.jpg";
import eighteen from "../../Images/eighteen.jpg";
import nineteen from "../../Images/nineteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function TeethCleaning() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${seventeen})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Teeth Cleaning Service in Khanewal
    </h1>
  </div>
</div>
    </div>


      {<Link to="/TeethGums/teethcleaning"></Link>}


    <div
  style={{
    maxWidth: "1300px",
    margin: "40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
 Do you desire a white, healthy smile? Regularly cleaning your teeth prevents future problems and ensures dental health. Achieve a happy, healthy smile through home dental hygiene and regular dentist visits. The dental cleaning process in Pakistan helps maintain excellent oral health and provides the satisfaction of fresh, clean teeth.
  </p>
</div>

<div
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "60px 20px",
  }}
>
  <div
    style={{
      display: "flex",
      gap: "50px",
      alignItems: "flex-start",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT TEXT */}
    <div style={{ flex: "1 1 500px" }}>
      <h2
        style={{
          fontSize: "30px",
          color: "#0b1c6d",
          fontWeight: "600",
          marginBottom: "20px",
        }}
      >
        What is Teeth Cleaning Process?
      </h2>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Do you desire a white, healthy smile? Teeth cleaning prevents future
        issues and is crucial for dental health. Home dental hygiene and regular
        dentist visits maintain a happy, healthy smile. Clean teeth after a
        dental visit in Pakistan provide unmatched satisfaction. It supports
        good oral health!
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Cleaning removes plaque and tartar to prevent cavities and gum disease.
        Good oral hygiene prevents costly problems. Home care and dental visits
        keep teeth clean.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Our dentists train patients to maintain healthy teeth and gums. During
        teeth cleaning in Lahore, dentists assess your oral condition and check
        for disease. Plaque and bacteria are removed, leaving teeth smooth and
        clean.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8", marginBottom: "15px" }}>
        Dentists provide home care guidance, including flossing and brushing
        techniques.
      </p>

      <p style={{ color: "#555", lineHeight: "1.8" }}>
        Deep cleaning, called scaling and root planning, treats severe gum
        disease. It removes plaque and tartar from tooth surfaces and roots.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: "1 1 500px" }}>
      <img
        src={eighteen}
        alt="Teeth Cleaning"
        style={{
          width: "620px",
          height: "480px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>
  </div>
</div>

    <div
  style={{
    width: "100%",
    padding: "80px 40px",
    backgroundImage: `url(${nineteen})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
  {/* OVERLAY */}
  <div
    style={{
      background: "rgba(0,0,0,0.55)",
      padding: "60px 40px",
      borderRadius: "30px",
      maxWidth: "1400px",
      margin: "auto",
    }}
  >
    {/* CARDS ROW */}
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {/* CARD 1 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Appointments:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Routine cleaning every six months.</li>
          <li>Scaling may require two visits.</li>
          <li>Follow-up sessions may be needed.</li>
        </ul>
      </div>

      {/* CARD 2 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Before Your Appointment:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>No special preparation required.</li>
          <li>Brush and floss normally.</li>
        </ul>
      </div>

      {/* CARD 3 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          How Long it Takes:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Hygiene treatments: 30–60 minutes.</li>
          <li>Consultations: ~60 minutes.</li>
        </ul>
      </div>
    </div>

    {/* SECOND ROW */}
    <div
      style={{
        display: "flex",
        gap: "30px",
        justifyContent: "space-between",
        flexWrap: "wrap",
        marginTop: "40px",
      }}
    >
      {/* CARD 4 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          After Your Appointment:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>You can resume normal activities.</li>
        </ul>
      </div>

      {/* CARD 5 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          You May Be Asked About:
        </h3>
        <ul style={{ lineHeight: "1.8", paddingLeft: "18px" }}>
          <li>Dental & medical history.</li>
          <li>Daily oral care routine.</li>
        </ul>
      </div>

      {/* CARD 6 */}
      <div
        style={{
          flex: "1",
          minWidth: "320px",
          background: "rgba(255,255,255,0.12)",
          borderRadius: "20px",
          padding: "30px",
          color: "#fff",
          backdropFilter: "blur(6px)",
        }}
      >
        <h3 style={{ color: "#3fe0d0", marginBottom: "15px" }}>
          Quick Tips:
        </h3>
        <p style={{ lineHeight: "1.8" }}>
          Building good dental habits takes time. Place reminders near your
          mirror and follow your dentist’s advice.
        </p>
      </div>
    </div>
  </div>
</div>

<div style={{ padding: "60px 40px" }}>
  {/* TITLE */}
  <div
    style={{
      textAlign: "center",
      fontSize: "28px",
      fontWeight: "600",
      marginBottom: "40px",
      color: "#0B1C6D",
    }}
  >
    FAQs
  </div>

  {/* FAQ GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {/* ROW 1 */}
    <div
      style={{
        background: "#67BDB8",
        padding: "18px 22px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "16px",
        cursor: "pointer",
      }}
    >
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      01. How much does it cost to get your teeth cleaned?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      05. What is ultrasonic dental cleaning?
    </div>

    {/* ROW 2 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      02. Is professional teeth cleaning painful?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      06. When would you get ultrasonic dental cleaning?
    </div>

    {/* ROW 3 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      03. How often should I visit a dentist or hygienist?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      07. What is the best way to clean dentures?
    </div>

    {/* ROW 4 */}
    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      04. Why should you get dental teeth cleaning done?
    </div>

    <div style={{
      background: "#67BDB8",
      padding: "18px 22px",
      display: "flex",
      alignItems: "center",
      gap: "15px",
      fontSize: "16px",
      cursor: "pointer",
    }}>
      <div style={{ fontSize: "22px", fontWeight: "bold" }}>+</div>
      08. What is teeth cleaning price in Pakistan?
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