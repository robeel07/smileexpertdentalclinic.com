import React from "react";
import bg from "./Images/bg.jpg"; 
import bg1 from "./Images/bg1.jpg"; 
import bg2 from "./Images/bg2.jpg"; 
import Pic3 from "./Images/Pic3.jpg"; 
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function HeroSection() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${bg})` }}
    >
      
      <div className="absolute inset-0 bg-black/50"></div>

    
      <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Yellow Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

  <div className="w-85 px-40 py-16 align-center text-black">
  <p className="text-base leading-relaxed">
    Concerned about yellow teeth? You’re not alone. We understand. Despite your efforts with brushing, whitening toothpaste, and flossing, your teeth may still appear yellow. Don’t worry. Professional treatment can effectively address yellow teeth. Visit SmileExpert for a discussion on yellow teeth treatment. Stained or yellow teeth can affect your confidence, but there are affordable and durable solutions available.
  </p>
</div>

<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  
  <div>
    <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
      Symptoms of yellow teeth
    </h2>

    <p className="text-base text-gray-800 leading-relaxed ">
      Yellow teeth can be disheartening, whether it’s a few teeth or all of them. The signs are usually noticeable, standing out against your normal tooth color. If you’re concerned about the color of your teeth, schedule a dentist appointment for yellow teeth treatment to explore your options.
    </p>

    <p className="text-base text-gray-800 leading-relaxed mt-0">
      Sometimes all of your teeth will be discoloured or stained and you notice it in a photograph with other people. If you’re worried about the color of your teeth, book an appointment with a dentist for yellow teeth treatment to discuss your options.
    </p>
  </div>

  
  <div>
    <img
      src={bg1}
      alt="Dental treatment"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>

</div>

<div className="bg-slate-50 py-16">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Image */}
    <div>
      <img
        src={bg2}
        alt="Dental checkup"
        className="w-full h-auto rounded-3xl object-cover"
      />
    </div>

  
    <div>
      <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
        Causes of yellow teeth
      </h2>

      <p className="text-base text-gray-800 leading-relaxed mb-4">
        Yellow teeth can be caused by various factors. Regular smoking and coffee
        consumption can lead to staining. Fizzy drinks and red wine can also
        contribute to yellowing. Additionally, thin tooth enamel can be a potential
        cause of yellow teeth. There are also a few other causes of yellow teeth
        including:
      </p>

      <ul className="list-disc pl-10 text-gray-800 space-y-2">
        <li>Some diseases</li>
        <li>Certain medications</li>
        <li>Your age</li>
        <li>Trauma or injury to your teeth</li>
      </ul>
    </div>

  </div>
</div>

<div className="w-full bg-white py-20">
  <h2 className="text-center text-4xl font-semibold text-[#0a1a5c] mb-4">
    What Next
  </h2>

  
  <p className="w-85 text-center text-gray-900 text-m leading-relaxed px-36">
    Discover treatment options by exploring potential procedures. We suggest scheduling a dental appointment for personalized guidance regarding your condition.
    Book <span className="text-blue-500 cursor-pointer">book online</span> or call now to secure your appointment.
  </p>


  <div className="mt-16 flex justify-center">
    <div className="w-[380px] bg-white rounded-2xl shadow-lg py-10 flex flex-col items-center">
      
      
      <div className="mb-2">
        <img
        src={Pic3}
        alt="Teeth Whitening"
        className="w-[110px] h-[90px] object-contain mb-0"
      />
      </div>

      
      <p className="text-[#0a1a5c] font-semibold mb-0">
        Teeth Whitening Treatment
      </p>
    </div>
  </div>
</div>

<div className="w-full bg-white py-4">

  <h2 className="text-center text-3xl font-semibold text-[#0a1a5c] mb-6">
    FAQs
  </h2>

  
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-2">
  
    <div className="bg-[#69bdb8] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#5bb0ab] flex items-center">
  <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full">
    <span className="text-2xl font-bold">+</span>
    <p className="text-m font-medium mt-3">
      01. How much does it cost to fix yellow teeth?
    </p>
  </div>
</div>


    <div className="bg-[#69bdb8] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#5bb0ab] flex items-center">
  <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full">
    <span className="text-2xl font-bold">+</span>
    <p className="text-m font-medium mt-3">
      01. How do you prevent yellow teeth?
    </p>
  </div>
</div>


    <div className="bg-[#69bdb8] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#5bb0ab] flex items-center">
  <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full">
    <span className="text-2xl font-bold">+</span>
    <p className="text-m font-medium mt-3">
      01. What does it mean if you have yellow teeth?
    </p>
  </div>
</div>


    <div className="bg-[#69bdb8] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#5bb0ab] flex items-center">
  <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full">
    <span className="text-2xl font-bold">+</span>
    <p className="text-m font-medium mt-3">
      01. Why are my teeth yellow when I brush them everyday?
    </p>
  </div>
</div>


    <div className="bg-[#69bdb8] px-4 py-2 cursor-pointer transition-all duration-300 hover:bg-[#5bb0ab] flex items-center">
  <div className="grid grid-cols-[24px_1fr] items-center gap-2 w-full">
    <span className="text-2xl font-bold">+</span>
    <p className="text-m font-medium mt-3">
      01. How do you get rid of yellow teeth?
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

      <p className="my-2 flex gap-[10px] px-1">✉ aneelabrar555@gmail.com</p>

      <p className="my-3 flex gap-[10px] px-2 ">☏ 03008395562</p>

      <p className="my-2 flex gap-[10px] px-2 leading-[1.4]">
        ⚲ Saddique Hospital Stadium Road Khanewal
      </p>

      <p className="mt-6 font-semibold px-1">🕒 Clinic Timing<br/> 11:00am to 9:00pm</p>

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

  );
}

