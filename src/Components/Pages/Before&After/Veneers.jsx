import React from "react";
import { Link } from "react-router-dom";
import veneer from "../../Images/veneer.jpg";
import veneer1 from "../../Images/veneer1.jpg";
import veneer2 from "../../Images/veneer2.jpg";
import veneer3 from "../../Images/veneer3.jpg";
import veneer4 from "../../Images/veneer4.jpg";


import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Veneers() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-length-70% bg-[center_50%]"
      style={{ backgroundImage: `url(${veneer})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Veneers - Before and After
    </h1>
  </div>
</div>
    </div>

    {<Link to="/Before&After/veneers"></Link>}

<div className=" px-2 py-2 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={veneer1}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
          Do you have a “gorgeous smile”?
        </h1>

        <p className="text-gray-700 ">
        You might be surprised to know that even if your teeth are not 100% perfect, veneers might be able to give you the beautiful smile you’ve always wanted. Imagine having the confidence to show your smile to the world – without feeling self-conscious or embarrassed. Check out our before and after gallery to see real results from some of our patients.        </p>

      </div>
</div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-center text-3xl font-semibold text-[#0a0a5c] mb-8">
    Porcelain Veneers - Before and After Pictures
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-start">

    {/* Column 1 */}
    <div className="space-y-2">
      <img
        src={veneer2}
        alt="Before"
        className="w-full h-[380px] object-cover rounded-lg"
      />
      <p className="text-center text-gray-700 mt-2">
      This patient had gaps between her teeth, and veneers were used to close the gaps and give her a more uniform smile.      </p>
      
    </div>

    {/* Column 2 */}
    <div className="space-y-2">
      <img
        src={veneer3}
        alt="Veneer"
        className="w-full h-[380px] object-cover rounded-lg"
      />
      <p className="text-center text-gray-700 mt-2">
        This patient was unhappy with the colour, shape, and size of her teeth. Veneers were used to give her an overall more uniform and aesthetically pleasing smile.
      </p>
      {/* placeholder to keep same height */}
      
    </div>

    {/* Column 3 */}
    <div className="space-y-2">
      <img
        src={veneer4}
        alt="Veneer"
        className="w-full h-[380px] object-cover rounded-lg"
      />
      <p className="text-center text-gray-700 mt-2">
        This patient had a mismatched shape and size of his teeth. His smile was enhanced with veneers to give him a more uniform and aesthetically appealing appearance.

      </p>
      
      
    </div>
</div>
</div>


<div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
  {/* Left Column */}
  <div>
    <h3 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
      Things to Know Before You Get Porcelain Veneers
    </h3>
    <p className="text-gray-700 mb-4">
      Trying to decide if porcelain veneers are right for you? Here are a few things to keep in mind:
    </p>
    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
      <li>Treatment with porcelain veneers is usually irreversible. This means that once your natural tooth enamel is removed, it cannot be put back.</li>
      <li>Porcelain veneers are not for everyone. In order to be a candidate for this treatment, you must have healthy teeth and gums.</li>
      <li>You should also have a good bite (occlusion) and enough tooth structure to support the veneers.</li>
      <li>Porcelain veneers are a cosmetic treatment. This means that they are not covered by most dental insurance plans.</li>
      <li>Porcelain veneers are durable, but they are not indestructible. You should avoid biting your nails, chewing on hard objects (ice, hard candy, etc.), and grinding your teeth.</li>
      <li>Porcelain veneers can last for many years, but they may eventually need to be replaced.</li>
    </ol>
    <p className="text-gray-700">
      If you are considering porcelain veneers, be sure to talk to one of our experienced dentists about whether or not this treatment is right for you.
    </p>
  </div>

  {/* Right Column */}
  <div>
    <h3 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
      Things to Know After Your Get Porcelain Veneers
    </h3>
    <p className="text-gray-700 mb-4">
      Porcelain veneers are a beautiful way to enhance your smile. Here are a few things to keep in mind after you get your new veneers:
    </p>
    <ol className="list-decimal list-inside text-gray-700 space-y-2 mb-4">
      <li>Your teeth may be sensitive for a few days after treatment. This is normal and should go away within a week or so.</li>
      <li>You may need to adjust your diet for a few days while your teeth adjust to the veneers. Avoid hard, crunchy, or sticky foods that could damage the veneers.</li>
      <li>Be sure to brush and floss your teeth twice a day and see your dentist regularly for checkups and cleanings.</li>
      <li>If you grind your teeth or clench at night, you may need to wear a mouth guard to protect your veneers.</li>
    </ol>
    <p className="text-gray-700">
      If you have any questions or concerns about your porcelain veneers, be sure to talk to one of our experienced dentists. We are here to help you!
    </p>
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