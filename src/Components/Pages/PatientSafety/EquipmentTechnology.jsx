import React from "react";
import { Link } from "react-router-dom";
import tech from "../../Images/tech.jpg";
import tech1 from "../../Images/tech1.jpg";
import tech2 from "../../Images/tech2.jpg";
import tech3 from "../../Images/tech3.jpg";
import tech4 from "../../Images/tech4.jpg";
import tech5 from "../../Images/tech5.jpg";
import tech6 from "../../Images/tech6.jpg";




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function SafetyEquipment() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${tech})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Patient Safety</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Equipment & Technology
    </h1>
  </div>
</div>
    </div>

    {<Link to="/PatientSafety/equipmenttechnology"></Link>}

    <div className="max-w-7xl mx-auto px-6 py-14 text-black-900">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#0a1a5c]">
            Equipment & Technology
        </h1>
        <p className="leading-relaxed">
            SmileExpert clinic offers the very latest advantages in dental technology and equipment. SmileOn doctors are continually trained in the use of our advanced technology and equipment, and in clinical best practices, to ensure that patients benefit from the advantages available today.
        </p>
    </div>

    <div className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 1 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech1}
        alt="Disposable Gloves"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Disposable Gloves
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Hands are properly washed, sanitized and dried before donning gloves.
          Firstly a pair of polythene glove is worn followed by a pair of latex
          gloves for every patient. Gloves are even changed if they appear to be
          contaminated during the treatment.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech2}
        alt="Face Masks"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Rotary Tools
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          SmileExpert imports world-class rotary tools from Germany and Japan, which are used for drilling. They enable doctors to drill with greater precision, so the plaque and bacteria present at the site can be thoroughly removed. This allows fillings to properly attach to the cavity wall. As a result, fillings last longer.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech3}
        alt="Protective Eyewear"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          X-Rays
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          SmileExpert clinic use the latest x-ray technology to diagnose oral health problems in a painless, non-invasive way. Though exposure to radiation can pose health risks, SmileExpert uses sophisticated, portable x-ray equipment that limits this exposure to negligible levels. SmileExpert clinics also use lead aprons and lead thyroid collars to protect doctors and patients from radiation. The principle directs medical establishments to identify and use ways to minimize the exposure of medical personnel, patients and clinical staff to radiation.
        </p>
      </div>
    </div>

  </div>
</div>

<div className="w-full bg-white py-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 4 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech4}
        alt="Disposable Gloves"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Water Filteration System
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
            SmileExpert clinic rely on reverse osmosis (RO) filtration systems to ensure the safest possible water supply.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech5}
        alt="Face Masks"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Protective Clothing
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Protective clothing such as Scrubs prevent contamination of underlying clothing and protects from exposure to blood and body substances. Scrubs are worn by all Doctors throughout the day. They are then washed later in the evening.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech6}
        alt="Protective Eyewear"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Surgical Coverall/Gowns
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Gowns are critical elements of the PPE since they are the second- most-used piece of PPE, following gloves. No dental procedure is taken up without donning the surgical gown.
        </p>
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