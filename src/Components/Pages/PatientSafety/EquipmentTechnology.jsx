
import { Link } from "react-router-dom";
import tech from "../../Images/tech.jpg";
import tech1 from "../../Images/tech1.jpg";
import tech2 from "../../Images/tech2.jpg";
import tech3 from "../../Images/tech3.jpg";
import tech4 from "../../Images/tech4.jpg";
import tech5 from "../../Images/tech5.jpg";
import tech6 from "../../Images/tech6.jpg";




import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function SafetyEquipment() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${tech})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Equipment & Technology
    </h1>
  </div>
</div>
    </div>

    {<Link to="/PatientSafety/equipmenttechnology"></Link>}

    <div className="max-w-7xl mx-auto px-6 py-14 text-black-900">
        <h1 className="text-3xl font-bold text-center mb-4 text-[#0a1a5c]">
            Equipment & Technology
        </h1>
        <p className="leading-relaxed">
            SmileExpert clinic offers the very latest advantages in dental technology and equipment. SmileExpert doctors are continually trained in the use of our advanced technology and equipment, and in clinical best practices, to ensure that patients benefit from the advantages available today.
        </p>
    </div>

    <div className="w-full bg-white py-4">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 1 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech1}
        alt="Disposable Gloves"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Disposable Gloves
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Hands are properly washed, sanitized and dried before donning gloves.
          Firstly a pair of polythene glove is worn followed by a pair of latex
          gloves for every patient. Gloves are even changed if they appear to be
          contaminated during the treatment.
        </p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech2}
        alt="Face Masks"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Rotary Tools
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          SmileExpert imports world-class rotary tools from Germany and Japan, which are used for drilling. They enable doctors to drill with greater precision, so the plaque and bacteria present at the site can be thoroughly removed. This allows fillings to properly attach to the cavity wall. As a result, fillings last longer.
        </p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech3}
        alt="Protective Eyewear"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          X-Rays
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          SmileExpert clinic use the latest x-ray technology to diagnose oral health problems in a painless, non-invasive way. Though exposure to radiation can pose health risks, SmileExpert uses sophisticated, portable x-ray equipment that limits this exposure to negligible levels. SmileExpert clinics also use lead aprons and lead thyroid collars to protect doctors and patients from radiation. The principle directs medical establishments to identify and use ways to minimize the exposure of medical personnel, patients and clinical staff to radiation.
        </p>
      </div>
    </div>

  </div>
</div>

<div className="w-full bg-white py-6">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">

    {/* Card 4 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech4}
        alt="Disposable Gloves"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Water Filteration System
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
            SmileExpert clinic rely on reverse osmosis (RO) filtration systems to ensure the safest possible water supply.
        </p>
      </div>
    </div>

    {/* Card 5 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech5}
        alt="Face Masks"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Protective Clothing
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Protective clothing such as Scrubs prevent contamination of underlying clothing and protects from exposure to blood and body substances. Scrubs are worn by all Doctors throughout the day. They are then washed later in the evening.
        </p>
      </div>
    </div>

    {/* Card 6 */}
    <div className="bg-[#f5f9fc] rounded-2xl border border-gray-400 shadow-md overflow-hidden text-center">
      <img
        src={tech6}
        alt="Protective Eyewear"
        className="w-full h-56 object-cover"
      />
      <div className="p-6">
        <h3 className="text-1xl font-semibold text-[#0a2a66] mb-4">
          Surgical Coverall/Gowns
        </h3>
        <p className="text-gray-700 text-sm leading-relaxed">
          Gowns are critical elements of the PPE since they are the second- most-used piece of PPE, following gloves. No dental procedure is taken up without donning the surgical gown.
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
        
              <p className="my-2 flex gap-[10px] px-2">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px] px-2 ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-3">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold px-2"> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
              <div className="text-left bg-[#0c2340] text-white py-[50px] px-[20px]">
                <div className="flex gap-[15px] mt-[20px]">
                  <a

                      href="https://www.facebook.com/share/17zJppb7qh/"

                      target="_blank"

                      rel="noopener noreferrer"

                      className="w-[40px] h-[40px] bg-blue-900 flex justify-center items-center rounded-[8px] no-underline"

                      aria-label="Follow us on Facebook"

                    >

                      <FaFacebookF size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://instagram.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#000000] flex justify-center items-center rounded-[8px] no-underline"

        
                      aria-label="Follow us on Instagram"

        
                    >

        
                      <FaInstagram size={20} color="white" />
                  </a>
        
                  <a

        
                      href="https://youtube.com"

        
                      target="_blank"

        
                      rel="noopener noreferrer"

        
                      className="w-[40px] h-[40px] bg-[#FF0000] flex justify-center items-center rounded-[8px] no-underline"

        
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





