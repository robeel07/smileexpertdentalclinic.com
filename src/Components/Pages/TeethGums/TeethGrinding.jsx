
import { Link } from "react-router-dom";
import twentythree from "../../Images/twentythree.jpg";
import twentyfour from "../../Images/twentyfour.jpg";
import twentyfive from "../../Images/twentyfive.jpg";
import twentyeight from "../../Images/twentyeight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function TeethGrinding() {
  return (
    <>
     <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${twentythree})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Teeth Grinding Treatment in Khanewal
    </h1>
</div>
    </div>


{/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    Bruxism, or teeth grinding, is the act of clenching, grinding, or gnashing your teeth. It can range from barely bothersome to highly uncomfortable. Timely treatment may be necessary to prevent permanent damage. Awake bruxism occurs when you unknowingly clench your teeth while awake, while sleep bruxism happens during sleep. Minor teeth grinding may not require treatment, but prolonged grinding can lead to significant tooth damage. Long-term bruxism can result in migraines, jaw problems, tooth wear and fractures.
  </p>
</div>

{/* WHEN TO SEE A DENTIST */}
<div className="w-full bg-[#F4F9FC] py-20">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0B1C6D] text-3xl sm:text-3xl font-semibold mb-4">
        When to See a Dentist:
      </h2>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        If in doubt, check it out. Book an appointment to see a dentist as soon as possible if:
      </p>
      <ul className="pl-9 list-disc text-sm sm:text-base leading-relaxed mb-4 space-y-1">
        <li>You have pain that lasts longer than a day or two</li>
        <li>Your pain is severe or starts to become unbearable</li>
        <li>You have a fever, earache or pain when you open your mouth wide</li>
        <li>You have chipped or loose teeth</li>
        <li>You are concerned about teeth clenching or grinding</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed">
        Contact us immediately if you're in pain and require emergency dental care. We'll prioritise your urgent appointment to provide prompt assistance.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 ">
      <img
        src={twentyfour}
        alt="Dentist Consultation"
        className="w-full h-full rounded-2xl object-cover"
      />
    </div>
  </div>
</div>

{/* SYMPTOMS OF TEETH GRINDING */}
<div className="w-full bg-[#F4F9FC] py-20">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img
        src={twentyfive}
        alt="Teeth Grinding Symptoms"
        className="w-full h-full object-cover rounded-2xl"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0B1C6D] text-3xl sm:text-3xl font-semibold mb-4">
        Symptoms of Teeth Grinding
      </h2>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        If your condition is mild, you may not be aware that you are grinding your teeth. It might be that a friend or family member notices it first. Or perhaps symptoms of bruxism are seen by your dentist during a routine appointment. Some signs and symptoms that you may have bruxism include:
      </p>
      <ul className="pl-9 list-disc text-sm sm:text-base leading-relaxed space-y-1">
        <li>Clenching or grinding your teeth, either awake or asleep</li>
        <li className="text-[#00AEEF]">Fractured or chipped teeth</li>
        <li>Tooth loss</li>
        <li>Flattened teeth or <span className="text-[#00AEEF]">worn teeth</span> and enamel, exposing deeper layers of your tooth</li>
        <li>Increased tooth pain or sensitive teeth</li>
        <li>Tired or tight jaw muscles, or a locked jaw that won’t open or close completely</li>
        <li>Pain or soreness in your jaw, neck, face or ears</li>
        <li>Headaches</li>
        <li>Damage from chewing on the inside of your cheek</li>
        <li>Disrupted sleep</li>
      </ul>
    </div>
  </div>
</div>

