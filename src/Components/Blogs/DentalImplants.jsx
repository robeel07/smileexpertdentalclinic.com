import React from 'react'
import { Link } from "react-router-dom";

import blog from "../Images/blog.jpg";
import blog6 from "../Images/blog6.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";





export default function DentalImplants() {
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
    
    {/* Left img */}
    <div className="rounded-2xl overflow-hidden shadow-lg">
      <img
        src={blog6}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        What is All-on-4 Dental Implants
      </h1>

      
    </div>
    <div>
        <p>
            All-on-4 dental implants are an innovative and long-term replacement for people who have lost the majority of, or all of, their teeth. This treatment is not like traditional dentures in that they are held in place by 4 titanium implants.<br/><br/>
            In a nutshell, <span className="text-blue-600">dental implants</span> on all 4 provide the support for a new set of teeth which are fitted and anchored so they not only look but also feel like natural teeth. The process was designed as a stable and effective solution for full mouth rehabilitation, frequently accomplished all in one day.<br/><br/>
            By using this revolutionary technique, single dental implants don’t have to be used for each tooth missing, so treatment time is shortened and cost is reduced, yet still resulting in a long-term smile.
        </p>
      </div>

  </div>
</div>




<div className="w-full bg-white py-6">
  <div className="max-w-[1300px] mx-auto flex items-start justify-between px-10">
    
    {/* TABLE OF CONTENTS */}
    <div className="w-[320px] border border-gray-600 rounded-md p-2 text-[13px] leading-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-gray-900 text-sm">
          Table of Contents
        </h3>
      </div>

      <div className="text-gray-700 space-y-[2px]">
        <p>1. Who Can Go for Dental Implants All-on-4 Procedure?</p>
        <p>2. All-on-4 Dental Implants Process</p>


        <p className="pl-8">2.0.1. Consultation and Planning:</p>
        <p className="pl-8">2.0.2. Implant Placement:</p>
        <p className="pl-8">2.0.3. Temporary Teeth Placement:</p>
        <p className="pl-8">2.0.4. Healing and Osseointegration:</p>
        <p className="pl-8">2.0.5. Final Prosthetic Attachment:</p>
        
        <p>2.1. Advantages of All on Four Dental Implants</p>
        
        <p className="pl-8">2.1.1. Quick Results:</p>
        <p className="pl-8">2.1.2. Better Stability and Comfort:</p>
        <p className="pl-8">2.1.3. Prevents Bone Loss:</p>
        <p className="pl-8">2.1.4. Natural Appearance and Functionality:</p>
        <p className="pl-8">2.1.5. Cost-Effective Solution:</p>
        <p className="pl-8">2.1.6. Easy Maintenance:</p>

        <p>2.2. How to Take Care of Your All-on-4 Dental Implants?</p>


        <p className="pl-8">2.2.1 Maintain Good Oral Hygiene:</p>
        <p className="pl-8">2.2.2. Attend Regular Dental Checkups:</p>
        <p className="pl-8">2.2.3. Stay Away From Hard and Sticky Foods:</p>
        <p className="pl-8">2.2.4. Quit Smoking:</p>
        <p className="pl-8">2.2.5 Follow Your Dentist’s Instructions:</p>

        <p>2.3. All-on-4 Dental Implants Price: What to Expect?</p>
        <p>2.4. Key Takeaways</p>

        <p>2.5. FAQs</p>
        <p className="pl-8">2.5.1 How long do all-on-4 dental implants last?</p>
        <p className="pl-8">2.5.2 What can you eat after all-on-4 dental implants?</p>
        <p className="pl-8">2.5.3 How to clean all on 4 dental implants?</p>

        <p>2.6. Conclusion</p>

      </div>
    </div>

    {/* RIGHT — FORM */}
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

<div className="max-w-7xl mx-auto">
<h1 className="text-3xl font-bold text-[#0a1a5c] mb-2">
   Who Can Go for Dental Implants All-on-4 Procedure?
  </h1>

  <p className="mb-4">
    The All-on-4 dental implants treatment is a great option to consider if you:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li>1. Have decayed, infected or compromised teeth </li>
    <li>2. Want to replace those missing teeth. </li>
    <li>3. Have missing multiple (or all) teeth due to injury, disease or decay</li>
    <li>4. Suffer from loose or painful dentures.</li>
    <li>5. Have enough bone in your jaw to support an implant.</li>
    <li>6.Want an alternative to dentures to make changes in your lifestyle.</li>
    
  </ul>
  <p className="mt-4">
    All in all, it’s an excellent option for patients who want a permanent full-arch restoration that provides both cosmetic and functional advantages.<br/><br/>
    So, if you want to restore faith in your smile without the inconvenience of removing such dentures, this may be right for you.
  </p>
  </p>


<h1 className="text-3xl font-bold text-[#0a1a5c] mb-2">
   Who Can Go for Dental Implants All-on-4 Procedure?
  </h1>
  <p className="mb-4">
    Here’s how it typically works:
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Consultation and Planning:
  </h3>
  <p className="mb-4">
    It all starts with a 1:1 in-person meeting where you’re assessed to see if you are suitable for the All-on-4 treatment. X-rays or 3D scans can help in deciding where the best place is for an implant.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Implant Placement:
  </h3>
  <p className="mb-4">
    During the procedure, four dental implants are positioned in the jawbone, two toward the front and two angled at the rear for increased support. These are made of titanium and serve as replacement roots for your new teeth.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Temporary Teeth Placement:
  </h3>
  <p className="mb-4">
    Once the implants are in place, a temporary tooth can be attached. That way, you can leave the clinic with a working smile all in one day.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Healing and Osseointegration:
  </h3>
  <p className="mb-4">
    In the several months that follow, the implants naturally integrate with your jawbone through a process called osseointegration. This sets the stage for your permanent prosthesis.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Final Prosthetic Attachment:
  </h3>
  <p className="mb-4">
    When your mouth has healed, actual teeth are replaced with a custom-made permanent bridge based on the shape, size and color of natural ones that fits your smile perfectly.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Advantages of All on Four Dental Implants
  </h3>
  <p className="mb-4">
    The benefits are:
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    Quick Results:
  </h3>
  <p className="mb-4">
    That means patients can walk out of the clinic with a new smile that day in many cases.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Better Stability and Comfort:
  </h3>
  <p className="mb-4">
    Because the implants are implanted in your jawbone, you can enjoy the stability of them not shaking or wiggling.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Prevents Bone Loss:
  </h3>
  <p className="mb-4">
    Implants also stimulate the jawbone, which prevents bone loss that commonly happens following tooth loss.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Natural Appearance and Functionality:
  </h3>
  <p className="mb-4">
    These Dental implants all on 4 work to appear and feel just like your natural teeth, so you can eat, talk and laugh with confidence.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Cost-Effective Solution:
  </h3>
  <p className="mb-4">
    All-on-4 dental implants cost on average less than the estimated costs of placing traditional individual (one for each tooth) implants, which can provide significant value to those in need of replacing many teeth.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Easy Maintenance:
  </h3>
  <p className="mb-4">
    Removable dentures need adhesives and to be replaced regularly, whereas they can withstand just a few simple good habits.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   How to Take Care of Your All-on-4 Dental Implants?
  </h3>
  <p className="mb-4">
    The preservation of good health and longevity of your implants is dependent upon careful attention to their care. Here’s how to take care of afterwards:
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Maintain Good Oral Hygiene:
  </h3>
  <p className="mb-4">
    Brush your teeth twice a day using a soft brush and non-harsh toothpaste. Floss around the implants or use an interdental brush.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Attend Regular Dental Checkups:
  </h3>
  <p className="mb-4">
    See your dentist twice a year for cleanings and to check on the health of the implants.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Stay Away From Hard and Sticky Foods:
  </h3>
  <p className="mb-4">
    During the first few weeks after the procedure, refrain from chewing on solid foods such as nuts or ice to not put stress on your new implants.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Quit Smoking:
  </h3>
  <p className="mb-4">
    Cigarette smoking may delay healing and increase the risk of implant failure. Continuing to avoid smoking increases successful cessation in the long term.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Follow Your Dentist’s Instructions:
  </h3>
  <p className="mb-4">
    Following post-op instructions agreed with your surgeon concerning medications and cleansers is the best way to ensure proper healing.
  </p>
  <p className="mb-4">
    So, when appropriately maintained, All-on-4 implants can last for many decades. Hence, they are a genuinely long-term investment in your overall health.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   All-on-4 Dental Implants Price: What to Expect?
  </h3>
  <p className="mb-4">
    The All-on-4 dental implants price varies, and it highly depends on several factors, including:
  </p>
<div className="overflow-x-auto w-full">
  <table className="min-w-full border border-gray-200 divide-y divide-gray-200">
    <thead className="bg-gray-50">
      <tr>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Factor</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Description</th>
        <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b">Impact on Price</th>
      </tr>
    </thead>
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-4 py-2 font-semibold text-gray-800">Location</td>
        <td className="px-4 py-2 text-gray-700">Costs vary by city or region</td>
        <td className="px-4 py-2 text-gray-700">Moderate</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-semibold text-gray-800">Materials Used</td>
        <td className="px-4 py-2 text-gray-700">Titanium vs. zirconia implants</td>
        <td className="px-4 py-2 text-gray-700">Moderate to high</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-semibold text-gray-800">Dentist’s Expertise</td>
        <td className="px-4 py-2 text-gray-700">Experienced implant specialists may charge more</td>
        <td className="px-4 py-2 text-gray-700">High</td>
      </tr>
      <tr>
        <td className="px-4 py-2 font-semibold text-gray-800">Additional Procedures</td>
        <td className="px-4 py-2 text-gray-700">Bone grafting or extractions (if needed)</td>
        <td className="px-4 py-2 text-gray-700">High</td>
      </tr>
    </tbody>
  </table>
</div>
<p className="mt-4">
    Overall the All-on-4 dental implants cost is cheaper than other traditional full mouth restoration procedures because it requires only four implants per arch rather than 8–10.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-2">
   Key Takeaways
  </h3>

  <p className="mb-4">
    All-on-4 dental implants are a permanent, beautiful solution to missing teeth.
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li>1. All-on-4 dental implants are the pricey yet beautiful solution to the lack of teeth. </li>
    <li>2. It is ideal for all the people who desire a complete arch restoration without having to go through various procedures. </li>
    <li>3. It is the method of placement of four implants that serve as a support to a complete, fixed row of teeth.</li>
    <li>4. The benefits are greater stability, rapid recovery, saving of bone stock and convenient care.</li>
    <li>5. Implants can be lifelong, if they are well-maintained, and they help in improving the overall health of the mouth.</li>
    
  </ul>
  </p>


 <h3 className="text-3xl font-bold text-[#0a1a5c] mb-2">
   FAQs
  </h3>
  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   How long do all-on-4 dental implants last?
  </h3>
  <p className="mb-4">
    It can stay in for 20+ years, given good oral care and routine visits to the dentist. Prosthetic teeth may need to be replaced in a few years; however, the implants are usually stable for decades.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   What can you eat after all-on-4 dental implants?
  </h3>
  <p className="mb-4">
    After surgery, for the first few weeks, stick to soft foods such as soups, mashed potatoes, yogurt, or scrambled eggs. As you heal and are gradually able to tolerate them again, you can add firmer foods such as fruits, vegetables and lean meats.
  </p>

  <h3 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   How to clean all on 4 dental implants?
  </h3>
  <p className="mb-4">
    Brush softly two times a day with a soft-bristle toothbrush and non-abrasive toothpaste. Plus, a floss should be used to clean between the bridge and the gums. Professional cleanings at six-month intervals are also advised.
  </p>


  <h3 className="text-3xl font-bold text-[#0a1a5c] mb-2">
   Conclusion
  </h3>
  <p className="mb-4">
    All-on-4 dental implants brought a new dimension of dentistry which gave the patients a feeling of confidence and security at a glance. In case you lost some teeth when you were young, because of any form of decay, damage, etc., then this is a wonderful solution to restore your smile to its usefulness and aestheticism.<br/><br/>
    If you consider a long-term solution that is durable and also appealing to the eyes, All-on-4 implants may be the perfect present to yourself in the shape of oral health.
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

                        href="https://facebook.com"

                        target="_blank"

                        rel="noopener noreferrer"

                        className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-[8px] no-underline"

                        aria-label="Follow us on Facebook"

                      >

                        <FaFacebookF size={20} color="#1877F2" />
                    </a>
          
                    <a

          
                        href="https://instagram.com"

          
                        target="_blank"

          
                        rel="noopener noreferrer"

          
                        className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-[8px] no-underline"

          
                        aria-label="Follow us on Instagram"

          
                      >

          
                        <FaInstagram size={20} style={{ color: "#D82D7E" }} />
                    </a>
          
                    <a

          
                        href="https://youtube.com"

          
                        target="_blank"

          
                        rel="noopener noreferrer"

          
                        className="w-[40px] h-[40px] bg-white flex justify-center items-center rounded-[8px] no-underline"

          
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

