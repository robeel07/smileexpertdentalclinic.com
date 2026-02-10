
import { Link } from "react-router-dom";
import five from "../../Images/five.png";
import six from "../../Images/six.png";
import seven from "../../Images/seven.jpg";
import eight from "../../Images/eight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function BrokenChippedTeeth() {
  return (
    <>
    <div
      className="relative w-full
    min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%]
    flex items-center
    pt-28 sm:pt-32 "
      style={{ backgroundImage: `url(${five})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center
        text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Broken Tooth Treatment in Khanewal
    </h1>
</div>
    </div>
  

{/* INTRO */}
<div className="max-w-7xl mx-auto px-3 py-16 text-[16px] text-[#333] text-justify">
  <p>
    A broken tooth is stressful and uncomfortable, but you don’t have to face it alone.
    Our professional dentists provide effective treatment for your teeth. Our specialists
    help you with broken teeth treatment, giving procedures that can rebuild your smile
    and eliminate pain. Whether you have a minor chip or crack, a deep chip or any form
    of sensitivity, we employ modern technology to get the best service done in the
    shortest time possible. Call <b>SmileExpert</b> now for professional dental services,
    including cracked tooth syndrome treatment, broken tooth pain treatment and more.
    Keep smiling because your smile is worthy of the best.
  </p>
</div>

{/* CAUSES SECTION */}
<div className="max-w-7xl mx-auto px-3 py-3 flex justify-center items-center gap-3">
  {/* LEFT */}
  <div className="flex-1 ">
    <h2 className="text-3xl font-bold text-[#0a1a5c] mb-[20px]">
      Causes of a Broken Tooth
    </h2>

    <p className="text-[16px] leading-[1.7] text-[#333] mb-[20px]">
      A crack within a tooth can occur for many causes, either through an
      accident or due to our daily practices. Here are some common reasons
      for a broken tooth:
    </p>

    <ul className="text-[16px] leading-[1.4] text-[#222] list-disc pl-[38px]">
      <li>Chewing hard foods</li>
      <li>Accidents or falls</li>
      <li>Grinding teeth at night</li>
      <li>Tooth decay</li>
      <li>Weak or old fillings</li>
      <li>Accident (sports-related, falls)</li>
      <li>Biting nails or ice</li>
    </ul>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1 max-w-[50%]">
    <img
      src={six}
      alt="Dentist treating patient"
      className="w-full h-auto rounded-[20px] object-cover"
    />
  </div>
</div>

{/* SYMPTOMS SECTION */}
<div className="bg-[#eef5fb] max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 mt-5 gap-12 items-center">
  {/* LEFT IMAGE */}
  <div className="flex-1">
    <img
      src={seven}
      alt="Dental check"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>

  {/* RIGHT TEXT */}
  <div className="flex-1 ">
    <h2 className="text-3xl font-bold text-[#0c1b3a] mb-[20px]">
      Symptoms of Chipped or Broken Teeth
    </h2>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[10px] max-w-[650px]">
      It is thus helpful to understand some of the symptoms you are likely to
      experience with a broken tooth so that you can seek treatment immediately.
      Here are the common signs to watch for:
    </p>

    <ul className="text-[16px] leading-[1.4] text-[#222] list-disc pl-[38px]">
      <li>Pain when chewing or biting</li>
      <li>Sensitivity to hot, cold, or sweet food</li>
      <li>Inflammation or pain in the region of the tooth</li>
      <li>Visible cracks or chips</li>
      <li>Continuous pain or stinging pain</li>
    </ul>
  </div>
</div>

{/* REPAIR OPTIONS */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 mt-5 gap-12 items-center">
  {/* LEFT TEXT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0a1a5c] mb-[20px]">
      Broken Tooth Repair Options
    </h2>

    <p className="text-[16px] leading-[1.6] text-[#333] mb-[20px] max-w-[750px]">
      At SmileOn Dental Clinic, we provide various treatments for broken, damaged
      or cracked teeth. Whether you want broken tooth pain treatment or need a
      smile makeover, our experts will recommend the best option based on your
      situation.
      <br />
      Our treatment options include:
    </p>

    <ul className="text-[16px] leading-[1.6] text-[#222] list-disc pl-[38px] max-w-[750px]">
      <li><strong>Dental Fillings</strong> — best for minor chips or cracks.</li>
      <li><strong>Dental Bonding</strong> — quick and affordable repair.</li>
      <li><strong>Dental Crowns</strong> — full coverage for deep fractures.</li>
      <li><strong>Veneers</strong> — ideal for front tooth repair.</li>
      <li><strong>Root Canal Treatment</strong> — needed when pulp is affected.</li>
      <li><strong>Tooth Extraction</strong> — removed and replaced if unsavable.</li>
    </ul>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img
      src={eight}
      alt="Repair Options"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>
</div>

{/* WHAT NEXT + FAQ */}
{/* WHAT'S NEXT SECTION */}
<div className="max-w-7xl mx-auto mt-5 px-3 py-6 text-center">
  <h2 className="text-2xl sm:text-3xl font-bold text-[#0a1a5c] mb-[10px]">
    What's Next
  </h2>

  <p className="text-[15px] sm:text-[16px] leading-[1.7] max-w-3xl mx-auto text-[#333]">
    Expert staff enables you to get the most appropriate cracked tooth treatment
    for a long time. Make an appointment today!
  </p>

  <button className="mt-[25px] px-[20px] py-[15px] rounded-[40px] border-2 border-[#00aab5] bg-[#00c8d2] text-white text-[16px] sm:text-[18px] font-semibold cursor-pointer">
    Book an Appointment
  </button>
</div>

{/* FAQ SECTION */}
<div className="max-w-7xl mx-auto px-3 py-6">
  <h2 className="text-[24px] sm:text-[32px] font-bold text-[#0c1b3a] text-center mt-[20px] mb-[30px]">
    FAQs
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-[20px]">
    {[
      "01. How to treat a cracked tooth?",
      "02. What happens if one of the front teeth is chipped?",
      "03. Can you replace tooth enamel?",
      "04. Can broken or chipped teeth be prevented?",
      "05. What is the price to get a chipped tooth repaired?",
      "06. What is the treatment for a fractured tooth?",
      "07. What are the measures you take when you have a broken tooth?",
      "08. Are there any home remedies for a broken tooth?",
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#57b7b7] p-[18px] sm:p-[20px] flex items-center gap-[15px] rounded-[3px] cursor-pointer"
      >
        <span className="text-[22px] font-black mt-[-3px]">+</span>
        <span className="text-[16px] sm:text-[18px] text-[#0c1b3a]">
          {item}
        </span>
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








