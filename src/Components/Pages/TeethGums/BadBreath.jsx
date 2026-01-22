
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
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${thirtytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Bad Breath Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/badbreath"></Link>}


<div
  style={{
    maxWidth: "1300px",
    margin: " 40px auto",
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
    padding: "40px 120px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center", // ✅ THIS centers both items
    gap: "80px",
    backgroundColor: "#fff",
    marginLeft: "80px",
    margintop: "0px",
  }}
>
  {/* LEFT CONTENT */}
  <div
    style={{
      flex: 1,
      maxWidth: "520px",
    }}
  >
    <h2
      style={{
        color: "#0b1a6d",
        fontSize: "34px",
        marginBottom: "20px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p style={{ marginBottom: "18px", lineHeight: "1.7" }}>
      Get it checked up if you are not sure. Make a dental appointment as soon as
      possible if:
    </p>

    <ul
      style={{
        paddingLeft: "38px",
        marginBottom: "30px",
        lineHeight: "1.6",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>You’ve had chronic bad breath for more than several days</li>
      <li>The smell is more pronounced or alarming</li>
      <li>Your mouth hurts, your teeth hurt</li>
      <li>Teeth bleed, or your gums are painful</li>
    </ul>

    <h3
      style={{
        color: "#0b1a6d",
        fontSize: "22px",
        marginBottom: "10px",
      }}
    >
      Are You in Pain?
    </h3>

    <p style={{ lineHeight: "1.7" }}>
      If you have severe pain and need some dental help right away, please call
      us! We’ll immediately set up an appointment to check out your halitosis.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
    <img
      src={thirtythree}
      alt="Dental examination"
      style={{
        width: "620px",
        borderRadius: "22px",
        height: "400px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    backgroundColor: "#f3f8fc",
    padding: "40px 120px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={thirtyfour}
      alt="Dental Checkup"
      style={{
        width: "90%",
        maxWidth: "620px",
        height: "400px",
        marginleft: "70px",
        borderRadius: "22px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div
    style={{
      flex: 1,
      maxWidth: "560px",
      gap: "30px",
    }}
  >
    <h2
      style={{
        color: "#0b1a6d",
        fontSize: "34px",
        marginBottom: "20px",
      }}
    >
      Symptoms of Bad Breath:
    </h2>

    <p style={{ lineHeight: "1.7", marginBottom: "18px" }}>
      Finding bad breath symptoms yourself isn’t always easy, but most other
      people will notice it first. And if you hear about it from a trusted
      friend or family member, see that as your cue to go for bad breath
      treatment. Halitosis can also be accompanied by other symptoms that
      indicate underlying oral health issues.
    </p>

    <p style={{ fontWeight: "600", marginBottom: "10px" }}>
      Some common signs of bad breath include:
    </p>

    <ul
      style={{
        paddingLeft: "38px",
        lineHeight: "1.6",
        marginBottom: "18px",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>Foul odor from the mouth.</li>
      <li>Gums that are painful, bleeding, or swollen.</li>
      <li>
        <span style={{ color: "#00a8ff", fontWeight: "600" }}>
          Toothache
        </span>{" "}
        or sensitivity.
      </li>
      <li>Persistent bad breath for weeks.</li>
      <li>
        Problems with dentures, like discomfort or improper fit.
      </li>
    </ul>

    <p style={{ lineHeight: "1.7" }}>
      If you experience any of these symptoms, it is time to make an appointment
      for bad breath smell treatment.
    </p>
  </div>
</div>

 <div
      style={{
        width: "100%",
        backgroundColor: "#f3f8fc",
        padding: "40px 120px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* INNER WRAPPER (THIS CENTERS CONTENT) */}
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "260px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontSize: "32px",
              color: "#0b2c5d",
              marginBottom: "20px",
            }}
          >
            Reason for Bad Breath:
          </h2>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            Most bad breath starts in the mouth due to poor oral hygiene, plaque
            accumulation or gum disease. Dry mouth, dietary choices, or you may
            also experience bad breath after root canal treatment. It usually
            happens when there is an infection or if the same tooth is not
            healing properly. You have to be aware of the cause to find a
            solution. <strong>Here are a few typical causes of bad breath:</strong>
          </p>

          <ul style={{ paddingLeft: "38px", lineHeight: "1.6",
          listStyleType: "disc",listStylePosition: "outside",}}>
            <li>Poor dental habits such as not brushing and flossing regularly.</li>
            <li>Food fragments caught between teeth or along the gums.</li>
            <li>The build-up of plaque from missed dental cleanings.</li>
            <li>Gum disease, tooth decay, or dental abscesses.</li>
            <li>
              Dry mouth (xerostomia) from smoking, certain medications, or mouth
              breathing.
            </li>
            <li>Stress, snoring, hormone changes or too much booze.</li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={thirtyfive}
            alt="Bad breath dental check"
            style={{
              width: "130%",
              maxWidth: "1200px",
              height: "450px",
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
        backgroundColor: "#f4f8fb",
        padding: "40px 120px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              color: "#0b1f66",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "2px",
            }}
          >
            Related Treatments:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "6px",
            }}
          >
            To identify the source of your foul breath, your dentist will
            carefully check your mouth. You might require one of these usual
            cures.
          </p>

          <ul
            style={{
              paddingLeft: "38px",
              marginBottom: "15px",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li style={{ color: "#00a6ff", marginBottom: "6px" }}>Filling</li>
            <li style={{ color: "#00a6ff", marginBottom: "6px" }}>Root canal</li>
            <li style={{ color: "#00a6ff" }}>Teeth Extraction</li>
          </ul>

          <h2
            style={{
              color: "#0b1f66",
              fontSize: "28px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            Get Prepared:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
            }}
          >
            Preparation can speed up the process when you go for bad breath
            dental treatment at SmileOn Dental Clinic. Your dentist will require
            this information to help identify the underlying reason so the best
            course of action can be taken. Your dentist will now take a careful
            look at your mouth, teeth, tongue, throat and sinuses and a few other
            places. They will also examine your medical history and may order an
            X-ray if needed. To maximize your visit, make sure to come ready to
            discuss the following:
          </p>

          <ul style={{ paddingLeft: "38px", marginBottom: "16px",
            listStyleType: "disc", listStylePosition: "outside",}}>
            <li style={{ marginBottom: "6px" }}>
              How long have you had bad breath?
            </li>
            <li style={{ marginBottom: "6px" }}>
              How noticeable is the odor?
            </li>
            <li style={{ marginBottom: "6px" }}>
              What did you change about your dental routine?
            </li>
            <li style={{ marginBottom: "6px" }}>
              Are there recent changes to your diet?
            </li>
            <li>Do you have any pain or other symptoms?</li>
          </ul>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
            }}
          >
            Thinking through these questions ahead of time will enable your
            dentist to diagnose the cause and recommend the appropriate solution
            quickly.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={thirtysix}
            alt="Dental Checkup"
            style={{
              width: "110%",
              maxWidth: "750px",
              height: "450px",
              marginTop: "120px",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>

   <div
  style={{
    width: "100%",
    padding: "90px 40px",
    backgroundColor: "#ffffff",
    textAlign: "center",
    boxSizing: "border-box",
  }}
>
  {/* TITLE */}
  <div
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0b1f66",
      marginBottom: "10px",
    }}
  >
    What Next
  </div>

  {/* DESCRIPTION */}
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto 55px auto",
      fontSize: "15px",
      lineHeight: "1.7",
      color: "#333",
    }}
  >
    View some potential therapies to learn more about what comes next. We advise
    scheduling a dental consultation to receive detailed information concerning
    your bad breath problems. To make an appointment, call us right away or book
    online right now.
  </div>

  {/* CARDS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        width: "320px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "45px 20px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          
        }}
      >
        <img
          src={toothbrush}
          alt="Scaling & Polishing"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* TEXT */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#0b1f66",
        }}
      >
        Scaling &amp; Polishing
      </div>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        width: "320px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "45px 20px",
        boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* ICON */}
      <div
        style={{
          width: "90px",
          height: "90px",
          marginBottom: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={periodontist}
          alt="Periodontist Services"
          style={{
            width: "60px",
            height: "60px",
            objectFit: "contain",
          }}
        />
      </div>

      {/* TEXT */}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "600",
          color: "#0b1f66",
        }}
      >
        Periodontist Services
      </div>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 120px",
    backgroundColor: "#ffffff",
    boxSizing: "border-box",
  }}
>
  {/* HEADING */}
  <div
    style={{
      textAlign: "center",
      fontSize: "34px",
      fontWeight: "700",
      color: "#0b1f66",
      marginBottom: "50px",
    }}
    >
    FAQs
  </div>

  {/* FAQ GRID */}
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
      "01. Can ulcers cause bad breath?",
      "02. How to get rid of bad breath permanently?",
      "03. What causes bad breath from the stomach?",
      "04. Which habit helps avoid bad breath?",
      "05. Does a dead tooth make your breath stink?",
      "06. How to eliminate bad breath for good?",
      "07. Can a loose tooth make your breath smell bad?",
      "08. Why do I have bad breath even after brushing?",
    ].map((item, index) => (
      <div
        key={index}
        style={{
          backgroundColor: "#6cc1bc",
          padding: "18px 22px",
          display: "flex",
          alignItems: "center",
          gap: "14px",
        }}
      >
        {/* PLUS ICON */}
        <div
          style={{
            fontSize: "20px",
            fontWeight: "700",
            color: "#000",
          }}
        >
          +
        </div>

        {/* QUESTION */}
        <div
          style={{
            fontSize: "15px",
            color: "#000",
          }}
        >
          {item}
        </div>
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








