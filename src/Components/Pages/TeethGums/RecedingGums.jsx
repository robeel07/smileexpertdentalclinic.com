
import { Link } from "react-router-dom";
import forteen from "../../Images/forteen.jpg";
import fifteen from "../../Images/fifteen.jpg";
import sixteen from "../../Images/sixteen.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function RecedingGumms() {
  return (
    <>
    <div
      className=" relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_40%] flex items-center pt-28 sm:pt-32 "
      style={{ backgroundImage: `url(${forteen})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className=" text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]" >
      Receding Gums Treatment in Khanewal
    </h1>
  
</div>
    </div>


   <div className="w-full">

  {/* INTRO TEXT */}
  <div className="max-w-7xl mx-auto my-10 px-5 text-[16px] leading-[1.8] text-[#333] text-justify">
    <p>
      Do you have a receding gums problem? Not to worry. Gum recession is one
      common dental problem that can be detected and prevented. The process of
      gums receding doesn’t happen fast enough that most people even realize
      they have the condition. Also, it can be a very common cause of tooth
      sensitivity.
      <br /><br />
      Receding gums are risky to health because they expose the roots of the
      teeth and expose them to decay, infections, tooth loss or even the
      appearance of{" "}
      <span className="text-[#00a6ff]">yellow teeth</span>. Everybody is
      recommended to see a dentist immediately.
    </p>
  </div>

  {/* SYMPTOMS SECTION */}
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    <div>
      <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
        Symptoms of Receding Gums
      </h2>

      <p className="leading-[1.8] mb-4">
        People with receding gums may experience sensitivity and visual
        changes. Common symptoms include:
      </p>

      <ul className="pl-9 list-disc leading-[1.8]">
        <li>Fear of tooth loss</li>
        <li>Sensitivity to hot or cold foods</li>
        <li>Concern about tooth appearance</li>
        <li>Bad breath</li>
        <li>Bleeding gums</li>
      </ul>

      <p className="mt-4 leading-[1.8]">
        Regular dental check-ups help prevent{" "}
        <span className="text-[#00a6ff]">receding gums</span>.
      </p>
    </div>

    <div className="flex-1 min-w-[300px] flex justify-center">
      <img
        src={fifteen}
        alt="Dental checkup"
        className="w-full max-w-[620px] h-[400px]
                   object-cover rounded-[26px]"
      />
    </div>
  </div>

  {/* CAUSES SECTION */}
  <div className="bg-[#f3f8fc] py-3 px-6 lg:px-20">
    <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

      <div className="flex-1">
        <img
          src={sixteen}
          alt="Dental treatment"
          className="w-full h-full rounded-3xl object-cover"  />
      </div>

      <div className="flex-1 min-w-[300px]">
        <h2 className="text-3xl font-semibold  text-[#0a1a5c] mb-4">
          Causes of Receding Gums
        </h2>

        <p className="leading-[1.8] mb-4">
          Gum recession can be caused by various factors including:
        </p>

        <ul className="pl-9 list-disc leading-[1.8]">
          <li>Your genes</li>
          <li>Brushing too hard</li>
          <li>Hormonal changes</li>
          <li>Smoking</li>
          <li>Grinding teeth</li>
          <li>Crooked teeth</li>
        </ul>
      </div>
    </div>
  </div>

  {/* TREATMENTS */}
  <div className="max-w-7xl mx-auto px-6 lg:px-20 py-20">

    <h2 className="text-3xl text-[#0a1a5c] mb-4">
      Treatments to Reverse Gum Diseases
    </h2>

    <p className="leading-[1.8]">
      This is what leads to changes in the texture and color of gums; they become more sensitive and may start bleeding, and so is the case with tooth loss due to loss of gum tissue. However, if you are suffering from this, there is no way you will be able to regain more of those gums unless you pursue treatment for receding gums.
    </p>

    <div className="flex flex-col lg:flex-row gap-16 mt-14">

      <div className="flex-1 ">
        <h3 className="text-[24px] md:text-[26px] text-[#0a1a5c] mb-4">
          Treatments for Early-Stage Receding Gums:
        </h3>

        <p className="leading-[1.8]">
          In some instances, at the beginning of the treatment, you may be prescribed non-surgical therapy. These include: <br/>
          <strong>Deep Cleaning:</strong> These procedures are done to reach subgingival plaque and calculi and will eliminate inflammation and cease further gingival recession.
        </p>

        <p className="leading-[1.8]">
          <strong>Antibiotics:</strong> At times, your dentist may put you on antibiotics that would eradicate the bacteria and enable the controlling of gum disease.
        </p>
      </div>

      <div className="flex-1 min-w-[300px]">
        <h3 className="text-[24px] text-[#0a1a5c] mb-4">
          Advanced Treatments
        </h3>

        <p className="leading-[1.8]">
          In cases where the gum recession is slightly worse, you may require receding gum surgery. Common surgical options include: <br/>
          <strong>Gum Grafting:</strong> The exposed tooth roots are covered with tissue imported from another part of the mouth, or donor site.
        </p>

        <p className="leading-[1.8]">
          <strong>Pinhole Technique:</strong> A procedure where stripped gum tissue is rolled back into position over an area of recession in a surgical way.
        </p>
      </div>
    </div>

    <div className="mt-14 max-w-[1100px]">
      <h3 className="text-3xl text-[#0a1a5c] mb-4">
        Receding Gums and Dentures
      </h3>

      <p className="leading-[1.8]">
        Ill-fitting dentures can also cause gum recession. It has to be a good fit since it is difficult to correct ill-fitted dentures without making the problems with the gums worse. But regular visits are just as important as the other adjustments you need to ensure the life of your dentures.
No matter whether you use non-surgical methods or receding gum surgery if you can stop your gum disease before it gets too out of hand, it will remain so.
      </p>
    </div>
  </div>

  {/* WHAT NEXT */}
  <div className="px-6 lg:px-16 py-12 text-center">
    <h2 className="text-4xl text-[#0a1a5c]">
      What Next
    </h2>

    <p className="max-w-[900px] mx-auto mt-4 mb-8 leading-[1.7]">
      Explore treatments and plan your appointment today.
    </p>

    <button className="bg-[#28cfe8] text-white
                       px-9 py-3 rounded-full
                       text-[15px] hover:opacity-90">
      Book an Appointment
    </button>
  </div>

  {/* FAQs */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
    
    {/* LEFT COLUMN */}
    <div className="flex-1 flex flex-col gap-4">
      {[
        "What is the cost of receding gums treatment?",
        "Why do gums recede?",
        "What happens when gums recede?",
      ].map((q, i) => (
        <div
          key={i}
          className="bg-[#6bbfbb] hover:bg-[#57b2ad] transition-colors duration-300
                     p-4 sm:p-5 flex items-start gap-3 rounded-md cursor-pointer"
        >
          <span className="text-lg sm:text-xl font-bold leading-none">+</span>
          <span className="text-sm sm:text-[15px] leading-relaxed">{q}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div className="flex-1 flex flex-col gap-4">
      {[
        "How do you stop receding gums?",
        "Can receding gums grow back?",
        "Can receding gums be repaired?",
      ].map((q, i) => (
        <div
          key={i}
          className="bg-[#6bbfbb] hover:bg-[#57b2ad] transition-colors duration-300
                     p-4 sm:p-5 flex items-start gap-3 rounded-md cursor-pointer"
        >
          <span className="text-lg sm:text-xl font-bold leading-none">+</span>
          <span className="text-sm sm:text-[15px] leading-relaxed">{q}</span>
        </div>
      ))}
    </div>

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








