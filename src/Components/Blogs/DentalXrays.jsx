import React from 'react'
import { Link } from "react-router-dom";
import blog from "../Images/blog.jpg";
import blog4 from "../Images/blog4.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";






export default function DentalXrays() {
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
        src={blog4}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        What Are Dental X Rays – Purpose & Types
      </h1>

      
    </div>
    <div>
        <p>
            Dental X-rays are one of the easiest ways, and simple tools, for your dentist to peek beneath the surface. They can make you see what the eye cannot detect, concealed cavities, bone loss, infections and more.<br/><br/>
            If you’ve ever wondered why dentists rely on them or which types they wield, here’s an accessible and entertaining breakdown.<br/><br/>
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
        <p>1. What Are Dental X-Rays?</p>

        <p className="pl-4">1.1. What is the Importance of Tooth X-rays?</p>
        <p className="pl-8">1.1.1. 1. Detecting Cavities You Can’t See</p>
        <p className="pl-8">1.1.2. 2. Monitoring Bone Health</p>
        <p className="pl-8">1.1.3. 3. Identifying Infections and Abscesses</p>
        <p className="pl-8">1.1.4. 4. Planning Dental Treatments</p>
        <p className="pl-8">1.1.5. 5. Checking Tooth Development in Children</p>
        

        <p className="pl-4 pt-1">1.2. Types of Dental X-Rays</p>
        <p className="pl-8">1.2.1. Bitewing X-Rays:</p>
        <p className="pl-8">1.2.2. Periapical X-Rays:</p>
        <p className="pl-8">1.2.3. Panoramic X-Rays:</p>
        <p className="pl-8">1.2.4. Occlusal X-Rays:</p>
        <p className="pl-8">1.2.5. Cephalometric X-Rays:</p>
        <p className="pl-8">1.2.6. Cone Beam CT (CBCT) Scans:</p>
        

        <p className="pl-4 pt-1">1.3. How Often Should I Get Dental X-Rays?</p>
        <p className="pl-4 pt-1">1.4. Why Do Children Need a Tooth X-ray?</p>
        <p className="pl-4 pt-1"> 1.5. Purposes of Dental X-Rays</p>
        <p className="pl-8">1.5.1. Early Diagnosis:</p>
        <p className="pl-8 ">1.5.2. Better Treatment Planning:</p>
        <p className="pl-8 ">1.5.3. Monitoring Changes Over Time:</p>
        <p className="pl-8 ">1.5.4. Preventing Emergencies:</p>
        <p className="pl-4 pt-1">1.6. Conclusion</p>


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
    What Are Dental X-Rays?
  </h1>

  <p className="mb-4">
    Tooth X-ray or radiographs, are pictures of your teeth, gums, and jawbone that use only low levels of radiation. These images help dentists catch problems early, and often long before symptoms crop up. Unlike traditional pictures, X-rays show the inside of bones and teeth, allowing for thorough examination.
  </p>

  <p className="mb-6">
    Despite the fact that for many people the word “X-ray” means nervousness, contemporary dental radiography is perfectly safe. Because of highly sophisticated equipment, digital sensors and radiation standards, the exposure is negligible, frequently inferior to what you receive on a short airplane ride.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    What is the Importance of Tooth X-rays?
  </h2>

  <p className="mb-4">
    X-rays are an important tool in preventive dental care. Many oral issues start silently. With your vision, you may not experience pain or have symptoms until it is too late. That’s where X-rays can help; they provide a full view of what is going on inside your mouth.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    1. Detecting Cavities You Can’t See
  </h2>

  <p className="mb-4">
    Cavities are not always visible on the surface. Some form between the teeth or beneath old fillings. X-rays enable the dentist to detect these early, stopping bigger, more expensive problems.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    2. Monitoring Bone Health
  </h2>

  <p className="mb-4">
    X-rays tell your doctor about bone density and structure. This is especially crucial for those patients who suffer from periodontal disease, as bone loss can be monitored over time to monitor the extent of the condition.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    3. Identifying Infections and Abscesses
  </h2>

  <p className="mb-4">
    One may not see an abscess in the mirror, but negative spaces on radiographs indicate where the infection has moved to around the root of a tooth.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    4. Planning Dental Treatments
  </h2>

  <p className="mb-4">
    From braces to implants and root canals, dentists use tooth X-rays to plan treatments with precision. They depict teeth positions, jaw alignment and nerve pathways.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    5. Checking Tooth Development in Children
  </h2>

  <p className="mb-4">
    For children and teenagers in particular, X-rays are crucial for monitoring the development of permanent teeth, detecting alignment issues and finding problems before they become significant.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    Types of Dental X-Rays
  </h2>

  <p className="mb-4">
    There is not one type of dental X-ray. When a dentist chooses the type, it depends on what they need to examine. Here’s a guide to the most common types:
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    Bitewing X-Rays:
  </h2>

  <p className="mb-4">
    Routine dental frequency x-rays are bitewings. As the sensor, which the doctor ill fit inside you mouth, gets your upper as well as lower teeth.
  </p>

<h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Cavities between teeth </li>
    <li>Below the gum line </li>
    <li>Decay under fillings</li>
    <li>Bone levels around teeth </li>
  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Regular examinations and early cavity detection. </li>
    </ul>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Periapical X-Rays:
  </h3>
<p className="mb-4">
    Shows one or two teeth from crown to root and surrounding bone. Hence, you can say that it allows dentist to focus on one tooth
  </p>

  <h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Root infections </li>
    <li>Abscesses </li>
    <li>Fractures</li>
    <li>Impacted teeth </li>
  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Diagnosis of pain, planning of root canals or evaluation of tooth damage. </li>
    </ul>

     <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Panoramic X-Rays:
  </h3>
<p className="mb-4">
    Whole-mouth X-rays can be taken with a full-mouth series or panoramic image. The machine whirls around your head to create a broad view.
  </p>

  <h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Wisdom teeth </li>
    <li>Jawbone problems </li>
    <li>Temporomandibular joint (TMJ) disorders</li>
    <li>Cysts and tumors </li>
    <li>Sinus structure </li>

  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Clinical constraints for treatment planning, orthodontics and evaluation of wisdom tooth position. </li>
    </ul>

    <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Occlusal X-Rays:
  </h3>
<p className="mb-4">
    Occlusal views demonstrate structures of the floor or roof of the mouth. They are also bigger and tend to be used by kids.
  </p>


<h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Extra teeth </li>
    <li> Cysts </li>
    <li>Tooth development patterns</li>
    <li>Jaw fractures </li>
  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Children’s dental examinations and assessment of tooth development. </li>
    </ul>

<h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Cephalometric X-Rays:
  </h3>
<p className="mb-4">
    Used for orthodontics, this X-ray takes a picture of the side view of the head, including jaw and teeth relation.
  </p>


<h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Jaw alignment </li>
    <li> Bite relationship </li>
    <li>Growth patterns </li>
  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Orthodontic analysis and planning, braces and Jaw Correction.</li>
    </ul>

<h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Cone Beam CT (CBCT) Scans:
  </h3>
<p className="mb-4">
    A 3D X-ray, a CBCT scan, reveals the teeth, soft tissues, nerves and bones with great detail.
  </p>

  <h3 className="text-xl font-bold text-black mb-4">
   What They Show
  </h3>
  
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li> Precise bone structure </li>
    <li> Nerve pathways </li>
    <li> Jawbone thickness </li>
    <li> Implant placement areas</li>
  </ul>
  
  <h3 className="text-xl font-bold text-black mb-4">
   Best For
  </h3>
  <ul className="list-disc ml-4 pl-6 mb-6 space-y-0">
    <li>Planning dental implants, complex surgeries, and assessing jaw disorders.</li>
    </ul>


<h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   How Often Should I Get Dental X-Rays?
  </h3>
<p className="mb-4">
    It is age, oral health, medical history and symptoms that dictate the frequency of taking dental x-ray. For example:
  </p> 
  <ul className=" ml-4 pl-6 mb-6 space-y-0">
    <li>1. The teeth and jaws of children are still growing, which means X-rays may be needed more frequently. </li>
    <li>2. A person with good oral health may only require them once every 1 to 2 years. </li>
    <li>3. People with gum disease, or a high frequency of cavities, are likely to need X-rays more frequently. </li> 
  </ul>
  <p className="mb-4">
    In addition to this, today’s digital X-rays produce 80–90% less radiation than the old type of film X-rays, so they are safe, even if taken more frequently for health reasons.

  </p> 


  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
   Why Do Children Need a Tooth X-ray?
  </h3>
<p className="mb-4">
    Children might have X-rays more often, especially if they are prone to cavities or have alignment problems. X-rays help:
  </p> 
  <ul className="list-disc ml-4 pl-6 mb-0 space-y-0">
    <li>Monitor erupting adult teeth  </li>
    <li>Identify spot spacing or crowding issues early </li>
    <li>Cavities on the rise, which can happen in children </li>
    <li>Identify any jaw development issues </li> 
  </ul>
  <p className="mb-4">
So, the more quickly we are able to identify dental problems, the better off your child’s mouth will be for healthy growth.
  </p>  


  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Purposes of Dental X-Rays
  </h3>
<p className="mb-4">
    Dental X-rays equate to better oral care for many reasons, as follows:
  </p> 

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Early Diagnosis:
  </h3>
<p className="mb-4">
    The younger your kid is when dental issues are caught, the less susceptible they are to feeling pain, having infections and extractions or requiring expensive treatments.
  </p> 

   <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Better Treatment Planning:
  </h3>
<p className="mb-4">
    X-rays themselves, from fillings to orthodontics to implants, often provide informative scans that enable dentists to chart more accurate and effective courses of action.
  </p>

   <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Monitoring Changes Over Time:
  </h3>
<p className="mb-4">
    Compare X-rays from different visits to look for changes such as bone loss, shifting teeth or healing after treatment.
  </p>

   <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Preventing Emergencies:
  </h3>
<p className="mb-4">
    Finding these problems before they become a major issue can avoid unexpected dental emergencies like abscesses and broken teeth.<br/><br/>
    Aside from these specific advantages, though, dental X-rays allow dentists and patients alike to make well-informed decisions about the state of oral health. Being able to see the action below the gums helps make sense of recommended treatments and take preventive measures.<br/><br/>
    Ultimately, such early screenings will save your teeth and time, money and pain attending to problems when treatment can be delivered at the ground level.
  </p>

  <h3 className="text-xl font-bold text-[#0a1a5c] mb-4">
  Conclusion:
  </h3>
<p className="mb-4">
    They’re a window into your oral health. They reveal hidden problems, they guide treatment and, ideally, at least, help make sure you receive the best treatment available. Quick, safe and highly effective they play an important role in keeping your smile healthy for many years to come.
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

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[40px] h-[40px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
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





