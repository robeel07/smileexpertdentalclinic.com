
import { Link } from "react-router-dom";
import fiftyfive from "../../Images/fiftyfive.jpg";
import fiftysix from "../../Images/fiftysix.jpg";
import fiftyseven from "../../Images/fiftyseven.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function AmalgamFilling() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${fiftyfive})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-32 font-bold">
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
        gap: "20px",
        padding: "40px 120px",
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
            paddingLeft: "38px",
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
        padding: "40px 120px",
      }}
    >
      <div
        style={{
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

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    About Us
  </Link>

  <Link to="/contact" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Contact Us
  </Link>

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Meet the Team
  </Link>

  <Link to="/teeth-whitening-before-and-after" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Before & After
  </Link>

  <Link to="/blog" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Blogs
  </Link>
</div>


    
    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Treatments</h3>

  <Link to="/treatment/exam" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Exam & X-Rays Check-Up
  </Link>

  <Link to="/emergency-dentist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Emergency
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Smile Makeover
  </Link>

  <Link to="/t/veneer" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Veneers
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Implants
  </Link>

  <Link to="t/canals" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Root Canal Treatment
  </Link>

  <Link to="/t/orthodontist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Orthodontic Braces
  </Link>

  
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>

  <Link to="/yellow-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Yellow Teeth
  </Link>

  <Link to="/teeth-cleaning" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Teeth Cleaning
  </Link>

  <Link to="/missing-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Missing Teeth
  </Link>

  <Link to="/broken-chipped-tooth" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Broken Chipped Tooth
  </Link>

  <Link to="/gum-disease" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Gum Disease
  </Link>

  <Link to="/crooked-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Crooked Teeth
  </Link>

  <Link to="/sore-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Sensitive & Sore Teeth
  </Link>

  <Link to="/dental-anxiety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Anxiety
  </Link>
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Patient Safety</h3>

  <Link to="/7x-safety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    7X SAFETY
  </Link>

  <Link to="/4-step-sterilization" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    4 Step Sterilization
  </Link>

  <Link to="/safety-equipment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Safety Equipment
  </Link>

  <Link to="/equipment-technology" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Equipment & Technology
  </Link>

  <Link to="/quality" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Quality
  </Link>
</div>


    <div className="min-w-[250px]">
              <h3 className="text-[20px] mb-[20px]">Get in touch</h3>
        
              <p className="my-2 flex gap-[10px] px-2">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px] px-2 ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-3">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold px-2"> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://facebook.com"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="#1877F2" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="#E4405F" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Subscribe to our YouTube channel"

        
                    >

        
                      <FaYoutube size={22} color="#FF0000" />
                  </a>
                </div>
              </div>
            </div>
    
  </div>
   <div className="w-full text-center justify-end mb-0 border-t border-gray-300 pt-4">
  <p className="text-sm text-gray-400">
    © SmileExpert
    <span className="mx-2 text-gray-600">|</span>
    Powered by{" "}
    <a
      href="https://verdant-soft.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 no-underline font-medium transition-colors duration-300 "
    >
      Verdant Soft
    </a>
  </p>
</div>

</div>



</>
  )
}