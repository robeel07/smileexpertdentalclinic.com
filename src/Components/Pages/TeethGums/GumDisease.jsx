
import { Link } from "react-router-dom";
import twenty from "../../Images/twenty.jpg";
import twentyone from "../../Images/twentyone.jpg";
import twentytwo from "../../Images/twentytwo.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function GumDisease() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${twenty})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Gum Disease Treatment in Khanewal
    </h1>
</div>
    </div>


   {/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    Gum disease, caused by poor dental hygiene, is hazardous. An infection of the gums can lead to tooth-supporting bone damage. Gum disease is often painless; tooth loss may occur if left untreated. The two main types are gingivitis and periodontitis.
    Gingivitis, affecting up to 70% of Pakistanis, is the most common form. Around 30% of individuals over 30 have periodontitis. Early detection and treatment improve dental health. Regular dental checkups, brushing techniques twice daily, and flossing help prevent gum disease.
  </p>
</div>

{/* SYMPTOMS SECTION */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center ">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1C6D]">Symptoms of Gum Disease:</h2>
      <p className="text-sm sm:text-base leading-relaxed">
        Good oral health is crucial due to the often painless nature of gum disease. Regular dental checkups are necessary to ensure proper maintenance.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        Gum disease symptoms can be imperceptible. Some signs could be:
      </p>
      <ul className="pl-9 list-disc space-y-1 text-sm sm:text-base leading-relaxed">
        <li>red, swollen or tender gums</li>
        <li>bleeding when you floss or brush</li>
        <li>loose teeth or separation between teeth</li>
        <li>continuous bad breath</li>
        <li>gums that pull away from teeth</li>
        <li>when you bite, the position of your teeth changes</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed">
        Gum disease can be asymptomatic for some individuals. Regular dental checkups serve as the primary defence. Early detection during hygienist visits ensures optimal oral health.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
        <img
          src={twentyone}
          alt="Gum Disease Checkup"
          className="w-full h-full rounded-3xl object-cover"
        />
      
    </div>
</div>

{/* CAUSES SECTION */}
<div className="w-full bg-[#F4F8FB] flex justify-center">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img
        src={twentytwo}
        alt="Causes of Gum Disease"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-3xl sm:text-3xl font-semibold text-[#0B1C6D]">Causes of Gum Disease:</h2>
      <p className="text-sm sm:text-base leading-relaxed">
        Oral bacterial overgrowth leading to plaque buildup is the primary cause of gum disease. Poor oral health is a significant contributing factor.
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        There are a few more risk factors for gum disease, though, including:
      </p>
      <ul className="pl-9 list-disc space-y-1 text-sm sm:text-base leading-relaxed">
        <li>Smoking</li>
        <li>Diabetes</li>
        <li>Pregnancy or hormonal changes</li>
        <li>Medication</li>
        <li>Genetics</li>
        <li>Other health problems</li>
        <li>Stress</li>
        <li>Poor nutrition</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed">
        Gum disease is common but treatable. Regular dentist and hygienist visits are essential for maintaining dental health.
      </p>
    </div>
  </div>
</div>

{/* WHAT NOW SECTION */}
<div className="w-full bg-white">
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-0 py-20 text-center space-y-6">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1C6D]">What now</h2>
    <p className="text-sm sm:text-base leading-relaxed max-w-[1300px] mx-auto">
      Explore available treatments to gain further insight. For personalised advice regarding your symptoms, we recommend scheduling a dentist consultation. Contact us via phone or our online scheduling system to book an{" "}
      <span className="text-[#00AEEF] font-medium">appointment</span>.
    </p>
    <button className="bg-[#25CFE5] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#00C0D8] transition">
      Book an Appointment
    </button>
  </div>

  {/* FAQs */}
  <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-0 pb-20">
    <h2 className="text-2xl sm:text-3xl font-semibold text-[#0B1C6D] text-center mb-10">FAQs</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
      {[
        "01. How much does it cost to treat gum disease?",
        "05. Does gum disease hurt?",
        "02. Can gum disease be prevented?",
        "06. What happens if you have gum disease?",
        "03. Does gum disease hurt?",
        "07. How do you get rid of gum disease at home?",
        "04. Can gum disease be cured?",
      ].map((faq, i) => (
        <div
          key={i}
          className="bg-[#67BDB8] text-black px-3 py-3 flex items-center cursor-pointer rounded-lg hover:bg-[#57B2AD] transition"
        >
          <span className="text-lg font-bold mr-2">+</span>
          <span className="text-sm sm:text-base">{faq}</span>
        </div>
      ))}
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
        
              <p className="my-3 flex gap-[10px] ">📞 03008395562</p>
        
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








