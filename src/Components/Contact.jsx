import React from "react";
import contact from "../Components/Images/contact.jpg";
import mail from "../Components/Images/mail.png";
import addres from "../Components/Images/addres.png";
import phone from "../Components/Images/phone.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function Contact() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_65%]"
      style={{ backgroundImage: `url(${contact})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Contact Us
    </h1>
  </div>
</div>
    </div>

    
    <div className="w-full bg-white py-20">
  {/* Heading */}
  <div className="max-w-6xl mx-auto text-center mb-12 px-4">
    <p className="text-teal-400 text-xl font-semibold tracking-widest mb-3">
      GET IN TOUCH
    </p>
    <h2 className="text-[34px] md:text-[42px] font-bold text-[#0A1B5C] leading-snug">
      We want to share our location <br />
      find us easily.
    </h2>
  </div>

  {/* Cards Container */}
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 shadow-xl rounded-xl overflow-hidden">

    {/* Address */}
    <div className="bg-white text-center px-6 py-12 border border-gray-500
 border-b md:border-b-0 md:border-r">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-lg bg-teal-50">
  <img
    src={addres}
    alt="address"
    className="w-12 h-12 object-contain"
  />
</div>
      <h3 className="text-xl font-bold text-[#0A1B5C] mb-4">
        Our Address
      </h3>
      <p className="text-gray-800 leading-relaxed text-md">
        Saddique Hospital Stadium Road,khanewal
      </p>
    </div>

    {/* Phone */}
    <div className="bg-white text-center px-10 py-12 border border-gray-500 md:border-b-0 md:border-r">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-lg bg-teal-50">
  <img
    src={phone}
    alt="phone"
    className="w-12 h-12 object-contain"
  />
</div>
<h3 className="text-xl font-bold text-[#0A1B5C] mb-4">
        Our Phone
      </h3>
      <p className="text-gray-800 text-md mt-1">
        Mobile : 03008395562
      </p>
    </div>

    {/* Email */}
    <div className="bg-white text-center border border-gray-500 px-10 py-12">
      <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center rounded-lg bg-teal-50">
  <img
    src={mail}
    alt="Email"
    className="w-12 h-12 object-contain"
  />
</div>

      <h3 className="text-xl font-bold text-[#0A1B5C] mb-4">
        Our Email
      </h3>
      <p className="text-gray-800 text-md">
        Email : aneelabrar555@gmail.com
      </p>
    </div>

  </div>
</div>


<div className="w-[1000px] h-[500px] ml-72 rounded-xl overflow-hidden mt-3 border border-gray-500 shadow-lg mb-12">
  <iframe
    title="SmileExpert Dental Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3445.0390050498395!2d71.9162331!3d30.292951199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b557588a60575%3A0x79afa5462675bee1!2sSmile%20expert%20dental%20clinic!5e0!3m2!1sen!2s!4v1767798942687!5m2!1sen!2s"
    className="w-full h-full border-0"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
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
