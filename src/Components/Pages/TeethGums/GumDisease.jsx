import React from "react";
import { Link } from "react-router-dom";
import twenty from "../../Images/twenty.jpg";
import twentyone from "../../Images/twentyone.jpg";
import twentytwo from "../../Images/twentytwo.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function GumDisease() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_60%]"
      style={{ backgroundImage: `url(${twenty})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Gum Disease Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/gumdisease"></Link>}



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
  Gum disease, caused by poor dental hygiene, is hazardous. An infection of the gums can lead to tooth-supporting bone damage. Gum disease is often painless; tooth loss may occur if left untreated. The two main types are gingivitis and periodontitis.
  Gingivitis, affecting up to 70% of Pakistanis, is the most common form. Around 30% of individuals over 30 have periodontitis. Early detection and treatment improve dental health. Regular dental checkups, brushing techniques twice daily, and flossing help prevent gum disease.
  </p>
</div>

<div
      style={{
        maxWidth: "1800px",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "80px 60px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                margin: " 0 auto",
              }}
            >
              Symptoms of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "0 auto",
              }}
            >
              Good oral health is crucial due to the often painless nature of gum
              disease. Regular dental checkups are necessary to ensure proper
              maintenance.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                margin: "auto",
              }}
            >
              Gum disease symptoms can be imperceptible. Some signs could be:
            </div>

            <ul
              style={{
                paddingLeft: "10px",
                margin: "auto",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <li>red, swollen or tender gums</li>
              <li>bleeding when you floss or brush</li>
              <li>loose teeth or separation between teeth</li>
              <li>continuous bad breath</li>
              <li>gums that pull away from teeth</li>
              <li>when you bite, the position of your teeth changes</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease can be asymptomatic for some individuals. Regular dental
              checkups serve as the primary defence. Early detection during
              hygienist visits ensures optimal oral health.
            </div>
          </div>

<div style={{ flex: 1 }}>
  <div
    style={{
      height: "500px",          // 👈 FIXED HEIGHT (IMPORTANT)
      overflow: "hidden",       // 👈 CLIP IMAGE
      borderRadius: "20px",
      position: "relative",
    }}
  >
    <img
      src={twentyone}
      alt="Gum Disease Checkup"
      style={{
        width: "180%",
        position: "absolute",
        top: "-60px",           // 👈 IMAGE MOVES UP HERE
        right: "0",
      }}
    />
  </div>
</div>


        </div>
      </div>
    </div>

     <div
      style={{
        width: "100%",
        background: "#F4F8FB",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "180%",
          padding: "80px 60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "70px",
          }}
        >
          {/* LEFT IMAGE */}
          <div style={{ flex: 1 }}>
            <img
              src={twentytwo}
              alt="Causes of Gum Disease"
              style={{
                width: "120%",
                height: "500px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                marginBottom: "20px",
              }}
            >
              Causes of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              Oral bacterial overgrowth leading to plaque buildup is the primary
              cause of gum disease. Poor oral health is a significant contributing
              factor.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              There are a few more risk factors for gum disease, though, including:
            </div>

            <ul
              style={{
                paddingLeft: "20px",
                marginBottom: "15px",
                fontSize: "15px",
                lineHeight: "1.8",
              }}
            >
              <li>Smoking</li>
              <li>Diabetes</li>
              <li>Pregnancy or hormonal changes</li>
              <li>Medication</li>
              <li>Genetics</li>
              <li>Other health problems</li>
              <li>Stress</li>
              <li>Poor nutrition</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease is common but treatable. Regular dentist and hygienist
              visits are essential for maintaining dental health.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", background: "#fff" }}>
  {/* WHAT NOW */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 60px 40px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "15px",
      }}
    >
      What now
    </div>

    <div
      style={{
        fontSize: "15px",
        lineHeight: "1.8",
        maxWidth: "900px",
        margin: "0 auto 30px",
      }}
    >
      Explore available treatments to gain further insight. For personalised
      advice regarding your symptoms, we recommend scheduling a dentist
      consultation. Contact us via phone or our online scheduling system to book
      an{" "}
      <span style={{ color: "#00AEEF", fontWeight: "500" }}>appointment</span>.
    </div>

    <div
      style={{
        display: "inline-block",
        background: "#25CFE5",
        color: "#fff",
        padding: "14px 32px",
        borderRadius: "30px",
        fontSize: "15px",
        fontWeight: "500",
        cursor: "pointer",
      }}
    >
      Book an Appointment
    </div>
  </div>

  {/* FAQs */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 60px 80px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "40px",
      }}
    >
      FAQs
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;01. How much does it cost to treat gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;05. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;02. Can gum disease be prevented?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;06. What happens if you have gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;03. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;07. How do you get rid of gum disease at home?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;04. Can gum disease be cured?
      </div>
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