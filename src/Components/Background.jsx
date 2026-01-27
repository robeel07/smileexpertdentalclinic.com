
import { Link } from "react-router-dom";
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

    
      <div className="relative h-full max-w-7xl sm:px-6 lg:px-8 px-4 flex items-end">
  <div className="pb-6 sm:pb-8 mt-4 sm:mt-6 w-full">
    <h1 className="text-white sm:text-3xl md:text-4xl lg:text-5xl  sm:ml-8 md:ml-16 lg:ml-32 mb-3 font-bold">
      Yellow Teeth Treatment in Khanewal
    </h1>
  </div>
</div>


<div className="max-w-6xl mx-auto relative z-10 px-3 mb-0 -mt-8">
  <div className="bg-gray-100 backdrop-blur-md rounded-2xl border border-slate-200 shadow-lg">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">

      {/* Stat 1 */}
      <div className="py-2 text-center">
        <h3 className="text-4xl font-extrabold text-blue-900 animate-softBlink">
          400+
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Successful Treatments
        </p>
      </div>

      {/* Stat 2 */}
      <div className="py-2 text-center">
        <h3 className="text-4xl font-extrabold text-blue-900 animate-softBlink">
          100+
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Happy Patients
        </p>
      </div>

      {/* Stat 3 */}
      <div className="py-2 text-center">
        <h3 className="text-4xl font-extrabold text-blue-900 animate-softBlink">
          90%
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Satisfaction Rate
        </p>
      </div>

      {/* Stat 4 */}
      <div className="py-2 text-center">
        <h3 className="text-4xl font-extrabold text-blue-900 animate-softBlink">
          5+
        </h3>
        <p className="mt-2 text-sm font-medium text-slate-600">
          Years of Experience
        </p>
      </div>

    </div>
  </div>
</div>

    </div>


{/* HARD spacer – guarantees no collision */}
<div className="h-[420px] sm:h-[360px] md:h-[280px] lg:h-[140px]" />

<div className="max-w-7xl mx-auto mt-0 px-4 sm:px-6 md:px-10 lg:px-20
                py-6 text-center">
  <p className="text-base leading-relaxed text-slate-700">
    Concerned about yellow teeth? You’re not alone. We understand. Despite your efforts with brushing, whitening toothpaste, and flossing, your teeth may still appear yellow. Don’t worry. Professional treatment can effectively address yellow teeth. Visit SmileExpert for a discussion on yellow teeth treatment. Stained or yellow teeth can affect your confidence, but there are affordable and durable solutions available.
  </p>
</div>



<div className="max-w-7xl mx-auto px-6 py-0 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  
  
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

  
  <p className="max-w-7xl mx-auto text-center text-gray-900 sm:px-8 md:px-16 lg:px-24 text-m leading-relaxed px-2">
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

<div className="max-w-7xl mx-auto sm:px-8 md:px-16 lg:px-24 bg-white py-4">

  <h2 className="text-center text-3xl font-semibold text-[#0a1a5c] mb-6">
    FAQs
  </h2>

  
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 px-2">
  
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

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    About Us
  </Link>

  <Link to="/contact" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Contact Us
  </Link>

  <Link to="/about/meet-our-team" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Meet the Team
  </Link>

  <Link to="/teeth-whitening-before-and-after" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Before & After
  </Link>

  <Link to="/blog" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Blogs
  </Link>
</div>


    
    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Treatments</h3>

  <Link to="/treatment/exam" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Exam & X-Rays Check-Up
  </Link>

  <Link to="/emergency-dentist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Emergency
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Smile Makeover
  </Link>

  <Link to="/t/veneer" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Veneers
  </Link>

  <Link to="/t/implants" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Implants
  </Link>

  <Link to="t/canals" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Root Canal Treatment
  </Link>

  <Link to="/t/orthodontist" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Orthodontic Braces
  </Link>

  
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>

  <Link to="/yellow-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Yellow Teeth
  </Link>

  <Link to="/teeth-cleaning" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Teeth Cleaning
  </Link>

  <Link to="/missing-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Missing Teeth
  </Link>

  <Link to="/broken-chipped-tooth" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Broken Chipped Tooth
  </Link>

  <Link to="/gum-disease" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Gum Disease
  </Link>

  <Link to="/crooked-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Crooked Teeth
  </Link>

  <Link to="/sore-teeth-treatment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Sensitive & Sore Teeth
  </Link>

  <Link to="/dental-anxiety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Dental Anxiety
  </Link>
</div>


    <div className="min-w-[200px]">
  <h3 className="text-[20px] mb-[20px]">Patient Safety</h3>

  <Link to="/7x-safety" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    7X SAFETY
  </Link>

  <Link to="/4-step-sterilization" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    4 Step Sterilization
  </Link>

  <Link to="/safety-equipment" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Safety Equipment
  </Link>

  <Link to="/equipment-technology" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Equipment & Technology
  </Link>

  <Link to="/quality" className="block my-[6px] text-inherit no-underline hover:text-blue-600">
    Quality
  </Link>
</div>


    <div className="min-w-[250px]">
              <h3 className="text-[20px] mb-[20px]">Get in touch</h3>
        
              <p className="my-2 flex gap-[10px] ">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px]  ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-2">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold "> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[35px] h-[35px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#1f1f1f] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[35px] h-[35px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Subscribe to our YouTube channel"

        
                    >

        
                      <FaYoutube size={22} color="white" />
                  </a>
                </div>
              </div>
            </div>
    
  </div>
   <div className="w-full text-center justify-end mb-0 border-t border-gray-300 pt-4">
  <p className="text-sm text-gray-400">
    © SmileExpert
    <span className="mx-2 text-gray-600">|</span>
    Powered by{" "}
    <a
      href="https://verdant-soft.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-blue-400 no-underline font-medium transition-colors duration-300 "
    >
      Verdant Soft
    </a>
  </p>
</div>

</div>










  
  </>

  );
}









