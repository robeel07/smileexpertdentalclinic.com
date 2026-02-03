
import { Link } from "react-router-dom";
import one from "../../Images/one.jpg";
import two from "../../Images/two.jpg";
import three from "../../Images/three.jpg";
import four from "../../Images/four.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function WisdomTeeth() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]  bg-cover bg-[center_40%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${one})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center
        text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Wisdom Teeth Treatment in Khanewal
    </h1>
  
</div>
    </div>
  

   {/* INTRO TEXT */}
<div className="max-w-7xl mx-auto px-3 py-16 text-[16px] text-[#333] text-justify">
  <p>
    Do you experience discomfort from your wisdom teeth? It can be bothersome.
    We understand how difficult it can be. The pain caused by wisdom teeth can
    be very intense and unpredictable. Most people feel pain from their wisdom
    teeth from their late to mid-twenties. The emergence of teeth from wisdom
    teeth often leads to pain. Wisdom teeth may become impacted or stuck under
    the gums, causing gum soreness and irritation. Affected wisdom teeth can
    lead to infections and damage to surrounding teeth. Swelling, irritation,
    and intense pressure are indications that wisdom teeth removal may be
    necessary.
  </p>
</div>

{/* SECTION 1 */}
<div className="max-w-7xl mx-auto flex justify-center items-center gap-3">
  {/* LEFT TEXT */}
  <div className="flex-1">
    <h2 className="text-3xl font-bold text-[#0A2A7A] mb-[20px]">
      Symptoms of wisdom teeth pain
    </h2>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[20px]">
      During the eruption of wisdom teeth, discomfort or pain is common. Initial
      symptoms of wisdom teeth problems may include gum swelling, redness, and
      upper or lower jaw pain. Headaches or earaches may also arise with the
      eruption of wisdom teeth.
    </p>

    <p className="text-[16px] leading-[1.8] text-[#333] mb-[20px]">
      The unease in the vicinity of the wisdom tooth can vary from mild
      tenderness to pulsating, continual agony that hinders you from opening
      your mouth and brushing your teeth.
    </p>

    <p className="text-[16px] leading-[1.8] text-[#333]">
      Ignoring impacted or extremely painful wisdom teeth may lead to dental
      caries, cavities, bleeding gums, bad breath, difficulty swallowing, severe
      pain, and even the formation of cysts that can spread the infection to
      nearby areas.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div className="flex-1">
    <img
      src={one}
      alt="Wisdom Teeth Treatment"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>
</div>

{/* SECTION 2 */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 mt-5 gap-12 items-center bg-[#f1f7fd]">
  {/* LEFT IMAGE */}
  <div className="flex-1 pr-[30px]">
    <img
      src={two}
      alt="Wisdom Teeth"
      className="w-full h-auto rounded-3xl object-cover"
    />
  </div>

  {/* RIGHT CONTENT */}
  <div>
    <h2 className="text-3xl font-semibold mt-3 text-[#0a1a5c] mb-4">
      Causes of wisdom teeth pain
    </h2>

    <p className="text-[16px] leading-[1.7] text-[#333] ">
      Wisdom teeth are not linked to intelligence. Sometimes, they may need to
      be removed as they can cause annoyance and disruption. Most people have
      four wisdom teeth, but not everyone will get all four. Wisdom teeth often
      do not have sufficient space to grow properly when they erupt, resulting
      in impacted wisdom teeth. Consult with a dentist in Lahore who
      specialises in wisdom teeth treatment, such as SmileOn, is recommended.
      Effected wisdom teeth can lead to problems like:
    </p>

    <ul className="text-[16px] leading-[1.8] text-[#333] list-disc">
      <li>Infection</li>
      <li>Decay</li>
      <li>Cysts</li>
      <li>Damage to surrounding teeth</li>
    </ul>

    <p className="text-[18px] leading-[1.7] text-[#333]">
      Experiencing pain due to wisdom teeth is common, and there’s no need to be
      anxious. If you’re suffering from wisdom teeth pain, it’s advisable to
      seek treatment from SmileOn Lahore. Timely extraction can prevent the
      potentially severe complications associated with wisdom teeth.
    </p>
  </div>
</div>

{/* WHAT NEXT */}
<div className="max-w-7xl mx-auto text-center px-[20px] py-[60px]">
  <h2 className="text-[34px] font-bold text-[#0f2b62ff] mb-[20px]">
    What's Next
  </h2>

  <p className="text-[16px] leading-[1.7] text-[#444] max-w-[1300px] mx-auto mb-[50px]">
    Review available treatments to learn about the next steps. We recommend
    scheduling a consultation with SmileExpert Lahore, specialising in wisdom teeth
    treatment, to receive customised advice regarding your symptoms.
  </p>

  <div className="flex justify-center items-center gap-10 flex-wrap">
    {/* CARD 1 */}
    <div className="w-[330px] h-[300px] bg-white rounded-[20px] shadow-[0px_6px_25px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center">
      <div className="h-[180px] w-full flex items-center justify-center">
        <img src={three} alt="Oral Surgeon" className="h-full object-contain" />
      </div>
      <h3 className="text-[18px] font-semibold text-[#0c1b3a] text-center mt-4 px-2">
        Oral & Maxillofacial Surgeon
      </h3>
    </div>

    {/* CARD 2 */}
    <div className="w-[330px] h-[300px] bg-white rounded-[20px] shadow-[0px_6px_25px_rgba(0,0,0,0.1)] flex flex-col items-center justify-center">
      <div className="h-[180px] w-full flex items-center justify-center">
        <img src={four} alt="Wisdom Removal" className="h-full object-contain" />
      </div>
      <h3 className="text-[18px] font-semibold text-[#0c1b3a] text-center mt-4 px-4">
        Wisdom Teeth Removal
      </h3>
    </div>
  </div>
</div>

{/* FAQS */}
<div className="max-w-7xl mx-auto text-center px-3 py-3">
  <h2 className="text-[34px] font-bold text-[#0c1b3a] mb-[40px]">
    FAQs
  </h2>

  <div className="grid grid-cols-2 gap-[20px] max-w-[1300px] mx-auto">
    {[
      "01. How much does it cost to get wisdom teeth removed?",
      "05. Does it hurt getting my wisdom teeth removed?",
      "02. How do you make wisdom teeth pain go away?",
      "06. What does wisdom teeth pain feel like?",
      "03. Is it normal for wisdom teeth to hurt?",
      "07. What are some home remedies for wisdom tooth pain?",
      "04. How long does wisdom tooth pain last?",
      "08. I'm anxious about visiting the dentist.",
    ].map((item, i) => (
      <div
        key={i}
        className="bg-[#69B8BB] px-[25px] py-[20px] rounded-[6px] flex items-center gap-[15px] text-[18px] font-medium text-[#0c1b3a]"
      >
        <span className="text-[22px] font-black">+</span>
        {item}
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
    
  );
}








