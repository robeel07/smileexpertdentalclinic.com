import React from "react";
import { Link } from "react-router-dom";
import fortytwo from "../../Images/fortytwo.jpg";
import eightyfive from "../../Images/eightyfive.jpg";
import eightysix from "../../Images/eightysix.jpg";
import eightyseven from "../../Images/eightyseven.jpg";
import eightyeight from "../../Images/eightyeight.jpg";
import eightynine from "../../Images/eightynine.jpg";
import sed from "../../Images/sed.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function DentalAnxiety() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_40%]"
      style={{ backgroundImage: `url(${fortytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Dental Anxiety Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CommonIssues/dentalanxiety"></Link>}

<div className="w-85 px-40 py-16 align-center text-black">
  <p className="text-base leading-relaxed">
Dental fear is valid. We understand and are here to help. Various reasons can cause apprehension before a dental appointment. Past experiences might have led to a fear of dentists. Major procedures like <span className="text-[#0aa6ff] font-semibold">root canals</span> or long gaps since your last dental visit can contribute to concerns about your teeth.<br/>
Feeling some anxiety before a dental visit is normal. However, for some individuals, it goes beyond typical nervousness. Please communicate your feelings to us so we can address them. We are committed to ensuring your comfort and will make every effort to alleviate your worries.
  </p>
</div>

<div className=" px-2 py-2">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          When to See a Dentist:
        </h2>

        <p className="text-gray-700 mb-0">
          If in doubt, check it out. Book an appointment to see a dentist as
          soon as possible if:
        </p>

        <ul className="list-disc pl-10 space-y-2 text-gray-700 mb-8">
          <li>You have pain that lasts longer than a day or two</li>
          <li>Your pain is severe or starts to become unbearable</li>
          <li>
            You have a fever, earache or pain when you open your mouth wide
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0a0a5c] mb-4">
          Are You in Pain?
        </h3>

        <p className="text-gray-700">
          For{" "}
          <span className="text-[#0aa6ff] font-medium">
            emergency dental
          </span>{" "}
          care, contact us. We’ll arrange a prompt appointment for you.
        </p>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={eightyfive}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

<div className="bg-[#f5f9fc] px-2 py-8 mt-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={eightysix}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Symptoms of Dental Anxiety
        </h2>

        <p className="text-gray-700 mb-4">
          Dental anxiety varies in intensity, ranging from mild to severe phobia. Symptoms can include anxiety and physical manifestations before dental visits, such as avoiding appointments, insomnia, nausea, and breathlessness.<br/>
          Children can also experience dental phobia, which can make dental visits challenging due to physical and mental distress.
        </p>

        
      </div>
    </div>
  </div>
</div>


<div className=" px-2 py-8 mt-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">


      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Causes of Dental Anxiety
        </h2>

        <p className="text-gray-700 mb-4">
            Negative past dental experiences often trigger dental anxiety, with some individuals claiming to “hate” going to the dentist. Early memories of unpleasant visits can contribute to ongoing fear, making it challenging to relax during appointments. Fortunately, dentistry has advanced significantly, offering modern, efficient, and relatively painless treatments using advanced tools and techniques.<br/>
Children’s dental anxiety may stem from irrational fears or general concerns about the procedure. While young children may not have experienced enough dental visits to develop specific fears, they can still feel significant anxiety about what to expect, the environment, and the dentist.
        </p>
        </div>

    {/* right Image */}
      <div>
        <img
          src={eightyseven}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

<div className="bg-[#f5f9fc] px-2 py-8 mt-8">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={eightyeight}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Coping with Dental Anxiety
        </h2>

        <p className="text-gray-700 mb-4">
            Feeling anxious before a dental visit is normal and nothing to be ashamed of. Discussing your feelings with the dentist and seeking support from understanding family and friends can be helpful. Being prepared and knowing what to expect at the appointment can help alleviate nerves.<br/>
Contact us for assistance in preparing for your visit. Regular appointments with the dentist and dental hygienist can also contribute to a sense of comfort. Delaying treatment until pain or severe dental issues arise can worsen anxiety. If dental anxiety is severe, sedation may be considered. Our dentists, experienced in dental trauma, are here to help you overcome your fear and explore treatment options.
        </p>

        
      </div>
    </div>
  </div>
</div>

<div className=" px-2 py-2">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Get Prepared:
        </h2>

        <p className="text-gray-700 mb-0">
          If you have dental anxiety and schedule an appointment at SmileOn, we understand the need for reassurance. Your dentist will gather essential information to diagnose and treat you effectively. This will ensure a smooth and efficient appointment. Generally, your dentist will inquire about your medical history and conduct a thorough examination of your oral, dental, jaw, tongue, throat, sinus, ear, nose, and neck areas. X-rays may also be necessary based on your dentist’s assessment of your condition. Your dentist will ask you some questions about your teeth and any pain you may have such as:
        </p>

        <ul className="list-disc pl-10 space-y-0 text-gray-700 mb-0">
          <li>Are you experiencing any pain?</li>
          <li>How severe is the pain?</li>
          <li>Where do you feel the pain?</li>
          <li>What is your normal dental routine?</li>
          <li>What is your diet like?</li>
          
        </ul>


        <p className="text-gray-700">
          Prior to your appointment, take a moment to reflect on these questions and prepare your responses. This proactive approach can expedite the diagnosis process.
        </p>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={eightynine}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

<div className="w-full bg-white py-20">
  <h2 className="text-center text-4xl font-semibold text-[#0a1a5c] mb-4">
    What Next
  </h2>

  
  <p className="w-85 text-center text-gray-900 text-m leading-relaxed px-36">
    Explore treatment options to gather more information about the next steps. Consider scheduling a dental consultation for in-depth guidance on your concerns.
    Book <span className="text-[#0aa6ff] font-semibold">book online</span> or call now to secure your appointment.
  </p>


  <div className="mt-16 flex justify-center">
    <div className="w-[320px] bg-white rounded-2xl shadow-lg py-10 flex flex-col items-center">
      
      
      <div className="mb-1">
        <img
        src={sed}
        alt="Teeth Whitening"
        className="w-[100px] h-[80px] object-contain mb-0 pl-4"
      />
      </div>

      
      <p className="text-[#0a1a5c] font-semibold mt-2 mb-0">
        Sedation
      </p>
    </div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-2 py-8">
    <h2 className="text-3xl font-semibold text-center text-[#0a0a5c] mb-6">
    FAQs
  </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    
    {/* Left Column */}
    <div className="space-y-2 items-center">
      {[
        "How much will my dental appointment cost?",
        "Is dental anxiety common?",
        "Why is my anxiety so bad?",
        "Does it matter if I have missing teeth?",
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
        "Does medication help with dental anxiety?",
        "I’m really anxious about visiting the dentist, what can I do?",
        "Can dental anxiety be cured?",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#5CB5B5] px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-[#4a9a9a] "
        >
          <span className="text-2xl font-bold">+</span>
          <p className="font-medium leading-snug mt-3">
            {String(index + 5).padStart(2, "0")}. {item}
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