
import { Link } from "react-router-dom";
import twentynine from "../../Images/twentynine.jpg";
import thirty from "../../Images/thirty.jpg";
import thirtyone from "../../Images/thirtyone.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function JawPain() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${twentynine})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Jaw Pain Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/jawpain"></Link>}


<div
  style={{
    maxWidth: "1300px",
    margin: "40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
    textAlign: "justify",
  }}
>
  <p>
    Jaw pain can be excruciating and disruptive to daily life. It is a common and persistent condition that can greatly impact activities like eating and speaking. The intensity of jaw pain can make it difficult to focus, and many individuals experience limitations in mouth opening, along with facial and jaw tenderness. Headaches and earaches can also accompany jaw pain.
  </p>
</div>

<div
  style={{
    width: "100%",
    background: "#f4f9fc",
    padding: "80px 60px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  }}
>
  {/* MAIN CONTAINER */}
  <div
    style={{
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "60px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: "1" }}>
      <h2
        style={{
          color: "#0a1c74",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Symptoms of Jaw Pain:
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          marginBottom: "20px",
          fontSize: "15px",
        }}
      >
        Untreated, jaw pain can become chronic and unbearable. It can arise from
        chewing hard foods or excessive gum chewing, but typically resolves
        quickly. However, chronic jaw pain is often associated with more serious
        conditions such as temporomandibular joint disease (TMJ).
      </p>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        Common symptoms of TMJ and jaw pain include aching or tender jaw, ear
        pain, discomfort in the temporomandibular joints, and difficulty or pain
        while chewing. Additional possible symptoms include lower jaw pain,
        facial pain, and limited mouth movement.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: "1", textAlign: "right" }}>
      <img
        src={thirty} // replace with your image import
        alt="Jaw Pain Examination"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    background: "#f4f9fc",
    padding: "80px 60px",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
  }}
>
  {/* MAIN WRAPPER */}
  <div
    style={{
      maxWidth: "1200px",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: "60px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: "1" }}>
      <img
        src={thirtyone} // import your image
        alt="Causes of Jaw Pain"
        style={{
          width: "100%",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: "1" }}>
      <h2
        style={{
          color: "#0a1c74",
          fontSize: "30px",
          marginBottom: "20px",
        }}
      >
        Causes of Jaw Pain :
      </h2>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
          marginBottom: "15px",
        }}
      >
        There are several different causes of jaw pain. TMJ, also known as
        temporomandibular joint disease, is a frequent source of jaw pain. A
        crucial joint in the body is the mandible joint. It enables complicated
        motions like talking, eating, and swallowing. Trauma or damage may
        result in TMJ. This could be the result of an accident or participating
        in sports. Jaw discomfort and TMJ may also be brought on by:
      </p>

      <ul
        style={{
          paddingLeft: "38px",
          marginBottom: "15px",
          lineHeight: "1.8",
          fontSize: "15px",
          listStyleType: "disc",
        }}
      >
        <li>Dental problems, such as misaligned teeth and jaws</li>
        <li>
          <span style={{ color: "#00a6ff", fontWeight: "500" }}>
            Teeth grinding
          </span>{" "}
          or clenching
        </li>
        <li>Arthritis in the joint</li>
        <li>Stress, leading to tightened facial muscles</li>
      </ul>

      <p
        style={{
          lineHeight: "1.8",
          fontSize: "15px",
        }}
      >
        Jaw pain can be triggered by consuming excessively tough food or
        overextending the mouth. Typically, the discomfort subsides within a
        couple of days. Severe jaw pain requires attention from a dentist or
        other qualified professional.
      </p>
    </div>
  </div>
</div>

{/* WHAT NOW SECTION */}
<div
  style={{
    width: "100%",
    padding: "80px 40px",
    textAlign: "center",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "15px",
    }}
  >
    What Now
  </h2>

  <p
    style={{
      maxWidth: "1300px",
      margin: "0 auto 30px",
      fontSize: "15px",
      lineHeight: "1.7",
    }}
  >
    View some potential therapies to learn more about what comes next. We
    advise scheduling a dental consultation to receive detailed information
    concerning your problems.
  </p>

  <button
    style={{
      background: "#2dd4f7",
      border: "none",
      color: "#fff",
      padding: "12px 30px",
      borderRadius: "30px",
      fontSize: "15px",
      cursor: "pointer",
    }}
  >
    Book an Appointment
  </button>
</div>

{/* FAQ SECTION */}
<div
  style={{
    width: "100%",
    padding: "60px 40px 100px",
    background: "#ffffff",
  }}
>
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px 30px",
    }}
  >
    {/* FAQ ITEM */}
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
        style={{
          background: "#6cc3c0",
          padding: "18px 20px",
          display: "flex",
          alignItems: "center",
          fontSize: "15px",
          fontWeight: "500",
        }}
      >
        <span
          style={{
            fontSize: "22px",
            fontWeight: "600",
            marginRight: "15px",
          }}
        >
          +
        </span>
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
        
              <p className="my-2 flex gap-[10px] px-2">📧 aneelabrar555@gmail.com</p>
        
              <p className="my-3 flex gap-[10px] px-2 ">📞 03008395562</p>
        
              <p className="my-2 flex gap-[10px] px-3">
                  <span className="">📍 Saddique Hospital Stadium Road Khanewal</span>
              </p>
        
              <p className="mt-6 font-semibold px-2"> 🕒 Clinic Timing <br/>   <span className="ml-7">11:00am to 9:00pm</span></p>
        
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








