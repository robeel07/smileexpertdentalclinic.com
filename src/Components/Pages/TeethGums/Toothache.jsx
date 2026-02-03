
import { Link } from "react-router-dom";
import nine from "../../Images/nine.png";
import ten from "../../Images/ten.jpg";
import eleven from "../../Images/eleven.jpg";
import twelve from "../../Images/twelve.jpg";
import thirteen from "../../Images/thirteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function Toothache() {
  return (
    <>
    <div
      className="relative w-full
    min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%]
    flex items-center
    pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${nine})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center
        text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
       Teeth Pain Treatment in Khanewal
    </h1>
</div>
    </div>


    {/* WHEN TO SEE A DENTIST */}
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center mt-5 items-center gap-3">
  {/* LEFT TEXT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0A2A7A] mb-[20px]">
      When to See a Dentist
    </h2>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[15px] max-w-[750px]">
      If in doubt, check it out.
      <br />
      Book an appointment to see a dentist as soon as possible if:
    </p>

    <ul className="text-[16px] leading-[1.8] text-[#222] list-disc pl-[40px] max-w-[750px] mb-[25px]">
      <li>The pain lasts longer than a day or two</li>
      <li>The pain is severe or starts to become unbearable</li>
      <li>You have a fever, earache, or pain when you open your mouth wide</li>
    </ul>

    <h3 className="text-3xl font-semibold text-[#0A2A7A] mt-[20px] mb-[12px]">
      Are you in tooth Pain?
    </h3>

    <p className="text-[16px] leading-[1.8] text-[#333] max-w-[750px]">
      Call us if you’re experiencing pain and need emergency dental care.
      We’ll get you in fast for an urgent appointment.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img
      src={ten}
      alt="Dentist Consultation"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>
</div>

{/* SYMPTOMS OF TOOTH PAIN */}
<div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-2 justify-center mt-5 items-center gap-3">
  {/* LEFT IMAGE */}
  <div className="flex-1">
    <img
      src={eleven}
      alt="Symptoms of Tooth Pain"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>

  {/* RIGHT TEXT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0A2A7A] mb-[20px]">
      Symptoms of Tooth Pain
    </h2>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[18px] max-w-[700px]">
      Toothache refers to any pain or distress experienced in or around a tooth.
      The discomfort can range from mild to severe, throbbing, sharp, or persistent.
    </p>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[18px] max-w-[700px]">
      Sometimes, pressure on the tooth is the sole means to perceive the pain.
      Sensitivity to extreme temperatures and discomfort while chewing are common.
    </p>

    <p className="text-[16px] leading-[1.8] text-[#333] max-w-[700px]">
      Additional indications may include migraines, fever, gum inflammation,
      bleeding, or discharge if infection is present.
    </p>
  </div>
</div>

{/* CAUSES OF TOOTHACHE */}
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 justify-center mt-5 items-center gap-3">
  {/* LEFT TEXT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0A2A7A] mb-[20px]">
      Causes of Toothache
    </h2>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[18px] max-w-[750px]">
      Dental and medical problems can result in toothaches. The most typical causes include:
    </p>

    <ul className="text-[16px] leading-[1.8] text-[#222] list-disc pl-[40px] mb-[18px] max-w-[750px]">
      <li>Dental cavities from tooth decay</li>
      <li>
        <strong className="text-[#008cba]">A fractured or broken tooth</strong>
      </li>
      <li>An impacted tooth</li>
    </ul>

    <p className="text-[16px] leading-[1.8] text-[#333] max-w-[750px]">
      Toothaches may also be caused by gum disease, TMJ, sinus infections,
      referred pain, or other medical conditions.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img
      src={twelve}
      alt="Causes of Toothache"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>
</div>

{/* GET PREPARED */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 items-center">
  
  {/* LEFT IMAGE */}
  <div>
    <img
      src={thirteen}
      alt="Dental Treatment"
      className="w-full h-full object-cover rounded-3xl"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div>
    <h1 className="text-3xl font-bold text-[#0A2A7A] mb-4">
      Get Prepared
    </h1>

    <p className="text-[16px] leading-[28px] text-[#333] mb-3">
      When you schedule a toothache appointment, your dentist will evaluate
      your condition thoroughly and may require X-rays.
    </p>

    <ul className="mt-2 mb-5 pl-6 leading-[28px] list-disc text-[#333]">
      <li>When did your toothache start?</li>
      <li>How severe is the pain?</li>
      <li>Where do you feel the pain?</li>
      <li>What makes it worse?</li>
      <li>What makes it better?</li>
    </ul>

    <p className="text-[16px] leading-[28px] text-[#333] mb-5">
      Preparation helps improve diagnosis.
    </p>

    <h2 className="text-[24px] font-bold text-[#012970] mb-3">
      Related Treatments:
    </h2>

    <ul className="pl-6 leading-[28px] text-[16px] list-disc">
      <li><Link to="/t/fillings" className="text-[#00aaff] font-semibold">Fillings</Link></li>
      <li><Link to="/t/canals" className="text-[#00aaff] font-semibold">Root canals</Link></li>
      <li><Link to="/t/tmj" className="text-[#00aaff] font-semibold">TMJ</Link></li>
      <li><Link to="/t/extraction" className="text-[#00aaff] font-semibold">Tooth extraction</Link></li>
      <li>Antibiotics and pain relief medication</li>
    </ul>
  </div>

</div>


{/* WHAT NEXT + FAQ */}
<div className="max-w-7xl mx-auto px-6 mt-16 mb-16">
  <h2 className="text-center text-3xl font-bold text-[#0A0A5F] mb-[10px]">
    What's Next
  </h2>

  <p className="text-center text-[16px] max-w-[900px] mx-auto text-[#333]">
    Explore possible treatments and arrange a dental appointment for guidance.
  </p>

  <div className="flex justify-center mt-[30px]">
    <button className="bg-[#15c0cf] px-6 py-3 rounded-[50px] text-[18px] font-semibold text-white cursor-pointer">
      Book an Appointment
    </button>
  </div>

  <h2 className="text-center text-3xl font-bold text-[#0A0A5F] mt-[70px]">
    FAQs
  </h2>

  <div className="max-w-7xl mx-auto 
                grid grid-cols-1 md:grid-cols-2 
                gap-4 md:gap-6 
                px-4 sm:px-6 lg:px-8">

  {/* LEFT COLUMN */}
  <div className="w-full">
    {[
      "01. How much does it cost to treat toothache?",
      "02. Why is toothache so bad?",
      "03. Why is toothache worse at night?",
      "04. What are the best painkillers for toothache?",
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#5AB7B1] 
                   p-4 sm:p-[18px_20px] 
                   mb-3 sm:mb-4 
                   flex items-center 
                   rounded 
                   cursor-pointer 
                   hover:bg-[#4aa6a0] 
                   transition-colors"
      >
        <span className="text-[22px] sm:text-[24px] mr-3">＋</span>
        <span className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium">
          {item}
        </span>
      </div>
    ))}
  </div>

  {/* RIGHT COLUMN */}
  <div className="w-full">
    {[
      "05. Help! It’s sore but I’m anxious about visiting the dentist!",
      "06. Can toothache be prevented?",
      "07. Can toothache go away on its own?",
      "08. How do you stop toothache at home?",
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#5AB7B1] 
                   p-4 sm:p-[18px_20px] 
                   mb-3 sm:mb-4 
                   flex items-center 
                   rounded 
                   cursor-pointer 
                   hover:bg-[#4aa6a0] 
                   transition-colors"
      >
        <span className="text-[22px] sm:text-[24px] mr-3">＋</span>
        <span className="text-[15px] sm:text-[16px] lg:text-[17px] font-medium">
          {item}
        </span>
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








