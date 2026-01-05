import React from "react";
import { Link } from "react-router-dom";
import five from "../../Images/five.png";
import six from "../../Images/six.png";
import seven from "../../Images/seven.jpg";
import eight from "../../Images/eight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function BrokenChippedTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_40%]"
      style={{ backgroundImage: `url(${five})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Broken Tooth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>
  
      {<Link to="/TeethGums/broken-chipped-tooth"></Link>}


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
    A broken tooth is stressful and uncomfortable, but you don’t have to face it alone. Our professional dentists provide effective treatment for your teeth. Our specialists help you with broken teeth treatment, giving procedures that can rebuild your smile and eliminate pain. Whether you have a minor chip or crack, a deep chip or any form of sensitivity, we employ modern technology to get the best service done in the shortest time possible.
Call <b>SmileOn</b> now for professional dental services, including cracked tooth syndrome treatment, broken tooth pain treatment and more. Keep smiling because your smile is worthy of the best.
  </p>
</div>

<div
  style={{
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: "60px 40px",
    gap: "40px",
  }}
>
  {/* LEFT SECTION */}
  <div style={{ flex: 1, maxWidth: "50%" }}>
    <h2
      style={{
        fontSize: "36px",
        fontWeight: "700",
        color: "#10254fff",
        marginBottom: "20px",
      }}
    >
      Causes of a Broken Tooth
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      A crack within a tooth can occur for many causes, either through an
      accident or due to our daily practices. Here are some common reasons
      for a broken tooth:
    </p>

    {/* BULLET POINTS */}
    <ul style={{ fontSize: "18px", lineHeight: "1.8", color: "#222" }}>
      <li>Chewing hard foods</li>
      <li>Accidents or falls</li>
      <li>Grinding teeth at night</li>
      <li>Tooth decay</li>
      <li>Weak or old fillings</li>
      <li>Accident (sports-related, falls)</li>
      <li>Biting nails or ice</li>
    </ul>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, maxWidth: "50%" }}>
    <img
      src={six}
      alt="Dentist treating patient"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    backgroundColor: "#eef5fb",
    padding: "80px 40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "50px",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={seven}
      alt="Dental check"
      style={{
        width: "100%",
        height: "auto",
        borderRadius: "30px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT TEXT */}
  <div style={{ flex: 1, paddingRight: "20px" }}>
    <h2
      style={{
        fontSize: "36px",
        fontWeight: "700",
        color: "#0c1b3a",
        marginBottom: "20px",
      }}
    >
      Symptoms of Chipped or Broken Teeth
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
        maxWidth: "650px",
      }}
    >
      It is thus helpful to understand some of the symptoms you are likely to
      experience with a broken tooth so that you can seek treatment immediately.
      Here are the common signs to watch for:
    </p>

    <ul
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#222",
        paddingLeft: "20px",
      }}
    >
      <li>Pain when chewing or biting</li>
      <li>Sensitivity to hot, cold, or sweet food</li>
      <li>Inflammation or pain in the region of the tooth</li>
      <li>Visible cracks or chips</li>
      <li>Continuous pain or stinging pain</li>
    </ul>
  </div>
</div>

 <div
      style={{
        padding: "60px 40px",
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
          Broken Tooth Repair Options
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#333",
            marginBottom: "20px",
            maxWidth: "750px",
          }}
        >
          At SmileOn Dental Clinic, we provide various treatments for broken,
          damaged or cracked teeth. Whether you want broken tooth pain treatment
          or need a smile makeover, our experts will recommend the best option
          based on your situation. <br />
          Our treatment options include:
        </p>

        <ul
          style={{
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#222",
            paddingLeft: "20px",
            maxWidth: "750px",
          }}
        >
          <li>
            <strong>Dental Fillings</strong> — this procedure is best suited for
            minor chipped or cracked sections of a tooth; fillings will restore
            the strength of the offending tooth.
          </li>

          <li>
            <strong>Dental Bonding</strong> — A speedy and cheap chipped tooth
            treatment; bonding utilizes resin material named dental bonding
            material.
          </li>

          <li>
            <strong>Dental Crowns</strong> — When cracks or fractures extend
            deep, crowns encircle the whole tooth. It provides the support it
            needs as well as produces the look.
          </li>

          <li>
            <strong>Veneers</strong> — Designed for broken front tooth repair,
            veneers enhance the tooth’s appearance and strength.
          </li>

          <li>
            <strong>Root Canal Treatment</strong> — For a case where decay goes
            deeper and touches the pulp, a root canal is required to relieve
            pain and avoid worsening.
          </li>

          <li>
            <strong>Tooth Extraction</strong> — In cases where the tooth cannot
            be saved, it is removed. The lost tooth is later restored with
            implants or a bridge.
          </li>
        </ul>
      </div>

      {/* RIGHT IMAGE */}
      <div style={{ flex: 1 }}>
        <img
          src={eight}
          alt="Repair Options"
          style={{
            width: "100%",
            height: "auto",
            borderRadius: "30px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

    <div style={{ width: "100%", textAlign: "center", paddingTop: "40px" }}>
      {/* Heading */}
      <h2
        style={{
          fontSize: "36px",
          fontWeight: "700",
          color: "#0c1b3a",
          marginBottom: "10px",
        }}
      >
        What Next
      </h2>

      {/* Description */}
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.7",
          maxWidth: "900px",
          margin: "0 auto",
          color: "#333",
        }}
      >
        Expert staff enables you to get the most appropriate cracked tooth
        treatment for a long time. Find yourself another day without fixing your
        smile? Make an appointment today!
      </p>

      {/* Button */}
      <button
        style={{
          marginTop: "25px",
          padding: "15px 40px",
          borderRadius: "40px",
          border: "2px solid #00aab5",
          background: "#00c8d2",
          color: "#fff",
          fontSize: "18px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Book an Appointment
      </button>

      {/* FAQs Heading */}
      <h2
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: "#0c1b3a",
          marginTop: "50px",
          marginBottom: "30px",
        }}
      >
        FAQs
      </h2>

      {/* FAQ GRID */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px",
          padding: "0 150px 60px",
        }}
      >
        {[
          "01. How to treat a cracked tooth?",
          "02. What happens if one of the front teeth is chipped?",
          "03. Can you replace tooth enamel?",
          "04. Can broken or chipped teeth be prevented?",
          "05. What is the price to get a chipped tooth repaired?",
          "06. What is the treatment for a fractured tooth?",
          "07. What are the measures you take when you have a broken tooth?",
          "08. Are there any home remedies for a broken tooth?",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#57b7b7",
              padding: "20px",
              display: "flex",
              alignItems: "center",
              gap: "15px",
              borderRadius: "3px",
              cursor: "pointer",
            }}
          >
            {/* Plus icon */}
            <span
              style={{
                fontSize: "22px",
                fontWeight: "900",
                marginTop: "-3px",
              }}
            >
              +
            </span>

            {/* Question */}
            <span style={{ fontSize: "18px", color: "#0c1b3a" }}>{item}</span>
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