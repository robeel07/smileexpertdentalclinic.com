
import { Link } from "react-router-dom";
import thirtytwo from "../../Images/thirtytwo.jpg";
import thirtythree from "../../Images/thirtythree.jpg";
import thirtyfour from "../../Images/thirtyfour.jpg";
import thirtyfive from "../../Images/thirtyfive.jpg";
import thirtysix from "../../Images/thirtysix.jpg";
import periodontist from "../../Images/periodontist.png";
import toothbrush from "../../Images/toothbrush.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function BadBreath() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${thirtytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Bad Breath Treatment in Khanewal
    </h1>
</div>
    </div>



{/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    Jaw pain can be excruciating and disruptive to daily life. It is a common and persistent condition that can greatly impact activities like eating and speaking. The intensity of jaw pain can make it difficult to focus, and many individuals experience limitations in mouth opening, along with facial and jaw tenderness. Headaches and earaches can also accompany jaw pain.
  </p>
</div>

{/* WHEN TO SEE A DENTIST */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* LEFT CONTENT */}
  <div className="flex-1 space-y-3">
    <h2 className="text-[#0b1a6d] text-3xl lg:text-4xl mb-5">When to See a Dentist:</h2>
    <p className="leading-relaxed mb-4">Get it checked up if you are not sure. Make a dental appointment as soon as possible if:</p>
    <ul className="list-disc list-outside pl-10 mb-6 leading-relaxed space-y-1 text-base">
      <li>You’ve had chronic bad breath for more than several days</li>
      <li>The smell is more pronounced or alarming</li>
      <li>Your mouth hurts, your teeth hurt</li>
      <li>Teeth bleed, or your gums are painful</li>
    </ul>
    <h3 className="text-[#0b1a6d] text-xl mb-2">Are You in Pain?</h3>
    <p className="leading-relaxed">If you have severe pain and need some dental help right away, please call us! We’ll immediately set up an appointment to check out your halitosis.</p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1 flex justify-center">
    <img src={thirtythree} alt="Dental examination" className="w-full h-full rounded-3xl object-cover" />
  </div>
</div>

{/* SYMPTOMS OF BAD BREATH */}
<div className="w-full bg-[#f3f8fc] py-10 px-10 lg:px-32 flex flex-col lg:flex-row justify-between items-center gap-5">
  {/* LEFT IMAGE */}
  <div className="flex-1 flex justify-center lg:justify-start">
    <img src={thirtyfour} alt="Dental Checkup" className="w-[90%] max-w-[620px] h-[400px] rounded-[22px] object-cover" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="flex-1 max-w-7xl space-y-4">
    <h2 className="text-[#0b1a6d] text-3xl lg:text-4xl mb-5">Symptoms of Bad Breath:</h2>
    <p className="leading-relaxed mb-4">
      Finding bad breath symptoms yourself isn’t always easy, but most other people will notice it first. And if you hear about it from a trusted friend or family member, see that as your cue to go for bad breath treatment. Halitosis can also be accompanied by other symptoms that indicate underlying oral health issues.
    </p>
    <p className="font-semibold mb-2">Some common signs of bad breath include:</p>
    <ul className="list-disc list-outside pl-10 mb-4 leading-relaxed space-y-1 text-base">
      <li>Foul odor from the mouth.</li>
      <li>Gums that are painful, bleeding, or swollen.</li>
      <li><span className="text-[#00a8ff] font-semibold">Toothache</span> or sensitivity.</li>
      <li>Persistent bad breath for weeks.</li>
      <li>Problems with dentures, like discomfort or improper fit.</li>
    </ul>
    <p className="leading-relaxed">If you experience any of these symptoms, it is time to make an appointment for bad breath smell treatment.</p>
  </div>
</div>

{/* REASON FOR BAD BREATH */}
<div className="w-full bg-[#f3f8fc] py-10 px-10 lg:px-32 flex justify-center">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-2">
      <h2 className="text-[#0b2c5d] text-3xl mb-4">Reason for Bad Breath:</h2>
      <p className="leading-relaxed mb-4">
        Most bad breath starts in the mouth due to poor oral hygiene, plaque accumulation or gum disease. Dry mouth, dietary choices, or you may also experience bad breath after root canal treatment. It usually happens when there is an infection or if the same tooth is not healing properly. You have to be aware of the cause to find a solution. <strong>Here are a few typical causes of bad breath:</strong>
      </p>
      <ul className="list-disc list-outside pl-10 mb-4 leading-relaxed space-y-1 text-base">
        <li>Poor dental habits such as not brushing and flossing regularly.</li>
        <li>Food fragments caught between teeth or along the gums.</li>
        <li>The build-up of plaque from missed dental cleanings.</li>
        <li>Gum disease, tooth decay, or dental abscesses.</li>
        <li>Dry mouth (xerostomia) from smoking, certain medications, or mouth breathing.</li>
        <li>Stress, snoring, hormone changes or too much booze.</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img src={thirtyfive} alt="Bad breath dental check" className="w-full h-full rounded-3xl object-cover" />
    </div>
  </div>
</div>

{/* RELATED TREATMENTS */}
<div className="w-full bg-[#f4f8fb] py-10 px-10 lg:px-32">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-2">
      <h2 className="text-[#0b1f66] text-2xl lg:text-3xl font-bold mb-1">Related Treatments:</h2>
      <p className="text-sm text-gray-800 leading-relaxed mb-2">
        To identify the source of your foul breath, your dentist will carefully check your mouth. You might require one of these usual cures.
      </p>
      <ul className="list-disc list-outside pl-10 mb-4 space-y-1 text-[#00a6ff]">
        <li>Filling</li>
        <li>Root canal</li>
        <li>Teeth Extraction</li>
      </ul>
      <h2 className="text-[#0b1f66] text-2xl lg:text-3xl font-bold mb-2">Get Prepared:</h2>
      <p className="text-sm text-gray-800 leading-relaxed mb-4">
        Preparation can speed up the process when you go for bad breath dental treatment at SmileExpert Dental Clinic. Your dentist will require this information to help identify the underlying reason so the best course of action can be taken. Your dentist will now take a careful look at your mouth, teeth, tongue, throat and sinuses and a few other places. They will also examine your medical history and may order an X-ray if needed. To maximize your visit, make sure to come ready to discuss the following:
      </p>
      <ul className="list-disc list-outside pl-10 mb-4 space-y-1 text-sm">
        <li>How long have you had bad breath?</li>
        <li>How noticeable is the odor?</li>
        <li>What did you change about your dental routine?</li>
        <li>Are there recent changes to your diet?</li>
        <li>Do you have any pain or other symptoms?</li>
      </ul>
      <p className="text-sm text-gray-800 leading-relaxed">
        Thinking through these questions ahead of time will enable your dentist to diagnose the cause and recommend the appropriate solution quickly.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 flex justify-center">
      <img src={thirtysix} alt="Dental Checkup" className="w-full h-full rounded-3xl object-cover" />
    </div>
  </div>
</div>

{/* WHAT NEXT */}
<div className="max-w-7xl mx-auto py-14 px-5 text-center">
  <h2 className="text-[#0b1f66] text-3xl lg:text-4xl font-bold mb-4">What's Next</h2>
  <p className="max-w-[1300px] mx-auto mb-14 text-sm leading-relaxed text-gray-800">
    View some potential therapies to learn more about what comes next. We advise scheduling a dental consultation to receive detailed information concerning your bad breath problems. To make an appointment, call us right away or book online right now.
  </p>
  <div className="flex flex-wrap justify-center gap-10">
    {/* CARD 1 */}
    <div className="w-[320px] bg-white rounded-2xl p-12 flex flex-col items-center shadow-lg">
      <div className="w-24 h-24 mb-4 flex items-center justify-center">
        <img src={toothbrush} alt="Scaling & Polishing" className="w-15 h-15 object-contain" />
      </div>
      <div className="text-base font-semibold text-[#0b1f66]">Scaling &amp; Polishing</div>
    </div>
    {/* CARD 2 */}
    <div className="w-[320px] bg-white rounded-2xl p-12 flex flex-col items-center shadow-lg">
      <div className="w-24 h-24 mb-4 flex items-center justify-center">
        <img src={periodontist} alt="Periodontist Services" className="w-15 h-15 object-contain" />
      </div>
      <div className="text-base font-semibold text-[#0b1f66]">Periodontist Services</div>
    </div>
  </div>
</div>

{/* FAQ */}
<div className="w-full bg-white py-10 px-10 lg:px-32">
  <h2 className="text-[#0b1f66] text-3xl lg:text-4xl font-bold text-center mb-12">FAQs</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
    {[
      "01. Can ulcers cause bad breath?",
      "02. How to get rid of bad breath permanently?",
      "03. What causes bad breath from the stomach?",
      "04. Which habit helps avoid bad breath?",
      "05. Does a dead tooth make your breath stink?",
      "06. How to eliminate bad breath for good?",
      "07. Can a loose tooth make your breath smell bad?",
      "08. Why do I have bad breath even after brushing?",
    ].map((item, index) => (
      <div key={index} className="bg-[#6cc1bc] px-3 py-3 flex items-center gap-4 rounded-lg">
        <span className="text-lg font-bold text-black">+</span>
        <span className="text-sm text-black">{item}</span>
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








