import React from 'react'
import { Link } from "react-router-dom";
import { useState } from "react";
import blog from "../Images/blog.jpg";
import blog2 from "../Images/blog2.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";





export default function CosmeticAesthetic() {
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
        src={blog2}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right Content */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        Cosmetic vs Aesthetic Dentistry
      </h1>

      
    </div>
    <div>
        <p>
            When we talk about perfecting a smile, the words cosmetic dentistry and aesthetic dentistry are sometimes used interchangeably.<br/><br/>
            But are they really the same?<br/><br/>
            Knowing the truth can lead you in the direction of choosing the right dental procedure for your teeth and gums!<br/><br/>
            Here you will get all the information necessary for you to make an informed decision on what suits you best as you work towards achieving your dream set of teeth.

        </p>
      </div>

  </div>
</div>




<div className="w-full bg-white py-6">
  <div className="max-w-[1300px] mx-auto flex items-start justify-between px-10">
    
    {/* TABLE OF CONTENTS */}
    <div className="w-[320px] border border-gray-600 rounded-md p-5 text-[13px] leading-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-black text-sm">
          Table of Contents
        </h3>
      </div>

      <div className="text-gray-900 space-y-[2px]">
        <p>1. What Is Cosmetic Dentistry?</p>

        <p className="pl-4">1.1. Common Cosmetic Dentistry Procedures</p>
        <p className="pl-4">1.2. Cost of Cosmetic Dentistry</p>

        <p>2. Who Should Choose Cosmetic Dentistry?</p>
        <p>3. What is Aesthetic Dentistry?</p>
        <p>4. Cosmetic vs Aesthetic Dentistry: Detailed Comparison</p>
        <p>5. Cosmetic Dentistry or Aesthetic Dentistry: What to Choose?</p>
        <p>6. Pros and Cons: Cosmetic Dentist vs Aesthetic Dentist</p>
        <p>7. Conclusion</p>
        <p>8. FAQs</p>

        <p className="pl-4">8.1. Which dentistry is better for improving my smile?</p>
        <p className="pl-4">2.2. Does aesthetic dentistry take longer than cosmetic procedures?</p>
        
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
    What is Cosmetic Dentistry?
  </h1>

  <p className="text-base mb-6">
    Cosmetic dentistry is the first concerned with the aesthetics of teeth and gums.
    Although some cosmetic work may also improve function to a small extent, the
    primary goal is to improve appearance, whiter teeth, straighter teeth,
    symmetrical teeth and overall more attractive teeth.
  </p>

  <h2 className="text-xl font-bold text-[#0a1a5c] mb-2">
    Common Cosmetic Dentistry Procedures
  </h2>

  <p className="mb-2">
    Here are the top cosmetic dental treatments:
  </p>

  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>
      <span className="font-semibold">Teeth Bleaching:</span> The fast way to remove
      stains and brighten your teeth.
    </li>
    <li>
      <span className="font-semibold">Veneers:</span> Thin shells made from porcelain
      that fit over the front surfaces of teeth to improve their appearance.
    </li>
    <li>
      <span className="font-semibold">Dental Bonding:</span> A tooth-colored material
      applied to the teeth, repairing small chips, gaps or imperfections.
    </li>
    <li>
      <span className="font-semibold">Dental Crown:</span> Caps are placed over teeth
      to restore their appearance.
    </li>
    <li>
      <span className="font-semibold">Gum Contouring:</span> This procedure adjusts
      the gum line to create better balance in a smile.
    </li>
  </ul>

  <h2 className="text-xl font-bold text-[#0a1a5c] mb-2">
    Cost of Cosmetic Dentistry
  </h2>

  <p className="mb-2">
    It all depends on the complexity, clinic and materials, but
  </p>

  <p className="mb-2">
    Teeth Whitening: PKR 15,000 – PKR 40,000
  </p>

  <p className="mb-4">
    Veneers: PKR 20,000 – PKR 100,000 per tooth
  </p>

  <p className="text-sm">
    <span className="font-semibold">Note:</span> Actual costs may vary considerably
    by clinic, materials and custom treatment plans.
  </p>
</div>


<div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Who Should Choose Cosmetic Dentistry?
  </h1>

  <p className="text-base mb-6">
    While it’s not for those needing more serious work to their bite, function or structure, if you’re simply looking to enhance the visual aspect of your smile cosmetic dentistry is often a quick and economical way.<br/><br/>
If you want a stunning smile result with different methods combined, a full Cosmetic Dental Makeover may be what you are looking for. This is a personalised process that uses both aesthetic (cosmetic) and functional treatments to make severe changes.
  </p>

  </div>

  <div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    What is Aesthetic Dentistry?
  </h1>

  <p className="text-base mb-6">
    And although it also enhances the appearance of your smile, aesthetic dentistry takes that a step further by incorporating beauty with dental health and function. It’s sometimes known as restorative aesthetic dentistry because it focuses on both form and function, so your teeth look good and work properly.
  </p>

  <p className='text-base'>
    Common Aesthetic Dentistry Treatments<br/><br/>

<span className="font-semibold">Orthodontic Treatments (Braces & Aligners):</span>: for a vastly improved function and beauty.<br/><br/>

<span className="font-semibold">Implants:</span> Replace missing teeth with permanent, natural-looking solutions.<br/><br/>

<span className="font-semibold">Full Mouth Reconstruction:</span> Treatment plan incorporating many procedures.<br/><br/>

<span className="font-semibold">Crown & Bridges:</span> Enhance the appearance and strength of badly decayed, broken, or missing teeth.<br/><br/>

<span className="font-semibold">Smile Makeovers:</span> Personalised programs are developed that can consist of implants, crown work, whitening and orthodontics.<br/><br/>

<span className="font-semibold">Price of Aesthetics Dentistry in Pakistan</span><br/><br/>

As aesthetic dentistry combines advanced restorative work, prices are typically high:<br/><br/>

Orthodontics(Braces / Clear Aligners): PKR 100,000 – 5,000,000<br/><br/>

Dental Implants: PKR 60,000 – PKR 150,000+<br/><br/>

However, these prices can vary from dentist to dentist and according to your mouth condition.
  </p>

  </div>


  <div className="max-w-7xl mx-auto mt-10 text-gray-900">

  <h2 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Cosmetic vs Aesthetic Dentistry: Detailed Comparison
  </h2>

  {/* Table */}
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-300 text-sm">
      <thead>
        <tr className="bg-white">
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
            Aspect
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
            Cosmetic Dentistry
          </th>
          <th className="border border-gray-300 px-4 py-2 text-left font-semibold">
            Aesthetic Dentistry
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Primary Focus
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Enhancing appearance
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Enhancing both appearance and function
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Typical Procedures
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Whitening, bonding, and veneers
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Braces, implants, full rehab
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Cost in PKR
          </td>
          <td className="border border-gray-300 px-4 py-2">
            ~PKR 20,000 – PKR 150,000 per treatment
          </td>
          <td className="border border-gray-300 px-4 py-2">
            PKR 100,000 +
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Treatment Time
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Short (1–3 visits)
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Long (multiple visits over months)
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Health Benefits
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Mostly cosmetic
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Functional and cosmetic
          </td>
        </tr>
        <tr>
          <td className="border border-gray-300 px-4 py-2">
            Best For
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Improving smile aesthetics
          </td>
          <td className="border border-gray-300 px-4 py-2">
            Improving function + aesthetics
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <h2 className="text-3xl font-bold text-[#0a1a5c] mt-12 mb-4">
    Cosmetic Dentistry or Aesthetic Dentistry: What to Choose?
  </h2>

  <div className="mb-6">
    <p className="font-semibold mb-2">
      Choose Cosmetic Dentistry if:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        You want a quick enhancement of your tooth colour or shape.
      </li>
      <li>
        You have some imperfections, such as stains or small chips.
      </li>
      <li>
        You're not having major dental pain or problems biting down.
      </li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">
      Choose Aesthetic Dentistry if:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        You have teeth that are missing, misaligned, or structurally flawed.
      </li>
      <li>
        You need an option that is good for overall dental health and longevity.
      </li>
      <li>
        You are willing to try a more involved, comprehensive treatment plan.
      </li>
    </ul>
  </div>

</div>
<div className='max-w-7xl mx-auto mt-10 text-gray-900'>
<h2 className="text-3xl font-bold text-[#0a1a5c] mt-12 mb-4">
    Pros and Cons: Cosmetic Dentist vs Aesthetic Dentist
  </h2>

  <div className="mb-6">
    <p className="font-semibold mb-2">
      Cosmetic Dentistry Pros:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        Faster results
      </li>
      <li>
        More affordable for single concerns
      </li>
      <li>
        Improves confidence and smile aesthetics
      </li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">
      Cosmetic Dentistry Cons:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        Doesn’t treat deep functional problems
      </li>
      <li>
        Treatments may require occasional touch‑ups
      </li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">
      Aesthetic Dentistry Pros:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        Can correct complex dental issues
      </li>
      <li>
        Frequently enhances the bite and oral function
      </li>
    </ul>
  </div>

  <div>
    <p className="font-semibold mb-2">
      Aesthetic Dentistry Cons:
    </p>
    <ul className="list-disc pl-6 space-y-2 text-sm">
      <li>
        Higher cost
      </li>
      <li>
        Longer treatment duration
      </li>
      <li>
        Takes planning and a few visits
      </li>
    </ul>
  </div>
  </div>


  <div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Conclusion

  </h1>

  <p className="text-base mb-6">
    Whether you want picture-perfect, whiter teeth or a complete smile makeover, both cosmetic and aesthetic dentistry can transform your smile. The best pick for you will depend on your priorities and dental needs:<br/><br/>
    Cosmetic dentistry provides fast, gorgeous results for cosmetic issues.<br/><br/>
    Aesthetic dentistry provides beauty and health in the long term.<br/><br/>
    So long as you understand the different approaches, costs and outcomes possible with both treatments, you can make a well-informed decision about what type of dentistry will provide you with that beautiful smile and lifelong oral health.
  </p>

  </div>


  <div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    FAQs
  </h1>
    <h3 className="text-2xl font-bold text-[#0a1a5c] mb-4">
   Which dentistry is better for improving my smile?
  </h3>
  <p className="text-base mb-6">
   If you simply want to improve the appearance of your smile, that’s often all cosmetic dentistry requires. But if you also want structural or functional enhancements (such as straightening or replacing missing teeth), aesthetic dentistry is usually the way to go.
  </p>

  <h3 className="text-2xl font-bold text-[#0a1a5c] mb-4">
   Does aesthetic dentistry take longer than cosmetic procedures?
  </h3>
  <p className="text-base mb-6">
    Yes, aesthetic dentistry typically requires several steps and a longer plan for treatment, whereas cosmetic treatments are generally faster and frequently completed in a few visits.
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
