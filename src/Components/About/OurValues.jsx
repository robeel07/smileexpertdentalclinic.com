import React from 'react'
import { Link } from "react-router-dom";
import value from "../Images/value.jpg";
import value1 from "../Images/value1.jpg";


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function OurValues() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_60%]"
      style={{ backgroundImage: `url(${value})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Our Values
    </h1>
  </div>
</div>
    </div>


<div className="max-w-7xl flex flex-col lg:flex-row items-center gap-12 mx-auto w-fit mt-9">

  {/* Left Image Card */}
  <div className="relative group">
    <div className="absolute inset-0 
                  bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 blur-xl opacity-0 
                  group-hover:opacity-40 transition duration-500 rounded-[35px]"></div>
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400 p-[4px] rounded-[35px] 
                  opacity-80 group-hover:opacity-100 transition duration-500">
      <div className="bg-white rounded-[31px] overflow-hidden">
        <img
          src={value1}
          alt="Dental Care"
          className="w-[520px] h-[580px] object-cover rounded-[31px]
                   transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </div>
  </div>

  {/* Right Content */}
  <div className="max-w-xl">
    <p className="text-cyan-400 text-2xl font-bold mb-3">About Us</p>

    <h2 className="text-5xl font-bold text-[#0a1a5c] mb-6">
      What we’re striving for
    </h2>

    <p className="text-gray-900 mb-12">
      The best possible care is of utmost importance to SmileExpert. Every one of our
      patients may feel secure knowing they are in safe hands since we have been
      dedicated to upholding our ideals from day one.
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      
      {/* Item */}
      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a1a5c] text-white">✓</div>
        <p className="font-semibold text-[#0a1a5c]">Transparency</p>
      </div>

      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a1a5c] text-white">✓</div>
        <p className="font-semibold text-[#0a1a5c]">Quality & Sterilization</p>
      </div>

      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a1a5c] text-white">✓</div>
        <p className="font-semibold text-[#0a1a5c]">Technology & Expertise</p>
      </div>

      <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-xl shadow-sm">
        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#0a1a5c] text-white">✓</div>
        <p className="font-semibold text-[#0a1a5c]">Patient Focused Philosophy</p>
      </div>

    </div>
  </div>

</div>


<div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto justify-center py-10 bg-white">
  {/* Left Card */}
  <div className="w-full lg:w-1/2 bg-white border border-gray-600 shadow-lg rounded-3xl px-4 py-6 text-center">
    <h3 className="text-xl font-bold  text-[#0a1a5c] mb-4">
      Transparency
    </h3>

    <p className="text-gray-900 mb-6">
      The best patient is an educated patient.
    </p>

    <p className="text-gray-900 leading-relaxed mb-6">
      We carefully explain every stage of every therapy since we believe that you deserve full transparency.
    </p>

    <p className="text-gray-900 leading-relaxed">
      Before any process begins, we’ll ensure that you understand why a certain treatment is being recommended for you as well as its precise cost. And your treatment doesn’t end until you are fully satisfied with the care you’ve received and given us the thumbs up.
    </p>
  </div>

  {/* Right Card */}
  <div className="w-full lg:w-1/2 bg-white rounded-3xl border border-blue-600 shadow-lg px-4 py-6 text-center">
    <h3 className="text-xl font-bold  text-[#0a1a5c] mb-4">
      Quality &amp; Sterilization
    </h3>

    <p className="text-gray-900 leading-relaxed mb-6">
      To provide the finest results, our clinic uses the best materials, including Swiss-made dental implants and 3M compounds.
    </p>

    <p className="text-gray-900 leading-relaxed mb-6">
      Our cross infection and sterilization protocols are on par with or even better than those of dental clinics in the US and Europe.
    </p>

    <p className="text-gray-900 leading-relaxed">
      Twice a month, an audit is performed at our clinic to make sure that procedures are often followed.
    </p>
  </div>
</div>


<div className="max-w-7xl flex flex-col lg:flex-row gap-8 mx-auto justify-center py-6 bg-white">
  {/* Left Card */}
  <div className="w-full lg:w-1/2 bg-white border border-gray-600 shadow-lg rounded-3xl px-4 py-6 text-center">
    <h3 className="text-xl font-bold  text-[#0a1a5c] mb-4">
      Technology & Expertise
    </h3>

    <p className="text-gray-900 mb-6">
      We perform every procedure with our complete focus and knowledge because we believe that you deserve the best dental quality care. With the use of our cutting-edge dental technology, we can more accurately identify your individual needs and provide speedy, painless treatment.
    </p>

    <p className="text-gray-900 leading-relaxed mb-6">
      You’ll also be in competent hands. For the greatest treatment outcomes, we have all important dental specialists under one roof, including prosthodontists, endodontists, implantology, aligners specialists, and maxillofacial surgeons.
    </p>

    
  </div>

  {/* Right Card */}
  <div className="w-full lg:w-1/2 bg-white rounded-3xl border border-blue-600 shadow-lg px-4 py-6 text-center">
    <h3 className="text-xl font-bold  text-[#0a1a5c] mb-4">
      Patient Focused Philosophy
    </h3>

    <p className="text-gray-900 leading-relaxed mb-6">
      We believe it’s necessary to strike a balance between the demands and desires of the patient in order to produce a pain-free outcome they’ll enjoy.
    </p>

    <p className="text-gray-900 leading-relaxed mb-6">
        Our primary responsibility is to tell the patient accurately about their illness or diagnosis. Typically, this involves outlining the various therapy choices that can be used to control a specific problem.
    </p>

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
                  <a href="https://www.facebook.com/share/17zJppb7qh/" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline" aria-label="Follow us on Facebook">
                    <FaFacebookF size={20} color="white" />
                  </a>
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline" aria-label="Follow us on Instagram">
                    <FaInstagram size={20} color="white" />
                  </a>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-[40px] h-[40px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline" aria-label="Subscribe to our YouTube channel">
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