{/* CAUSES OF TEETH GRINDING */}
<div className="w-full bg-white py-20">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0B1C6D] text-3xl sm:text-3xl font-semibold mb-4">
        Causes of Teeth Grinding
      </h2>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        There are a number of reasons bruxism can occur. It’s sometimes caused by excess stress or anxiety. Heightened emotions such as anger, frustration or tension can also trigger it. Teeth grinding may also develop as a coping strategy during periods of concentration. If you have sleep bruxism, it is more likely to be caused by an abnormal bite, <span className="text-[#00AEEF]">missing teeth</span>, or <span className="text-[#00AEEF]">crooked teeth</span>. Or it might be due to a sleep disorder such as sleep apnoea. There are some risk factors that may increase your chance of developing bruxism. These include:
      </p>
      <ul className="pl-9 list-disc text-sm sm:text-base leading-relaxed space-y-1">
        <li>Increased stress, anxiety or frustration</li>
        <li>Age – bruxism is common in young children and generally lessens by adulthood</li>
        <li>Personality type – being aggressive, competitive or hyperactive may increase your risk</li>
        <li>Medications – it may be an uncommon side effect of some medications including some antidepressants</li>
        <li>Family history – sleep bruxism often occurs in families</li>
        <li>Other disorders – bruxism can be associated with some mental health and medical disorders including Parkinson’s disease, dementia, GERD, epilepsy, night terrors, and sleep-related disorders such as <span className="text-[#00AEEF]">sleep apnoea</span></li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img
        src={twentyfive}
        alt="Dental checkup"
        className="w-full h-full object-cover rounded-3xl"
      />
    </div>
  </div>
</div>

{/* RELATED TREATMENTS */}
<div className="w-full bg-[#F4F9FC] py-20 flex justify-center">
  <div className="max-w-7xl mx-auto px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1 mt-28">
      <img src={twentyeight} alt="Dental Treatment" className="w-full h-full object-cover rounded-2xl" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-[1.2] space-y-4">
      <h2 className="text-[#0a1c74] text-xl sm:text-2xl mb-2">Related Treatments</h2>
      <p className="leading-relaxed mb-4">
        Your dentist will scrutinise your mouth to diagnose the cause of your pain or condition. You may need one of these standard treatments.
      </p>
      <ul className="pl-9 list-disc mb-4 space-y-1 text-[#00a8e8]">
        <li>Filling</li>
        <li>Root canal</li>
        <li>TMJ</li>
        <li>Teeth Extraction</li>
      </ul>
      <h2 className="text-[#0a1c74] text-lg sm:text-xl mb-2">Get Prepared</h2>
      <p className="leading-relaxed mb-4">
        When scheduling a check-up or treatment at our dental practices, efficiency is important. It’s beneficial to anticipate the information your dentist will require for diagnosis and treatment.
      </p>
      <p className="leading-relaxed mb-4">
        Typically, your dentist will inquire about your medical history and perform a comprehensive examination of your oral and facial areas. This includes the mouth, teeth, gums, jaw, tongue, throat, sinuses, ears, nose, and neck. Depending on the suspected cause of your issue, an X-ray may also be necessary.
      </p>
      <ul className="pl-9 list-disc mb-4 space-y-1">
        <li>Are you experiencing any pain?</li>
        <li>How severe is the pain?</li>
        <li>Where do you feel the pain?</li>
        <li>What is your regular dental routine?</li>
        <li>What is your diet like?</li>
        <li>Are you experiencing any extra stress?</li>
        <li>What is your lifestyle like?</li>
        <li>Do you suffer from anxiety?</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed mt-4">
        Before your appointment, consider your responses to these questions. Being prepared can expedite the diagnosis.
      </p>
    </div>
  </div>
</div>

{/* FAQ SECTION */}
<div className="w-full bg-white py-20">
  <h2 className="text-2xl sm:text-3xl text-center text-[#0a1c74] mb-12 font-semibold">FAQs</h2>
  <div className="max-w-7xl mx-auto px-3 grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
    {[
      "01. How much does it cost to treat bruxism?",
      "05. How do you treat bruxism caused by tooth problems?",
      "02. Is teeth grinding common?",
      "06. I’m anxious about visiting the dentist.",
      "03. What causes teeth grinding?",
      "07. Can bruxism be prevented?",
      "04. How can I stop grinding my teeth?",
    ].map((faq, i) => (
      <div
        key={i}
        className="bg-[#67bcbc] px-3 py-3 sm:p-5 flex items-center gap-3 rounded-lg cursor-pointer hover:bg-[#57b2b2] transition"
      >
        <span className="font-bold text-lg">+</span>
        <span className="text-sm sm:text-base">{faq}</span>
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








