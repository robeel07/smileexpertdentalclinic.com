
import { Link } from "react-router-dom";
import twenty from "../../Images/twenty.jpg";
import twentyone from "../../Images/twentyone.jpg";
import twentytwo from "../../Images/twentytwo.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function GumDisease() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_60%]"
      style={{ backgroundImage: `url(${twenty})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Gum Disease Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/gumdisease"></Link>}



    <div
  style={{
    maxWidth: "1300px",
    margin: "40px auto",
    padding: " 20px",
    lineHeight: "1.8",
    fontSize: "16px",
    color: "#333",
    textAlign: "justify",
    marginBottom: "0px",
  }}
>
  <p>
  Gum disease, caused by poor dental hygiene, is hazardous. An infection of the gums can lead to tooth-supporting bone damage. Gum disease is often painless; tooth loss may occur if left untreated. The two main types are gingivitis and periodontitis.
  Gingivitis, affecting up to 70% of Pakistanis, is the most common form. Around 30% of individuals over 30 have periodontitis. Early detection and treatment improve dental health. Regular dental checkups, brushing techniques twice daily, and flossing help prevent gum disease.
  </p>
</div>

<div
      style={{
        maxWidth: "1800px",
        display: "flex",
        justifyContent: "center",
        background: "#fff",
        marginBottom: "0px",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
        }}
      >
        <div
          style={{
            padding: "80px 60px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "60px",
          }}
        >
          {/* LEFT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                margin: " 0 auto",
              }}
            >
              Symptoms of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "0 auto",
              }}
            >
              Good oral health is crucial due to the often painless nature of gum
              disease. Regular dental checkups are necessary to ensure proper
              maintenance.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                margin: "auto",
              }}
            >
              Gum disease symptoms can be imperceptible. Some signs could be:
            </div>

            <ul
              style={{
                paddingLeft: "38px",
                margin: "auto",
                fontSize: "15px",
                lineHeight: "1.8",
                listStyleType: "disc",
              }}
            >
              <li>red, swollen or tender gums</li>
              <li>bleeding when you floss or brush</li>
              <li>loose teeth or separation between teeth</li>
              <li>continuous bad breath</li>
              <li>gums that pull away from teeth</li>
              <li>when you bite, the position of your teeth changes</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease can be asymptomatic for some individuals. Regular dental
              checkups serve as the primary defence. Early detection during
              hygienist visits ensures optimal oral health.
            </div>
          </div>

<div style={{ flex: 1 }}>
  <div
    style={{
      height: "500px",          // 👈 FIXED HEIGHT (IMPORTANT)
      overflow: "hidden",       // 👈 CLIP IMAGE
      borderRadius: "20px",
      position: "relative",
    }}
  >
    <img
      src={twentyone}
      alt="Gum Disease Checkup"
      style={{
        width: "180%",
        position: "absolute",
        top: "-60px",           // 👈 IMAGE MOVES UP HERE
        right: "0",
      }}
    />
  </div>
</div>


        </div>
      </div>
    </div>

     <div
      style={{
        width: "100%",
        background: "#F4F8FB",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* CENTERED CONTAINER */}
      <div
        style={{
          maxWidth: "1200px",
          width: "180%",
          padding: "80px 60px",
          marginTop: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "70px",
          }}
        >
          {/* LEFT IMAGE */}
          <div style={{ flex: 1 }}>
            <img
              src={twentytwo}
              alt="Causes of Gum Disease"
              style={{
                width: "120%",
                height: "500px",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>

          {/* RIGHT CONTENT */}
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: "32px",
                fontWeight: "600",
                color: "#0B1C6D",
                marginBottom: "20px",
              }}
            >
              Causes of Gum Disease:
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              Oral bacterial overgrowth leading to plaque buildup is the primary
              cause of gum disease. Poor oral health is a significant contributing
              factor.
            </div>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                marginBottom: "15px",
              }}
            >
              There are a few more risk factors for gum disease, though, including:
            </div>

            <ul
              style={{
                paddingLeft: "38px",
                marginBottom: "15px",
                fontSize: "15px",
                lineHeight: "1.8",
                listStyleType: "disc",
              }}
            >
              <li>Smoking</li>
              <li>Diabetes</li>
              <li>Pregnancy or hormonal changes</li>
              <li>Medication</li>
              <li>Genetics</li>
              <li>Other health problems</li>
              <li>Stress</li>
              <li>Poor nutrition</li>
            </ul>

            <div
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
              }}
            >
              Gum disease is common but treatable. Regular dentist and hygienist
              visits are essential for maintaining dental health.
            </div>
          </div>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", background: "#fff" }}>
  {/* WHAT NOW */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "80px 60px 40px",
      textAlign: "center",
    }}
  >
    <div
      style={{
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "15px",
      }}
    >
      What now
    </div>

    <div
      style={{
        fontSize: "15px",
        lineHeight: "1.8",
        maxWidth: "1300px",
        margin: "0 auto 30px",
      }}
    >
      Explore available treatments to gain further insight. For personalised
      advice regarding your symptoms, we recommend scheduling a dentist
      consultation. Contact us via phone or our online scheduling system to book
      an{" "}
      <span style={{ color: "#00AEEF", fontWeight: "500" }}>appointment</span>.
    </div>

    <div
      style={{
        display: "inline-block",
        background: "#25CFE5",
        color: "#fff",
        padding: "14px 32px",
        borderRadius: "30px",
        fontSize: "15px",
        fontWeight: "500",
        cursor: "pointer",
      }}
    >
      Book an Appointment
    </div>
  </div>

  {/* FAQs */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "40px 60px 80px",
    }}
  >
    <div
      style={{
        textAlign: "center",
        fontSize: "32px",
        fontWeight: "600",
        color: "#0B1C6D",
        marginBottom: "40px",
      }}
    >
      FAQs
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px",
      }}
    >
      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;01. How much does it cost to treat gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;05. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;02. Can gum disease be prevented?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;06. What happens if you have gum disease?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;03. Does gum disease hurt?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;07. How do you get rid of gum disease at home?
      </div>

      <div style={{ background: "#67BDB8", padding: "18px 22px", display: "flex", alignItems: "center", cursor: "pointer", fontSize: "15px" }}>
        +&nbsp;&nbsp;04. Can gum disease be cured?
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








