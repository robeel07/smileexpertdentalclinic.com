import React from "react";
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
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${thirtyseven})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Sensitive Sore Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

      {<Link to="/TeethGums/soreteeth"></Link>}


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
   Tooth sensitivity and pain can be highly uncomfortable. Fortunately, there are available remedies. Causes include tooth decay, fractures, abscesses, receding gums, and poor oral hygiene. Tooth sensitivity can vary, and it’s best to consult a dentist before it worsens. Treatment options include avoiding certain foods, using specialized toothpaste and toothbrushes, and receiving procedures such as <span style={{ color: "blue", fontWeight: "600" }}> fillings, root canals, crowns and tooth extractions</span> .
  </p>
</div>


 <div
  style={{
    width: "100%",
    padding: "100px 160px", // ⬅ increased left & right space
    display: "flex",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT TEXT */}
  <div style={{ width: "55%" }}>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: "700",
        color: "#0b1f8f",
        marginBottom: "14px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#333",
        marginBottom: "18px",
        maxWidth: "520px",
      }}
    >
      Check it out if you’re unsure. Set up a dental appointment as soon as you
      can if:
    </p>

    <ul
      style={{
        paddingLeft: "38px",
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.8",
        marginBottom: "28px",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is severe or unbearable</li>
      <li>
        You have a fever, earache or pain when you open your mouth wide
      </li>
    </ul>

    <h3
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#0b1f8f",
        marginBottom: "8px",
      }}
    >
      Are You in Pain?
    </h3>

    <p
      style={{
        fontSize: "15px",
        color: "#333",
        maxWidth: "520px",
      }}
    >
      For urgent dental care, contact us if you’re in pain. We’ll promptly
      arrange an appointment for you.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div
    style={{
      width: "45%",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={thirtyeight} // keep your image
      alt="Dentist"
      style={{
        width: "100%",
        maxWidth: "620px",
        borderRadius: "18px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
      style={{
        width: "100%",
        backgroundColor: "#f4f8fb",
        padding: "70px 100px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "0 0 50%" }}>
          <img
            src={thirtynine}
            alt="Dental treatment"
            style={{
              width: "100%",
              maxWidth: "620px",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "0 0 50%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Symptoms of Sensitive Teeth:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
              maxWidth: "520px",
            }}
          >
            Pain or discomfort often signals a more severe issue. It may vary or
            worsen gradually. Chewing can cause sharp pain, while hot or cold
            liquids may increase the discomfort. Sweet or acidic foods can also
            heighten sensitivity or tooth soreness.
          </p>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            Cold air or mouth breathing can sometimes worsen sensitivity or
            pain. Tooth sensitivity occurs when the inner dentin layer is
            exposed due to enamel wear on the outer layer.
          </p>
        </div>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        padding: "70px 100px",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* LEFT CONTENT */}
        <div style={{ flex: "0 0 50%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Causes of Teeth Grinding:
          </h2>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              marginBottom: "18px",
              maxWidth: "520px",
            }}
          >
            One of the primary causes of tooth sensitivity is unprotected dentine.
            There are several possible causes for this. Common causes include plaque
            buildup, dental decay, receding gums, chips in your tooth, and gum
            disease. Additional factors include:
          </p>

          <ul
            style={{
              paddingLeft: "38px",
              marginBottom: "18px",
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.8",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li>Acidic food, drink or mouthwash</li>
            <li>
              <span style={{ color: "#1ecad3", fontWeight: "600" }}>
                Bruxism
              </span>
              , or grinding and clenching your teeth
            </li>
            <li>Brushing your teeth too hard</li>
            <li>Some tooth whitening products</li>
          </ul>

          <p
            style={{
              fontSize: "15px",
              color: "#333",
              lineHeight: "1.7",
              maxWidth: "520px",
            }}
          >
            To maintain good oral health, maintain regular dental and hygienist
            appointments. We all occasionally need reminders of the best oral
            hygiene practices.
          </p>
        </div>

        {/* RIGHT IMAGE */}
        <div style={{ flex: "0 0 50%" }}>
          <img
            src={forty}
            alt="Dental procedure"
            style={{
              width: "100%",
              maxWidth: "620px",
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
        backgroundColor: "#f3f8fc",
        padding: "70px 90px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "0 0 48%" }}>
          <img
            src={fortyone}
            alt="Dental patient preparation"
            style={{
              width: "100%",
              maxWidth: "620px",
              height: "auto",
              borderRadius: "18px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "0 0 52%" }}>
          <h2
            style={{
              fontSize: "30px",
              fontWeight: "700",
              color: "#0b1f8f",
              marginBottom: "18px",
            }}
          >
            Get Prepared:
          </h2>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#222",
              marginBottom: "16px",
            }}
          >
            When you schedule an appointment at SmileOn for sensitive or
            uncomfortable teeth, your primary goal is alleviating your suffering.
            Understanding what information your dentist will need for an accurate
            diagnosis and treatment is important. Usually, your dentist will inquire
            about your medical history before thoroughly examining your oral, dental,
            jaw, tongue, throat, sinus, ear, nose, and neck areas. Sometimes, an X-ray
            may be necessary based on your dentist’s assessment of the underlying
            cause. Your dentist will ask you questions about the pain, such as:
          </p>

          <ul
            style={{
              paddingLeft: "38px",
              marginBottom: "16px",
              fontSize: "15px",
              color: "#222",
              lineHeight: "1.8",
              listStyleType: "disc",
              listStylePosition: "outside",
            }}
          >
            <li>When did the pain start?</li>
            <li>How severe is it?</li>
            <li>Where do you feel sensitivity?</li>
            <li>What makes it worse?</li>
            <li>What makes it better?</li>
          </ul>

          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              color: "#222",
            }}
          >
            Before to your appointment, consider your responses to these questions.
            Preparation can hasten the diagnosis.
          </p>
        </div>
      </div>
    </div>

    <div style={{ width: "100%", padding: "80px 60px" }}>
      
      {/* WHAT NEXT */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
          color: "#0b1f8f",
          marginBottom: "10px",
        }}
      >
        What Next
      </h2>

      <p
        style={{
          textAlign: "center",
          fontSize: "15px",
          color: "#000",
          maxWidth: "750px",
          margin: "0 auto 30px",
          lineHeight: "1.6",
        }}
      >
        Explore therapeutic strategies to gain further insight. Book a dental
        consultation for detailed information on your concerns.
      </p>

      <div style={{ textAlign: "center", marginBottom: "70px" }}>
        <button
          style={{
            backgroundColor: "#10c6e8",
            color: "#fff",
            border: "none",
            padding: "14px 34px",
            borderRadius: "30px",
            fontSize: "15px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Book an Appointment
        </button>
      </div>

      {/* FAQs */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "30px",
          fontWeight: "700",
          color: "#0b1f8f",
          marginBottom: "40px",
        }}
      >
        FAQs
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "20px 30px",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="faq-item">+&nbsp;&nbsp;01. How much does it cost to treat sensitive teeth?</div>
        <div className="faq-item">+&nbsp;&nbsp;04. Why are my teeth sore during spring?</div>

        <div className="faq-item">+&nbsp;&nbsp;02. Why are my teeth sore or sensitive?</div>
        <div className="faq-item">+&nbsp;&nbsp;05. I’m anxious about visiting the dentist.</div>

        <div className="faq-item">+&nbsp;&nbsp;03. How can I treat sensitive teeth?</div>
        <div className="faq-item">+&nbsp;&nbsp;06. Can sensitive teeth be prevented?</div>
      </div>

      {/* Inline style for FAQ boxes */}
      <style>
        {`
          .faq-item {
            background-color: #69bebc;
            color: #000;
            padding: 18px 22px;
            font-size: 15px;
            font-weight: 500;
            display: flex;
            align-items: center;
            cursor: pointer;
          }
        `}
      </style>
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
                      href="#"
                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
                    >
                      <FaFacebookF size={20} color="white" />
                    </a>
          
                    <a
                      href="#"
                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
                    >
                      <FaInstagram size={20} color="white" />
                    </a>
          
                    <a
                      href="#"
                      className="w-[40px] h-[40px] bg-[#112d53] flex justify-center items-center rounded-[8px] no-underline"
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