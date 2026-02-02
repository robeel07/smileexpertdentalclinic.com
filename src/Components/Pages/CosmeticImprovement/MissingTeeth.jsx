
import { Link } from "react-router-dom";
import sixtytwo from "../../Images/sixtytwo.jpg";
import sixtythree from "../../Images/sixtythree.jpg";
import sixtyfour from "../../Images/sixtyfour.jpg";
import sixtyfive from "../../Images/sixtyfive.jpg";
import sixtysix from "../../Images/sixtysix.jpg";
import sixtyseven from "../../Images/sixtyseven.jpg";
import { PiToothFill } from "react-icons/pi";
import { RiToothFill } from "react-icons/ri";
import { LiaTeethSolid } from "react-icons/lia";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function MissingTeeth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_65%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${sixtytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Missing Teeth Treatment in Khanewal
    </h1>
</div>
    </div>


      {/* INTRO TEXT */}
      <div className="max-w-7xl mx-auto my-10 p-5 text-[16px] leading-[1.8] text-[#333] text-justify">
        <p>
          Missing teeth can have a negative impact on your smile and self-confidence.
          Fortunately, there are solutions available. Tooth replacement can improve
          your chewing ability, facial aesthetics and speech.
          <span className="text-[#0aa6ff] font-bold"> Dental implants</span>, mini implants,
          <span className="text-[#0aa6ff] font-bold"> fixed bridges</span>, and removable or
          implant support <span className="text-[#0aa6ff] font-bold"> dentures</span> are
          among the treatment options.
        </p>
      </div>

      {/* CAUSES SECTION */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex-1">
            <img
              src={sixtythree}
              alt="Dental checkup"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[32px] text-[#0a1b5c] mb-4">
              Causes of Missing Teeth
            </h2>

            <p className="text-[16px] leading-[1.7] text-black mb-3">
              There are multiple causes for missing teeth, some major ones are:
            </p>

            <ul className="pl-[50px] mb-3 list-disc text-[16px] leading-[1.8] text-black">
              <li>Tooth decay and cavities</li>
              <li>Gum diseases</li>
              <li>Injury or accident</li>
              <li>Age factor</li>
              <li>Poor oral hygiene</li>
            </ul>

            <p className="text-[16px] leading-[1.7] text-black">
              Apart from these, there are genetic causes like hypodontia.
            </p>
          </div>
      </div>

      <div className=" w-full px-3 py-3 mt-9 text-center">
          <h2 className="text-[32px] align-center text-[#0a1b5c] mb-3">
            Missing Teeth Solutions at SmileExpert
          </h2>

          <p className="text-[16px] leading-[1.7] text-black max-w-[1300px] mx-auto">
            We provide various missing teeth treatment options that restore both
            aesthetics and functionality.
          </p>
        </div>

      {/* IMPLANTS */}
      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex-1">
            <h2 className="text-[32px] text-[#0a1b5c] mb-4">
              Dental Implants Surgery
            </h2>

            <p className="text-[16px] leading-[1.7] text-black mb-2">
              For individuals with one or multiple missing teeth in different areas of their mouth, a dental implant offers a potential solution. It involves a surgical procedure where an implant or screw is placed in the jaw, serving as a permanent foundation for a missing tooth.
            </p>

            <p className="text-[16px] leading-[1.7] text-black">
              The implant is topped with a <span className="font-semibold text-[#0aa6ff]"> crown</span> that closely resembles a natural tooth and can last for many years. Importantly, neighboring teeth remain unaffected by the implant.
            </p>
          </div>

          <div className="flex-1">
            <img
              src={sixtyfour}
              alt="Dental implant"
              className="w-full h-full rounded-3xl object-cover"
            />
          </div>
      </div>

      {/* WHAT NEXT */}
      <div className="w-full px-10 py-20 bg-white text-center">
        <h2 className="text-[34px] text-[#0a1b5c] mb-4">What Next</h2>

        <p className="max-w-7xl mx-auto mb-12 text-[16px] leading-[1.7] text-black">
          <span className="text-[#00a6ff] cursor-pointer">Book online</span> or call
          <strong> 0300-8395562</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {[
            { title: "Bridges", icon: <RiToothFill /> },
            { title: "Dentures", icon: <LiaTeethSolid /> },
            { title: "Dental Implants", icon: <PiToothFill /> },
            { title: "Crowns", icon: <RiToothFill /> },
          ].map((item, i) => (
            <div
              key={i}
              className="w-[260px] h-[150px] bg-white rounded-[18px]
                         shadow-[0_10px_25px_rgba(0,0,0,0.08)]
                         flex flex-col items-center justify-center gap-4"
            >
              <div className="text-[42px] text-sky-400">{item.icon}</div>
              <h4 className="text-[18px] text-[#0a2db3]">{item.title}</h4>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="px-10 py-12 bg-white">
        <h2 className="text-center text-[36px] text-[#0a1b5c] mb-12">FAQs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-8 max-w-7xl mx-auto">
          {[
            "How to fix missing teeth without implants?",
            "What is the best way to replace missing teeth?",
            "How much will it cost?",
            "I’ve had an accident and lost a tooth, what should I do?",
            " I have loose teeth, what should I do?",
            "Does it matter if I have missing teeth?",
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#69bfbf] hover:bg-[#58b0b0]
                         transition-all duration-300
                         p-[18px_24px] rounded
                         flex items-center gap-4 cursor-pointer
                         hover:-translate-y-0.5"
            >
              <span className="text-[22px] font-bold">+</span>
              <span className="text-[15px]">{item}</span>
            </div>
          ))}
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

        
                      className="w-[35px] h-[35px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
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
  )
}








