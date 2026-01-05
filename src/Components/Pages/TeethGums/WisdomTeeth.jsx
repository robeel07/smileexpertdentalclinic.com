import React from "react";
import { Link } from "react-router-dom";
import wisdom from "../../Images/wisdom.png";
import one from "../../Images/one.jpg";
import two from "../../Images/two.jpg";
import three from "../../Images/three.jpg";
import four from "../../Images/four.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";


export default function WisdomTeeth() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${one})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Wisdom Teeth Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

      {<Link to="/TeethGums/wisdom-teeth"></Link>}
  

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

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 120px",
  }}
>
  {/* LEFT SIDE TEXT */}
  <div style={{ flex: 1 }}>
    <h2
      style={{
        fontSize: "32px",
        fontWeight: "700",
        color: "#0A2A7A",
        marginBottom: "20px",
      }}
    >
      Symptoms of wisdom teeth pain
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      During the eruption of wisdom teeth, discomfort or pain is common. Initial
      symptoms of wisdom teeth problems may include gum swelling, redness, and
      upper or lower jaw pain. Headaches or earaches may also arise with the
      eruption of wisdom teeth.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      The unease in the vicinity of the wisdom tooth can vary from mild
      tenderness to pulsating, continual agony that hinders you from opening
      your mouth and brushing your teeth.
    </p>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
      }}
    >
      Ignoring impacted or extremely painful wisdom teeth may lead to dental
      caries, cavities, bleeding gums, bad breath, difficulty swallowing, severe
      pain, and even the formation of cysts that can spread the infection to
      nearby areas.
    </p>
  </div>

  {/* RIGHT SIDE IMAGE */}
  <div style={{ flex: 1 }}>
    <img
      src={one} 
      alt="Wisdom Teeth Treatment"
      style={{
        width: "100%",
        height: "520px",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "40px 120px",
    backgroundColor: "#f1f7fd",
  }}
>
  {/* LEFT IMAGE */}
  <div style={{ flex: 1, paddingRight: "30px" }}>
    <img
      src={two}
      alt="Wisdom Teeth"
      style={{
        width: "100%",
        height: "520px",
        display: "flex",
        borderRadius: "20px",
        objectFit: "cover",
      }}
    />
  </div>

  {/* RIGHT CONTENT */}
  <div style={{ flex: 1, paddingLeft: "30px" }}>
    <h2
      style={{
        fontSize: "32px",
        color: "#0c1b3a",
        fontWeight: "700",
        marginBottom: "20px",
      }}
    >
      Causes of wisdom teeth pain
    </h2>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
        marginBottom: "20px",
      }}
    >
      Wisdom teeth are not linked to intelligence. Sometimes, they may need to
      be removed as they can cause annoyance and disruption. Most people have
      four wisdom teeth, but not everyone will get all four. Wisdom teeth often
      do not have sufficient space to grow properly when they erupt, resulting
      in impacted wisdom teeth. Consult with a dentist in Lahore who
      specialises in wisdom teeth treatment, such as SmileOn, is recommended.
      Effected wisdom teeth can lead to problems like:
    </p>

    <ul
      style={{
        fontSize: "18px",
        lineHeight: "1.8",
        color: "#333",
        marginLeft: "20px",
        marginBottom: "20px",
        listStyleType: "disc",
      }}
    >
      <li>Infection</li>
      <li>Decay</li>
      <li>Cysts</li>
      <li>Damage to surrounding teeth</li>
    </ul>

    <p
      style={{
        fontSize: "18px",
        lineHeight: "1.7",
        color: "#333",
      }}
    >
      Experiencing pain due to wisdom teeth is common, and there’s no need to
      be anxious. If you’re suffering from wisdom teeth pain, it’s advisable to
      seek treatment from SmileOn Lahore. Timely extraction can prevent the
      potentially severe complications associated with wisdom teeth.
    </p>
  </div>
</div>

<div style={{ textAlign: "center", padding: "60px 20px" }}>

  {/* Heading */}
  <h2
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0f2b62ff",
      marginBottom: "20px",
    }}
  >
    What Next
  </h2>

  {/* Paragraph */}
  <p
    style={{
      fontSize: "18px",
      lineHeight: "1.7",
      color: "#444",
      maxWidth: "1300px",
      margin: "0 auto 50px auto",
    }}
  >
    Review available treatments to learn about the next steps. We recommend
    scheduling a consultation with SmileOn Lahore, specialising in wisdom teeth
    treatment, to receive customised advice regarding your symptoms. You can
    specify that the painful tooth is wisdom and that a maxillofacial surgeon
    typically performs this treatment.
  </p>

  {/* Cards Container */}
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "40px",
      flexWrap: "wrap",
    }}
  >
    {/* CARD 1 */}
    <div
      style={{
        width: "330px",
        background: "#fff",
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0px 6px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={three}
        alt="Oral Surgeon"
        style={{ width: "200px", align: "center" }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0c1b3a",
        }}
      >
        Oral & Maxillofacial Surgeon
      </h3>
    </div>

    {/* CARD 2 */}
    <div
      style={{
        width: "330px",
        background: "#fff",
        padding: "40px 20px",
        borderRadius: "20px",
        boxShadow: "0px 6px 25px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <img
        src={four}
        alt="Wisdom Removal"
        style={{ width: "200px", marginBottom: "0px" }}
      />
      <h3
        style={{
          fontSize: "18px",
          fontWeight: "600",
          color: "#0c1b3a",
        }}
      >
        Wisdom Teeth Removal
      </h3>
    </div>
  </div>
</div>

<div style={{ textAlign: "center", padding: "60px 20px" }}>
  {/* Heading */}
  <h2
    style={{
      fontSize: "34px",
      fontWeight: "700",
      color: "#0c1b3a",
      marginBottom: "40px",
    }}
  >
    FAQs
  </h2>

  {/* FAQ GRID */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "20px",
      maxWidth: "1300px",
      margin: "0 auto",
    }}
  >

    {/* FAQ ITEM 1 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      01. How much does it cost to get wisdom teeth removed?
    </div>

    {/* FAQ ITEM 2 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      05. Does it hurt getting my wisdom teeth removed?
    </div>

    {/* FAQ ITEM 3 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      02. How do you make wisdom teeth pain go away?
    </div>

    {/* FAQ ITEM 4 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      06. What does wisdom teeth pain feel like?
    </div>

    {/* FAQ ITEM 5 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      03. Is it normal for wisdom teeth to hurt?
    </div>

    {/* FAQ ITEM 6 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      07. What are some home remedies for wisdom tooth pain?
    </div>

    {/* FAQ ITEM 7 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      04. How long does wisdom tooth pain last?
    </div>

    {/* FAQ ITEM 8 */}
    <div
      style={{
        background: "#69B8BB",
        padding: "20px 25px",
        borderRadius: "6px",
        display: "flex",
        alignItems: "center",
        gap: "15px",
        fontSize: "18px",
        fontWeight: "500",
        color: "#0c1b3a",
      }}
    >
      <span style={{ fontSize: "22px", fontWeight: "900" }}>+</span>
      08. I'm anxious about visiting the dentist.
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
    
  );
}