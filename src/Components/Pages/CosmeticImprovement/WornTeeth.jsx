import React from "react";
import { Link } from "react-router-dom";
import sixtyeight from "../../Images/sixtyeight.jpg";
import sixtynine from "../../Images/sixtynine.jpg";
import seventy from "../../Images/seventy.jpg";
import seventyone from "../../Images/seventyone.jpg";
import seventytwo from "../../Images/seventytwo.png";
import seventythree from "../../Images/seventythree.png";
import seventyfour from "../../Images/seventyfour.png";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function WornTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${sixtyeight})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Worn Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CosmeticImprovement/wornteeth"></Link>}


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
Worn teeth refer to the gradual erosion, abrasion, and loss of the tooth’s outer surface. This outer layer, called enamel, protects against sensitivity to hot, cold, and sugary foods and drinks while providing the white color of teeth. Such teeth can give you a bad outlook and causing other dental issues. You lose your tooth enamel, which means that care from a young age must be taken to maintain appropriately strong jaws. Our worn down teeth treatment includes veneers, <span style={{color :"#0aa6ff", fontWeight: "700" }}>dental crowns,</span> or dental bonding. It can help heal and strengthen your teeth and prevent future wear. At SmileOn Dental, our qualified dentists know how to restore worn teeth, reduce pain, and enhance your smile to last a lifetime of happiness. Say no to dull teeth anymore; visit our clinic to protect tooth enamel.
  </p>
</div>

<div
  style={{
    width: "100%",
    padding: "40px 170px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    flexWrap: "wrap", // makes it responsive
    boxSizing: "border-box",
  }}
