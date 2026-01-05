import React from "react";
import { Link } from "react-router-dom";
import oral from "../../Images/oral.png";
import ninty from "../../Images/ninty.jpg";
import nintyone from "../../Images/nintyone.jpg";
import nintytwo from "../../Images/nintytwo.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";







export default function OralCancer() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_40%]"
      style={{ backgroundImage: `url(${oral})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      Oral Cancer Treatment in Khanewal
    </h1>
  </div>
</div>
    </div>

    {<Link to="/CommonIssues/oralcancer"></Link>}

<div className="w-85 px-40 py-16 align-center text-black">
  <p className="text-base leading-relaxed">
    We are one of the most professional and specialized clinics in diagnosing and treating oral cancer in Lahore. We respond using innovative technology and efficient solutions to patients with oral health issues. Our team of experts are committed to providing accurate diagnosis and treatment of oral cancer. As a result, the early-stage diagnosing and subsequent superior treatment options are well appreciated to reduce the recurrences among the patients.<br/>
You can get back on your feet and give your body the care it deserves with our oral cancer treatment. Smile makeover does matter – contact us today and get your brand-new beautiful smile.
  </p>
</div>

<div className=" px-2 py-2">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          What is Oral Cancer:
        </h2>

        <p className="text-gray-700 mb-0">
          Oral cancer is the uncontrolled growth of cells in any part of the mouth including the lips, tongue, cheeks, gums, and throat. It can develop silently and stay unrecognized when it begins its existence. Some of these symptoms are
        </p>

        <ul className="list-disc pl-10 space-y-0 text-gray-700 mb-8">
          <li>Sore mouth </li>
          <li>Strange lumps </li>
          <li>Difficulty in swallowing </li>
        </ul>

        <h3 className="text-2xl font-semibold text-[#0a0a5c] mb-4">
          Are You in Pain?
        </h3>

        <p className="text-gray-700">
          If you’re in suffering and require emergency <span className="text-[#0aa6ff] font-medium">dental services</span>, call us. We’ll schedule a quick appointment for you to see us.
        </p>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={ninty}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

<div className="bg-[#f5f9fc] px-2 py-8 mt-6">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

        {/* left Image */}
      <div>
        <img
          src={nintyone}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Symptoms of Oral Cancer
        </h2>

        <p className="text-gray-700 mb-4">
            Oral cancer may still develop silently and, if not diagnosed early enough, may not obvious any signs. It is important to detect the early warning signs for early treatment.
            Some common symptoms are:
        </p>

        <ul className="list-disc pl-10 space-y-0 text-gray-700 mb-8">
          <li>Persistent mouth ulcers </li>
          <li>Stinging, burning, or throbbing in the mouth, neck or jaw </li>
          <li>Lumps in the cheeks, gums, or throat </li>
          <li>Difficulty in chewing or swallowing food </li>
          <li>Hoarseness or voice changes </li>
          <li>Numbness in the tongue or lips </li>
          <li>Weight loss without reason </li>
          <li>Mouth bleeding </li>

        </ul>

    </div>
    </div>
  </div>
</div>

<div className=" px-2 py-2">
  <div className="max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">

      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
          Causes of Oral Cancer:
        </h2>

        <p className="text-gray-700 mb-0">
Lifestyle and environmental factors are the causes of oral cancer. Although everyone is vulnerable, some behaviors and circumstances put one at a higher risk. Common causes include:        </p>

        <ul className="list-disc pl-10 space-y-0 text-gray-700 mb-0">
          <li>Tobacco usage </li>
          <li>Excessive alcohol consumption </li>
          <li>Poor oral hygiene </li>
          <li>HPV (Human Papillomavirus) infection </li>
          <li>Family history of cancer </li>
          <li>Higher exposure to UV rays (lip cancer) </li>
          <li>Age, higher risk for people who are above 40 years </li>

        </ul>

        

        <p className="text-gray-700">
Consult SmileOn Dental Clinic for oral cancer treatment and find out more about oral cancer treatment costs. Contact us today for all your dental treatments, like crowns and <span className="text-[#0aa6ff] font-medium">dental implants</span>.        </p>
      </div>

      {/* Right Image */}
      <div>
        <img
          src={nintytwo}
          alt="Dental Consultation"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>

    </div>
  </div>
</div>

<div className=" max-w-7xl mx-auto px-2 py-2">
  <h1 className="text-3xl font-semibold text-[#0a0a5c] mb-4">
    Oral Cancer Stages
  </h1>

  <p className="text-gray-700 mb-6 max-w-4xl">
    It is, therefore, important to understand the oral cancer stages to check
    the severity of the condition and recommend the next immediate measure.
  </p>

  {/* Stage 0 */}
  <h2 className="text-lg font-semibold text-[#0a0a5c] mb-2">
    Stage 0 Mouth Cancer:
  </h2>
  <p className="text-gray-700 mb-6 max-w-4xl">
    Stage 0 is referred to as carcinoma in situ, and this is the lowest stage.
    Cancer is preceded by abnormal cells located in the lips lining or the oral
    cavity cells capable of turning into cancer.
  </p>

  {/* Stage I */}
  <h2 className="text-lg font-semibold text-[#0a0a5c] mb-2">
    Stage I (1) Mouth Cancer:
  </h2>
  <p className="text-gray-700 mb-6 max-w-4xl">
    Stage I refers to a very preliminary stage of cancer. The tumour is not more
    than two cm, and the cancer has not spread to the lymph nodes.
  </p>

  {/* Stage II */}
  <h2 className="text-lg font-semibold text-[#0a0a5c] mb-2">
    Stage II (2) Mouth Cancer:
  </h2>
  <p className="text-gray-700 mb-6 max-w-4xl">
    Stage II is practised when a tumour is greater than 2 centimetres but not
    greater than 4 centimetres. Lymph node involvement is also not present in
    Stage II cancer.
  </p>

  {/* Stage III */}
  <h2 className="text-lg font-semibold text-[#0a0a5c] mb-2">
    Stage III (3) Mouth Cancer:
  </h2>
  <p className="text-gray-700 mb-6 max-w-4xl">
    Stage III mouth cancer can refer to an extension of a cancer tumour. It is
    greater than 4cm or the inclusion of a lymph node in the neck.
  </p>

  {/* Stage IV */}
  <h2 className="text-lg font-semibold text-[#0a0a5c] mb-2">
    Stage IV (4) Mouth Cancer:
  </h2>
  <p className="text-gray-700 mb-3 max-w-4xl">
    Stage IV is the final stage of mouth cancer. It may be any size, but it has
    spread to:
  </p>

  <ul className="list-disc pl-6 text-gray-700 space-y-0 max-w-4xl">
    <li>Nearby tissue, such as the jaw or in a person’s mouth</li>
    <li>
      One larger than or equal to 3 cm in size and situated on the side of the
      neck
    </li>
    <li>Multiple lymph nodes of different sizes on the same side of the neck</li>
    <li>Goes beyond the mouth, such as the lungs</li>
  </ul>
</div>

<div className="max-w-7xl mx-auto px-2 py-8">
    <h2 className="text-3xl font-semibold text-center text-[#0a0a5c] mb-6">
    FAQs
  </h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
    
    {/* Left Column */}
    <div className="space-y-2 items-center">
      {[
        "How do you know if you have oral cancer?",
        "How does early oral cancer appear?",
        "How do you get oral cancer?",
        "How is oral cancer treated?",
      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#5CB5B5] px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-[#4a9a9a]"
        >
          <span className="text-2xl font-bold">+</span>
          <p className="font-medium leading-snug mt-3">
            {String(index + 1).padStart(2, "0")}. {item}
          </p>
        </div>
      ))}
    </div>

    {/* Right Column */}
    <div className="space-y-2">
      {[
        " Can you avoid oral cancer?",
        "What is the oral cancer treatment success rate?",
        "Can braces cause oral cancer?",
        "What is oral cavity cancer?",

      ].map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-4 bg-[#5CB5B5] px-1 py-1 cursor-pointer transition-all duration-300 hover:bg-[#4a9a9a] "
        >
          <span className="text-2xl font-bold">+</span>
          <p className="font-medium leading-snug mt-3">
            {String(index + 5).padStart(2, "0")}. {item}
          </p>
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