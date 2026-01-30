
import { Link } from "react-router-dom";
import fiftyeight from "../../Images/fiftyeight.jpg";
import fiftynine from "../../Images/fiftynine.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function DryMouth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${fiftyeight})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Dry Mouth Treatment in Khanewal
    </h1>
</div>
    </div>


  
    {/* INTRO TEXT */}
<div className="max-w-7xl mx-auto my-10 p-5 text-[16px] leading-[1.8] text-gray-700 text-justify">
  <p>
    Conditions like oral thrush or dry mouth can be very irritating and
    troublesome if they become a regular feature of your life. Chronic dry
    mouth can signal insufficient saliva production. Most people experience
    dry mouth from time to time, which can be caused by a number of things.
    <br />
    <br />
    It is more prevalent in some people than others. You may feel a dry,
    sticky mouth after eating. Having a dry mouth weathered often can be
    bothersome and nerve-racking. Dry mouth treatment is for you to seek
    out at SmileExpert. It’s vital because it can lead to more severe
    problems if neglected.
  </p>
</div>

{/* SYMPTOMS SECTION */}
<div className="max-w-7xl mx-auto px-5 py-6 flex flex-col lg:flex-row flex-wrap items-center justify-between gap-20">
  {/* LEFT CONTENT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0b1c8c] mb-4">
      Symptoms of Dry Mouth:
    </h2>

    <p className="text-[15px] leading-[1.7] text-gray-700 mb-4">
      Feeling like your mouth is dry is common. But a constantly dry mouth
      can cause problems. The most common symptoms include trouble chewing,
      swallowing or speaking.
    </p>

    <ul className="list-disc pl-10 mb-3 text-[15px] leading-[1.8] text-gray-700 space-y-1">
      <li>A rough tongue</li>
      <li>Cracked lips</li>
      <li className="text-sky-500">Bad breath</li>
      <li className="text-sky-500">Mouth sores</li>
    </ul>

    <p className="text-[14px] leading-[1.6] text-gray-700">
      Dry mouths are more prone to developing cavities, which can lead to
      larger dental issues.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1 flex justify-center">
    <img
      src={fiftynine}
      alt="Dental checkup"
      className="w-full h-full rounded-3xl object-cover"
    />
  </div>
</div>

{/* CAUSES SECTION */}
<div className="bg-[#f4f8fb] py-16 px-5">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row flex-wrap items-center gap-10">
    {/* LEFT IMAGE */}
    <div className="flex-1 flex justify-center">
      <img
        src={fiftynine}
        alt="Dental examination"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1">
      <h2 className="text-3xl font-bold text-[#0a1a5c] mb-4">
        Causes of Dry Mouth:
      </h2>

      <p className="text-[15px] leading-[1.7] text-gray-700 mb-3">
        Dry mouth can develop for many reasons, ranging from lifestyle
        choices to underlying health conditions.
      </p>

      <p className="text-[15px] leading-[1.7] text-gray-700 mb-3">
        Some common factors include:
      </p>

      <ul className="list-disc pl-10 text-[15px] leading-[1.9] text-gray-700 space-y-1">
        <li>Dry mouth during sleep</li>
        <li>Dehydration</li>
        <li>Medications</li>
        <li>Anticancer therapies</li>
        <li>Smoking or tobacco use</li>
        <li>Autoimmune conditions</li>
        <li>Nerve damage</li>
      </ul>
    </div>
  </div>
</div>

{/* TREATMENT SECTION */}
<div className="max-w-7xl mx-auto px-5 py-12">
  <h2 className="text-3xl font-bold text-[#0a1a5c] mb-4">
    Treatment for Dry Lips and Mouth:
  </h2>

  <p className="text-[16px] leading-[1.7] text-gray-700 mb-2">
    Treating dry mouth and lips means controlling symptoms and treating the main cause. Staying hydrated, using saliva substitutes, and practicing good oral hygiene is important. 
    In more severe cases, a healthcare provider may recommend medications, mouthwashes or special lip balms.
  </p>

  

  <div className="mt-10 flex flex-col lg:flex-row gap-10">
    <div className="flex-1">
      <h3 className="text-3xl font-bold text-[#0a1a5c] mb-3">
        Dry Mouth Causes Cavities:
      </h3>
      <p className="text-[16px] leading-[1.7] text-gray-700">
        Saliva aids in washing away food particles and neutralizing acids produced by bacteria. So, when the mouth is dry, those functions are compromised. This creates the perfect setting for harmful bacteria to generate, attacking tooth enamel and the chances of cavities. Without dry mouth treatment, your teeth can’t remineralize. It will make them more susceptible to cavities.
      </p>
    </div>

    <div className="flex-1">
      <h3 className="text-3xl font-bold text-[#0a1a5c] mb-3">
        Dry Mouth Causes Tooth Decay:
      </h3>
      <p className="text-[16px] leading-[1.7] text-gray-700">
        Saliva is important in protecting the teeth from decay as it keeps them moist and washes away acids and sugars. In the case of dry mouth, a protective mechanism is missing, and plaque and bacteria can accumulate on the teeth. Hence, leads to the demineralization of the enamel and cavities. If untreated, over time, this can result in worsening tooth decay.
      </p>
    </div>
  </div>
</div>

{/* FAQ SECTION */}
<div className="max-w-7xl mx-auto px-5 py-8">
  <h2 className="text-center text-[28px] font-bold text-[#0a1a5c] mb-8">
    FAQs
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
    {[
      "01. How much does it cost to treat a dry mouth?",
      "02. How do you get rid of dry mouth?",
      "03. Is dry mouth dangerous?",
      "04. Can dry mouth be prevented?",
      "05. Can toothpaste cause dry mouth?",
      "06. Does a wisdom tooth cause dry mouth?",
      "07. I'm anxious about visiting the dentist.",
      "08. Can dry mouth be cured permanently?",
    ].map((text, i) => (
      <div
        key={i}
        className="bg-[#6bbdbb] hover:bg-[#5aaead] transition-colors px-3 py-3 flex items-center gap-3 cursor-pointer"
      >
        <span className="text-[20px] font-bold">+</span>
        <span className="text-[16px] font-medium">{text}</span>
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








