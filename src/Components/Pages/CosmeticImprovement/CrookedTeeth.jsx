import React from "react";
import { Link } from "react-router-dom";
import seventyeight from "../../Images/seventyeight.jpg";
import seventynine from "../../Images/seventynine.jpg";
import eighty from "../../Images/eighty.jpg";
import eightyone from "../../Images/eightyone.jpg";
import eightytwo from "../../Images/eightytwo.jpg";
import orthodontic from "../../Images/orthodontic.png";
import retainer from "../../Images/retainer.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function CrookedTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${seventyeight})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Crooked Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CosmeticImprovement/crookedteeth"></Link>}


<div
  style={{
    maxWidth: "1300px",
    margin: " 40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
We know how crooked teeth can affect appearance and confidence level. That’s why at SmileOn, we provide you with a choice of the most effective and cost-saving crooked teeth treatment.It will help you get the perfect straight smile you desire.<br/> 
If you need Invisalign Clear Aligners, crowns, or veneers, you can rest assured that we have the right skills to give you the desired outcomes. For all your dental problems, we are here to help you.
  </p>
</div>

<div className="bg-[#f8fbff] py-16 px-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    
    {/* Left Content */}
    <div>
      <h2 className="text-3xl md:text-4xl text-[#0b1c63] mb-6">
        Symptoms Of Crooked Teeth
      </h2>

      <p className="text-gray-600 mb-2 leading-relaxed">
        Crooked teeth are not just a beauty problem; they also bring inconvenience
        and poor oral health with them. If these signs are not treated early,
        they may lead to other severe problems. Common symptoms of crooked teeth include:
      </p>

      <ul className="space-y-3 text-gray-700 list-disc list-inside">
        <li>Difficulty chewing or biting</li>
        <li>
          Growing <span className="text-blue-600 font-medium">gum diseases</span>
        </li>
        <li>Speech problems or the act of lisping</li>
        <li>
          <span className="text-blue-600 font-medium">Jaw pain</span> or discomfort
        </li>
        <li>Damage of tooth decay</li>
      </ul>

      <p className="text-gray-600 mt-6">
        If you have any of these symptoms, then feel free to give SmileOn a call
        for an effective crooked teeth treatment consultation.
      </p>
    </div>

    {/* Right Image */}
    <div className="w-full h-[420px] rounded-2xl overflow-hidden">
      <img
        src={seventynine}
        alt="Dental consultation"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</div>


<div class="flex flex-col md:flex-row items-center md:items-start gap-8 p-8 bg-white">
  
  <div class="md:w-1/2">
    <img 
      src={eighty} 
      alt="Dentist checking teeth" 
      className="w-[620px] h-[400px] object-cover rounded-lg ml-28"
    />
  </div>

  <div class="md:w-1/2">
    <h2 class="text-3xl md:text-4xl text-[#0b1c63] mb-4">Causes Of Crooked Teeth</h2>
    <p class="text-gray-700 mb-4">
      Misaligned or crooked teeth may occur as a result of genetic issues or in response to specific influences in your environment. Knowing the origin of the problem can help select the right treatment for crooked teeth. Common causes of crooked teeth include:
    </p>
    <ul class="list-disc list-inside text-gray-700 space-y-1">
      <li>Thumb sucking</li>
      <li>Genetics</li>
      <li>Mouth Injury</li>
      <li>Poor oral health</li>
      <li>Prolonged pacifier use</li>
      <li>Jaw size mismatch</li>
    </ul>
  </div>
</div>



<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center md:items-start gap-8">
  {/* LEFT TEXT */}
  <div className="md:w-1/2">
    <h2 className="text-3xl md:text-4xl text-[#0b1c63] mb-4">
      Crooked Teeth Treatment Option
    </h2>
    <p className="text-m text-black mb-2">
      Our treatments and procedures are effective in making your teeth perfectly aligned and healthier at SmileOn Dental Clinic. Whether it’s getting braces on crooked teeth, exploring advanced options like replacing crooked teeth with implants, or seeing the stunning results of crooked teeth braces before after transformations, we have the expertise to meet your needs. Top crooked teeth treatment options include:
    </p>

    <ul className="list-disc list-inside mb-2 text-black text-m space-y-1">
      <li>Invisalign Clear Aligners</li>
      <li>
        <a href="#" className="text-[#00a6ff] font-semibold hover:underline">
          Orthodontics
        </a> (fixed braces)
      </li>
      <li>
        <strong className="font-bold">Crowns</strong>
      </li>
      <li>Traditional Braces</li>
      <li>Veneers</li>
      <li>
        <strong>
          <a href="#" className="text-[#00a6ff] font-semibold hover:underline">
            Dental Implants
          </a>
        </strong>
      </li>
    </ul>

    <p className="text-s text-black">
      No matter what your dental issue may be, SmileOn dental clinic is happy to help you. Want a straighter smile? Begin your journey with us right now.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="md:w-1/2">
    <img
      src={eightyone}
      alt="Dentist treating patient"
      className="rounded-lg w-full object-cover"
    />
  </div>
</div>



<div className="w-full bg-[#f4f7fb] lg:py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-10">

    {/* Image Section */}
    <div className=" lg:h-[410px] w-[650px] -ml-16 ">
  <img
    src={eightytwo}
    alt="Dental Treatment"
    className="rounded-lg w-full object-cover"
  />
</div>



    {/* Content Section */}
    <div className="max-w-xl">
      <h2 className="text-3xl md:text-4xl text-[#0b1c63] mb-3">
        Get Prepared
      </h2>

      <p className="text-[15px] text-gray-700 leading-7 mb-1">
        When you go for crooked teeth treatment at SmileOn Dental Clinic, your dentist is likely
        to ask you several questions. Questions your dentist may ask:
      </p>

      <ul className="list-disc pl-6 text-[15px] text-gray-700 leading-7 mb-1">
        <li>At what age did you realize your teeth had started to grow crooked?</li>
        <li>Where does it hurt?</li>
        <li>Have you ever had braces?</li>
        <li>Have you been a patient of orthodontic treatment?</li>
        <li>Do you suffer from Bruxism or clenching?</li>
        <li>Here are the two choices: Invisalign or traditional braces.</li>
        <li>What would you like: crowns and implants?</li>
        <li>Have you had any past or present medical illnesses?</li>
        <li>Are you taking any medicines?</li>
      </ul>

      <p className="text-[15px] text-gray-700 leading-7">
        It will be useful for us to know your expectations. Then, we design the ideal plan for your
        smile, being ready with answers!
      </p>
    </div>

  </div>
</div>

<div className="text-center py-16 bg-white">
  {/* Section Heading */}
  <h2 className="text-3xl text-[#0b2c6b] w-full mb-4">
    Book your Appointment Now
  </h2>
  <p className="text-m text-black-700 mb-10  mx-auto">
    It is advisable for you to visit a dentist to seek advice regarding your symptoms.
    Book an appointment regarding crooked teeth treatment.
  </p>

  {/* Cards */}
  <div className="flex justify-center gap-8 flex-wrap">
    {/* Card 1 */}
    <div className="bg-white shadow-md rounded-xl p-8 w-72 flex flex-col items-center transition-transform hover:scale-105">
      <img
        src={retainer}
        alt="Invisalign Clear Aligners"
        className="w-16 h-16 mb-4"
      />
      <p className="text-[#0B1E5D] font-semibold text-center">
        Invisalign Clear Aligners
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white shadow-md rounded-xl p-8 w-72 flex flex-col items-center transition-transform hover:scale-105">
      <img
        src={orthodontic}
        alt="Orthodontist Specialists"
        className="w-16 h-16 mb-4"
      />
      <p className="text-[#0B1E5D] font-semibold text-center">
        Orthodontist Specialists
      </p>
    </div>
  </div>
</div>

<div className="max-w-6xl mx-auto px-4 py-8">
  <h2 className="text-center text-[#0b2c6b] text-2xl mb-6">FAQs</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        01. How much is it to straighten your teeth?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        05. Can misalignment of the teeth be prevented?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        02. Do braces hurt?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        06. Are speech disorders related to crooked teeth?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        03. Can adults have braces?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        07. How do you align the crooked teeth?
      </p>
    </div>

    <div className="flex items-center bg-[#5CB5B5] px-4 py-1.5 cursor-pointer
                    hover:bg-[#4a9a9a] transition-colors duration-300">
      <span className="font-bold w-5 text-center mr-3">+</span>
      <p className="text-black mt-3 text-sm leading-tight">
        04. Do you need to treat crooked teeth?
      </p>
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