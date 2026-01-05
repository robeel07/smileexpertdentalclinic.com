import React from "react";
import { Link } from "react-router-dom";
import invisa from "../../Images/invisa.jpg";
import nintyseven from "../../Images/nintyseven.jpg";
import bf1 from "../../Images/bf1.jpg";
import bf2 from "../../Images/bf2.jpg";
import bf3 from "../../Images/bf3.jpg";
import af1 from "../../Images/af1.jpg";
import af2 from "../../Images/af2.jpg";
import af3 from "../../Images/af3.jpg";
import bf4 from "../../Images/bf4.jpg";
import bf5 from "../../Images/bf5.jpg";
import bf6 from "../../Images/bf6.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";




export default function Invisalign() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${invisa})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Invisalign - Before and After
    </h1>
  </div>
</div>
    </div>

    {<Link to="/Before&After/invisalign"></Link>}

<div className=" px-2 py-2 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={nintyseven}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
          Before and After Invisalign
        </h1>

        <p className="text-gray-700 ">
            We know that having straight teeth makes a huge difference in your self-esteem and overall appearance. With our Invisalign treatment, you can see results quickly and easily – and without anyone ever knowing you’re wearing braces!<br/>
            Here are before and after photographs so you can see for yourself! You don’t have to be afraid of the unknown when it comes to your teeth.<br/>
            As you can see, Invisalign can have a profound impact on one’s smile and appearance. Now, it’s your turn to experience the benefits of Invisalign. Get in touch with us today to learn more about this revolutionary treatment and to see if it’s right for you.
        </p>

      </div>
</div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-center text-3xl font-semibold text-[#0a0a5c] mb-8">
    Invisalign – Before and After Pictures
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Item */}
    <div className="space-y-2">
      <div className="relative">
        <img
          src={bf1}
          alt="Before"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
      <div className="relative">
        <img
          src={af1}
          alt="After"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
    </div>

    {/* Repeat same block */}
    <div className="space-y-2">
      <div className="relative">
        <img src={bf2} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={af2} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>

    <div className="space-y-2">
      <div className="relative">
        <img src={bf3} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={af3} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>    
  </div>
</div>


<div className="max-w-7xl mx-auto px-6 py-14">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know Before You Get Invisalign
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. Keep Your Aligners In As Much As Possible
          </h4>
          <p>
            In order to achieve the best results, you should be wearing your Invisalign aligners
            for at least 20–22 hours each day. That means taking them out only for eating and
            cleaning — and putting them right back in!
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. Be prepared for some discomfort
          </h4>
          <p>
            When you first get your Invisalign aligners, they may feel a bit uncomfortable.
            This is perfectly normal — your teeth are adjusting to the new pressure!
            Just be sure to wear them as much as possible and you’ll get used to them in no time.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. You'll need to brush more often
          </h4>
          <p>
            Because you’re wearing Invisalign, you’ll need to brush your teeth more often than usual.
            We recommend brushing after every meal and before you put your aligners back in.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. Don’t forget to floss!
          </h4>
          <p>
            Flossing is still important, even with Invisalign!
            Be sure to floss at least once a day to remove any food or plaque.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. You'll need to see the dentist more often
          </h4>
          <p>
            Because you’re wearing Invisalign, you’ll need to see the dentist more often than usual.
            We recommend seeing the dentist every 6 weeks for a cleaning and check-up.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            6. Invisalign is not for everyone
          </h4>
          <p>
            Invisalign is a great option for many people, but it’s not right for everyone. If you have severe crowding or spacing issues, Invisalign may not be the best option for you. Be sure to talk to your dentist about all of your options before you make a decision! So if you’re ready for a smile that will turn heads, give us a call today to set up your consultation! We can’t wait to help you achieve your perfect smile!
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know After You Get Invisalign
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. Keep Up with Your Dental Hygiene
          </h4>
          <p>
            It is very important to keep up with your dental hygiene even after you have Invisalign.
            This means brushing at least twice a day and flossing at least once a day.You should also be rinsing with mouthwash to help keep your mouth clean and bacteria-free!
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. You May Need to Wear a Retainer
          </h4>
          <p>
            After completing Invisalign treatment, you may need to wear a retainer.
            This helps keep your teeth in their new and improved position.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. You May Need to See the Dentist More Often
          </h4>
          <p>
            Even after treatment, your dentist may want to monitor your progress.
            Be sure to schedule cleanings and check-ups every 6 months.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. Do not drink hot beverages with the retainer(s) in
          </h4>
          <p>
            Heat can warp your retainer.
            If you must drink a hot beverage, be sure to remove your retainer first.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. Do not chew gum with the retainer(s) in
          </h4>
          <p>
            Gum can stick to your retainer and be very difficult to remove.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            6. Store your retainer(s) properly
          </h4>
          <p>
            When you are not wearing your retainer, it is important to store it in a safe place. This is because the retainer can easily get lost or damaged if it is not stored properly. Be sure to keep your retainer in a case when you are not wearing it!
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            7. Invisalign is not for everyone
          </h4>
          <p>
            Invisalign can a great option for many people, but it’s not right for everyone. If you have severe crowding or spacing issues, Invisalign may not be the best option for you. Be sure to talk to your dentist about all of your options before you make a decision! Now that you know a little more about Invisalign, we hope you’re as excited as we are about this amazing treatment! Give us a call today to set up a consultation
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