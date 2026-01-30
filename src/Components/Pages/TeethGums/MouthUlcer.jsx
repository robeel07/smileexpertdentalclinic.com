
import { Link } from "react-router-dom";
import fortyseven from "../../Images/fortyseven.jpg";
import fortyeight from "../../Images/fortyeight.jpg";
import fortynine from "../../Images/fortynine.jpg";
import fifty from "../../Images/fifty.jpg";
import fiftyone from "../../Images/fiftyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function MouthUlcer() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${fortyseven})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Mouth Ulcer Treatment in Khanewal
    </h1>
</div>
    </div>



{/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-[1.8] text-justify">
  <p>
    While mouth ulcers and sores can be uncomfortable, they typically aren’t a major concern. They’re quite common, and if you have canker sores or aphthous ulcers, you’ll definitely feel them because they’re close to the surface and can be painful. They usually heal on their own in one to two weeks. Certain foods and drinks can sometimes worsen the pain of mouth ulcers. You can try different treatments to speed up your recovery. If an ulcer persists for three weeks, there may be a more serious underlying issue. See your dentist or doctor for examination and mouth ulcer treatment.
  </p>
</div>

{/* WHEN TO SEE A DENTIST */}
<div className="w-full bg-white py-16 px-5 lg:px-24 box-border">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-3xl lg:text-3xl font-bold mb-4">When to See a Dentist:</h2>
      <p className="text-sm text-black mb-4 leading-[1.6]">
        If in doubt, check it out. Planned a dental appointment as soon as you can for mouth ulcer treatment:
      </p>
      <ul className="list-disc list-outside pl-10 mb-7 text-sm text-black leading-[1.7] space-y-1">
        <li>You are in pain Pain lasts longer than a day or two</li>
        <li>The pain is severe or unbearable</li>
        <li>You have a fever, earache or pain when you open your mouth wide</li>
        <li>If you’ve had mouth ulcers before</li>
        <li>If you’re experiencing stress, or run down</li>
      </ul>

      <h3 className="text-[#0a1a5c] text-2xl font-bold mb-3">Are You in Pain?</h3>
      <p className="text-sm text-black leading-[1.6]">
        If you require immediate dental care, please contact us without delay. We will promptly schedule a meeting with you.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img src={fortyeight} alt="Dental Consultation" className="w-full h-full rounded-3xl object-cover" />
    </div>
  </div>
</div>

{/* SYMPTOMS */}
<div className="w-full bg-[#f3f8fb] py-20 px-5 lg:px-16">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img src={fortynine} alt="Dental Checkup" className="w-full h-full rounded-3xl object-cover" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-3xl lg:text-3xl font-bold mb-4">Symptoms of a Mouth Ulcers:</h2>
      <p className="text-sm text-gray-800 leading-[1.7] mb-3">
        Although ulcers can occasionally be very large, they are typically small. They often appear as grey, yellow, or white spots that create a depression on the surface. Mouth ulcers can sometimes cause severe pain, especially when eating, drinking, or brushing teeth.
      </p>
      <p className="text-sm text-gray-800 leading-[1.7]">
        If mouth ulcers are causing intense pain, seek medical attention as there could be an underlying issue. Likewise, recurrent ulcers may indicate another problem, like a vitamin deficiency. It is recommended to consult a doctor if ulcers do not heal within three weeks.
      </p>
    </div>
  </div>
</div>

{/* CAUSES */}
<div className="w-full bg-white py-20 px-5 lg:px-16">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-3xl lg:text-3xl font-bold mb-4">Causes of Mouth Ulcers:</h2>
      <p className="text-sm text-gray-800 leading-[1.7] mb-4">
        Everyone is aware of how uncomfortable it may be to unintentionally bite their tongue or cheek. A mouth ulcer can develop out of this very quickly. Another method to get an ulcer is to hit the inside of your mouth with your toothbrush, get burned by a hot beverage, have ill-fitting dentures, or have a tooth with a sharp edge. Mouth ulcers can also be brought on by the herpes simplex or cold sore viruses, a food intolerance, or even an allergy. Specific lifestyle or health variables, such as being on particular medications, lacking in certain nutrients, or having received radiotherapy, might cause ulcers. Other elements might be:
      </p>
      <ul className="list-disc list-outside pl-10 text-sm text-gray-800 leading-[1.7] space-y-1">
        <li>During times of high stress</li>
        <li>With hormonal changes in females</li>
        <li>When you are quitting smoking</li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img src={fifty} alt="Dental treatment" className="w-full h-full rounded-3xl object-cover" />
    </div>
  </div>
</div>

{/* GET PREPARED */}
<div className="w-full bg-[#f6f9fc] py-20 px-5 lg:px-16">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1 mt-10">
      <img src={fiftyone} alt="Dental preparation" className="w-full h-full rounded-3xl object-cover" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-3xl lg:text-3xl font-bold mb-3">Get Prepared:</h2>
      <p className="text-sm text-gray-800 leading-[1.7] mb-3">
        For prompt solutions and guidance, book an appointment at SmileOn for any mouth or teeth problem. This approach ensures your dentist has the necessary information for accurate diagnosis and treatment. Typically, your dentist will inquire about your medical history prior to conducting a thorough examination of your mouth, teeth, jaw, tongue, throat, sinuses, ears, nose, and neck. Depending on the suspected cause of your problem, an x-ray may be necessary. Your dentist may ask you some questions, such as:
      </p>
      <ul className="list-disc list-outside pl-10 text-sm text-gray-800 leading-[1.7] mb-3 space-y-1">
        <li>What is your dental routine at home?</li>
        <li>Have you made any changes recently?</li>
        <li>Do you have any pain?</li>
        <li>Where do you feel pain?</li>
        <li>How bad is the pain?</li>
        <li>How do you think you got the mouth sore or ulcer?</li>
      </ul>
      <p className="text-sm text-gray-800 leading-[1.7]">
        Due to your appointment, consider your responses to these questions. Preparation can hasten the diagnosis.
      </p>
    </div>
  </div>
</div>

{/* FAQ SECTION */}
<div className="w-full bg-white py-10 px-3 lg:px-10">
  <h2 className="text-[#0a1a5c] text-3xl font-bold text-center mb-12">FAQs</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-7 gap-y-5">
    {[
      "01. What is the treatment for mouth ulcers?",
      "02. Can I treat mouth ulcers at home?",
      "03. What nutrient deficiencies cause mouth ulcers?",
      "04. Why do I keep getting mouth ulcers?",
      "05. I’m anxious about visiting the dentist.",
      "06. Can mouth ulcers be prevented?",
    ].map((faq, idx) => (
      <div key={idx} className="bg-[#6ec1bd] px-3 py-3 flex items-center text-sm text-black rounded-lg">
        <span className="text-lg font-bold mr-3">+</span> {faq}
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








