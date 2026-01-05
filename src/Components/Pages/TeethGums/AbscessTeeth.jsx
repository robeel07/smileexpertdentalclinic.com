import React from "react";
import { Link } from "react-router-dom";
import fortytwo from "../../Images/fortytwo.jpg"
import fortythree from "../../Images/fortythree.jpg"
import fortyfour from "../../Images/fortyfour.jpg"
import fortyfive from "../../Images/fortyfive.jpg"
import fortysix from "../../Images/fortyfive.jpg"
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function AbscessTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_30%]"
      style={{ backgroundImage: `url(${fortytwo})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Tooth Abscess Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/abscessteeth"></Link>}


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
 A tooth abscess is a painful dental condition that forms when a bacteria-infected pocket of pus develops in or around the tooth. It can cause swelling, pain and sensitivity, and if not treated it could lead to more serious health problems. Visit SmileOn for an effective dental abscess treatment from qualified dentists to end your suffering.

Our knowledgeable staff knows how painful a tooth abscess can be, so we are here to help. Do not wait—early treatment is essential to keeping your smile healthy.
  </p>
</div>


<div
  style={{
    width: "100%",
    padding: "80px 120px",   // left & right margin increased
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "40px",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT CONTENT */}
  <div style={{ flex: 1, maxWidth: "55%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "14px",
      }}
    >
      When to See a Dentist:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        marginBottom: "18px",
        lineHeight: "1.7",
      }}
    >
      Check it out if you’re not sure. Put in place a dental appointment as soon
      as you can if:
    </p>

    <ul
      style={{
        paddingLeft: "22px",
        listStyleType: "disc",
        listStylePosition: "outside",
        fontSize: "15px",
        lineHeight: "1.9",
        marginBottom: "28px",
        color: "#000",
      }}
    >
      <li>You are in pain</li>
      <li>Pain lasts longer than a day or two</li>
      <li>The pain is persistent, severe or unbearable</li>
      <li>
        When you open your mouth wide, you experience pain, a fever, or ear, jaw,
        or headaches.
      </li>
      <li>If you have difficulty breathing or swallowing</li>
      <li>Your face, cheek, or tender areas of your body may be swelled.</li>
      <li>If you’ve ever experienced a tooth infection</li>
      <li>If you’re experiencing stress, or run down</li>
    </ul>

    <h3
      style={{
        fontSize: "22px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "10px",
      }}
    >
      Are You in Pain?
    </h3>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
      }}
    >
      In pain? For fast, pain-free recovery from every type of dental infection,
      including wisdom tooth abscess treatment, contact our dental experts.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: 1, display: "flex", justifyContent: "flex-end" }}>
    <img
      src={fortythree}   // replace with your imported image
      alt="Dentist consultation"
      style={{
        width: "650px",
        maxWidth: "620px",
        height: "400px",
        objectFit: "cover",
        marginTop: "30px",
        borderRadius: "20px",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    display: "flex",
    alignItems: "flex-start",
    gap: "60px",
    backgroundColor: "#f3f7fb",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: "0 0 45%" }}>
    <img
      src={fortyfour} 
      alt="Dental abscess treatment"
      style={{
        maxwidth: "620%",
        height: "420px",
        objectFit: "cover",
        borderRadius: "20px",
        marginTop: "80px",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div style={{ flex: "0 0 55%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "12px",
      }}
    >
      Tooth Abscess Stages:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
        marginBottom: "22px",
      }}
    >
      Knowing the stages of a tooth abscess can help with early identification of
      the issue and speedy dental abscess treatment. Here’s a breakdown of the
      typical stages:
    </p>

    {/* STAGE 1 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Initial Infection:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      Bacteria somehow get into the tooth (often by way of decay, trauma, or gum
      disease). At this point, you might experience mild discomfort or sensitivity.
    </p>

    {/* STAGE 2 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Pulpal Involvement:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      The infection reaches the tooth’s pulp, leading to inflammation and immense
      pain. This is usually when a periapical abscess develops at the tooth’s tip.
    </p>

    {/* STAGE 3 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Abscess Formation:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      Pus builds up at the site of infection, causing swelling and pressure in the
      gums or jaw. Pain becomes increasingly severe, and other symptoms, such as
      fever or swelling, can occur.
    </p>

    {/* STAGE 4 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Advanced Abscess:
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7", marginBottom: "18px" }}>
      The infection can extend to nearby tissues, resulting in complications such
      as facial swelling or difficulty opening the mouth.
    </p>

    {/* STAGE 5 */}
    <h4 style={{ color: "#0a1b5c", fontWeight: "700", marginBottom: "6px" }}>
      Chronic Stage
    </h4>
    <p style={{ fontSize: "15px", lineHeight: "1.7" }}>
      Without treatment, the abscess can become chronic — it sometimes drains but
      continues to do damage. This could lead to permanent tooth loss or more
      serious infections.
    </p>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "60px",
    backgroundColor: "#ffffff",
  }}
>
  {/* LEFT CONTENT */}
  <div style={{ flex: "0 0 50%" }}>
    <h2
      style={{
        fontSize: "30px",
        fontWeight: "700",
        color: "#0a1b5c",
        marginBottom: "12px",
      }}
    >
      Causes of a Tooth Abscess:
    </h2>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
        marginBottom: "16px",
      }}
    >
      A tooth abscess occurs when bacteria infect the tooth or the gums. This may
      be due to poor oral hygiene, untreated cavities or gum disease. If left
      untreated, in the long term, it can lead to a chronic abscess tooth. Common
      causes include:
    </p>

    <ul
      style={{
        paddingLeft: "20px",
        marginBottom: "18px",
        fontSize: "15px",
        lineHeight: "1.8",
        color: "#000",
        listStyleType: "disc",
        listStylePosition: "outside",
      }}
    >
      <li>Cavities or untreated tooth decay.</li>
      <li>Cracks or chips in the tooth that let bacteria inside.</li>
      <li>Periodontal infections or gum disease.</li>
      <li>Damage or injury to the tooth.</li>
      <li>Poor dental care and plaque accumulation.</li>
      <li>Dental procedures’ complications.</li>
    </ul>

    <p
      style={{
        fontSize: "15px",
        color: "#000",
        lineHeight: "1.7",
      }}
    >
      Early detection and treatment can easily address dental abscesses and prevent
      complications. Whether periapical abscesses or any other type, we offer the
      best treatment to restore oral health.
    </p>
  </div>

  {/* RIGHT IMAGE */}
  <div style={{ flex: "0 0 45%" }}>
    <img
      src={fortyfive} 
      alt="Dental abscess consultation"
      style={{
        maxwidth: "620%",
        height: "420px",
        objectFit: "cover",
        borderRadius: "20px",
      }}
    />
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    backgroundColor: "#f3f8fb",
  }}
>
  <div
    style={{
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "70px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: "0 0 48%" }}>
      <img
        src={fortysix}
        alt="Dental procedure"
        style={{
          maxwidth: "620%",
          height: "420px",
          objectFit: "cover",
          borderRadius: "20px",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: "0 0 50%" }}>
      <h2
        style={{
          fontSize: "30px",
          fontWeight: "700",
          color: "#0a1b5c",
          marginBottom: "14px",
        }}
      >
        Get Prepared:
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#000",
          marginBottom: "18px",
        }}
      >
        When you first have the tooth abscess treated, your dentist will want to
        know several important things so they can help you feel better.
      </p>

      <p
        style={{
          fontSize: "15px",
          fontWeight: "500",
          marginBottom: "12px",
        }}
      >
        Your dentist may ask:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "18px",
          listStyleType: "disc",
          listStylePosition: "outside",
        }}
      >
        <li>When did the pain or discomfort begin?</li>
        <li>Has there been swelling or cemented into your teeth?</li>
        <li>Do you have sensitivity to hot or cold?</li>
        <li>Have you experienced any sickness symptoms?</li>
        <li>
          Do you take any medications or get any other medical treatment?
        </li>
        <li>Did you have any trauma or previous treatments recently?</li>
        <li>
          Do you have a history of dental problems, like cavities or gum disease?
        </li>
      </ul>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.7",
          color: "#000",
        }}
      >
        Your dentist will depend on you to answer these questions truthfully to
        help him with an effective abscess tooth removal procedure.
      </p>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    padding: "80px 120px",
    backgroundColor: "#ffffff",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      fontWeight: "700",
      color: "#0a1b5c",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  {/* GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: "30px",
      rowGap: "20px",
    }}
  >
    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;01. What is the treatment for a tooth abscess?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;05. Can tooth abscesses be prevented?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;02. How can I treat a tooth abscess at home?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;06. Will abscesses go away after tooth extraction?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;03. Can you smoke with an abscessed tooth?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;07. Does the tooth abscess show on the X-ray?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;04. What causes a tooth abscess?</div>

    <div style={{
      backgroundColor: "#69bebc",
      padding: "18px 24px",
      height: "56px",
      display: "flex",
      alignItems: "center",
      fontSize: "15px",
      fontWeight: "500",
      cursor: "pointer",
    }}>+&nbsp;&nbsp;08. Can a dentist pull an abscessed tooth?</div>
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