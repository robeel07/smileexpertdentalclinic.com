import React from "react";
import { Link } from "react-router-dom";
import implant from "../../Images/implant.jpg";
import implant1 from "../../Images/implant1.jpg";
import implant2 from "../../Images/implant2.jpg";




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Implants() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_20%]"
      style={{ backgroundImage: `url(${implant})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Dental Implants - Before and After
    </h1>
  </div>
</div>
    </div>

    {<Link to="/Before&After/implants"></Link>}

<div className=" px-2 py-2 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={implant1}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
     Curious about what dental implants before and after can look like?   </h1>

        <p className="text-gray-700 ">
            Dental implants are a popular and effective way to replace missing teeth, and SmileExpert might be able to help you achieve the smile you’ve always wanted.<br/><br/>
If you’re considering dental implants, take a look at some before and after photos to get an idea of how they have helped other patients. You might be surprised at how natural and beautiful dental implants can look
        </p>
      </div>
</div>
  </div>
</div>

<div className="w-full flex flex-col items-center px-4 py-16 bg-white">
  {/* Heading */}
  <h2 className="text-2xl md:text-3xl font-semibold text-[#0a0a5c] mb-10 text-center">
    Dental Implants – Before and After Pictures
  </h2>

  {/* Image Card */}
  <div className="w-full max-w-md bg-white rounded-xl shadow-md overflow-hidden mb-8">
    

    {/* Divider */}
    <div className="h-[1px] bg-gray-200" />

    {/* AFTER */}
    <div className="relative">
      <img
        src={implant2}
        alt="After Dental Implant"
        className="w-full object-cover"
      />
    </div>
  </div>

  {/* Description */}
  <p className="max-w-7xl text-center text-gray-900 text-sm leading-relaxed">
    Isn’t it amazing? Just look at the transformation that dental implants can
    make. From gaps and missing teeth to a brand new smile – it’s truly amazing
    what dental implants can do.
    <br />
    If you’re considering dental implants, we encourage you to schedule a
    consultation with our team. We would be more than happy to answer any
    questions that you may have, and help you decide if dental implants are
    right for you.
  </p>
</div>

<div className="max-w-7xl mx-auto px-6 py-4">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know Before You Get Dental Implants
      </h1>
      <p>
        If you’re considering dental implants, there are a few things that you should know before moving forward with treatment. Here are a few things to keep in mind:
          </p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          1. They are a long-term investment.
          </h4>
          <p>
            Dental implants are a very popular choice for replacing missing teeth, but they are also a big investment. They are typically more expensive than other options like dentures or bridges, but they are also much more durable and long-lasting.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. The treatment process can take several months.
          </h4>
          <p>
            While the final results of dental implants are definitely worth the wait, it’s important to keep in mind that the treatment process can take several months. The initial consultation and implant placement can take several weeks, and then the implants need to fuse with the bone before the final restoration can be placed.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. There is a small risk for complications.
          </h4>
          <p>
            As with any surgery, there is always a small risk for complications. The most common complications associated with dental implants include infection, damage to the surrounding teeth, and nerve damage.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. You need to have healthy gums and bones.

          </h4>
          <p>
            In order to be a candidate for dental implants, you need to have healthy gums and bones. If you have gum disease or bone loss, you may not be a good candidate for implants.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. You need to be committed to oral hygiene.

          </h4>
          <p>
            Good oral hygiene is essential for dental implants to be successful. You need to brush and floss regularly, and see your dentist for regular checkups and cleanings. If you’re considering dental implants, be sure to keep these things in mind and talk to our team about your treatment options. We would be more than happy to answer any questions that you may have!
          </p>
        </div>

        
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know After You Get Dental Implants
      </h1>
      <p>
        After you get dental implants, there are a few things that you should keep in mind in order to ensure that they are successful. Here are a few things to keep in mind:
      </p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. You need to take care of your dental implants.

          </h4>
          <p>
            Just like your natural teeth, you need to take care of your dental implants. Be sure to brush and floss regularly, and see your dentist for regular checkups.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. You need to avoid hard and sticky foods.

          </h4>
          <p>
            Hard and sticky foods can damage your dental implants, so it’s important to avoid them. Be sure to cut up hard foods into small pieces, and avoid sticky foods altogether.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. You need to be careful when flossing.

          </h4>
          <p>
            When flossing around your dental implants, be sure to use a gentle touch. You don’t want to damage the implant or the surrounding gums.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
          4. You need to watch for signs of infection.
          </h4>
          <p>
            Signs of infection include redness, swelling, pain, and discharge. If you notice any of these signs, be sure to contact your dentist right away.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. You may experience some discomfort after surgery.

          </h4>
          <p>
            It’s normal to experience some discomfort after surgery, but be sure to contact your dentist if the pain is severe. If you have any questions or concerns about your dental implants, be sure to contact our team. We would be more than happy to help!

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