import React from "react";
import { Link } from "react-router-dom";
import twentythree from "../../Images/twentythree.jpg";
import twentyfour from "../../Images/twentyfour.jpg";
import twentyfive from "../../Images/twentyfive.jpg";
import twentyeight from "../../Images/twentyeight.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";



export default function TeethGrinding() {
  return (
    <>
     <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${twentythree})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Teeth Grinding Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/TeethGums/teethgrinding"></Link>}


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
    Bruxism, or teeth grinding, is the act of clenching, grinding, or gnashing your teeth. It can range from barely bothersome to highly uncomfortable. Timely treatment may be necessary to prevent permanent damage. Awake bruxism occurs when you unknowingly clench your teeth while awake, while sleep bruxism happens during sleep. Minor teeth grinding may not require treatment, but prolonged grinding can lead to significant tooth damage. Long-term bruxism can result in migraines, jaw problems, tooth wear and fractures.
  </p>
</div>

<div
  style={{
    width: "100%",
    background: "#F4F9FC",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        When to See a Dentist:
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        If in doubt, check it out. Book an appointment to see a dentist as soon
        as possible if:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        <li>You have pain that lasts longer than a day or two</li>
        <li>Your pain is severe or starts to become unbearable</li>
        <li>
          You have a fever, earache or pain when you open your mouth wide
        </li>
        <li>You have chipped or loose teeth</li>
        <li>You are concerned about teeth clenching or grinding</li>
      </ul>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
        }}
      >
        Contact us immediately if you're in pain and require emergency dental
        care. We'll prioritise your urgent appointment to provide prompt
        assistance.
      </p>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: 1, textAlign: "right" }}>
      <img
        src={twentyfour}
        alt="Dentist Consultation"
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
    background: "#F4F9FC",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT IMAGE */}
    <div style={{ flex: 1 }}>
      <img
        src={twentyfive}
        alt="Teeth Grinding Symptoms"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "20px",
          objectFit: "cover",
        }}
      />
    </div>

    {/* RIGHT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Symptoms of Teeth Grinding
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        If your condition is mild, you may not be aware that you are grinding
        your teeth. It might be that a friend or family member notices it first.
        Or perhaps symptoms of bruxism are seen by your dentist during a routine
        appointment. Some signs and symptoms that you may have bruxism include:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.9",
        }}
      >
        <li>Clenching or grinding your teeth, either awake or asleep</li>
        <li>
          <span style={{ color: "#00AEEF" }}>
            Fractured or chipped teeth
          </span>
        </li>
        <li>Tooth loss</li>
        <li>
          Flattened teeth or{" "}
          <span style={{ color: "#00AEEF" }}>worn teeth</span> and enamel,
          exposing deeper layers of your tooth
        </li>
        <li>Increased tooth pain or sensitive teeth</li>
        <li>
          Tired or tight jaw muscles, or a locked jaw that won’t open or close
          completely
        </li>
        <li>Pain or soreness in your jaw, neck, face or ears</li>
        <li>Headaches</li>
        <li>Damage from chewing on the inside of your cheek</li>
        <li>Disrupted sleep</li>
      </ul>
    </div>
  </div>
</div>

<div
  style={{
    width: "100%",
    background: "#FFFFFF",
    padding: "80px 0",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      gap: "60px",
      padding: "0 40px",
    }}
  >
    {/* LEFT CONTENT */}
    <div style={{ flex: 1 }}>
      <h2
        style={{
          color: "#0B1C6D",
          fontSize: "32px",
          fontWeight: "600",
          marginBottom: "15px",
        }}
      >
        Causes of Teeth Grinding
      </h2>

      <p
        style={{
          fontSize: "15px",
          lineHeight: "1.8",
          marginBottom: "15px",
        }}
      >
        There are a number of reasons bruxism can occur. It’s sometimes caused by
        excess stress or anxiety. Heightened emotions such as anger, frustration
        or tension can also trigger it. Teeth grinding may also develop as a
        coping strategy during periods of concentration. If you have sleep
        bruxism, it is more likely to be caused by an abnormal bite,{" "}
        <span style={{ color: "#00AEEF" }}>missing teeth</span>, or{" "}
        <span style={{ color: "#00AEEF" }}>crooked teeth</span>. Or it might be
        due to a sleep disorder such as sleep apnoea. There are some risk factors
        that may increase your chance of developing bruxism. These include:
      </p>

      <ul
        style={{
          paddingLeft: "20px",
          fontSize: "15px",
          lineHeight: "1.9",
        }}
      >
        <li>Increased stress, anxiety or frustration</li>
        <li>
          Age – bruxism is common in young children and generally lessens by
          adulthood
        </li>
        <li>
          Personality type – being aggressive, competitive or hyperactive may
          increase your risk
        </li>
        <li>
          Medications – it may be an uncommon side effect of some medications
          including some antidepressants
        </li>
        <li>Family history – sleep bruxism often occurs in families</li>
        <li>
          Other disorders – bruxism can be associated with some mental health and
          medical disorders including Parkinson’s disease, dementia,
          gastroesophageal reflux disorder (GERD), epilepsy, night terrors, and
          sleep-related disorders such as{" "}
          <span style={{ color: "#00AEEF" }}>sleep apnoea</span>
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <div style={{ flex: 1 }}>
      <img
        src={twentyfive}
        alt="Dental checkup"
        style={{
          width: "100%",
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
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT IMAGE */}
        <div style={{ flex: "1" }}>
          <img
            src={twentyeight}
            alt="Dental Treatment"
            style={{
              width: "100%",
              height: "500px",
              marginTop: "120px",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* RIGHT CONTENT */}
        <div style={{ flex: "1.2" }}>
          <h2
            style={{
              color: "#0a1c74",
              fontSize: "28px",
              marginBottom: "10px",
            }}
          >
            Related Treatments
          </h2>

          <p style={{ marginBottom: "15px", lineHeight: "1.7" }}>
            Your dentist will scrutinise your mouth to diagnose the cause of your
            pain or condition. You may need one of these standard treatments.
          </p>

          <ul style={{ marginLeft: "20px", marginBottom: "30px" }}>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>Filling</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>Root canal</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>TMJ</li>
            <li style={{ marginBottom: "8px", color: "#00a8e8" }}>
              Teeth Extraction
            </li>
          </ul>

          <h2
            style={{
              color: "#0a1c74",
              fontSize: "26px",
              marginBottom: "10px",
            }}
          >
            Get Prepared
          </h2>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            When scheduling a check-up or treatment at our dental practices,
            efficiency is important. It’s beneficial to anticipate the
            information your dentist will require for diagnosis and treatment.
          </p>

          <p style={{ lineHeight: "1.7", marginBottom: "15px" }}>
            Typically, your dentist will inquire about your medical history and
            perform a comprehensive examination of your oral and facial areas.
            This includes the mouth, teeth, gums, jaw, tongue, throat, sinuses,
            ears, nose, and neck. Depending on the suspected cause of your issue,
            an X-ray may also be necessary.
          </p>

          <ul style={{ marginLeft: "20px", marginBottom: "20px" }}>
            <li>Are you experiencing any pain?</li>
            <li>How severe is the pain?</li>
            <li>Where do you feel the pain?</li>
            <li>What is your regular dental routine?</li>
            <li>What is your diet like?</li>
            <li>Are you experiencing any extra stress?</li>
            <li>What is your lifestyle like?</li>
            <li>Do you suffer from anxiety?</li>
          </ul>

          {/* FINAL TEXT */}
          <p
            style={{
              fontSize: "15px",
              lineHeight: "1.8",
              marginTop: "20px",
            }}
          >
            Before your appointment, consider your responses to these questions.
            Being prepared can expedite the diagnosis.
          </p>
        </div>
      </div>
    </div>

    <div
  style={{
    width: "100%",
    padding: "80px 60px",
    boxSizing: "border-box",
    background: "#ffffff",
  }}
>
  {/* HEADING */}
  <h2
    style={{
      textAlign: "center",
      fontSize: "32px",
      color: "#0a1c74",
      marginBottom: "50px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ GRID */}
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "25px 30px",
    }}
  >
    {/* LEFT COLUMN */}
    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>01. How much does it cost to treat bruxism?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>05. How do you treat bruxism caused by tooth problems?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>02. Is teeth grinding common?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>06. I’m anxious about visiting the dentist.</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>03. What causes teeth grinding?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>07. Can bruxism be prevented?</span>
    </div>

    <div
      style={{
        background: "#67bcbc",
        padding: "18px 25px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "bold" }}>+</span>
      <span>04. How can I stop grinding my teeth?</span>
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