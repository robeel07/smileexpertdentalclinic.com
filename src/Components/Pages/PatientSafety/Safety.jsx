import React from "react";
import { Link } from "react-router-dom";
import safety from "../../Images/safety.jpg";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Safety() {
  return (
    <>
    <div
      className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
      style={{ backgroundImage: `url(${safety})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative h-full max-w-6xl px-4 flex items-end">
  <div className="pb-8 mt-6 w-full">
    <h2 className="text-white text-xl ml-40 mb-2">Patient Safety</h2>
    <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
      7X SAFETY
    </h1>
  </div>
</div>
    </div>

    {<Link to="/PatientSafety/safety"></Link>}

    <div className="max-w-7xl mx-auto px-6 py-14 text-black-900">
        <p>
         SmileExpert team Dental has been setting benchmarks to ensure the safety of its Patients, Doctors, Dental Assistants and other Clinical Staff. Sterilization and Safety has always been our top priority. After considering the Standard Operating Procedures and advisories issued by various regulatory bodies; we have established Enhanced Safety Protocols combatting 2019-nCoV referred to as 7X Safety @SmileExpert


        </p>
    </div>

    <div className="max-w-7xl mx-auto px-6 space-y-2">

  {/* ITEM 01 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 px-2 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      01
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Frequent Disinfection of all Surfaces & Rigorous Hand-Sanitizing Protocols in Place.
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Regular disinfection of all surfaces coming in human contact is ensured. Sample testing is done by an accredited external pathology lab and ‘Free from Infection’ certificates are maintained in each clinic.
      </p>
    </div>
  </div>

  {/* ITEM 02 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      02
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        4-Step Sterilisation for Instruments and Hand Rotors
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Adherence to SmileOn Dental’s trademarked process to ensure a 100% sterile and safe environment for patients and staff.
      </p>
    </div>
  </div>

  {/* ITEM 03 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      03
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Complete Global Standard PPE for Dentists and Dental Assistants
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        Our policy ensures use of best in class & global standard PPE’s for all dentists and dental assistants to ensure that there is no cross-contamination between patients, thereby ensuring patient and staff safety.
      </p>
    </div>
  </div>

  {/* ITEM 04 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      04
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Responsible Bio-Medical Waste Disposal
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        SmileOn team has always worked with Government regulations to dispose of biomedical waste. The new policy ensures that all extra PPE material should be disposed of as per WHO guidelines.
      </p>
    </div>
  </div>

  {/* ITEM 05 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      05
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Digital AI-Enabled Proprietary software for complete medical records
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        We keep all the records like x-rays, before & after photos the entire journey of the patient starting from their first visit on the cloud. This is to ensure high-quality treatment and patient safety.
      </p>
    </div>
  </div>

  {/* ITEM 06 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      06
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Periodic Clinical Audits Ensuring 100% Compliance of Standards and Protocols
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        The bi-monthly in clinic audits done by Dental Professionals help to maintain the quality of all our clinics and they make sure that the protocols are being followed.
      </p>
    </div>
  </div>

  {/* ITEM 07 */}
  <div className="flex gap-6">
    <div className="w-16 h-16 flex flex-shrink-0 items-center justify-center bg-blue-400 text-white text-xl font-bold">
      07
    </div>
    <div>
      <h3 className="font-semibold text-lg text-gray-900">
        Daily Clinic Fumigation
      </h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">
        SmileOn is fumigated fortnightly to ensure the elimination of all forms of microbial life including viruses, fungi, bacteria, etc.
      </p>
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