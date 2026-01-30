
import { Link } from "react-router-dom";
import twentynine from "../../Images/twentynine.jpg";
import thirty from "../../Images/thirty.jpg";
import thirtyone from "../../Images/thirtyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function JawPain() {
  return (
    <>
    <div
      className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]
    bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
      style={{ backgroundImage: `url(${twentynine})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Jaw Pain Treatment in Khanewal
    </h1>
</div>
    </div>


{/* INTRO PARAGRAPH */}
<div className="max-w-7xl mx-auto my-10 px-5 text-gray-800 text-base leading-relaxed text-justify">
  <p>
    Jaw pain can be excruciating and disruptive to daily life. It is a common and persistent condition that can greatly impact activities like eating and speaking. The intensity of jaw pain can make it difficult to focus, and many individuals experience limitations in mouth opening, along with facial and jaw tenderness. Headaches and earaches can also accompany jaw pain.
  </p>
</div>

{/* SYMPTOMS OF JAW PAIN */}
<div className="w-full bg-[#f4f9fc] py-20 px-5 flex justify-center">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1c74] text-3xl sm:text-3xl mb-4">Symptoms of Jaw Pain:</h2>
      <p className="text-sm sm:text-base leading-relaxed mb-5">
        Untreated, jaw pain can become chronic and unbearable. It can arise from chewing hard foods or excessive gum chewing, but typically resolves quickly. However, chronic jaw pain is often associated with more serious conditions such as temporomandibular joint disease (TMJ).
      </p>
      <p className="text-sm sm:text-base leading-relaxed">
        Common symptoms of TMJ and jaw pain include aching or tender jaw, ear pain, discomfort in the temporomandibular joints, and difficulty or pain while chewing. Additional possible symptoms include lower jaw pain, facial pain, and limited mouth movement.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 text-right">
      <img
        src={thirty}
        alt="Jaw Pain Examination"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>
  </div>
</div>

{/* CAUSES OF JAW PAIN */}
<div className="w-full bg-[#f4f9fc] py-20 px-5 flex justify-center">
  <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* LEFT IMAGE */}
    <div className="flex-1">
      <img
        src={thirtyone}
        alt="Causes of Jaw Pain"
        className="w-full h-full rounded-3xl object-cover"
      />
    </div>

    {/* RIGHT CONTENT */}
    <div className="flex-1 space-y-4">
      <h2 className="text-[#0a1c74] text-3xl sm:text-3xl mb-5">Causes of Jaw Pain:</h2>
      <p className="text-sm sm:text-base leading-relaxed mb-4">
        There are several different causes of jaw pain. TMJ, also known as temporomandibular joint disease, is a frequent source of jaw pain. A crucial joint in the body is the mandible joint. It enables complicated motions like talking, eating, and swallowing. Trauma or damage may result in TMJ. This could be the result of an accident or participating in sports. Jaw discomfort and TMJ may also be brought on by:
      </p>
      <ul className="pl-9 list-disc text-sm sm:text-base leading-relaxed mb-4 space-y-1">
        <li>Dental problems, such as misaligned teeth and jaws</li>
        <li><span className="text-[#00a6ff] font-medium">Teeth grinding</span> or clenching</li>
        <li>Arthritis in the joint</li>
        <li>Stress, leading to tightened facial muscles</li>
      </ul>
      <p className="text-sm sm:text-base leading-relaxed">
        Jaw pain can be triggered by consuming excessively tough food or overextending the mouth. Typically, the discomfort subsides within a couple of days. Severe jaw pain requires attention from a dentist or other qualified professional.
      </p>
    </div>
  </div>
</div>

{/* WHAT NOW */}
<div className="w-max-7xl bg-white py-8 px-5 text-center">
  <h2 className="text-[#0a1c74] text-3xl sm:text-3xl mb-4">What Now</h2>
  <p className="max-w-[1300px] mx-auto mb-8 text-sm sm:text-base leading-relaxed">
    View some potential therapies to learn more about what comes next. We advise scheduling a dental consultation to receive detailed information concerning your problems.
  </p>
  <button className="bg-[#2dd4f7] text-white px-8 py-3 rounded-full text-sm sm:text-base cursor-pointer hover:bg-[#1fc0e0] transition">
    Book an Appointment
  </button>
</div>

{/* FAQ SECTION */}
<div className="w-full bg-white py-8 px-5">
  <h2 className="text-[#0a1c74] text-3xl sm:text-3xl text-center mb-10 font-semibold">FAQs</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3 lg:gap-6">
    {[
      "01. How much does it cost to treat jaw pain?",
      "02. How do you get rid of jaw pain?",
      "03. What are the causes of jaw pain?",
      "04. What can I do at home to help with jaw pain?",
      "05. I’m anxious about visiting the dentist.",
      "06. Can jaw pain be prevented?",
    ].map((item, index) => (
      <div
        key={index}
        className="bg-[#6cc3c0] px-3 py-3 flex items-center font-medium text-sm sm:text-base rounded-lg"
      >
        <span className="text-lg sm:text-xl font-semibold mr-4">+</span>
        <span>{item}</span>
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








