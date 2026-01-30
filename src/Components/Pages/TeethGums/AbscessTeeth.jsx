
import { Link } from "react-router-dom";
import fortytwo from "../../Images/fortytwo.jpg"
import fortythree from "../../Images/fortythree.jpg"
import fortyfour from "../../Images/fortyfour.jpg"
import fortyfive from "../../Images/fortyfive.jpg"
import fortysix from "../../Images/fortyfive.jpg"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function AbscessTeeth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32 "
      style={{ backgroundImage: `url(${fortytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Tooth Abscess Treatment in Khanewal
    </h1>
</div>
    </div>

{/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    A tooth abscess is a painful dental condition that forms when a bacteria-infected pocket of pus develops in or around the tooth. It can cause swelling, pain and sensitivity, and if not treated it could lead to more serious health problems. Visit SmileExpert for an effective dental abscess treatment from qualified dentists to end your suffering.
    <br /><br />
    Our knowledgeable staff knows how painful a tooth abscess can be, so we are here to help. Do not wait—early treatment is essential to keeping your smile healthy.
  </p>
</div>

{/* WHEN TO SEE A DENTIST */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* LEFT CONTENT */}
  <div className="flex-1 space-y-4">
    <h2 className="text-[#0a1b5c] text-3xl lg:text-3xl font-bold mb-3">When to See a Dentist:</h2>
    <p className="text-sm text-black mb-4 leading-relaxed">
      Check it out if you’re not sure. Put in place a dental appointment as soon as you can if:
    </p>
    <ul className="list-disc list-outside pl-10 mb-7 text-sm text-black leading-relaxed space-y-1">
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is persistent, severe or unbearable</li>
      <li>When you open your mouth wide, you experience pain, a fever, or ear, jaw, or headaches.</li>
      <li>If you have difficulty breathing or swallowing</li>
      <li>Your face, cheek, or tender areas of your body may be swelled.</li>
      <li>If you’ve ever experienced a tooth infection</li>
      <li>If you’re experiencing stress, or run down</li>
    </ul>

    <h3 className="text-[#0a1b5c] text-2xl font-bold mb-2">Are You in Pain?</h3>
    <p className="text-sm text-black leading-relaxed">
      In pain? For fast, pain-free recovery from every type of dental infection, including wisdom tooth abscess treatment, contact our dental experts.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img src={fortythree} alt="Dentist consultation" className="w-full h-full rounded-3xl object-cover" />
  </div>
</div>

{/* TOOTH ABSCESS STAGES */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* LEFT IMAGE */}
  <div className="flex-1">
    <img src={fortyfour} alt="Dental abscess treatment" className="w-full h-full rounded-3xl object-cover" />
  </div>

  {/* RIGHT CONTENT */}
  <div className="flex-1 space-y-3">
    <h2 className="text-[#0a1b5c] text-3xl lg:text-3xl font-bold mb-1">Tooth Abscess Stages:</h2>
    <p className="text-sm text-black leading-relaxed mb-2">
      Knowing the stages of a tooth abscess can help with early identification of the issue and speedy dental abscess treatment. Here’s a breakdown of the typical stages:
    </p>

    {/* STAGE 1 */}
    <h4 className="text-[#0a1b5c] font-bold mb-1">Initial Infection:</h4>
    <p className="text-sm leading-relaxed mb-2">
      Bacteria somehow get into the tooth (often by way of decay, trauma, or gum disease). At this point, you might experience mild discomfort or sensitivity.
    </p>

    {/* STAGE 2 */}
    <h4 className="text-[#0a1b5c] font-bold mb-1">Pulpal Involvement:</h4>
    <p className="text-sm leading-relaxed mb-2">
      The infection reaches the tooth’s pulp, leading to inflammation and immense pain. This is usually when a periapical abscess develops at the tooth’s tip.
    </p>

    {/* STAGE 3 */}
    <h4 className="text-[#0a1b5c] font-bold mb-1">Abscess Formation:</h4>
    <p className="text-sm leading-relaxed mb-2">
      Pus builds up at the site of infection, causing swelling and pressure in the gums or jaw. Pain becomes increasingly severe, and other symptoms, such as fever or swelling, can occur.
    </p>

    {/* STAGE 4 */}
    <h4 className="text-[#0a1b5c] font-bold mb-1">Advanced Abscess:</h4>
    <p className="text-sm leading-relaxed mb-2">
      The infection can extend to nearby tissues, resulting in complications such as facial swelling or difficulty opening the mouth.
    </p>

    {/* STAGE 5 */}
    <h4 className="text-[#0a1b5c] font-bold mb-1">Chronic Stage:</h4>
    <p className="text-sm leading-relaxed">
      Without treatment, the abscess can become chronic — it sometimes drains but continues to do damage. This could lead to permanent tooth loss or more serious infections.
    </p>
  </div>
</div>

{/* CAUSES OF TOOTH ABSCESS */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* LEFT CONTENT */}
  <div className="flex-1space-y-3">
    <h2 className="text-[#0a1b5c] text-3xl lg:text-3xl font-bold mb-3">Causes of a Tooth Abscess:</h2>
    <p className="text-sm text-black leading-relaxed mb-3">
      A tooth abscess occurs when bacteria infect the tooth or the gums. This may be due to poor oral hygiene, untreated cavities or gum disease. If left untreated, in the long term, it can lead to a chronic abscess tooth. Common causes include:
    </p>
    <ul className="list-disc list-outside pl-10 mb-4 text-sm text-black leading-relaxed space-y-1">
      <li>Cavities or untreated tooth decay.</li>
      <li>Cracks or chips in the tooth that let bacteria inside.</li>
      <li>Periodontal infections or gum disease.</li>
      <li>Damage or injury to the tooth.</li>
      <li>Poor dental care and plaque accumulation.</li>
      <li>Dental procedures’ complications.</li>
    </ul>
    <p className="text-sm text-black leading-relaxed">
      Early detection and treatment can easily address dental abscesses and prevent complications. Whether periapical abscesses or any other type, we offer the best treatment to restore oral health.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-[0_0_45%]">
    <img src={fortyfive} alt="Dental abscess consultation" className="w-full h-full rounded-3xl object-cover" />
  </div>
</div>

{/* GET PREPARED */}
<div className="w-full bg-[#f3f8fb] py-10 px-5 lg:px-28">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img src={fortysix} alt="Dental procedure" className="w-full h-full rounded-3xl object-cover" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-3">
      <h2 className="text-[#0a1b5c] text-3xl lg:text-3xl font-bold mb-3">Get Prepared:</h2>
      <p className="text-sm leading-relaxed text-black mb-3">
        When you first have the tooth abscess treated, your dentist will want to know several important things so they can help you feel better.
      </p>
      <p className="text-sm font-medium mb-2">Your dentist may ask:</p>
      <ul className="list-disc list-outside pl-10 mb-4 text-sm leading-relaxed space-y-1">
        <li>When did the pain or discomfort begin?</li>
        <li>Has there been swelling or cemented into your teeth?</li>
        <li>Do you have sensitivity to hot or cold?</li>
        <li>Have you experienced any sickness symptoms?</li>
        <li>Do you take any medications or get any other medical treatment?</li>
        <li>Did you have any trauma or previous treatments recently?</li>
        <li>Do you have a history of dental problems, like cavities or gum disease?</li>
      </ul>
      <p className="text-sm leading-relaxed text-black">
        Your dentist will depend on you to answer these questions truthfully to help him with an effective abscess tooth removal procedure.
      </p>
    </div>
  </div>
</div>

{/* FAQs */}
<div className="max-w-7xl mx-auto bg-white py-10 px-5 lg:px-28">
  <h2 className="text-[#0a1b5c] text-3xl font-bold text-center mb-10">FAQs</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-7">
    {[
      "01. What is the treatment for a tooth abscess?",
      "02. How can I treat a tooth abscess at home?",
      "03. Can you smoke with an abscessed tooth?",
      "04. What causes a tooth abscess?",
      "05. Can tooth abscesses be prevented?",
      "06. Will abscesses go away after tooth extraction?",
      "07. Does the tooth abscess show on the X-ray?",
      "08. Can a dentist pull an abscessed tooth?"
    ].map((faq, idx) => (
      <div key={idx} className="bg-[#69bebc] px-3 py-3 h-14 flex items-center text-sm font-medium cursor-pointer rounded-lg">
        <span className="mr-2 font-bold">+</span> {faq}
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








