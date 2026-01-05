import React from "react";
import { Link } from "react-router-dom";
import crown from "../../Images/crown.jpg";
import crowns from "../../Images/crowns.jpg";
import crown1 from "../../Images/crown1.jpg";
import crown2 from "../../Images/crown2.jpg";
import crown3 from "../../Images/crown3.jpg";
import crown4 from "../../Images/crown4.jpg";
import crown5 from "../../Images/crown5.jpg";
import crown6 from "../../Images/crown6.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";




export default function Crowns() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${crowns})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Before & After</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Crowns - Before and After
    </h1>
  </div>
</div>
    </div>

    {<Link to="/Before&After/crowns"></Link>}

<div className=" px-2 py-2 mt-12">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={crown}
          alt="Dental Consultation"
          className="w-full h-[380px] object-cover rounded-2xl"
        />
      </div>

      {/* right Content */}
      <div>
        <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-3">
          Are you considering tooth crowns to improve your smile?
        </h1>

        <p className="text-gray-700 ">
            Take a look at our before and after photos to see the amazing transformation that our patients have achieved with tooth crowns. As you can see, tooth crowns can make a big difference in the appearance of your smile.- depending on expectations Contact us today to schedule a consultation! We would be happy to discuss our dental crown options with you.
        </p>

      </div>
</div>
  </div>
</div>

<div className="max-w-7xl mx-auto px-4 py-10">
  <h2 className="text-center text-3xl font-semibold text-[#0a0a5c] mb-8">
    Porcelain Crowns - Before and After Pictures
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Item */}
    <div className="space-y-2">
      <div className="relative">
        <img
          src={crown1}
          alt="Before"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
      <div className="relative">
        <img
          src={crown2}
          alt="After"
          className="w-full h-58 object-cover rounded-lg"
        />
        
      </div>
    </div>

    {/* Repeat same block */}
    <div className="space-y-2">
      <div className="relative">
        <img src={crown3} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={crown4} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>

    <div className="space-y-2">
      <div className="relative">
        <img src={crown5} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
      <div className="relative">
        <img src={crown6} className="w-full h-58 object-cover rounded-lg" />
        
      </div>
    </div>    
  </div>
</div>


<div className="max-w-7xl mx-auto px-6 py-14">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">

    {/* LEFT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know Before You Get Dental Crowns
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. Not all tooth decay requires the need for a tooth crown.
          </h4>
          <p>
            If the tooth decay is caught early, a filling may be all that is needed to restore the tooth
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            2. Getting a filling today does not rule out the need for a tooth crown in the future.
          </h4>
          <p>
            The tooth may develop new decay or the old filling may fail, requiring a tooth crown.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. A tooth crown will not prevent new decay from forming.
          </h4>
          <p>
           It is important to continue to brush and floss your teeth and see your dentist regularly for cleanings and exams.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. There are different types of dental crowns.
          </h4>
          <p>
            The type of dental crown you receive will be based on several factors, including the location of the tooth, the amount of tooth that is visible above the gum line, and your bite.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. Dental crowns can be made from different materials.
          </h4>
          <p>
            The most common type of dental crown is made from porcelain-fused-to-metal. Other materials used for dental crowns include all-ceramic and all-metal.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            6. Dental crowns are not just for adults.
          </h4>
          <p>
            Children may also need dental crowns to protect their teeth from decay.
          </p>
        </div>
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            7. Dental crowns are not just for your teeth.
          </h4>
          <p>
            They can also be used to support a dental bridge or to cover a dental implant. So if you are considering dental crowns, be sure to ask one of our experienced dentists about all of your options. And be sure to take care of your teeth so you can avoid the need for dental crowns in the future!
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div>
      <h1 className=" text-[#0a0a5c] font-semibold text-3xl mb-6">
        Things to Know After You Get Dental Crowns
      </h1>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            1. Dental crowns may require special care.

          </h4>
          <p>
            Be sure to brush and floss your teeth as directed by your dentist.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
           2. See your dentist for regular cleanings and exams.
          </h4>
          <p>
          It is important to see your dentist every 6 months for a cleaning and exam. This will help to ensure that your dental crowns are in good condition and that your teeth and gums are healthy.          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            3. Dental crowns may make it difficult to floss between your teeth.

          </h4>
          <p>
            It is important to floss around the base of the dental crowns to avoid plaque and bacteria build-up. Your dentist can show you the proper way to floss around your dental crowns.

          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            4. Avoid biting down on hard objects.

          </h4>
          <p>
            Dental crowns are made to withstand a lot of wear and tear, but they are not indestructible. Biting down on hard objects, such as ice or hard candy, can crack or break your dental crowns.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            5. Be mindful of what you eat and drink.
          </h4>
          <p>
            Certain foods and drinks, such as coffee and red wine, can stain your dental crowns. To avoid staining, brush your teeth after eating or drinking.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            6. Avoid eating sticky or chewy foods.

          </h4>
          <p>
          Sticky and chewy foods can pull your dental crowns off. If you must eat these types of foods, be sure to brush your teeth afterwards.          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            7. Use a soft toothbrush to brush your teeth.
          </h4>
          <p>
           A soft toothbrush will help to avoid scratching or damaging your dental crowns.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            8. Avoid using whitening toothpaste.

          </h4>
          <p>
        Whitening toothpaste can damage your dental crowns and make them more susceptible to staining.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            9. Dental crowns will not change the colour of your teeth.

          </h4>
          <p>
        If you are concerned about the colour of your teeth, you may want to consider getting veneers instead.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
            10. Dental crowns may make your teeth feel sensitive.
          </h4>
          <p>
        This is normal and should go away after a few days. If the sensitivity persists, please contact your dentist.
          </p>
        </div>

        <div>
          <h4 className="font-semibold  text-[#0a0a5c]">
        11. Dental crowns are not permanent.
          </h4>
          <p>
            They will eventually need to be replaced. The average lifespan of a dental crown is 5 to 15 years. Our Dental Crown Testimonials if you are now interested in getting dental crowns, be sure to contact us by scheduling an appointment online. We will be happy to help you!

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