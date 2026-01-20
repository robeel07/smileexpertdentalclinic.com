import React from 'react'
import { Link } from "react-router-dom";

import blog from "../Images/blog.jpg";
import blog1 from "../Images/blog1.jpg";

import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";





export default function DentalDecay() {
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
        src={blog1}
        alt="Dental Decay"
        className="w-full h-auto object-contain"
      />
    </div>

    {/* Right */}
    <div>
      <h1 className="text-4xl font-bold text-[#0a1a5c] mb-6">
        What Causes Dental Decay (Caries)
      </h1>

      
    </div>
    <div>
        <p>
            Well, if you have ever wondered how a little toothache becomes a full-blown cavity. You’re not alone.<br/><br/>
            <span className='text-blue-600'>Dental caries</span> is one of the most prevalent oral diseases globally that occurs in all age groups. Even those who brush religiously will still develop cavities if certain habits and conditions aren’t addressed.<br/><br/>
            Knowing the cause of a tooth cavity is the first step in protecting your teeth and preserving a healthy smile for life.
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
        <p>1. What Is Tooth Cavity?</p>

        <p className="pl-4">1.1. What Causes Cavities in Teeth?</p>
        <p className="pl-8">1.1.1. Poor Oral Hygiene:</p>
        <p className="pl-8">1.1.2. Frequent Sugar and Starch Consumption:</p>
        <p className="pl-8">1.1.3. Acidic Foods and Beverages:</p>
        <p className="pl-8">1.1.4. Dry Mouth (Lack of Saliva):</p>
        <p className="pl-8">1.1.5. Not Enough Fluoride:</p>
        <p className="pl-8">1.1.6. Poor Diet and Nutritional Deficiencies:</p>
        <p className="pl-8">1.1.7. Teeth Grinding (Bruxism):</p>
        <p className="pl-8">1.1.8. Irregular Dental Visits:</p>

        <p className="pl-4 pt-1">1.2. How to Prevent Tooth Cavity?</p>
        <p className="pl-8">1.2.1. Brush Properly Twice a Day:</p>
        <p className="pl-8">1.2.2. Floss Daily:</p>
        <p className="pl-8">1.2.3. Limit Sugary and Acidic Foods:</p>
        <p className="pl-8">1.2.4. Drink Plenty of Water:</p>
        <p className="pl-8">1.2.5. Chew Sugar-Free Gum:</p>
        <p className="pl-8">1.2.6. Use Mouthwash:</p>
        <p className="pl-8">1.2.7. Visit Your Dentist Regularly:</p>

        <p className="pl-4 pt-1">1.3. FAQs</p>
        <p className="pl-8">1.3.1. Can You Reverse a Cavity?</p>
        <p className="pl-8">
          1.3.2. When is it too late to reverse tooth decay?
        </p>
        <p className="pl-8">
          1.3.3. Do cavities spread from Tooth to Tooth?
        </p>

        <p className="pl-4 pt-1">
          1.4. Conclusion: Protect Your Smile Before It’s Too Late
        </p>
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







<div className="max-w-7xl ml-44 mr-auto mt-6 text-gray-900">
  <h1 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    What Is Tooth Cavity?
  </h1>

  <p className="mb-4">
    Caries or cavities are the decay of tooth enamel, which is caused by acids
    that are made when plaque (film) builds up on your teeth. These bacteria
    live on sugars and starches that remain after eating, chewing, and creating
    acids that wear down enamel over time.
  </p>

  <p className="mb-6">
    If allowed to go untreated, tooth decay may advance from the enamel into the
    dentin and pulp. This can cause pain, infection, sensitivity and tooth loss
    to occur. The silver lining is that cavities are almost entirely preventable
    with the right care and know-how.
  </p>

  <h2 className="text-xl font-semibold text-[#0a1a5c] mb-2">
    What Causes Cavities in Teeth?
  </h2>

  <p className="mb-4">
    Dental cavities don’t develop overnight. They are a product of various
    factors that acted in concert.
  </p>

  <p className="mb-6">
    Here are 8 things that can cause tooth decay in your mouth that you may not
    be aware of.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Poor Oral Hygiene:
  </h3>

  <p className="mb-4">
    If you skip brushing or flossing,{" "}
    <span className="text-blue-700">plaque</span> can accumulate on teeth.
    Plaque is a sticky layer of bacteria that adheres to the enamel and creates
    acid. If not regularly gotten rid of, plaque solidifies into tartar and
    raises the possibility of cavities.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Frequent Sugar and Starch Consumption:
  </h3>

  <p className="mb-4">
    Candy, soda, desserts and processed carbohydrates provide food to the bad
    bacteria in your mouth. The more often you eat sugar, the longer acids
    attack your teeth and cause decay.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Acidic Foods and Beverages:
  </h3>

  <p className="mb-4">
    The acid in citrus fruits, sodas, sports and energy drinks can directly
    weaken enamel. Thin or eroded enamel means the teeth are more prone to
    cavities.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Dry Mouth (Lack of Saliva):
  </h3>

  <p>
    Saliva is important for rinsing food debris and acid. They also found that
    conditions such as dehydration, some medications or medical treatments can
    limit saliva production and raise the risk of dental decay.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Not Enough Fluoride:
  </h3>

  <p>
    Fluoride strengthens tooth enamel and can even reverse early decay. Non-fluoridated toothpaste or non-fluoride containing drinking water can allow teeth to be more prone to cavities.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Poor Diet and Nutritional Deficiencies:
  </h3>

  <p>
    A diet deficient in calcium and vitamins damages teeth. Teeth that are not getting the nutrients they require have weaker enamel, which becomes more susceptible to acid attacks and cavities.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Teeth Grinding (Bruxism):
  </h3>

  <p>
    Enamel is worn away over time. Teeth grinding or clenching teeth over and over wears enamel away. When the layer of enamel that protects a tooth is broken or eaten away, bacteria easily get inside and create cavities, for example.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Irregular Dental Visits:
  </h3>

  <p>
    Failure to keep up with routine dental visits allows early evidence of cavities to slip beneath the radar. Dentists are able to identify and manage decay before it reaches a painful or unmanageable stage, preventing the need for expensive interventions down the track.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    How to Prevent Tooth Cavity?
  </h3>

  <p>
    It’s easier to prevent dental decay than treat it!<br/><br/>
There are so many easy things you can do each day that will improve your dental health and minimize your need for fillings.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Brush Properly Twice a Day:
  </h3>

  <p>
    Brush with fluoride toothpaste for a minimum of two minutes, covering all surfaces of the teeth. Good brushing rids the plaque before it starts to damage.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Floss Daily:
  </h3>

  <p>
    Flossing helps scrape away food particles and plaque from in between teeth where brushes can’t reach. This is one of the crucial measures to protect between-teeth spaces from developing dental caries.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Limit Sugary and Acidic Foods:
  </h3>

  <p>
    Limit snacks and drinks high in sugar. When you do splurge, rinse your mouth with water afterward to cancel out acid exposure.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Drink Plenty of Water:
  </h3>

  <p>
    Water helps remove food activators and bacteria. The presence of fluoride in the water also remineralizers and helps prevent tooth decay.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Chew Sugar-Free Gum:
  </h3>

  <p>
    Chewing sugar-free gum encourages the production of saliva: this helps dilute acids and protect your teeth after eating.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Use Mouthwash:
  </h3>

  <p>
    An antibacterial or fluoride mouthwash helps give more protection against plaque and strengthen enamel.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Visit Your Dentist Regularly:
  </h3>

  <p>
    Regular visits to the dentist allow for early detection of decay and a healthy mouth.
  </p><br/>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    FAQS
    </h3><br/>


  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Can You Reverse a Cavity?
  </h3>

  <p>
    Some early-stage tooth decay, also called demineralization, can be reversed through fluoride treatments or by using better <span className="text-blue-700">oral hygiene</span> and eating habits. But, after a cavity has developed, you do need professional treatment.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    When is it too late to reverse tooth decay?
  </h3>

  <p>
    It’s no longer possible to reverse tooth decay when the enamel has been irreversibly damaged, and a visible hole becomes present in the tooth. While it’s at this stage, cavities or other work must be done.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Do cavities spread from Tooth to Tooth?
  </h3>

  <p>
    Yes, cavities can spread. The bacteria that cause tooth decay can spread to adjacent teeth, particularly if oral hygiene is low, as it can be in a child, increasing the potential for multiple cavities.
  </p>

  <h3 className="text-lg font-semibold text-[#0a1a5c] mb-2">
    Conclusion: Protect Your Smile Before It’s Too Late
  </h3>

  <p>
    So, once you know what cavities are caused by and how to prevent them, that issue can go away, and you’ll never have to worry about pain again!<br/><br/>
    A beautiful smile requires care, commitment, and routine dental visits. Minor efforts now could save your teeth for a lifetime!
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

