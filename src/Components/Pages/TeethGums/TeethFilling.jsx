import React from "react";
import { Link } from "react-router-dom";
import fiftytwo from "../../Images/fiftytwo.jpg";
import fiftythree from "../../Images/fiftythree.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function TeethFilling() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${fiftytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Teeth Filling Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/teethfilling"></Link>}


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
Lost or loose fillings? No need to worry. While it can be bothersome, fixing fillings is straightforward and not considered a dental emergency. However, neglecting a tooth filling can potentially cause more significant oral health problems. Dental fillings are a common solution for tooth decay and can be made from various materials.

Common filling materials include amalgam, composite resin, and ceramic. Amalgam, a silver-colored material, has been used for many years, while composite resin and ceramic offer a more aesthetically pleasing tooth-colored option. The choice of material depends on factors such as cost, location, and extent of decay, as well as patient preferences. Amalgam fillings are durable and long-lasting, while composite resin and ceramic provide a natural appearance. Consult with your dentist to determine the most suitable filling material for your specific requirements.
  </p>
</div>


<div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1c7d",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Symptoms of a Teeth Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            It may not always be visible when a filling is lost or falls out,
            especially if it is a little filling. You might encounter the
            following symptoms if you’ve lost a filling:
          </p>

          <ul
            style={{
              paddingLeft: "20px",
              marginLeft: "20px",
              listStyleType: "disc", 
            }}
          >
            <li style={{ marginBottom: "10px", color: "#000" }}>
              Pain in the tooth that has been filled
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              Sensitivity to hot or cold food
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              You may notice a gap or hole in your tooth
            </li>
            <li style={{ marginBottom: "10px", color: "#000" }}>
              You may feel a hard object in your mouth when you bite on hard food
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={fiftytwo}
            alt="Teeth Filling Treatment"
            style={{
              maxwidth: "620%",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "80px 60px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: 1 }}>
          <img
            src={fiftythree}
            alt="Causes of a Teeth Filling"
            style={{
              maxwidth: "620%",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1c7d",
              fontSize: "32px",
              fontWeight: "700",
              marginBottom: "20px",
            }}
          >
            Causes of a Teeth Filling:
          </h2>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Various factors can lead to the loss or dislodgement of fillings.
            Hard food or athletic injuries can cause fillings to fall out.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "20px",
            }}
          >
            Furthermore, decay near the filling or prolonged use can result in
            fillings coming loose.
          </p>

          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.7",
              margin: 0,
            }}
          >
            If you suspect a missing filling, it is crucial to promptly schedule
            a dental appointment.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        padding: "80px 60px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#0b1c7d",
          marginBottom: "50px",
        }}
      >
        FAQs
      </h2>

      {/* Grid */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
        }}
      >
        {/* LEFT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "01. What do you do when you lose a filling?",
            "02. How much does it cost to fix a lost filling?",
            "03. Why does my tooth filling hurt after months?",
            "04. How to relieve tooth pain after filling?",
            "05. Is a lost filling a dental emergency?",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#69bdbb",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                +
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            "06. How many times can a filling be replaced?",
            "07. What can you do at home when you lose a filling?",
            "08. How long does a filling last?",
            "09. How long after a filling can I drink?",
          ].map((text, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "#69bdbb",
                padding: "18px 22px",
                display: "flex",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  fontWeight: "700",
                  color: "#000",
                }}
              >
                +
              </span>
              <span
                style={{
                  fontSize: "15px",
                  color: "#000",
                }}
              >
                {text}
              </span>
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