>
  {/* LEFT CONTENT */}
  <div
    style={{
      flex: "1 1 480px",
      maxWidth: "600px",
    }}
  >
    <h2
      style={{
        fontSize: "32px",
        color: "#0a1a7a",
        marginBottom: "20px",
      }}
    >
      Symptoms of worn teeth
    </h2>

    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      It can sometimes be difficult to recognize when you need to make changes
      to your teeth. However, if you notice these signs, it may be time for
      expert care and tooth enamel restoration treatment:
    </p>

    <ul
      style={{
        paddingLeft: "40px",
        marginBottom: "20px",
        color: "#333",
        lineHeight: "1.8",
        fontSize: "15px",
        listStyleType: "disc",
      }}
    >
      <li>
        <span style={{ color :"#0aa6ff", fontWeight: "700"  }}>
          Yellow teeth
        </span>{" "}
        result from the loss of enamel
      </li>
      <li>Sensitive teeth when eating foods that are hot, cold or sweet</li>
      <li>Worn or damaged teeth due to bruxism</li>
      <li>Uneven external surface of the teeth</li>
      <li>Feeling discomfort while chewing</li>
    </ul>

    <p
      style={{
        fontSize: "15px",
        lineHeight: "1.7",
        color: "#333",
      }}
    >
      So, if you have any of these symptoms, please do not hesitate and take
      care of your teeth with the help of a tooth enamel repair dentist.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div
    style={{
      flex: " 420px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    <img
      src={sixtynine}
      alt="Dental checkup"
      style={{
        width: "120%",
        maxWidth: "620px",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    backgroundColor: "#f4f9fd",
    padding: "60px 140px",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      maxWidth: "1250px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT IMAGE */}
    <div
      style={{
        flex: " 480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={seventy}
        alt="Dental treatment"
        style={{
          width: "100%",
          maxWidth: "620px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div
      style={{
        flex: " 500px",
        maxWidth: "600px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a1a7a",
          marginBottom: "10px",
        }}
      >
        Causes of worn teeth
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#333",
          marginBottom: "10px",
        }}
      >
        It is important to learn the causes of worn teeth so you do not
        aggravate the situation and go for worn-down teeth treatment. If the
        situation is left unaddressed, then you experience sensitivity, and
        pain, so go for tooth enamel erosion restoration before it gets late.
        <strong> Common causes include:</strong>
      </p>

      {/* BULLET LIST */}
      <ul
        style={{
          listStyle: "none",
          paddingLeft: "30px",
          marginBottom: "5px",
        }}
      >
        {[
          "Consuming fruits and foods of an acidic nature often.",
          <>
            Includes tooth grinding{" "}
            <span style={{ color: "#1a73e8", fontWeight: "600" }}>
              (bruxism)
            </span>
          </>,
          "Age-related enamel thinning",
          "Not drinking enough water",
          "Brushing your teeth too hard",
        ].map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "10px",
              marginBottom: "10px",
              fontSize: "15px",
              color: "#333",
            }}
          >
            <span
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#000",
                borderRadius: "50%",
                marginTop: "8px",
                flexShrink: 0,
              }}
            ></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        If your teeth are beginning to look dull and aged, get in touch with us
        and learn how we can help restore and protect teeth enamel!
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "60px 160px",
    boxSizing: "border-box",
  }}
>
  <div
    style={{
      maxWidth: "1250px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT CONTENT */}
    <div
      style={{
        flex: "500px",
        maxWidth: "600px",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#0a1a7a",
          marginBottom: "18px",
        }}
      >
        What is Tooth Enamel?
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "#333",
          marginBottom: "15px",
        }}
      >
        Enamel is a thin outer layer of your teeth, protecting your teeth from
        sensitivity and damage in your everyday life. It is one of the
        strongest tissues in the human body and can protect from chewing,
        biting, and acids. Nonetheless, enamel is different from most tissues
        of the body in that it cannot regenerate once it has been damaged.
      </p>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          color: "#333",
        }}
      >
        The primary problem that develops when enamel wear is the sensitivity
        and the yellowish shade of teeth, as well as cavity proneness. In cases
        where your enamel is worn out, treatments such as tooth enamel erosion
        restoration can be done to save the teeth. As well as regain their
        functionality.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div
      style={{
        flex: "480px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={seventyone}
        alt="Dental treatment"
        style={{
          width: "100%",
          maxWidth: "620px",
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
    padding: "80px 40px",
    boxSizing: "border-box",
    textAlign: "center",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      fontSize: "30px",
      color: "#0a1a7a",
      marginBottom: "12px",
    }}
  >
    In Pain? Call us Now
  </h2>

  <p
    style={{
      maxWidth: "1250px",
      margin: "0 auto 50px",
      fontSize: "15px",
      lineHeight: "1.8",
      color: "#333",
    }}
  >
    It’s advisable to consult a specialist dentist who deals with worn teeth. For
    personalized advice regarding your symptoms, schedule an appointment with a
    dentist specializing in worn teeth treatment. You can{" "}
    <span style={{ color :"#0aa6ff", fontWeight: "700"  }}>
      book online
    </span>{" "}
    or call{" "}
    <span style={{ color :"#0aa6ff", fontWeight: "700"  }}>
      0333-8037161
    </span>
    .
  </p>

  {/* CARDS */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      gap: "30px",
      flexWrap: "wrap",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        padding: "50px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      {/* ICON */}
      <img
        src={seventyfour}
        alt="Prosthodontist"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "contain",
          marginBottom: "20px",
          marginLeft: "90px",
        }}
      />

      <h4
        style={{
          fontSize: "16px",
          color: "#0a1a7a",
        }}
      >
        Prosthodontist Services
      </h4>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        padding: "50px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={seventytwo}
        alt="Fillings"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "contain",
          marginBottom: "20px",
          marginLeft: "90px",
        }}
      />

      <h4
        style={{
          fontSize: "16px",
          color: "#0a1a7a",
        }}
      >
        Fillings
      </h4>
    </div>

    {/* CARD 3 */}
    <div
      style={{
        width: "300px",
        backgroundColor: "#fff",
        borderRadius: "18px",
        padding: "50px 20px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
      }}
    >
      <img
        src={seventythree}
        alt="Crowns"
        style={{
          width: "70px",
          height: "70px",
          objectFit: "contain",
          marginBottom: "20px",
          marginLeft: "90px",

        }}
      />

      <h4
        style={{
          fontSize: "16px",
          color: "#0a1a7a",
        }}
      >
        Crowns
      </h4>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "20px 40px",
    boxSizing: "border-box",
    marginBottom: "30px",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a1a7a",
      marginBottom: "20px",
    }}
  >
    FAQs
  </h2>

  {/* GRID */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      gap: "30px",
      flexWrap: "wrap",
    }}
  >
    {/* LEFT COLUMN */}
    <div style={{ flex: "1 1 500px" }}>
      {[
        "01. How much does it cost to treat worn teeth?",
        "02. What is tooth enamel?",
        "03. Can you replace tooth enamel?",
        "04. Does tooth enamel regrow?",
      ].map((text, i) => (
        <div
          key={i}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#142c4c";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#6cc2bf";
            e.currentTarget.style.color = "#000";
          }}
          style={{
            backgroundColor: "#6cc2bf",
            padding: "18px 20px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
    </div>

    {/* RIGHT COLUMN */}
    <div style={{ flex: "1 1 500px" }}>
      {[
        "05. How will I know if I have worn teeth?",
        "06. How do you treat worn teeth?",
        "07. Can tooth enamel repair itself?",
        "08. Can worn teeth be prevented?",
      ].map((text, i) => (
        <div
          key={i}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "#142c4c";
            e.currentTarget.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "#6cc2bf";
            e.currentTarget.style.color = "#000";
          }}
          style={{
            backgroundColor: "#6cc2bf",
            padding: "18px 20px",
            marginBottom: "16px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            fontSize: "15px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
        >
          <span style={{ fontSize: "20px", fontWeight: "700" }}>+</span>
          <span>{text}</span>
        </div>
      ))}
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
      <p className="my-[6px]">About Us</p>
      <p className="my-[6px]">Contact Us</p>
      <p className="my-[6px]">Meet the Team</p>
      <p className="my-[6px]">Before & After</p>
      <p className="my-[6px]">Blogs</p>
    </div>

    
    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Treatments</h3>
      <p className="my-[6px]">Exam & X-Rays Check-Up</p>
      <p className="my-[6px]">Dental Emergency</p>
      <p className="my-[6px]">Smile Makeover</p>
      <p className="my-[6px]">Veneers</p>
      <p className="my-[6px]">Dental Implants</p>
      <p className="my-[6px]">Root Canal Treatment</p>
      <p className="my-[6px]">Orthodontic Braces</p>
      <p className="my-[6px]">Clear Aligners</p>
    </div>

    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Dental Problems</h3>
      <p className="my-[6px]">Yellow Teeth</p>
      <p className="my-[6px]">Teeth Cleaning</p>
      <p className="my-[6px]">Missing Teeth</p>
      <p className="my-[6px]">Broken Chipped Tooth</p>
      <p className="my-[6px]">Gum Disease</p>
      <p className="my-[6px]">Crooked Teeth</p>
      <p className="my-[6px]">Sensitive & Sore Teeth</p>
      <p className="my-[6px]">Dental Anxiety</p>
    </div>

    <div className="min-w-[200px]">
      <h3 className="text-[20px] mb-[20px]">Patient Safety</h3>
      <p className="my-[6px]">7X SAFETY</p>
      <p className="my-[6px]">4 Step Sterilization</p>
      <p className="my-[6px]">Safety Equipment</p>
      <p className="my-[6px]">Equipment & Technology</p>
      <p className="my-[6px]">Quality</p>
    </div>

    <div className="min-w-[250px]">
      <h3 className="text-[20px] mb-[20px]">Get in touch</h3>

      <p className="my-2 flex gap-[10px]">✉ aneelabrar555@gmail.com</p>

      <p className="my-2 flex gap-[10px] ">☏ 03008395562</p>

      <p className="my-2 flex gap-[10px] leading-[1.4]">
        ⚲ Saddique hospital stadium road khanewal
      </p>

      <p className="mt-6 font-semibold">🕒 Clinic Timing<br/> 11:00am to 9:00pm</p>

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
</div>




</>
  )
}