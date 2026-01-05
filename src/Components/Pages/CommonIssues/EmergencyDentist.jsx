import React from "react";
import { Link } from "react-router-dom";
import nine from "../../Images/nine.png";
import eightythree from "../../Images/eightythree.jpg";
import eightyfour from "../../Images/eightyfour.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";






export default function EmergencyDentist() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${nine})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Emergency Dentist in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CommonIssues/emergencydentist"></Link>}

<div className=" px-2 py-16">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold text-[#0B1C6D] mb-4">
        Dental Injuries
      </h2>

      <p className="text-gray-600 leading-relaxed mb-2">
        More often than others, dental crises arise. One of the most frequent dental
        emergencies is tooth loss, which frequently occurs as a result of an accident
        or sports injury. You might shatter or chip a tooth while eating anything hard,
        necessitating immediate dental care. It’s also typical to get oral trauma in an
        accident and require emergency care. Other frequent dental injury emergencies
        include the following:
      </p>

      <ul className="list-disc pl-5 ml-5 text-gray-700">
        <li>A <span className="text-[#0aa6ff] font-medium">fractured tooth</span></li>
        <li>Knocking a tooth through direct impact</li>
        <li>Dental avulsion, or completely losing a tooth</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
      <div className="w-full h-[420px] rounded-2xl overflow-hidden">
        <img
          src={eightythree}
          alt="Dental Injury"
          className="w-full h-full object-cover"
        />
      </div>
  </div>
</div>

<div className="bg-[#f5f9fc] px-2 py-16">
  <div className="max-w-7xl mx-auto ">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
      
      {/* Left Image */}
      <div className="w-full h-[420px] overflow-hidden rounded-2xl">
        <img
          src={eightyfour}
          alt="Dental Emergency"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Content */}
      <div>
        <h2 className="text-3xl font-bold text-[#0a0a5c] mb-4">
          Common Emergency Symptoms
        </h2>

        <p className="text-gray-700 mb-0 leading-relaxed">
          Dental crises can be excruciatingly painful and disruptive. They
          frequently occur suddenly and put you through a lot of stress. You
          may not feel any pain in some circumstances, but you still need
          emergency care. Always pay attention to any odd symptoms you
          experience in your mouth. The following are the warning symptoms of a
          dental emergency:
        </p>

        <ul className="list-disc pl-10 text-gray-700">
          <li>
            <span className="text-[#0aa6ff] font-semibold">Toothache</span> or sudden tooth pain
          </li>
          <li>Swelling around your jaw or mouth</li>
          <li>pus discharge</li>
          <li>fever</li>
          <li>tender to touch</li>
        </ul>

        <p className=" text-gray-800 font-medium mt-0">
          Book a dentist appointment immediately for a dental emergency.
        </p>
      </div>

    </div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-2 py-16">
  
  {/* Top Paragraph */}
  <p className="text-gray-700 mb-12 leading-relaxed">
    Do you experience pain? Do you have a dental emergency such as{" "}
    <span className="text-[#0aa6ff] font-medium">toothache</span> or dental
    injuries like{" "}
    <span className="text-[#0aa6ff] font-medium">missing teeth</span> from
    sports? Other dental emergencies can include{" "}
    <span className="text-[#0aa6ff] font-medium">fractured teeth</span>,
    fillings, or facial swelling.
  </p>

  {/* Heading */}
  <h2 className="text-3xl font-bold text-center text-[#0a0a5c] mb-10">
    FAQs
  </h2>

  {/* FAQ Grid */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    
    {/* Left Column */}
    <div className="space-y-2 items-center">
      {[
        "How much does it cost for emergency dental treatment?",
        "What can I do to help with the pain from a dental injury?",
        "When to get an emergency dentist appointment?",
        "What are the emergency conditions for dentistry?",
        "What should you do when a tooth falls out?",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#5CB5B5] px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-[#4a9a9a]"
        >
          <span className="text-2xl font-bold">+</span>
          <p className="font-medium leading-snug mt-3">
            {String(index + 1).padStart(2, "0")}. {item}
          </p>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div className="space-y-2">
      {[
        "What do you do if you fracture, chip or break a tooth?",
        "How can you prevent a dental emergency?",
        "What is the primary cause of most dental emergencies?",
        "Can an emergency dentist extract a tooth?",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#5CB5B5] px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-[#4a9a9a] "
        >
          <span className="text-2xl font-bold">+</span>
          <p className="font-medium leading-snug mt-3">
            {String(index + 6).padStart(2, "0")}. {item}
          </p>
        </div>
      ))}
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