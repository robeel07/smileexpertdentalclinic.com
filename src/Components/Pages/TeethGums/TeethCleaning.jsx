
import { Link } from "react-router-dom";
import seventeen from "../../Images/seventeen.jpg";
import eighteen from "../../Images/eighteen.jpg";
import nineteen from "../../Images/nineteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function TeethCleaning() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${seventeen})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Teeth Cleaning Service in Khanewal
    </h1>
  
</div>
    </div>


   {/* TEXT INTRO */}
<div className="max-w-7xl mx-auto my-10 px-5 text-[#333] text-base leading-relaxed text-justify">
  <p>
    Do you desire a white, healthy smile? Regularly cleaning your teeth prevents future problems and ensures dental health. Achieve a happy, healthy smile through home dental hygiene and regular dentist visits. The dental cleaning process in Pakistan helps maintain excellent oral health and provides the satisfaction of fresh, clean teeth.
  </p>
</div>

{/* TWO COLUMN SECTION */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* LEFT TEXT */}
    <div className="flex-1">
      <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-5">
        What is Teeth Cleaning Process?
      </h2>

      <p className="text-[#555] leading-relaxed mb-4">
        Do you desire a white, healthy smile? Teeth cleaning prevents future issues and is crucial for dental health. Home dental hygiene and regular dentist visits maintain a happy, healthy smile. Clean teeth after a dental visit in Pakistan provide unmatched satisfaction. It supports good oral health!
      </p>

      <p className="text-[#555] leading-relaxed mb-4">
        Cleaning removes plaque and tartar to prevent cavities and gum disease. Good oral hygiene prevents costly problems. Home care and dental visits keep teeth clean.
      </p>

      <p className="text-[#555] leading-relaxed mb-4">
        Our dentists train patients to maintain healthy teeth and gums. During teeth cleaning in Lahore, dentists assess your oral condition and check for disease. Plaque and bacteria are removed, leaving teeth smooth and clean.
      </p>

      <p className="text-[#555] leading-relaxed mb-4">
        Dentists provide home care guidance, including flossing and brushing techniques.
      </p>

      <p className="text-[#555] leading-relaxed">
        Deep cleaning, called scaling and root planning, treats severe gum disease. It removes plaque and tartar from tooth surfaces and roots.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 ">
      <img
        src={eighteen}
        alt="Teeth Cleaning"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
</div>

{/* BACKGROUND IMAGE SECTION WITH CARDS */}
<div
  className="w-full py-20 px-5 relative bg-cover bg-center"
  style={{ backgroundImage: `url(${nineteen})` }}
>
  {/* OVERLAY */}
  <div className="bg-black/55 rounded-3xl max-w-[1400px] mx-auto px-5 sm:px-10 py-12 sm:py-16">
    {/* CARDS ROW 1 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        {
          title: "Appointments:",
          content: [
            "Routine cleaning every six months.",
            "Scaling may require two visits.",
            "Follow-up sessions may be needed.",
          ],
        },
        {
          title: "Before Your Appointment:",
          content: ["No special preparation required.", "Brush and floss normally."],
        },
        {
          title: "How Long it Takes:",
          content: ["Hygiene treatments: 30–60 minutes.", "Consultations: ~60 minutes."],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-white flex flex-col"
        >
          <h3 className="text-[#3fe0d0] text-lg sm:text-xl font-semibold mb-4">{card.title}</h3>
          <ul className="pl-4 list-disc space-y-2">
            {card.content.map((item, j) => (
              <li key={j} className="leading-relaxed text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>

    {/* CARDS ROW 2 */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {[
        {
          title: "After Your Appointment:",
          content: ["You can resume normal activities."],
        },
        {
          title: "You May Be Asked About:",
          content: ["Dental & medical history.", "Daily oral care routine."],
        },
        {
          title: "Quick Tips:",
          content: [
            "Building good dental habits takes time. Place reminders near your mirror and follow your dentist’s advice.",
          ],
        },
      ].map((card, i) => (
        <div
          key={i}
          className="bg-white/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 text-white flex flex-col"
        >
          <h3 className="text-[#3fe0d0] text-lg sm:text-xl font-semibold mb-4">{card.title}</h3>
          <ul className="pl-4 list-disc space-y-2">
            {card.content.map((item, j) => (
              <li key={j} className="leading-relaxed text-sm sm:text-base">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</div>


{/* FAQ SECTION */}
<div className="py-10 px-5">
  <h2 className="text-center text-[#0B1C6D] text-2xl sm:text-3xl font-semibold mb-10">
    FAQs
  </h2>

  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
    {[
      "01. How much does it cost to get your teeth cleaned?",
      "02. Is professional teeth cleaning painful?",
      "03. How often should I visit a dentist or hygienist?",
      "04. Why should you get dental teeth cleaning done?",
      "05. What is ultrasonic dental cleaning?",
      "06. When would you get ultrasonic dental cleaning?",
      "07. What is the best way to clean dentures?",
      "08. What is teeth cleaning price in Pakistan?",
    ].map((faq, i) => (
      <div key={i} className="bg-[#67BDB8] px-3 py-3 flex items-center gap-1 text-base cursor-pointer rounded-md hover:bg-[#57b2ad] transition-colors">
        <span className="text-lg font-bold">+</span>
        <span>{faq}</span>
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








