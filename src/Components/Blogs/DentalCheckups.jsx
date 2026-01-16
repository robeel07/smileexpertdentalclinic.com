import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import blog from "../Images/blog.jpg";
import blog3 from "../Images/blog3.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";





export default function DentalCheckups() {
  return (
    
    <>

    <div
          className="relative w-full h-[30vh] bg-cover"
          style={{ backgroundImage: `url(${blog})` }}
        >
          
          <div className="absolute inset-0 bg-black/50"></div>
    
        
          <div className="relative h-full max-w-6xl px-4 flex items-end">
      <div className="pb-8 mt-6 w-full">
        
      </div>
    </div>
        </div>


       <div className="max-w-7xl mx-auto px-6 py-8">
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
    
    {/* Left Img */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src={blog3}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right Content */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        What Are the Benefits of Dental Checkups
      </h1>

    </div>
    <div>
        <p>
            Don’t have a healthy smile?<br/><br/>
            It’s something you need to maintain with care and regular checkups. These dental visits help catch problems early, avoid major treatments and keep your teeth looking their best.<br/><br/>
            Here is everything you need to know about what dental checkups mean and why they’re important.
        </p>
      </div>

  </div>
</div>




<div className="w-full bg-white py-6">
  <div className="max-w-[1300px] mx-auto flex items-start justify-between px-10">
    
    {/* TABLE OF CONTENTS */}
    <div className="w-[320px] border border-gray-600 rounded-md p-5 text-[13px] leading-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">
          Table of Contents
        </h3>
      </div>

      <div className="text-gray-700 space-y-[2px]">
        <p>1. What Is a Dental Checkup?</p>
        <p>2. What Does Regular Checkups Include? </p>

        <p className="pl-4">2.1. Professional Dental Cleaning</p>
        <p className="pl-8">2.2. Thorough Oral Examination</p>
        <p className="pl-8">2.3. Gum Health Evaluation</p>
        <p className="pl-8">2.4. X-Rays (If Needed)</p>
        <p className="pl-8">2.5. Oral Cancer Screening</p>
        <p className="pl-8">2.6. Counseling & Recommendations</p>

        <p>3. Benefits of Regular Dental Checkups </p>


        <p className="pl-8">3.1. Early Detection of Dental Problems</p>
        <p className="pl-8">3.2. Prevention of Gum Disease</p>
        <p className="pl-8">3.3. Professional Cleaning</p>
        <p className="pl-8">3.4. Improved Overall Health</p>
        <p className="pl-8">3.5. A Confident Smile</p>
        <p className="pl-8">3.6. Individualized Guidance for Home Care</p>

        <p>4. Conclusion </p>
        <p>5. FAQs </p>




        <p className="pl-8">5.1. Is going to the dentist necessary?</p>
        <p className="pl-8">5.2. What is the cost of a dental checkup in Lahore?</p>
        <p className="pl-8">5.3. How often to go to dentist?</p>
        
      </div>
    </div>

    {/* FORM */}
    <div className="max-w-md bg-blue-900 rounded-xl sticky top-32 p-6">
      <h3 className="text-white text-lg font-semibold text-center mb-4">
        Send Us a Message
      </h3>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="h-10 bg-white rounded text-gray-400 px-3 flex items-center text-sm">
          Your Name*
        </div>
        <div className="h-10 bg-white rounded text-gray-400 px-3 flex items-center text-sm">
          Phone No*
        </div>
        <div className="h-10 bg-white rounded text-gray-400 px-3 flex items-center text-sm">
          Email Address*
        </div>
        <div className="h-10 bg-white rounded text-gray-400 px-3 flex items-center text-sm">
          Your Age*
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
    <input
      type="date"
      className="px-3 py-2 rounded-md text-sm outline-none"
    />
    <select className="px-3 py-2 rounded-md text-sm outline-none">
      <option>Select Doctor</option>
      <option>Dr. Aneel Abrar</option>
      <option>Doctor 2</option>
    </select>
  </div>

      <div className="h-24 bg-white rounded text-gray-400 px-3 py-2 text-sm mb-4">
        Add your message here!
      </div>

      <div className="h-11 bg-[#63c1bd] rounded text-white font-semibold flex items-center justify-center">
        Book Appointment
      </div>
    </div>

  </div>
</div>


<div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    What Is a Dental Checkup?
  </h1>

  <p className="text-base mb-6">
    A dental checkup is a standard <span className='text-blue-600'>appointment for your dentist</span> to review your teeth, gums and overall. It’s one of those preventative things, you’re looking for issues early on, before they get painful or costly.<br/><br/>
    Many dentists suggest visiting once every six months, although how often it’s actually necessary can depend on the health of your mouth.
  </p>

  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    What Does Regular Checkups Include?
  </h1>
  <p className="text-base mb-6">
    A standard dental exam is also more thorough than many patients suspect. Here’s what usually happens:
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Professional Dental Cleaning
  </h3>
  <p className="text-base mb-6">
    Your dental hygienist removes:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Plaque buildup </li>
    <li>Hardened tartar (calculus) </li>
    <li>Stains from food or beverages</li>
    <li>Cleaning can prevent gum disease and keep your smile fresh and clean. </li>
  </ul>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Thorough Oral Examination
  </h3>
  <p className="text-base mb-6">
        The dentist checks for:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Tooth decay </li>
    <li>Cavities </li>
    <li><span className="text-blue-600">Gum disease</span> </li>
    <li>Cracked or damaged teeth </li>
    <li>Bite or alignment issues </li>

  </ul>

  <p className="text-base mb-6">
        That’s key to uncovering hidden issues before they get worse.
    </p>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Gum Health Evaluation
  </h3>
  <p className="text-base mb-6">
        Your dentist examines your gums for early clues to the following:

  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Gingivitis </li>
    <li>Periodontitis </li>
    <li>Bone loss </li>

  </ul>

  <p className="text-base mb-6">
    Good oral health starts with the gums which finally act as host for teeth.

    </p>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
     X-Rays (If Needed)
  </h3>
  <p className="text-base mb-6">
    X-rays help uncover:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Deep cavities </li>
    <li>Bone issues </li>
    <li>Impacted teeth </li>
    <li>Infection under the gumline </li>
  </ul>

  <p className="text-base mb-6">
   You don’t need X-rays every time you go, but they’re essential in diagnosing dental problems that the eye can’t see.
    </p>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
     Oral Cancer Screening
  </h3>
  <p className="text-base mb-6">
    Dentists do a fast soft-tissue examination to look for:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Abnormal lumps </li>
    <li>Red or white patches </li>
    <li>Unusual sores </li>
  </ul>

  <p className="text-base mb-6">
    Early detection can be lifesaving.
    </p>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
        Counseling & Recommendations
  </h3>
  <p className="text-base mb-6">
    According to your case, the dentist recommends:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Oral hygiene tips </li>
    <li>Dietary recommendations </li>
    <li>Future treatments (if necessary)</li>
  </ul>


  </div>


<div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Benefits of Regular Dental Checkups
  </h1>

  <p className="text-base mb-6">
    There are many benefits of a regular dental checkup including:
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Early Detection of Dental Problems
  </h3>

  <p className="text-base mb-6">
    Early detection is one of the most valuable benefits of routine dental check-ups. An abundance of oral problems take hold without showing any visible signs, which include cavities, gum inflammation, affect enamel and cracks.<br/><br/>
    Your dentist will be able to catch these issues before they lead to painful or costly problems in the future by giving your mouth a complete once-over. The more you can treat something early, the easier it is to treat, the less expensive and quicker.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Prevention of Gum Disease   
  </h3>

  <p className="text-base mb-6">
    Gum disease is by far one of the most common causes of tooth loss, and it often starts with insidious symptoms like bleeding gums or minor irritation. Visiting a dentist regularly ensures that your gums are healthy and that harmful bacteria are removed at the initial stages of an infection.<br/><br/>
    Caught early, gum disease is reversible; simple therapies and improved oral hygiene can restore your gums to good health. Healthy gums are vital to long-term dental health.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Professional Cleaning   
  </h3>

  <p className="text-base mb-6">
    Some parts of the mouth are difficult for a brush or a string of floss to get to, no matter how hard you scrub or floss. Plaque eventually hardens into tartar, which can not be removed at home. At check-up time, professional cleaning of your teeth will remove these deposits, leaving your teeth smoother and cleaner, with greater resistance to decay.<br/><br/>
    It also freshens your breath and makes your mouth feel clean and refreshed in a way that brushing alone just can’t reach.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Improved Overall Health  
  </h3>

  <p className="text-base mb-6">
    Did you know that your mouth health and body health go hand in hand? Infections and inflammation in the mouth may play a role in higher course health conditions, including heart disease, diabetes complications, and respiratory infections. Dentists are also looking for early signs of oral cancer, a disease that is quite treatable if detected in its beginning stages.<br/><br/>
    When going to the dentist, you are not just safeguarding your teeth; you are securing your overall health.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    A Confident Smile 
  </h3>

  <p className="text-base mb-6">
    Stains from tea, coffee, smoking, and certain foods can cause your smile to lose its sparkle over time. Routine cleanings include polishing, which gets rid of light staining and brightens the natural color of your teeth. A cleaner, whiter smile adds confidence in an office environment when success relies on what you project. It is easy to keep a glowing smile when your teeth are always professionally cared for.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Individualized Guidance for Home Care 
  </h3>

  <p className="text-base mb-6">
    Everyone’s dental needs are different. At your checkup, the dentist assesses your brushing routine, lifestyle, and oral health background. From which, they provide tailored advice – whether that’s recommending a particular toothpaste, tackling sensitive teeth, getting better at how you brush your teeth or the changes you need to make to your diet.<br/><br/>
    Hence, this personalized guidance will help you keep your teeth and gums healthier between visits.
  </p>

  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Conclusion
  </h1>

  <p className="text-base mb-6">
    It may seem small, but routine dental checkups make a huge difference. They shield your smile, save you money on costly treatments and contribute to your long-term oral and overall health.<br/><br/>
    A couple of minutes, a couple of times a year, could save you years of pain and high costs, so make sure you don’t miss your next appointment!
  </p>


<h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    FAQs
  </h1>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    Is going to the dentist necessary?
  </h3>

  <p className="text-base mb-6">
    Yes. Routine dental care helps prevent cavities, gum disease, tooth loss and oral cancer. Whether or not you have pain, dental issues can expand quietly.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    What is the cost of a dental checkup in Lahore?
  </h3>

  <p className="text-base mb-6">
    In Lahore, you can visit a dentist and get your dental checkup done in PKR 1,500 to PKR 3,000. However, the cost is heavily dependent on the expertise of the doctor, clinic location and if there is a need for X-rays.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
    How often to go to dentist?
  </h3>

  <p className="text-base mb-6">
    You should visit a dentist every 6 months. If you have gum disease, cavities, or other ailments, your dentist might recommend more frequent visits.
  </p>


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