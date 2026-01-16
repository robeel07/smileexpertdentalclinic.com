import React from 'react'
import { Link } from "react-router-dom";
import team from "../Images/team.jpg";
import team1 from "../Images/team1.jpg";
import team2 from "../Images/team2.jpg";
import team3 from "../Images/team3.jpg";
import team4 from "../Images/team4.jpg";




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function OurValues() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_70%]"
      style={{ backgroundImage: `url(${team})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Meet Our Doctors
    </h1>
  </div>
</div>
    </div>


    <div className="max-w-7xl align-center mx-auto py-16 overflow-hidden bg-white">
  {/* Headings */}
  <div className="text-center mb-10">
    <p className="text-teal-400 text-xl font-bold">Meet Our Team</p>
    <h2 className="text-4xl font-bold text-blue-900 mt-2">
      Meet Our Doctors
    </h2>
  </div>

  {/* Slider */}
  <div className="relative max-w-7xl mx-auto">
    {/* Cards Wrapper */}
    <div className="flex gap-6 animate-slide">
      
      {/* Card 1 */}
      <div className="min-w-[280px] bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl p-4 text-center shadow-xl">
        <div className="  rounded-xl p-3">
          <img src={team1} className="w-[200px] h-[250px] rounded-xl mx-auto" />
        </div>
        <h3 className="text-white font-semibold mt-4">Dr. Aneel Abrar</h3>
        <p className="text-sm text-blue-100">EX House surgeon</p>
        <p className="text-sm text-blue-100 mt-1">Experience : 10 Years</p>
      </div>

      {/* Card 2 */}
      <div className="min-w-[280px] bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl p-4 text-center shadow-xl">
        <div className=" rounded-xl p-3">
          <img src={team2} className="w-[200px] h-[250px] rounded-xl mx-auto" />
        </div>
        <h3 className="text-white font-semibold mt-4">Dr. Usman Rashid</h3>
        <p className="text-sm text-blue-100">Consultant Periodontist</p>
        <p className="text-sm text-blue-100 mt-1">Experience : 13 Years</p>
      </div>

      {/* Card 3 */}
      <div className="min-w-[280px] bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl p-4 text-center shadow-xl">
        <div className=" rounded-xl p-3">
          <img src={team3} className="w-[200px] h-[250px] rounded-xl mx-auto" />
        </div>
        <h3 className="text-white font-semibold mt-4">Dr. Muhammad </h3>
        <p className="text-sm text-blue-100">Consultant Endodontist</p>
        <p className="text-sm text-blue-100 mt-1">Experience : 16 Years</p>
      </div>

      {/* Card 4 */}
      <div className="min-w-[280px] bg-gradient-to-b from-blue-700 to-blue-900 rounded-2xl p-4 text-center shadow-xl">
        <div className=" rounded-xl p-3">
          <img src={team4} className="w-[200px] h-[250px] rounded-xl mx-auto" />
        </div>
        <h3 className="text-white font-semibold mt-4">Dr. Ayesha khalid</h3>
        <p className="text-sm text-blue-100">Restorative Dentist</p>
        <p className="text-sm text-blue-100 mt-1">Experience : 8 Years</p>
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