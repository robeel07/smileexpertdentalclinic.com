import React from "react";
import { Link } from "react-router-dom";
import sixtytwo from "../../Images/sixtytwo.jpg";
import sixtythree from "../../Images/sixtythree.jpg";
import sixtyfour from "../../Images/sixtyfour.jpg";
import sixtyfive from "../../Images/sixtyfive.jpg";
import sixtysix from "../../Images/sixtysix.jpg";
import sixtyseven from "../../Images/sixtyseven.jpg";
import { PiToothFill } from "react-icons/pi";
import { RiToothFill } from "react-icons/ri";
import { LiaTeethSolid } from "react-icons/lia";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function MissingTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${sixtytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Missing Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CosmeticImprovement/missingteeth"></Link>}


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
Missing teeth can have a negative impact on your smile and self-confidence. Fortunately, there are solutions available. Tooth replacement can improve your chewing ability,facial aesthetics and speech. <span style={{color :"#0aa6ff", fontWeight: "700" }}>Dental implants</span>, mini implants, <span style={{color :"#0aa6ff", fontWeight: "700" }}>fixed bridges</span>, and removable or implant support <span style={{color :"#0aa6ff", fontWeight: "700" }}>dentures</span> are among the treatment options. Consult with your dentist to explore the available choices.
  </p>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 120px",
    boxSizing: "border-box",
  }}
>
  {/* TOP SECTION */}
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: "1 1 480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtythree}
        alt="Dental checkup"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: "1 1 500px",
        maxWidth: "620px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "16px",
        }}
      >
        Causes of Missing Teeth
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "14px",
        }}
      >
        There are multiple causes for missing teeth, some major ones are:
      </p>

      <ul
        style={{
          paddingLeft: "50px",
          marginBottom: "14px",
          listStyleType: "disc",
          lineHeight: "1.8",
          fontSize: "16px",
          color: "#000",
        }}
      >
        <li>Tooth decay and cavities</li>
        <li>Gum diseases</li>
        <li>Injury or accident</li>
        <li>Age factor</li>
        <li>Poor oral hygiene</li>
      </ul>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        Apart from these, there are genetic causes like hypodontia. In this, a
        person has one or more missing teeth at birth. We offer effective
        hypodontia treatment options.
      </p>
    </div>
  </div>

  {/* BOTTOM HEADING */}
  <div style={{ marginTop: "80px", textAlign: "center" }}>
    <h2
      style={{
        fontSize: "32px",
        color: "#0a2db3",
        marginBottom: "12px",
      }}
    >
      Missing Teeth Solutions at SmileOn
    </h2>

    <p
      style={{
        fontSize: "16px",
        color: "#000",
        maxWidth: "700px",
        margin: "0 auto",
        lineHeight: "1.7",
      }}
    >
      We provide various missing teeth treatment options that restore both
      aesthetics and functionality.
    </p>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 150px",
    boxSizing: "border-box",
    backgroundColor: "#f4f9fd",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: "1 1 520px",
        maxWidth: "600px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "20px",
        }}
      >
        Dental Implants Surgery
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        For individuals with one or multiple missing teeth in different areas
        of their mouth, a dental implant offers a potential solution. It involves
        a surgical procedure where an implant or screw is placed in the jaw,
        serving as a permanent foundation for a missing tooth.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        The implant is topped with a{" "}
        <span style={{ fontWeight: "600", color: "#0aa6ff" }}>
          crown
        </span>{" "}
        that closely resembles a natural tooth and can last for many years.
        Importantly, neighboring teeth remain unaffected by the implant.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: "1 1 480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyfour}
        alt="Dental implant illustration"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 130px",
    backgroundColor: "#f4f9fd",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: " 520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyfive}
        alt="Implant supported dentures illustration"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: " 420px",
        maxWidth: "600px",
        marginRight: "50px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "20px",
        }}
      >
        Implant Supported Dentures
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "16px",
        }}
      >
        Unlike conventional dentures that sit on the gums, implant supported
        dentures are attached to the implants placed in the jaw.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        This treatment is suitable when there are no teeth present in the jaw
        but there is sufficient bone to support the implants.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 150px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: "520px",
        maxWidth: "620px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "15px",
        }}
      >
        Fixed Bridge
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        A fixed bridge might work for you if you have a single missing tooth or
        more than one missing tooth in the same area{" "}
        <span style={{ color: "#0aa6ff", fontWeight: "500" }}>bridge</span>{" "}
        might work for you. As the name suggests, this solution bridges a gap
        from a missing tooth. A dental bridge consists of{" "}
        <strong>abutments</strong> (natural tooth serving as a pillar to support)
        and <strong>pontic</strong> (artificial teeth that will “bridge the gap”
        in your smile).
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
        }}
      >
        The artificial tooth is supported by adjacent natural teeth and bonded
        to them with dental cement. A dental bridge closely resembles and serves
        almost the same purpose as natural teeth.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: " 520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtysix}
        alt="Fixed dental bridge illustration"
        style={{
          width: "120%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 120px",
    backgroundColor: "#f3f8fd",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: "520px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={sixtyseven}
        alt="Dental consultation"
        style={{
          width: "100%",
          maxWidth: "620px",
          height: "400px",
          borderRadius: "24px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: " 520px",
        maxWidth: "650px",
        marginTop: "35px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a2db3",
          marginBottom: "10px",
        }}
      >
        Get Prepared For Treatment
      </h2>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "8px",
        }}
      >
        When you schedule an appointment at SmileOn to address a missing tooth
        or teeth, after consultation you will be provided with all the required
        information and options that will be suitable according to your case.
        Generally your dentist will ask you about your medical history and will
        then thoroughly examine your mouth, teeth, gums, jaw, tongue, throat,
        sinuses, ears, nose and neck. You may also need an x-ray, depending on
        your situation.
      </p>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
          marginBottom: "10px",
        }}
      >
        Your dentist may ask you some questions about your missing teeth
        treatment such as:
      </p>

      <ul
        style={{
          paddingLeft: "40px",
          marginBottom: "16px",
          color: "#000",
          fontSize: "16px",
          listStyleType: "disc",
          lineHeight: "1.5",
        }}
      >
        <li>How long has it been like this?</li>
        <li>Are you experiencing any pain?</li>
        <li>Does it affect how you eat or drink?</li>
      </ul>

      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "#000",
        }}
      >
        Prepare your answers to these questions prior to your appointment to
        expedite the diagnosis.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 40px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
    textAlign: "center",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      fontSize: "34px",
      color: "#0a2db3",
      marginBottom: "14px",
    }}
  >
    What Next
  </h2>

  {/* DESCRIPTION */}
  <p
    style={{
      maxWidth: "1300px",
      margin: "0 auto 50px",
      fontSize: "16px",
      lineHeight: "1.7",
      color: "#000",
    }}
  >
    Explore treatment options by reviewing potential procedures. We suggest
    scheduling a consultation with a dentist for personalized advice regarding
    your symptoms.{" "}
    <span style={{ color: "#00a6ff", cursor: "pointer" }}>Book online</span> or
    call <strong>0333-8037161</strong> for an appointment.
  </p>

  {/* CARDS */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "30px",
    flexWrap: "wrap",
    

  }}
