import React from 'react'
import { Link } from "react-router-dom";
import blog from "../Images/blog.jpg";
import blog5 from "../Images/blog5.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";






export default function DentalSurgery() {
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
        src={blog5}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        Common Dental Surgery Procedures
      </h1>

      
    </div>
    <div>
        <p>
            Dental surgery might seem complex and challenging, but with modern technologies and skilled dentists, it can do wonders to improve your smile.<br/>
            Whether you require a tooth extraction, an implant, or have jaw problems corrected, dental surgery can provide you with permanent solutions for health as well as cosmetic reasons.<br/><br/>
            In this guide, we’ll explain what dental surgery is and what treatments are considered to be in the category, as well as what you can expect during recovery.
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
        <p>1. What is Dental Surgery?</p>
        <p className="pl-8">1.1. Why Is Dental Surgery Needed?</p>

        <p>2. Common Dental Surgery Procedures</p>
        <p className="pl-8">2.1. Tooth Extraction:</p>
        <p className="pl-8">2.2. Dental Implants:</p>
        <p className="pl-8">2.3. Root Canal Surgery (Endodontic Surgery):</p>
        <p className="pl-8">2.4. Gum Surgery (Periodontal Surgery):</p>
        <p className="pl-8">2.5. Orthognathic (Jaw) Surgery:</p>
        <p className="pl-8">2.6. Bone Grafting:</p>
        <p className="pl-8">2.7. Oral Pathology Surgery:</p>
        <p className="pl-8">2.8. What to Expect Before Dental Surgery Process?</p>
        <p className="pl-8">2.9. What Happens During the Procedure?</p>
        <p className="pl-8">2.10. Recovery and Aftercare</p>
        <p className="pl-12">2.10.1. When Do You Need a Visit to the Dentist for Dental Surgery?</p>

        <p className="pl-4 pt-1">3. Conclusion</p>


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


<div className="max-w-7xl mx-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    What is Dental Surgery?
  </h1>

  <p className="mb-4">
    Dental surgery involves a number of medical procedures that involve artificially modifying one’s teeth, gums or jaws in order to cure a problem that could not be treated with non-surgical treatment. These are performed by an oral surgeon or a dentist with special training.<br/><br/>
    It can be minor, such as the extraction of a simple tooth, or major, such as jaw reconstruction. The majority of surgeries are done under local or general anesthesia and pain free.<br/><br/>
    The American Dental Association (ADA) reports that more than 5 million dental surgeries are being done in the U.S. annually, proving the treatments to be safe and effective, proven by far too numerous samples of successful procedures!
      </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Why Is Dental Surgery Needed?
  </h2>

  <p className="mb-4">
    Dental surgery isn’t all about looks, it’s also sometimes a critical part of preserving oral and overall health. You might require dental surgery if you have:
  </p>
  <ul className="list-disc ml-4 pl-6 mb-0 space-y-0">
    <li> Severe tooth decay or infection </li>
    <li> Impacted wisdom teeth </li>
    <li> Gum disease (periodontitis)</li>
    <li> Damaged or missing teeth </li>
    <li> Misaligned jaw or bite problems </li>
    <li> Oral cysts or tumours </li>
  </ul>
  <p className="mb-4">
    For instance, if you have an infection in a tooth that has made its way to the root, a basic filling may not fit the bill. In those scenarios, the tooth can only be saved or complications avoided by way of a surgical procedure.
  </p>


  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-2">
   Common Dental Surgery Procedures
  </h1>

  <p className="mb-4">
    The following are some of the most popular dental surgery procedures, and what they entail:
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Tooth Extraction:
  </h2>

  <p className="mb-4">
    It is also the most frequent of all oral surgeries. It is done on teeth that are too damaged to be candidates for repair. There are two main types:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> <span className="font-bold text-black">Easy to extract:</span> When they have erupted enough for dental forceps. </li>
    <li> <span className="font-bold text-black">Tooth extraction/surgical:</span> For broken teeth, or those impacted, like wisdom teeth! </li>
  </ul>
  <p>
    Nonetheless, the third molar extraction is the most common surgical procedure in young adult patients.
  </p>
  </p>


<h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Dental Implants:
  </h2>

  <p className="mb-4">
    Implants are used to replace missing teeth. The implant root is inserted into the jawbone and will be made of some titanium alloy. Following the healing period, an artificial tooth is attached to the implant.<br/><br/>
    The plus side is that implants are indistinguishable from a real tooth in look, feel and function; they can last in excess of 20 years with appropriate care. They’re ideal for patients who want a permanently fixed replacement to dentures or bridges.
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Root Canal Surgery (Endodontic Surgery):
  </h2>

  <p className="mb-4">
    Surgery to remove the root canal is done when the pulp, which contains soft tissue within a tooth, gets infected. The surgeon removes the infected tissue, cleans out the canal, and seals it.<br/><br/>
    Occasionally, the tip of a tooth’s root can become infected following treatment, an apicoectomy is used to clean the end of the root and seal it. This gives the opportunity of saving natural teeth instead of removing them.
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Gum Surgery (Periodontal Surgery):
  </h2>

  <p className="mb-4">
    It can be performed for combating gum diseases where the gums are inflamed or receded. Common gum surgeries include:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> <span className="font-bold text-black">Flap surgery: </span> Bacteria are removed, and rough bone surfaces are smoothed. </li>
    <li> <span className="font-bold text-black">Gum grafts:</span> Replace lost gum tissue and pause the loss of a tooth. </li>
  </ul>
  <p>
    Healthy gums are just as important as healthy teeth.</p>   
  </p>



<h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Orthognathic (Jaw) Surgery:
  </h2>

  <p className="mb-4">
    Jaw surgery is an operation to set right the misalignment or other jaw defects of a person, which affects his/her ability to eat, speak and breathe. It too could aid in the quest for facial symmetry.<br/><br/>
    Patients who suffer from the most serious types of bite issues or those that are not treatable using orthodontics alone, tend to be ideal candidates for this technique.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Bone Grafting:
  </h2>

  <p className="mb-4">
    Bone grafts are used when there isn’t enough jawbone to support dental implants. Then the surgeon transplants new bone material, which promotes growth of the jawbone and a strong base for implants.<br/><br/>
    This is a common procedure in patients whose lost teeth and/or gum disease has led to bone loss.
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Oral Pathology Surgery:
  </h2>

  <p className="mb-4">
    This may involve removing, diagnosing, and extracting growths, cystic masses, or other abnormal tissues that one finds in the mouth. It is vital for the protection against major oral health concerns and early signs of mouth cancer.<br/><br/>
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   What to Expect Before Dental Surgery Process?
  </h2>

  <p className="mb-4">
    Your dentist will take these steps before the dental surgery:<br/><br/>

  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Oral Pathology Surgery:
  </h2>

  <p className="mb-4">
    This may involve removing, diagnosing, and extracting growths, cystic masses, or other abnormal tissues that one finds in the mouth. It is vital for the protection against major oral health concerns and early signs of mouth cancer.<br/><br/>
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> Perform X-rays or 3D scans of the problematic area. </li>
    <li> Start by reviewing your medical history and any medications you are currently taking. </li>
    <li>Explain to stutterers the procedure, what will happen to them during anesthesia, and how their parents can care for them afterwards.</li>
    <li>You will also be informed about the procedure, recovery time and projected costs.</li>
  </ul>
  <p>
    <span className="font-bold text-black">Tip:</span> Tell your dentist if you have conditions such as diabetes, heart disease or are pregnant, they may influence your treatment plan.
  </p>
  </p>


<h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   What Happens During the Procedure?
  </h2>

  <p className="mb-4">
    The majority of dental procedures are carried out in an office setting or in an outpatient environment. The process typically includes:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> Local anesthesia to numb the area or general anesthesia (for complicated cases). </li>
    <li> Surgically treating, if it’s the problem. </li>
    <li> Stitches or sutures, if needed.</li>
    <li> Monitoring, ensuring no immediate complications.</li>
  </ul>
  <p>
    Quick procedures such as extractions may only take 20 – 30 minutes, whereas a dental implant or jaw surgery could span multiple appointments.
  </p>
  </p>


  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   Recovery and Aftercare
  </h2>

  <p className="mb-4">
    Recovery time varies based on the type of surgery. Here’s what most patients can expect:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> Some redness or pain around the injection site for 2-3 days. </li>
    <li> Soft diet (soups, mashed potatoes, yogurt) for quicker recovery </li>
    <li>Soothing any pain with an over-the-counter or a prescribed medicine</li>
    <li>Do not smoke for at least 48 hours</li>
    <li>Recheck to monitor for healing</li>
  </ul>
  <p>
    Patients typically resume normal activities in 3-7 days, depending on the type of procedure.
  </p>
  </p>



<h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
   When Do You Need a Visit to the Dentist for Dental Surgery?
  </h2>

  <p className="mb-4">
    You should visit your dentist if you have:
    <ul className="list-disc ml-4 mt-3 pl-6 mb-0 space-y-0">
    <li> Persistent tooth pain or swelling </li>
    <li> Bleeding gums or loose teeth </li>
    <li>Difficulty chewing or jaw misalignment</li>
    <li>Broken or missing teeth</li>
      </ul>
  <p className="mb-4">
    Early consultation can assist in managing potential dental problems before they develop into major problems that need surgery.
  </p>
  </p>


  <h2 className="text-3xl font-bold text-[#0a1a5c] mb-2">
    Conclusion
  </h2>
  <p className="mb-4">
    Dental surgeon procedures are nothing to be afraid of; they’re safe, effective, modern treatments that will let you get comfortable and confident again. From pulling teeth to having implants, all of it contributes to your oral health for the long run.<br/><br/>
    If you have dental pain or other oral concerns, talk to a dentist right away. The faster you act, the easier and quicker your recovery will be.
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