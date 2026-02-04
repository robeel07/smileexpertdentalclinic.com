import { Link } from "react-router-dom";
import contact from "../Components/Images/contact.jpg";


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Appointment (){
    return(
        <>
    <div
  className=" relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_65%] flex items-center pt-28 sm:pt-32 "
  style={{ backgroundImage: `url(${contact})` }}
>
  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/55"></div>

  {/* Content */}
  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1
      className=" text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]" >
      Book Appointment
    </h1>
  </div>
  </div>


 <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-4 py-12">
      
      {/* Card */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-white/70 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden">
        
        {/* LEFT – Info Section */}
        <div className="bg-gradient-to-br from-blue-800 to-blue-900 text-white p-10 flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 leading-tight">
            Book Your <br /> Dental Appointment
          </h2>
          <p className="text-blue-100 mb-6">
            Professional care for your smile. Fill out the form and our team will
            contact you shortly.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Experienced & certified dentists
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Modern dental equipment
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 bg-white rounded-full"></span>
              Comfortable & friendly clinic
            </li>
          </ul>
        </div>

        {/* RIGHT – Form Section */}
        <div className="p-8">
          <h3 className="text-3xl font-semibold text-blue-900 mb-8">
            Patient Details
          </h3>

          <form className="space-y-5">

            {/* Full Name */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Full Name :
              </label>
              <input
                type="text"
                placeholder="Ali Ahmed"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Phone Number :
              </label>
              <input
                type="tel"
                placeholder="+92 "
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address :
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            {/* Dental Problem */}
            <div className="relative">
  <label className="text-sm font-medium text-gray-700">
    Dental Concern :
  </label>
  <select
    className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 bg-white focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
  >
    <option className="text-gray-500">Select</option>
    <option>Teeth Cleaning</option>
    <option>Dental Anxiety</option>
    <option>Teeth Grinding</option>
    <option>Dental Braces</option>
    <option>Smile Makeover</option>
    <option>Teeth Whitening</option>
    <option>Missing Teeth</option>
    <option>Gum Issues</option>
    <option>Dental Implants</option>
    <option>Routine Checkup</option>
  </select>

  {/* Custom arrow */}
  <div className="pointer-events-none absolute inset-y-0 right-4 mt-7 flex items-center">
    <svg
      className="h-5 w-5 text-gray-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.08 1.04l-4.25 4.65a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  </div>
</div>


            {/* Comment */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Additional Notes :
              </label>
              <textarea
                rows="4"
                placeholder="Describe your issue briefly..."
                className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-500 hover:to-blue-600 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-lg"
            >
              Confirm Appointment
            </button>

          </form>
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
            
                  <p className="mt-6 font-semibold "> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
            
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
    
            
                          className="w-[35px] h-[35px] bg-[#1f1f1f] flex justify-center items-center rounded-[8px] no-underline"
    
            
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