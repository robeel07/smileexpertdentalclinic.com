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
    <div className="mt-2 flex justify-center">
      <Link
        to="/dental-decay"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
      >
        Read More →
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
    <div className="mt-4 justify-center">
      <Link
        to="/cosmetic-vs-aesthetic"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
      >
        Read More →
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
    <div className="mt-2 flex justify-center">
      <Link
        to="/benefits-of-dental-checkups"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
      >
        Read More →
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
  <div className="p-6 flex-1 flex flex-col justify-between">
    <div>
      <Link to="/what-are-dental-xrays" className="no-underline">
       <h3 className="text-1xl font-semibold hover:text-blue-600 text-[#0a2a66] mb-4"> What Are Dental X Rays – Purpose & Types</h3>
       </Link>
      <p className="text-gray-700 text-sm leading-relaxed">
        Dental X-rays are one of the easiest ways, and simple tools, for your dentist to peek beneath the surface. They can make you see..
      </p>
    </div>
    <div className="mt-4 flex justify-center">
      <Link
        to="/what-are-dental-xrays"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg">
        Read More →
      </Link>
    </div>
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
    <div className="mt-4 flex justify-center">
      <Link
        to="/what-is-all-4-dental-implants"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
      >
        Read More →
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
    <div className="mt-4 flex justify-center">
      <Link
        to="/dental-surgery-procedures"
        className="inline-block px-3 py-1 bg-blue-900 text-white font-semibold rounded-md hover:bg-blue-600 transition-all duration-300 no-underline shadow-md hover:shadow-lg"
      >
        Read More →
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
        
              <p className="my-2 flex gap-[10px] ">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px]  ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-2">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold ">🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[35px] h-[35px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
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




