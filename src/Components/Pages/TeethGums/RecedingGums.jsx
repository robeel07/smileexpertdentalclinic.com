import React from "react";
import { Link } from "react-router-dom";
import forteen from "../../Images/forteen.jpg";
import fifteen from "../../Images/fifteen.jpg";
import sixteen from "../../Images/sixteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function RecedingGumms() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${forteen})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Receding Gums Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

      {<Link to="/TeethGums/recedinggums"></Link>}


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
    Do you have a receding gums problem? Not to worry. Gum recession is one common dental problem that can be detected and prevented. The process of gums receding doesn’t happen fast enough that most people even realize they have the condition. Also, it can be a very common cause of tooth sensitivity.

Receding gums are risky to health because they expose the roots of the teeth and expose them to decay, infections, tooth loss or even the appearance of <span style={{ color: "#00a6ff" }}>yellow teeth</span>. In the end, everybody is recommended to see a dentist immediately for an oral health problem. If you are experiencing gum problems you need to call up the dentist and book an appointment to get the best treatment for receding gums today!
  </p>
</div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        gap: "70px",
        padding: "70px 80px",
        maxWidth: "1400px",
        margin: "auto",
        flexWrap: "wrap",
        alignItems: "flex-start",
      }}
    >
      {/* LEFT TEXT */}
      <div
        style={{
          flex: "1",
          minWidth: "350px",
        }}
      >
        <h2
          style={{
            color: "#0b1fa6",
            fontSize: "32px",
            marginBottom: "20px",
          }}
        >
          Symptoms of Receding Gums
        </h2>

        <p style={{ lineHeight: "1.8", marginBottom: "18px" }}>
          Though they may not feel pain at first. People with receding gums may
          find themselves to be more sensitive to tooth pain and may notice their
          teeth appear to be extended, farther from the root. Other common
          symptoms include:
        </p>

        <ul style={{ paddingLeft: "22px", lineHeight: "1.8" }}>
          <li>Fear of tooth loss</li>
          <li>
            Causes of being sensitive to hot or cold foods because of exposed
            tooth roots
          </li>
          <li>
            Concern of how the teeth should look as they agree, and where they
            should be spaced
          </li>
          <li>Bad breath</li>
          <li>Bleeding gums</li>
        </ul>

        <p style={{ marginTop: "18px", lineHeight: "1.8" }}>
          Regular dental check-ups and basic oral hygiene practices can prevent
          gum disease and{" "}
          <span style={{ color: "#00a6ff" }}>receding gums</span>. If you have gum
          problems, it is advisable to visit a dentist promptly.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div
        style={{
          flex: "1",
          minWidth: "500px",
          height: "400px",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={fifteen}
          alt="Dental checkup"
          style={{
            width: "100%",
            maxWidth: "620px",
            marginLeft: "40px",
            borderRadius: "26px",
            objectFit: "cover",
          }}
        />
      </div>
    </div>

     
    <div
      style={{
        background: "#f3f8fc",
        padding: "80px 70px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "70px",
          maxWidth: "1400px",
          margin: "auto",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <img
            src={sixteen}
            alt="Dental treatment"
            style={{
              width: "100%",
              maxWidth: "620px",
              borderRadius: "28px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT TEXT */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h2
            style={{
              color: "#0b1fa6",
              fontSize: "32px",
              marginBottom: "18px",
            }}
          >
            Causes of Receding Gums
          </h2>

          <p style={{ lineHeight: "1.8", marginBottom: "18px" }}>
            Gum recession can be caused by various factors including incorrect
            tooth cleaning methods. There is a common cause of gum disease
            called periodontal disease. You must look out for the receding gums
            treatment otherwise it will damage gum tissue and the supporting
            bone structure of your teeth. Other causes include:
          </p>

          <ul style={{ paddingLeft: "22px", lineHeight: "1.8" }}>
            <li>Your genes</li>
            <li>Brushing too hard or incorrectly</li>
            <li>Hormonal changes</li>
            <li>Not visiting your dentist or hygienist frequently</li>
            <li>Smoking</li>
            <li>Grinding or clenching your teeth</li>
            <li>Crooked teeth</li>
          </ul>
        </div>
      </div>
    </div>

     <div
      style={{
        padding: "80px 90px",
        maxWidth: "1400px",
        margin: "auto",
      }}
    >
      {/* TOP HEADING */}
      <h2
        style={{
          color: "#0b1fa6",
          fontSize: "34px",
          marginBottom: "18px",
        }}
      >
        Treatments to Reverse Gum Diseases
      </h2>

      <p style={{ lineHeight: "1.8", maxWidth: "1100px" }}>
        This is what leads to changes in the texture and color of gums; they
        become more sensitive and may start bleeding, and so is the case with
        tooth loss due to loss of gum tissue. However, if you are suffering from
        this, there is no way you will be able to regain more of those gums
        unless you pursue treatment for receding gums.
      </p>

      {/* TWO COLUMNS */}
      <div
        style={{
          display: "flex",
          gap: "80px",
          marginTop: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h3
            style={{
              color: "#0b1fa6",
              fontSize: "26px",
              marginBottom: "15px",
            }}
          >
            Treatments for Early-Stage Receding Gums:
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            In some instances, at the beginning of the treatment, you may be
            prescribed non-surgical therapy. These include:
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Deep Cleaning:</strong> These procedures are done to reach
            subgingival plaque and calculi and will eliminate inflammation and
            cease further gingival recession.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Antibiotics:</strong> At times, your dentist may put you on
            antibiotics that would eradicate the bacteria and enable the
            controlling of gum disease.
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ flex: "1", minWidth: "350px" }}>
          <h3
            style={{
              color: "#0b1fa6",
              fontSize: "26px",
              marginBottom: "15px",
            }}
          >
            Treatments for Advanced Gum Recession:
          </h3>

          <p style={{ lineHeight: "1.8" }}>
            In cases where the gum recession is slightly worse, you may require
            receding gum surgery. Common surgical options include:
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Gum Grafting:</strong> The exposed tooth roots are covered
            with tissue imported from another part of the mouth, or donor site.
          </p>

          <p style={{ lineHeight: "1.8" }}>
            <strong>Pinhole Surgical Technique:</strong> A procedure where
            stripped gum tissue is rolled back into position over an area of
            recession in a surgical way.
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div style={{ marginTop: "70px", maxWidth: "1100px" }}>
        <h3
          style={{
            color: "#0b1fa6",
            fontSize: "26px",
            marginBottom: "15px",
          }}
        >
          Receding Gums and Dentures
        </h3>

        <p style={{ lineHeight: "1.8" }}>
          Ill-fitting dentures can also cause gum recession. It has to be a
          good fit since it is difficult to correct ill-fitted dentures without
          making the problems with the gums worse. But regular visits are just
          as important as the other adjustments you need to ensure the life of
          your dentures.
        </p>

        <p style={{ lineHeight: "1.8" }}>
          No matter whether you use non-surgical methods or receding gum surgery
          if you can stop your gum disease before it gets too out of hand, it
          will remain so.
        </p>
      </div>
    </div>

    <div style={{ padding: "80px 60px" }}>
  {/* WHAT NEXT */}
  <h2 style={{ textAlign: "center", color: "#0b1fa6", fontSize: "32px" }}>
    What Next
  </h2>

  <p
    style={{
      textAlign: "center",
      maxWidth: "900px",
      margin: "15px auto 30px",
      lineHeight: "1.7",
    }}
  >
    Hop on our website and explore more from simple treatment to receding gum
    surgery. Plan your appointment and start treating your receding gums the
    way they deserve.
  </p>

  <div style={{ textAlign: "center", marginBottom: "70px" }}>
    <button
      style={{
        background: "#28cfe8",
        border: "none",
        padding: "14px 34px",
        borderRadius: "30px",
        color: "#fff",
        cursor: "pointer",
        fontSize: "15px",
      }}
    >
      Book an Appointment
    </button>
  </div>

  {/* FAQs */}
  <h2 style={{ textAlign: "center", color: "#0b1fa6", fontSize: "30px" }}>
    FAQs
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      margin: "40px auto 0",
    }}
  >
    {[
      "01. What is the cost of receding gums treatment?",
      "02. Why do gums recede?",
      "03. What happens when your gums recede?",
      "04. What to do if my gums are receding?",
      "05. How do you stop receding gums?",
      "06. How are receding gums treated?",
      "07. How do I reverse receding gums naturally?",
      "08. Can receding gums grow back?",
      "09. Can receding gums be repaired without surgery?",
      "10. Is there any treatment for receding gums?",
    ].map((text, i) => (
      <div
        key={i}
        style={{
          background: "#6bbfbb",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
          cursor: "pointer",
          transition: "0.3s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#57b2ad")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#6bbfbb")}
      >
        <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
        <span style={{ fontSize: "15px" }}>{text}</span>
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