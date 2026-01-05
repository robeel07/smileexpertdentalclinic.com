import React from "react";
import { Link } from "react-router-dom";
import nintythree from "../../Images/nintythree.jpg";
import nintysix from "../../Images/nintysix.jpg";
import nintyfour from "../../Images/nintyfour.jpg";
import nintyfive from "../../Images/nintyfive.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Braces() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_52%]"
      style={{ backgroundImage: `url(${nintysix})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Braces - Before and After
    </h1>
  </div>
</div>
    </div>

    {<Link to="/Before&After/braces"></Link>}

<div className=" px-2 py-2 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* Right Image */}
      <div>
        <img
          src={nintythree}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Left Content */}
      <div>
        <h5 className="text-1xl font-semibold text-[#0aa6ff] mb-0">
          ABOUT US
        </h5>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Unsure of what braces will do to your beautiful smile?
          </h2>

        <p className="text-gray-700 mb-0">
          With our world-class technology and experienced orthodontists, you can achieve a gorgeous, perfect smile in no time. We know that having straight teeth makes a huge difference in your self-esteem, and overall appearance, so let us help you get there! Here are before and after pictures so you can see the amazing transformation for yourself! Don’t worry about the unknown when it comes to your teeth – we’re here to help make the process as smooth as possible and improve your dental health for a lifetime! As you can see, wearing braces made a huge difference in the appearance of their teeth. Most of their gaps and crooked teeth were treated after they wear braces and they were left with a much healthier and straighter smile. So if you’re ready for <span className="text-[#0aa6ff] font-semibold">orthodontic treatment</span> with a difference, schedule a consultation with our orthodontist. We can’t wait to help you achieve your dream smile!
        </p>

      </div>
</div>
  </div>
</div>

<div className="w-full bg-white py-16">
  <h2 className="text-center text-3xl font-semibold text-[#0a1a5c] mb-4">
    Braces - Before and After Pictures
  </h2>

  
  <p className="w-85 text-center text-gray-900 text-m leading-relaxed px-36">
As you can see, wearing braces made a huge difference in the appearance of their teeth. Most of their gaps and crooked teeth were treated after they wear braces and they were left with a much healthier and straighter smile. So if you’re ready for a life-changing orthodontic treatment, schedule a consultation with our orthodontist. We can’t wait to help you achieve your dream smile!
  </p>
  </div>

  <div className="w-full bg-white py-8 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    
    {/* LEFT CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
        Things to Know Before You Get Braces
      </h2>

      <p className="text-gray-900 mb-0">
        If you’re considering braces, there are a few things you should know before making the commitment.
      </p>

      <ul className="list-disc pl-10 space-y-0 text-gray-900">
        <li>
          First and foremost, you should consult with an orthodontic specialist to see if you’re a candidate — not everyone’s teeth can be corrected with braces.
        </li>
        <li>
          Secondly, braces can take anywhere from 6 months to 2 years to work their magic, so it’s important to be patient!
        </li>
        <li>
          Finally, you’ll need to make sure you’re taking extra care of your teeth while you have them. This means brushing and flossing more carefully and avoiding hard foods that can damage the wires.
        </li>
      </ul>

      <p className="text-gray-900 mt-0">
        Braces may be an excellent method to improve your smile. Just do your homework and talk with a professional first, that way you’ll be sure it’s the right decision for you.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="w-full">
      <img
        src={nintyfour}
        alt="Patient getting braces"
        className="w-full h-[420px] object-cover rounded-2xl shadow-md"
      />
    </div>

  </div>
</div>

<div className="w-full bg-[#f4f8fb] py-16 px-6 md:px-20">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
    
    {/* LEFT IMAGE */}
    <div>
      <img
        src={nintyfive}
        alt="After braces consultation"
        className="w-full h-[520px] object-cover rounded-2xl"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div>
      <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
        Things to Know After You Get Braces
      </h2>

      <p className="text-gray-900 mb-0">
        Our number one priority is your comfort and satisfaction. You may experience some discomfort after you get your teeth <span className="text-[#0aa6ff] font-medium">braces</span>, but don’t worry – this is normal!
      </p>

      <p className="text-gray-900 mb-0">
        If you have any questions or concerns, please don’t hesitate to contact us. We’re always happy to help in any way we can. In the meantime, here are a few things to keep in mind:
      </p>

      <ul className="list-disc pl-10 space-y-0 text-gray-900 mb-0">
        <li>
          Avoid hard or sticky foods that can damage your braces. As much as possible, eat healthy, soft foods like your vegetables or cut them into small pieces.
        </li>
        <li>
          Be extra careful when brushing and flossing around your braces. We recommend using a soft toothbrush and taking extra care to floss between your teeth to avoid plaque buildup.
        </li>
        <li>
          If you play sports, be sure to wear a mouth guard to protect yourself from injury.
        </li>
        <li>
          Wear your rubber bands as directed.
        </li>
        <li>
          Keep up with your regular appointments so we can make any necessary adjustments.
        </li>
      </ul>

      <p className="text-gray-900 mb-0">
        If you’re ready to take the plunge, schedule a consultation with us today. We’ll be able to answer any questions you have and help you decide which orthodontic treatment options are right for your misaligned teeth – traditional braces treatment (metal braces, ceramic braces treatment, or Invisalign treatment (clear aligners).
      </p>

      <p className="text-gray-900 text-sm">
        DISCLAIMER: Each treatment has risks which will be discussed prior to commencing the treatment.
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