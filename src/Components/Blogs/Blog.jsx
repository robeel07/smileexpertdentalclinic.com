import React from 'react'
import { Link } from "react-router-dom";
import blog from "../Images/blog.jpg"
import blog1 from "../Images/blog1.jpg"
import blog2 from "../Images/blog2.jpg"
import blog3 from "../Images/blog3.jpg"
import blog4 from "../Images/blog4.jpg"
import blog5 from "../Images/blog5.jpg"
import blog6 from "../Images/blog6.jpg"


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";




export default function Blog() {
  return (
    <>
    <div
          className="relative w-full h-[40vh] bg-cover"
          style={{ backgroundImage: `url(${blog})` }}
        >
          
          <div className="absolute inset-0 bg-black/50"></div>
    
        
          <div className="relative h-full max-w-6xl px-4 flex items-end">
      <div className="pb-8 mt-6 w-full">
        <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
          Blogs
        </h1>
      </div>
    </div>
        </div>



     <div className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 1 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center flex flex-col h-[500px]">
  <img
    src={blog1}
    alt="Disposable Gloves"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="/dental-decay" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> What Causes Dental Decay (Caries)  </h3>
     </Link>
      <p className="text-gray-700 text-sm leading-relaxed">
        Well, if you have ever wondered how a little toothache becomes a full-blown cavity. You’re not alone.
        Dental caries is one of the most prevalent oral diseases globally that occurs in all age groups..
      </p>
    </div>
    <div className="mt-4">
      <Link
        to="/dental-decay"
        className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300"
      >
        Read More »
      </Link>
    </div>
  </div>
</div>


    {/* Card 2 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center flex flex-col h-[500px]">
  <img
    src={blog2}
    alt="Face Masks"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="/cosmetic-vs-aesthetic" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> Cosmetic vs Aesthetic Dentistry</h3>
     </Link>
      <p className="text-gray-700 text-sm leading-relaxed">
        When we talk about perfecting a smile, the words cosmetic dentistry and aesthetic dentistry are sometimes used interchangeably..
      </p>
    </div>
    <div className="mt-11">
      <Link
        to="/cosmetic-vs-aesthetic"
        className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300"
      >
        Read More »
      </Link>
    </div>
  </div>
</div>


    {/* Card 3 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center flex flex-col h-[500px]">
  <img
    src={blog3}
    alt="Protective Eyewear"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="/benefits-of-dental-checkups" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> What Are the Benefits of Dental Checkups</h3>
     </Link>
      <p className="text-gray-700 text-sm leading-relaxed">
        Don’t have a healthy smile? It’s something you need to maintain with care and regular checkups. These dental visits help catch problems early, avoid major treatments and keep your teeth looking their best..
      </p>
    </div>
    <div className="mt-4">
      <Link
        to="/benefits-of-dental-checkups"
        className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300"
      >
        Read More »
      </Link>    
    </div>
  </div>
</div>



  </div>
</div>  


<div className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 4 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center h-[500px] flex flex-col">
  <img
    src={blog4}
    alt="Disposable Gloves"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1">
    <Link to="/what-are-dental-xrays" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> What Are Dental X Rays – Purpose & Types</h3>
     </Link>
    <p className="text-gray-700 text-sm leading-relaxed">
      Dental X-rays are one of the easiest ways, and simple tools, for your dentist to peek beneath the surface. They can make you see..
    </p>
  </div>
  <div className="p-6  justify-end">
    <Link
      to="/what-are-dental-xrays"
      className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300">
      Read More »
    </Link>
  </div>
</div>


    {/* Card 5 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center flex flex-col h-[500px]">
  <img
    src={blog6}
    alt="Face Masks"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="what-is-all-4-dental-implants" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> What is All-on-4 Dental Implants</h3>
     </Link>
      <p className="text-gray-700 text-sm leading-relaxed">
        All-on-4 dental implants are an innovative and long-term replacement for people who have lost the majority of, or all of, their teeth..
      </p>
    </div>
    <div className="mt-12">
      <Link
        to="/what-is-all-4-dental-implants"
        className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300"
      >
        Read More »
      </Link>
    </div>
  </div>
</div>


    {/* Card 6 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center flex flex-col h-[500px]">
  <img
    src={blog5}
    alt="Protective Eyewear"
    className="w-full h-56 object-cover"
  />
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="/dental-surgery-procedures" className="no-underline">
     <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> Common Dental Surgery Procedures</h3>
     </Link>
      
      <p className="text-gray-700 text-sm leading-relaxed">
        Dental surgery might seem complex and challenging, but with modern technologies and skilled dentists, it can do wonders to improve your smile..
      </p>
    </div>
    <div className="mt-12">
      <Link
        to="/dental-surgery-procedures"
        className="text-[#0a1a5c] font-semibold no-underline hover:text-blue-600 transition-colors duration-300"
      >
        Read More »
      </Link>    
    </div>
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
