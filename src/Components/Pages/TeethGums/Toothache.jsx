import React from "react";
import { Link } from "react-router-dom";
import nine from "../../Images/nine.png";
import ten from "../../Images/ten.jpg";
import eleven from "../../Images/eleven.jpg";
import twelve from "../../Images/twelve.jpg";
import thirteen from "../../Images/thirteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Toothache() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${nine})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
       Teeth Pain Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

      {<Link to="/TeethGums/toothache"></Link>}


    <div
      style={{
        padding: "40px 120px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      {/* LEFT TEXT SECTION */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          When to See a Dentist
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "15px",
            maxWidth: "750px",
          }}
        >
          If in doubt, check it out.
          <br />
          Book an appointment to see a dentist as soon as possible if:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            maxWidth: "750px",
            marginBottom: "25px",
          }}
        >
          <li>The pain lasts longer than a day or two</li>
          <li>The pain is severe or starts to become unbearable</li>
          <li>You have a fever, earache, or pain when you open your mouth wide</li>
        </ul>

        <h3
          style={{
            fontSize: "26px",
            color: "#0c1b3a",
            marginBottom: "12px",
            marginTop: "20px",
            fontWeight: "600",
          }}
        >
          Are you in tooth Pain?
        </h3>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "750px",
          }}
        >
          Call us if you’re experiencing pain and need emergency dental care.  
          We’ll get you in fast for an urgent appointment.
        </p>
      </div>

      {/* RIGHT IMAGE SECTION */}
      <div style={{ flex: 1 }}>
        <img
          src={ten}
          alt="Dentist Consultation"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div
      style={{
        backgroundColor: "#eef4ff",
        padding: "40px 120px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "50px",
      }}
    >
      {/* LEFT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src= {eleven}
          alt="Symptoms of Tooth Pain"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>

      {/* RIGHT TEXT */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          Symptoms of Tooth Pain
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "700px",
          }}
        >
          Toothache refers to any pain or distress experienced in or around a
          tooth. There are diverse forms of pain, making it challenging to
          convey your sensations to the dentist effectively. The discomfort can
          range from mild to severe, throbbing, sharp, or persistent.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "700px",
          }}
        >
          Sometimes, pressure on the tooth is the sole means to perceive the
          pain. Furthermore, your teeth may exhibit heightened sensitivity to
          extreme temperatures. Discomfort while chewing is also quite common.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "700px",
          }}
        >
          Additional indications may comprise migraines, elevated body
          temperatures, and gum inflammation near the tooth or within the jaw.
          Furthermore, gum or tooth bleeding may occur. In the case of an
          infection, unpleasant-tasting fluid might be discharged from the
          surrounding area of the tooth.
        </p>
      </div>
    </div>

     (
    <div
      style={{
        backgroundColor: "#eef4ff",
        padding: "40px 120px",
        borderRadius: "20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "60px",
      }}
    >
      {/* LEFT TEXT */}
      <div style={{ flex: 1 }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "700",
            color: "#0c1b3a",
            marginBottom: "20px",
          }}
        >
          Causes of Toothache
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "18px",
            maxWidth: "750px",
          }}
        >
          Dental and medical problems can also result in toothaches. Your teeth,
          gums, or jaw may be involved in dental pain reasons. The following are
          the most typical causes of toothaches that our dentists see daily:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            marginBottom: "18px",
            maxWidth: "750px",
          }}
        >
          <li>Dental cavities as a result of tooth decay</li>
          <li>
            <strong style={{ color: "#008cba" }}>A fractured or broken tooth</strong>
          </li>
          <li>An impacted tooth</li>
        </ul>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            maxWidth: "750px",
          }}
        >
          Occasionally, discomfort may stem from a broken filling, tooth
          sensitivity, or an abscess. Similarly, toothaches can be caused by
          gingivitis or gum disease, although some individuals may not experience
          pain. Toothaches can also be induced by other pain radiating to the
          jaw, known as referred pain. The temporomandibular joint (TMJ),
          commonly called the jaw joint, is one such location. Earaches, sinus
          infections, shingles, and, on rare occasions, heart conditions are
          additional medical conditions that can result in toothaches.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={twelve}
          alt="Causes of Toothache"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     
    <div
      style={{
        width: "100%",
        background: "#f0f7ff",
        padding: "60px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "85%",
          display: "flex",
          gap: "40px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE */}
        <img
          src={thirteen}
          alt="Dental Treatment"
          style={{
            width: "50%",
            borderRadius: "25px",
            objectFit: "cover",
            marginTop:"90px",
          }}
        />

        {/* RIGHT TEXT SECTION */}
        <div style={{ width: "50%" }}>
          {/* TITLE */}
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#012970",
              marginBottom: "20px",
            }}
          >
            Get Prepared
          </h1>

          {/* PARAGRAPH */}
          <p style={{ fontSize: "16px", lineHeight: "28px", color: "#333" }}>
            When you schedule a toothache appointment at one of our dental
            offices, you only want the pain to stop. It makes sense that way.
            Consider what your dentist will require to identify and treat your
            toothache in advance.
            <br />
            <br />
            Usually, your dentist will ask you about your medical history before
            performing a comprehensive oral, dental, jaw, tongue, throat, sinus,
            ear, nose, and neck examination. Depending on what your dentist
            thinks might be the reason for your toothache, you might also
            require an X-ray.
          </p>

          {/* BULLETS */}
          <ul
            style={{
              marginTop: "10px",
              marginBottom: "20px",
              paddingLeft: "20px",
              lineHeight: "28px",
            }}
          >
            <li>When did your toothache start?</li>
            <li>How severe is the pain?</li>
            <li>Where do you feel the pain?</li>
            <li>What makes it worse?</li>
            <li>What makes it better?</li>
          </ul>

          <p style={{ fontSize: "16px", lineHeight: "28px", color: "#333" }}>
            Before your appointment, consider your responses to these questions.
            Preparation can improve the diagnosis.
          </p>

          {/* RELATED TREATMENTS TITLE */}
          <h2
            style={{
              fontSize: "24px",
              color: "#012970",
              fontWeight: "700",
              marginTop: "30px",
              marginBottom: "15px",
            }}
          >
            Related Treatments:
          </h2>

          {/* RELATED LINKS */}
          <ul
            style={{
              marginTop: "0px",
              paddingLeft: "20px",
              lineHeight: "28px",
              fontSize: "16px",
            }}
          >
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Fillings
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Root canals
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                TMJ
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "#00aaff", fontWeight: "600" }}>
                Tooth extraction
              </a>
            </li>
            <li>Antibiotics and pain relief medication</li>
          </ul>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", marginTop: "80px" }}>
  {/* Heading */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "42px",
      color: "#0A0A5F",
      fontWeight: "700",
      marginBottom: "10px",
    }}
  >
    What Next
  </h2>

  {/* Subtext */}
  <p
    style={{
      textAlign: "center",
      fontSize: "18px",
      maxWidth: "900px",
      margin: "0 auto",
      color: "#333",
    }}
  >
    Explore possible treatments to gain further insight into the next steps.
    We recommend arranging a dental appointment for comprehensive guidance on your concerns.
  </p>

  {/* Button */}
  <div style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
    <button
      style={{
        backgroundColor: "#15c0cf",
        border: "none",
        padding: "14px 40px",
        borderRadius: "50px",
        fontSize: "18px",
        fontWeight: "600",
        color: "#fff",
        cursor: "pointer",
      }}
    >
      Book an Appointment
    </button>
  </div>

  {/* FAQs SECTION */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "40px",
      marginTop: "70px",
      color: "#0A0A5F",
      fontWeight: "700",
    }}
  >
    FAQs
  </h2>

  {/* FAQ Container */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      marginTop: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ width: "45%" }}>
      {[
        "01. How much does it cost to treat toothache?",
        "02. Why is toothache so bad?",
        "03. Why is toothache worse at night?",
        "04. What are the best painkillers for toothache?",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#5AB7B1",
            padding: "18px 20px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>＋</span>
          <span style={{ fontSize: "17px", fontWeight: "500" }}>{item}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ width: "45%" }}>
      {[
        "05. Help! It’s sore but I’m anxious about visiting the dentist!",
        "06. Can toothache be prevented?",
        "07. Can toothache go away on its own?",
        "08. How do you stop toothache at home?",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#5AB7B1",
            padding: "18px 20px",
            marginBottom: "15px",
            display: "flex",
            alignItems: "center",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          <span style={{ fontSize: "24px", marginRight: "12px" }}>＋</span>
          <span style={{ fontSize: "17px", fontWeight: "500" }}>{item}</span>
        </div>
      ))}
    </div>
  </div>
</div><br/><br/>

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