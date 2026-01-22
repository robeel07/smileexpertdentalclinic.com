
import { Link } from "react-router-dom";
import quality from "../../Images/quality.jpg";
import icon1 from "../../Images/icon1.jpg";
import icon2 from "../../Images/icon2.jpg";
import icon3 from "../../Images/icon3.jpg";
import icon4 from "../../Images/icon4.jpg";
import icon5 from "../../Images/icon5.jpg";
import icon6 from "../../Images/icon6.jpg";
import icon7 from "../../Images/icon7.jpg";
import icon8 from "../../Images/icon8.jpg";
import icon9 from "../../Images/icon9.jpg";
import icon10 from "../../Images/icon10.jpg";
import icon11 from "../../Images/icon11.jpg";
import icon12 from "../../Images/icon12.jpg";
import icon13 from "../../Images/icon13.jpg";
import icon14 from "../../Images/icon14.jpg";
import icon15 from "../../Images/icon15.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Quality() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_70%]"
      style={{ backgroundImage: `url(${quality})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Quality
    </h1>
  </div>
</div>
    </div>

    {<Link to="/PatientSafety/quality"></Link>}

    <div className="w-full bg-[#f3f8fb] py-6 px-4">
  <div className="max-w-7xl mx-auto flex items-center justify-center gap-10 text-center">
    
    <span className="text-[#0a1f7a] font-medium text-2xl">
      Efficient and Safe Dental Care
    </span>

    <span className="text-[#39c0c7] text-5xl font-extrabold">→</span>

    <span className="text-[#0a1f7a] font-medium text-2xl">
      Standardization of Dental Services
    </span>

    <span className="text-[#39c0c7] text-5xl font-extrabold">→</span>

    <span className="text-[#0a1f7a] font-medium text-2xl">
      Upgradation of Technical Skills
    </span>

  </div>
</div>

 <div className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

    {/* LEFT Side */}
    <div className="bg-[#f3f7fb] rounded-3xl p-6">
      {/* 9 Images */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {[icon7, icon8, icon9, icon10, icon11, icon12, icon13, icon14, icon15].map((img, i) => (
          <div
            key={i}
            className="w-full h-20 rounded-xl overflow-hidden"
          >
            <img
              src={img}
              alt="patient safety"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-semibold px-9 text-[#0a1f8f] mb-6">
        Patient Safety
      </h2>

      <ul className="space-y-1 text-[#0a1f8f] font-medium">
  {[
    "7X SAFETY",
    "4 Step Sterilization",
    "Safety Equipment",
    "Equipment & Technology",
    "Quality",
  ].map((item, i) => (
    <li
      key={i}
      className="group flex items-center gap-3 cursor-pointer
                 px-0 py-2 rounded-lg
                 transition-all duration-300
                 hover:bg-white hover:shadow-sm"
    >
      {/* Left indicator */}
      <span
        className="w-1 h-0 bg-[#0aa6ff] rounded-full
                   transition-all duration-300
                   group-hover:h-6"
      ></span>

      {/* Text */}
      <span
        className="transition-colors duration-300
                   group-hover:text-[#0aa6ff]"
      >
        {item}
      </span>
    </li>
  ))}
</ul>

    </div>

    {/* RIGHT SIDE */}
    <div className="lg:col-span-2 space-y-1">

      {/* STEP 1 */}
      <div className="flex gap-6 items-start ">
        <img
          src={icon1}
          alt="icon"
          className="w-32 h-40 rounded-xl object-cover mb-4"
        />
        <div>        
          <p className="text-gray-600 leading-relaxed mt-4">
            Robust policies & protocols which are standardized are mandated for the clinics. This ensures ensure 100% sterile clinic for staff, patients & attendants. These policies & protocols have been enhanced 7X to formulate the New Safety Protocols to make our clinic safest in the world.
          </p>
        </div>
      </div>

      {/* STEP 2 */}
      <div className="flex gap-6 items-start">
        <img
          src={icon2}
          alt="icon"
          className="w-32 h-40 rounded-2xl object-cover mb-4"
        />
        <div>
          <p className="text-gray-600 leading-relaxed mt-4 ">
            Bi-monthly surprise Quality Audits & Mock Drills in clinic to ensure complete implementation of clinical SOPs by Doctors and Dental Assistants. This includes review of adequacy of PPE to ensure all clinics follow set protocols.
          </p>
        </div>
      </div>

      {/* STEP 3 */}
      <div className="flex gap-6 items-start">
        <img
          src={icon3}
          alt="icon"
          className="w-32 h-40 rounded-2xl object-cover"
        />
        <div>
          <p className="text-gray-600 leading-relaxed mt-4">
            Patient records are digitized and stored in a highly secured cloud storage. The records can be accessed only by SmileExpert Doctors. This Patient Record Software along with Billing & Invoicing facilitates ‘Peer Review Process’; wherein a SmileExpert Doctor may be asked to reviews the treatment case of another SmileExpert Doctor under Strict confidentiality.
          </p>
        </div>
      </div>

      {/* STEP 4 */}
      <div className="flex gap-6 items-start">
        <img
          src={icon4}
          alt="icon"
          className="w-32 h-40 rounded-2xl object-cover"
        />
        <div>
          <p className="text-gray-600 leading-relaxed mt-4">
            All Doctors and clinic staff undergo mandatory and regular extensive training on new introductions or recent techniques with a view to enhance professional competence in clinical procedures and the infection control practices as laid down by WHO.
          </p>
        </div>
      </div>

      {/* STEP 5 */}
      <div className="flex gap-6 items-start">
        <img
          src={icon5}
          alt="icon"
          className="w-32 h-40 rounded-2xl object-cover"
        />
        <div>
          <p className="text-gray-600 leading-relaxed mt-4">
            The patient record software enables analysis of each case using proprietary methodology developed in-house by a team of Dental Specialists.
          </p>
        </div>
      </div>

      {/* STEP 6 */}
      <div className="flex gap-6 items-start">
        <img
          src={icon6}
          alt="icon "
          className="w-32 h-40 rounded-2xl object-cover"
        />
        <div>
          <p className="text-gray-600 leading-relaxed mt-4">
            SmileExpert Clinic comply to Radiation Safety protocols and radiation safety devices such as lead aprons and thyroid collars are used.
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





