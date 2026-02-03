
import { Link } from "react-router-dom";
import thirtyseven from "../../Images/thirtyseven.png";
import thirtyeight from "../../Images/thirtyeight.jpg";
import thirtynine from "../../Images/thirtynine.jpg";
import forty from "../../Images/forty.jpg";
import fortyone from "../../Images/fortyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function SoreTeeth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${thirtyseven})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Sensitive Sore Teeth Treatment in Khanewal
    </h1>
</div>
    </div>


    {/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    Tooth sensitivity and pain can be highly uncomfortable. Fortunately, there are available remedies. Causes include tooth decay, fractures, abscesses, receding gums, and poor oral hygiene. Tooth sensitivity can vary, and it’s best to consult a dentist before it worsens. Treatment options include avoiding certain foods, using specialized toothpaste and toothbrushes, and receiving procedures such as <span className="text-blue-500 font-semibold">fillings, root canals, crowns and tooth extractions</span>.
  </p>
</div>

{/* WHEN TO SEE A DENTIST */}
<div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
  {/* LEFT TEXT */}
  <div className=" space-y-4">
    <h2 className="text-[#0a1a5c] text-3xl font-bold mb-4">When to See a Dentist:</h2>
    <p className="text-sm text-gray-800 mb-4 max-w-[520px]">
      Check it out if you’re unsure. Set up a dental appointment as soon as you can if:
    </p>
    <ul className="list-disc list-outside pl-10 mb-7 text-sm text-black leading-relaxed space-y-1">
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is severe or unbearable</li>
      <li>You have a fever, earache or pain when you open your mouth wide</li>
    </ul>
    <h3 className="text-[#0a1a5c] text-2xl font-bold mb-2">Are You in Pain?</h3>
    <p className="text-sm text-gray-800 max-w-[520px]">
      For urgent dental care, contact us if you’re in pain. We’ll promptly arrange an appointment for you.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img src={thirtyeight} alt="Dentist" className="w-full h-full rounded-3xl object-cover" />
  </div>
</div>

{/* SYMPTOMS OF SENSITIVE TEETH */}
<div className="w-full bg-[#f4f8fb] py-18 px-10 lg:px-24">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img src={thirtynine} alt="Dental treatment" className="w-full h-full rounded-3xl object-cover" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-3xl lg:text-3xl font-bold mb-4">Symptoms of Sensitive Teeth:</h2>
      <p className="text-sm text-gray-800 leading-relaxed mb-4 max-w-[520px]">
        Pain or discomfort often signals a more severe issue. It may vary or worsen gradually. Chewing can cause sharp pain, while hot or cold liquids may increase the discomfort. Sweet or acidic foods can also heighten sensitivity or tooth soreness.
      </p>
      <p className="text-sm text-gray-800 leading-relaxed max-w-[520px]">
        Cold air or mouth breathing can sometimes worsen sensitivity or pain. Tooth sensitivity occurs when the inner dentin layer is exposed due to enamel wear on the outer layer.
      </p>
    </div>
  </div>
</div>

{/* CAUSES OF TEETH GRINDING */}
<div className="w-full bg-white py-18 px-10 lg:px-24">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1a5c] text-2xl lg:text-3xl font-bold mb-4">Causes of Teeth Grinding:</h2>
      <p className="text-sm text-gray-800 leading-relaxed mb-4 max-w-[520px]">
        One of the primary causes of tooth sensitivity is unprotected dentine. There are several possible causes for this. Common causes include plaque buildup, dental decay, receding gums, chips in your tooth, and gum disease. Additional factors include:
      </p>
      <ul className="list-disc list-outside pl-10 mb-4 text-sm text-gray-800 leading-relaxed space-y-1">
        <li>Acidic food, drink or mouthwash</li>
        <li><span className="text-teal-400 font-semibold">Bruxism</span>, or grinding and clenching your teeth</li>
        <li>Brushing your teeth too hard</li>
        <li>Some tooth whitening products</li>
      </ul>
      <p className="text-sm text-gray-800 leading-relaxed max-w-[520px]">
        To maintain good oral health, maintain regular dental and hygienist appointments. We all occasionally need reminders of the best oral hygiene practices.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1">
      <img src={forty} alt="Dental procedure" className="w-full h-full rounded-xl object-cover" />
    </div>
  </div>
</div>

{/* GET PREPARED */}
<div className="w-full bg-[#f3f8fc] py-18 px-10 lg:px-24">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-[0_0_48%]">
      <img src={fortyone} alt="Dental patient preparation" className="w-full h-full rounded-3xl object-cover" />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-[0_0_52%] space-y-4">
      <h2 className="text-[#0a1a5c] text-2xl lg:text-3xl font-bold mb-4">Get Prepared:</h2>
      <p className="text-sm text-gray-800 leading-relaxed mb-4">
        When you schedule an appointment at SmileOn for sensitive or uncomfortable teeth, your primary goal is alleviating your suffering. Understanding what information your dentist will need for an accurate diagnosis and treatment is important. Usually, your dentist will inquire about your medical history before thoroughly examining your oral, dental, jaw, tongue, throat, sinus, ear, nose, and neck areas. Sometimes, an X-ray may be necessary based on your dentist’s assessment of the underlying cause. Your dentist will ask you questions about the pain, such as:
      </p>
      <ul className="list-disc list-outside pl-10 mb-4 text-sm text-gray-800 leading-relaxed space-y-1">
        <li>When did the pain start?</li>
        <li>How severe is it?</li>
        <li>Where do you feel sensitivity?</li>
        <li>What makes it worse?</li>
        <li>What makes it better?</li>
      </ul>
      <p className="text-sm text-gray-800 leading-relaxed">
        Before your appointment, consider your responses to these questions. Preparation can hasten the diagnosis.
      </p>
    </div>
  </div>
</div>

{/* WHAT NEXT */}
<div className="max-w-7xl mx-auto py-10 px-5">
  <h2 className="text-[#0a1a5c] text-3xl lg:text-4xl font-bold text-center mb-4">What's Next</h2>
  <p className="text-sm text-black text-center max-w-7xl mx-auto mb-8 leading-relaxed">
    Explore therapeutic strategies to gain further insight. Book a dental consultation for detailed information on your concerns.
  </p>
  <div className="text-center mb-16">
    <button className="bg-[#10c6e8] text-white rounded-full px-9 py-3 font-semibold text-sm hover:opacity-90 transition">
      Book an Appointment
    </button>
  </div>

  {/* FAQ */}
  <h2 className="text-[#0a1a5c] text-2xl lg:text-3xl font-bold text-center mb-10">FAQs</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-8">
    {[
      "01. How much does it cost to treat sensitive teeth?",
      "02. Why are my teeth sore or sensitive?",
      "03. How can I treat sensitive teeth?",
      "04. Why are my teeth sore during spring?",
      "05. I’m anxious about visiting the dentist.",
      "06. Can sensitive teeth be prevented?"
    ].map((faq, idx) => (
      <div key={idx} className="bg-[#69bebc] text-black px-3 py-3 flex items-center font-medium cursor-pointer rounded-lg">
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








