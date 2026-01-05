import React from "react";
import { Link } from "react-router-dom";
import teeth from "../../Images/teeth.jpg";
import white from "../../Images/white.jpg";
import teeth1 from "../../Images/teeth1.jpg";
import teeth2 from "../../Images/teeth2.jpg";
import teeth3 from "../../Images/teeth3.jpg";
import teeth4 from "../../Images/teeth4.jpg";
import teeth5 from "../../Images/teeth5.jpg";
import teeth6 from "../../Images/teeth6.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";





export default function Veneers() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_40%]"
      style={{ backgroundImage: `url(${white})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Teeth Whitening - Before and After
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
          src={teeth}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
          Do you have embarrassing teeth that make you feel self-conscious?
        </h1>

        <p className="text-gray-700 ">
       SmileExpert can help! We offer professional teeth whitening services that may lighten your teeth by 8 shades in just one visit. Our dentists are experienced in providing safe and effective whitening treatments, so you can be sure you’re getting the best possible care. Take a look at our before and after teeth whitening pictures to see the transformation some of our patients have made.
        </p>
      </div>
</div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-center text-3xl font-semibold text-[#0a0a5c] mb-8">
    Teeth Whitening - Before and After Pictures
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Item */}
    <div className="space-y-2">
      <div className="relative">
        <img
          src={teeth1}
          alt="Before"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
      <div className="relative">
        <img
          src={teeth2}
          alt="After"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
    </div>

    {/* Repeat same block */}
    <div className="space-y-2">
      <div className="relative">
        <img src={teeth3} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={teeth4} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>

    <div className="space-y-2">
      <div className="relative">
        <img src={teeth5} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={teeth6} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>    
  </div>
</div>

<div className="max-w-7xl mx-auto px-6 py-14">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know Before You Get Teeth Whitening
      </h1>
      <p>
            Your teeth are one of the first things people notice about you. A bright, white smile can boost your confidence and make you feel more attractive. Teeth whitening is a popular way to achieve this look.<br/><br/>
            Before you get teeth whitening, there are a few things you should know.<br/>
          </p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. The teeth whitening process is simple and quick
          </h4>
          <p>
            Teeth whitening is a very brief procedure that may be done on short notice. We usually perform a comprehensive examination of your mouth before proceeding with treatment at SmileOn. This is to ensure that your gums and teeth are in good condition and avoid any problems.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. You will see results after just one treatment
          </h4>
          <p>
            The results of your teeth whitening treatment will be immediately visible. You can expect your teeth to be at least eight shades lighter after just one 45-minute session depends on diet and genetics
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. There are no side effects
          </h4>
          <p>
            Teeth whitening is a safe and effective way to achieve brighter teeth with no side effects. The only thing you may experience is some sensitivity during and after the treatment, but this is temporary and will go away within a day or two.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. It’s affordable
          </h4>
          <p>
            Teeth whitening is an affordable way to dramatically improve your smile depending on diet, genetic and expectations. The cost of treatment depends on the severity of your tooth discoloration and the number of sessions required. 
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. You need to take care of your teeth afterwards
          </h4>
          <p>
           After you have Zoom teeth whitening, it’s important to take good care of your teeth to maintain the results. This means brushing twice a day, flossing daily, and avoiding foods and drinks that can stain your teeth. You should also see your dentist regularly for checkups and cleanings.<br/><br/>
           Our dentists at SmileOn Dentistry will also ask you questions about your lifestyle and hygiene; this helps us tailor your teeth whitening treatments to you specifically. Treatment will begin if your oral health allows it.
          </p>
        </div>

        
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know After You Get Teeth Whitening
      </h1>
      <p>
        Once you have gotten teeth whitening, there are a few things you should know in order to maintain your results. Here are some things to keep in mind:
      </p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. Avoid staining foods and drinks
          </h4>
          <p>
            To maintain your results, it is best to avoid food and drinks that can cause stainings, such as coffee, tea, and red wine.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. Practice good oral hygiene
          </h4>
          <p>
            Be sure to brush and floss regularly and see your dentist for regular cleanings. This will help to prevent any new stains from forming on your teeth.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. Touch up as needed
          </h4>
          <p>
            Teeth whitening results can last for several months, but they may start to fade over time. You can touch up your teeth whitening results as needed with at-home kits or professional treatments.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. Be gentle with your teeth
          </h4>
          <p>
           Avoid using abrasive toothpaste or whitening strips that are too harsh on your teeth. This can cause sensitivity and irritation
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. Know when to see a dentist
          </h4>
          <p>
            If you are unsure about how to care for your teeth after whitening, or if you have any concerns, be sure to see your dentist. They can help you find the best way to care for your teeth and keep them looking their best. Contact us today to learn more or to schedule a consultation. Schedule an appointment with us today for whiter teeth!
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