
import { Link } from "react-router-dom";
import fiftyfive from "../../Images/fiftyfive.jpg";
import fiftysix from "../../Images/fiftysix.jpg";
import fiftyseven from "../../Images/fiftyseven.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function AmalgamFilling() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32 "
      style={{ backgroundImage: `url(${fiftyfive})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
       Amalgam Filling Replacement in Khanewal
    </h1>
</div>
    </div>



{/* TEXT BLOCK */}
<div className="max-w-7xl mx-auto my-10 p-5 text-[16px] leading-[1.8] text-gray-700 text-justify">
  <p>
    If you have concerns about the health impact of amalgam fillings, replacing
    them with{" "}
    <span className="text-blue-500">teeth filling</span> might be the optimal
    choice. The trend of replacing amalgam fillings has grown in popularity,
    often accompanied by a holistic approach. If you have conducted thorough
    research, possess specific health concerns, a relevant medical history, or
    personal convictions, you have the option to replace amalgam fillings.
  </p>
</div>

{/* WHY REPLACE AMALGAM */}
<div className="max-w-7xl mx-auto px-5 lg:px-28 py-10 flex flex-col lg:flex-row items-center gap-8">
  {/* LEFT CONTENT */}
  <div className="flex-1">
    <h2 className="text-[#0a1f44] text-2xl lg:text-[32px] font-bold mb-4">
      Why Would You Replace Amalgam Filling?
    </h2>

    <p className="text-gray-700 text-base leading-[1.7] mb-4">
      The decision to replace amalgam fillings with another dental material is a
      matter of personal choice. People have various reasons for opting to do so,
      often based on personal research, health concerns, prior medical
      conditions, and religious beliefs.
    </p>

    <ul className="list-disc pl-9 text-gray-700 text-base leading-[1.8] space-y-1">
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
  <div className="flex-1">
    <img
      src={fiftysix}
      alt="Dental Treatment"
      className="w-full h-full rounded-3xl object-cover"
    />
  </div>
</div>

{/* PROCESS SECTION */}
<div className="bg-[#f5f9fc] py-10 px-5 lg:px-28">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img
        src={fiftyseven}
        alt="Dental Process"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 min-w-[280px]">
      <h2 className="text-[#0a1f44] text-2xl lg:text-[30px] font-bold mb-4">
        The Process of Replacing Amalgam Filling:
      </h2>

      <p className="text-gray-700 text-base leading-[1.7] mb-3">
        After deciding to remove an amalgam filling, book a consultation
        appointment with your dentist to discuss the best long-term restorative
        option.
      </p>

      <p className="text-gray-700 text-base leading-[1.7] mb-3">
        During the amalgam removal process, your dentist will follow protocols to
        protect you from exposure to the old filling material.
      </p>

      <p className="text-gray-700 text-base leading-[1.7]">
        Once the amalgam is removed, your dentist will rebuild the tooth using
        appropriate non-metallic material.
      </p>
    </div>
  </div>
</div>

{/* FAQ SECTION */}
<div className="py-16 px-5">
  <h2 className="text-center text-[#0a1f44] text-2xl lg:text-[32px] font-bold mb-12">
    FAQs
  </h2>

  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-3">
    {/* LEFT COLUMN */}
    <div className="flex-1 min-w-[300px] space-y-3">
      {[
        "01. How much does it cost to replace amalgam fillings?",
        "02. Should all amalgam fillings be replaced?",
        "03. When can you eat after amalgam filling?",
        "04. How long does an amalgam filling last?",
        "05. Does it hurt to replace amalgam fillings?",
      ].map((text, i) => (
        <div
          key={i}
          className="bg-[#69bebc] px-3 py-3 flex items-center gap-3 cursor-pointer"
        >
          <span className="text-[22px] font-bold">+</span>
          <span className="text-[15px]">{text}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex-1  space-y-3">
      {[
        "06. Can fillings be prevented?",
        "07. Which is better amalgam or composite filling?",
        "08. What happens if you swallow amalgam filling?",
        "09. Which amalgam is used for dental filling?",
      ].map((text, i) => (
        <div
          key={i}
          className="bg-[#69bebc] px-3 py-3 flex items-center gap-3 cursor-pointer"
        >
          <span className="text-[22px] font-bold">+</span>
          <span className="text-[15px]">{text}</span>
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
        
              <p className="my-2 flex gap-[10px] ">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px]  ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-2">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold "> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[35px] h-[35px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Subscribe to our YouTube channel"

        
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