>
  {[
    { title: "Bridges", icon: <RiToothFill /> },
    { title: "Dentures", icon: <LiaTeethSolid /> },
    { title: "Dental Implants", icon: <PiToothFill /> },
    { title: "Crowns", icon: <RiToothFill /> },
  ].map(({ title, icon }, index) => (
    <div
      key={index}
      style={{
        width: "260px",
        height: "150px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "14px",
      }}
    >
      {/* ICON */}
      <div style={{ fontSize: "42px", color: "#38bdf8" }}>
        {icon}
      </div>

      {/* TITLE */}
      <h4
        style={{
          fontSize: "18px",
          color: "#0a2db3",
          margin: 0,
        }}
      >
        {title}
      </h4>
    </div>
  ))}
</div>
</div>

<div
  style={{
    padding: "80px 40px",
    backgroundColor: "#fff",
  }}
>
  {/* TITLE */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "36px",
      color: "#0a2db3",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px 30px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    {[
      "01. How to fix missing teeth without implants?",
      "02. What is the best way to replace missing teeth?",
      "03. How much will it cost to replace a missing tooth?",
      "04. Does it matter if I have missing teeth?",
      "05. Why is replacement of missing teeth important?",
      "06. I’ve had an accident and lost a tooth, what should I do?",
      "07. I have loose teeth, what should I do?",
      "08. My child has lost a baby tooth, what should I do?",
      "09. Can I prevent losing my teeth?",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#69bfbf",
          color: "#000",
          padding: "18px 24px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = "#58b0b0";
          e.currentTarget.style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = "#69bfbf";
          e.currentTarget.style.transform = "translateY(0)";
        }}
      >
        {/* PLUS */}
        <span
          style={{
            fontSize: "22px",
            fontWeight: "bold",
          }}
        >
          +
        </span>

        {/* TEXT */}
        <span
          style={{
            fontSize: "15px",
          }}
        >
          {item}
        </span>
      </div>
    ))}
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