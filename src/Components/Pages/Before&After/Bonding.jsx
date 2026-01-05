import React from "react";
import { Link } from "react-router-dom";
import bonding from "../../Images/bonding.jpg";
import bonding1 from "../../Images/bonding1.jpg";
import bonding2 from "../../Images/bonding2.jpg";
import bonding3 from "../../Images/bonding3.jpg";
import bonding4 from "../../Images/bonding4.jpg";
import bonding5 from "../../Images/bonding5.jpg";
import bonding6 from "../../Images/bonding6.jpg";




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Bonding() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_40%]"
      style={{ backgroundImage: `url(${bonding1})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Dental Bonding - Before and After
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
          src={bonding}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
            Curious about what dental bonding can do for your smile?
        </h1>

        <p className="text-gray-900 ">
        Dental bonding is a great way to improve the appearance of your teeth without having to go through surgery. Our dentists are experts in this procedure and may be able to help you achieve the smile you always wanted. You don’t have to be embarrassed about your smile any longer. Dental bonding can fix chips, cracks, and other imperfections quickly and easily. And thanks to the advancements in dental technology, dental bonding looks more natural than ever before. Just take a look at our before and after photos to see for yourself.


        </p>
      </div>
</div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-center text-3xl font-semibold text-[#0a0a5c] mb-8">
    Dental Bonding - Before and After Pictures
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Item */}
    <div className="space-y-2">
      <div className="relative">
        <img
          src={bonding2}
          alt="Before"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
      <div className="relative">
        <img
          src={bonding3}
          alt="After"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
    </div>

    {/* Repeat same block */}
    <div className="space-y-2">
      <div className="relative">
        <img src={bonding4} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={bonding5} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>

    <div className="space-y-2">
      <div className="relative">
        <img src={bonding6} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      
    </div>    
  </div>
</div>

<div className="max-w-7xl mx-auto px-6 py-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know Before You Get Dental Bonding
      </h1>
      <p>
        If you’re considering dental bonding, there are a few things you should know first.

          </p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          1. Procedure can be done in just one visit
          </h4>
          <p>
            If you don’t have time for multiple dental visits, bonding might be a good option for you. The procedure can usually be done in just one visit to the dentist.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. Usually, you don't need anesthesia
          </h4>
          <p>
            Most people don’t need anaesthesia for dental bondings. If your dentist is going to bond a large area, you might be given a local anesthetic to numb the area.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. It may be used to fix a variety of dental problems
          </h4>
          <p>
            Dental bonding may be used to fix a number of different dental problems, including:
          <ul className="list-disc pl-10 space-y-1">
            <li>Chipped teeth</li>
            <li>Cracked teeth</li>
            <li>Gaps between teeth</li>
            <li>Misshapen teeth</li>
            <li>Stained or discoloured teeth</li>
          </ul>
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. Bonding usually lasts for 3 to 5 years
          </h4>
          <p>
            With proper care, dental bonding usually lasts for 3 to 5 years. After that, it will likely need to be replaced.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          5. It's not as strong as other options
          </h4>
          <p>
            Dental bonding is not as strong as other dental options, such as veneers or crowns. It’s more likely to chip or break than other options.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          6. It's not suitable for everyone
          </h4>
          <p>
            Dental bonding might not be suitable for everyone. If you have very large dental problems, bonding might not be the best option. Your dentist will be able to advise you on whether or not dental bonding is right for you.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          7. Health insurance covers dental bonding
          </h4>
          <p>
            Health insurance usually covers dental bonding. However, you might have to pay a deductible or copayment. Check with your insurance company to see what is covered.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          8. May help with sensitive teeth
          </h4>
          <p>
            Dental bonding may help with sensitive teeth by protecting the root of the tooth. So if you feel like you may need dental bonding, talk to one of our experienced dentists. They may be able to tell you if it is the right option for you.
          </p>
        </div>

        
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know After You Get Dental Bonding
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. You might feel some sensitivity

          </h4>
          <p>
          After you get dental bonding, you might feel some sensitivity in your teeth. This is normal and should go away within a few days. If the sensitivity doesn’t go away, or if it gets worse, call your dentist.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
        2. Avoid hard foods
          </h4>
          <p>
          You should avoid hard foods for the first few days after you get dental bonding. This will help prevent your bonding from chipping or breaking.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. Be careful with your teeth
          </h4>
          <p>
         You need to be careful with your teeth after you get dental bonding. Avoid chewing on hard objects, such as ice or hard candy. This can damage your bonding.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          4. Brush and floss regularly
          </h4>
          <p>
          You should brush and floss your teeth regularly to keep them healthy. This will also help prevent your bonding from getting stained.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. See your dentist for regular checkups

          </h4>
          <p>
            You should see your dentist for regular checkups. They will be able to check on your bonding and make sure it is still in good shape.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            6. Get your bonding replaced when it starts to wear

          </h4>
          <p>
            You will need to get your bonding replaced when it starts to wear down. This is usually after 3 to 5 years. So if you have just gotten dental bonding, be sure to follow these tips to keep your teeth healthy. And if you have any questions, feel free to ask us or consult with one of our experienced dentists.
          </p>
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