import React from 'react'
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import ProcedureTimeline from './ProcedureTimeline';
import DentalFAQ from './DentalFAQ';
import Why from "../../Images/YImplants.jpg";
import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

const Implants2 = () => {
    const reasons = [
    "99% Success rate.",
    "International certified Implantologis",
    "Minimally invasive and less traumatic surgery",
    "Well-structured cost policy with affordable dental implants prices",
    "5000+ Implants Placed",

  ];

  const benefits = [
    
    "A perfect, long-term solution for patients with tooth/teeth loss",
 "Use in reconstructing a mouth's anatomy and functionality",
 "Prevent bone loss, maintain the facial structure",
 "Improves speaking ability and chewing capability.",
 "Requires less maintenance compared to other types of teeth replacement.",
 "Will boost your morale and hence your self-esteem back",

  ]


const implantSteps = [
    {
      title: "Consultation",
      description: "It starts with an initial appointment, during which our dental implant specialists examine your dental condition, discuss your expectations, and assess your implant eligibility with an X-ray and possibly a 3D scan."
    },
    {
      title: "Implant Placement",
      description: "In this process, a small screw is placed where a natural tooth will be, thus assuming the root of the tooth in the jaw bone. The area is anesthetized for the patient."
    },
    {
      title: "Support Placement",
      description: "After that, the implant is fixed to the bone, and a small connector is placed on it. Some may need further healing before the final restoration is placed on the tooth."
    },
    {
      title: "Final Restoration",
      description: "Once the gum has healed, the permanent replacement is screwed to the abutment to make your bright smile. Our specialists make sure that the last artificial restoration looks like your other natural teeth."
    }
  ];

  const implantQuestions = [
    { 
      question: "Is a dental implant permanent fix for toothlessness?", 
      answer: {
  text: "Indeed, dental implants can be called a permanent solution to fill in the gaps in the teeth row. They are considered the most effective option among all the means for such a problem. It gives installation stability when put in the right manner."
}
    },
     { 
      question: "Can dental implants be useful in correcting overbite?", 
      answer: {
  text: "While dental implants do not correct an overbite, some dental implants can be a treatment plan that could entail services from an orthodontist."
} 
    },
     { 
      question: "What material is used to make dental implants?", 
      answer: {
  text: "These are primarily made of titanium as they can remain compatible with the jaw bone. Plus, they have a stable structure"
} 
    },
     { 
      question: "Why does it take a person so much time to receive a dental implant?", 
      answer: {
  text: "The last stage of implant placement could be challenging because the process takes some time to heal. It creates a strong attachment to the recipient's jawbone giving it stability."
} 
    },
     { 
      question: "Is it possible to wear braces when I already have dental implants?", 
      answer: {
  text: "Yes, people wearing dental implants can wear braces. But it's better to talk with your dentist first."
} 
    },
     { 
      question: "Is a dental implant procedure painful?", 
      answer: {
  text: "The majority of the patients have little to no pain that they can feel during a dental implant appointment. The client may, however, experience some measure of pain, inflammation, and redness in the area that was operated on. All things considered, there is likely to be slight pressure when on the move during the recovery period"
} 
    },
     { 
      question: "How much does the dental implant cost in Lahore Pakistan?", 
      answer: {
  text: "Indeed, the price of dental implants can differ depending on depending on factors i.e number of implants required , brand of implant chosen , and whether bone graft is required (or not). Price of dental implants in Lahore can ranges from PKR 50,000 to 300,000 PKR."
} 
    },
     { 
      question: "What is the stability of the procedure?", 
      answer: {
  text: "This treatment is designed to be a long-lasting solution for missing teeth. But at the same time, it has to be mentioned that certain basics may influence the lifespan of such treatment– these are the general health of the patient, as well as the patient's lifestyle."
} 
    },
     { 
      question: "Are dental implants safe?", 
      answer: {
  text: "Indeed, this treatment is reliable and rather safe for most patients who need a tooth replacement procedure. The procedures are normally done by experienced dentists who observe standards and policies to avoid patient complications."
} 
    },
     { 
      question: "How many weeks does this surgery take to heal?", 
      answer: {
  text: "Healing time may differ due to one's general health, the implant's location, and the bone's quality to be implanted. Nonetheless, based on other people's experience, it may take weeks to months to become completely secure and connected to the jawbone."
} 
    },
     { 
      question: "How much dental implant treatment costs in Pakistan?", 
  answer: {
  text: "In Pakistan, the price of implant depends upon the two factors.",
  points: [
    "implant chosen as there are variety of implant qualities available. ",
    "Experienced Dentist/Implantologist "
  ]
}   
    },
     { 
      question: "What are the 3 types of dental implants?", 
   
   answer: {
  text: "Three main types of teeth implants are endosteal, subperiosteal, and zygomatic implants."
} 
    },
    { 
      question: "How long do dental implants last?", 
   answer: {
  text: "Three main types of teeth implants are endosteal, subperiosteal, and zygomatic implants."
} 
    }
  ];




  return (

    <div className='font-jost text-black bg-white'>
        
         {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2024/11/images.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative h-full max-w-6xl px-4 flex items-end">
                    <div className="pb-8 mt-6 w-full">
                        <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
                        <h1 className="text-white text-3xl md:text-5xl ml-40 ">
                            Dental Implant Treatment Lahore

                        </h1>
                    </div>
                </div>
            </div>
            
            <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      {/* lg:flex-row-reverse moves the second child (image) to the start 
        and the first child (text) to the end on large screens.
      */}
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        
        {/* RIGHT SIDE: Text Content (on Desktop) */}
        <div className="w-full lg:mr-32 ">
          <h1 className="text-xl md:text-4xl font-bold text-[#1e1b4b] mb-6 ">
            Has it been on your wish list to regain{' '}
            <span className="relative inline-block text-[#2db6fa]">
              confidence
              <motion.span
                initial={{ width: 0 }}
                animate={{ width: ["0%", "100%", "100%", "0%"] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  times: [0, 0.4, 0.8, 1],
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-0 left-0 h-1 bg-[#1e1b4b] rounded-full"
              />
            </span>{' '}
            in your smile?
          </h1>

          <div className="text-sm md:text-base text-gray-600 space-y-6 mb-10 leading-loose">
            <p>
            You should undergo dental implant treatment. Now, you may be thinking, what are dental implants? They are a simple surgical procedure to transplant an artificial tooth to fill the gap in the jaw area. They are a permanent and long-term answer to correcting the functionality and aesthetics of your mouth. SmileOn is the best dental implant clinic that provides quality services to patients. Whether a single tooth implant or complete mouth rehabilitation, our dental implant specialist will offer the best treatment, comfort, and quality outcome.
</p>
          </div>

          <button className="bg-[#2db6fa] hover:bg-[#25a3e0] text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all transform hover:scale-105">
            Book Appointment
          </button>
        </div>

        {/* LEFT SIDE: Animated Image (on Desktop) */}
        <motion.div 
          className="w-1/1 h-full flex justify-center lg:justify-start"
          initial={{ x: -200, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <img 
            src="https://smileon.pk/wp-content/uploads/2024/11/dental-implants-in-Lahore.webp" 
            alt="Smiling patient" 
            className="w-full   rounded-[2.5rem] shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>

    {/* When do u need implants */}


    <section className="bg-[#f0f9ff] py-16 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 overflow-hidden">
  {/* Subtitle and Description slide from Left to Right */}
  <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <p className="text-[#2db6fa] font-bold text-xs md:text-xs uppercase  mb-0">
      Get Long-Lasting and Neutral Shining Teeth
    </p>
  </motion.div>

  {/* MAIN TITLE: Drops from Top to Bottom */}
  <motion.h2 
    initial={{ y: -100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
    className="text-[#1e1b4b] text-3xl md:text-3xl lg:text-3xl font-semibold mt-5"
  >
    When Do You Need Dental Implants?
  </motion.h2>

  {/* Description slides from Left to Right */}
  <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
  >
    <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-xs md:text-base">
      Dental implants are necessary for anyone interested in restoring missing teeth and functionality 
      of the teeth. Other reasons may include:
    </p>
  </motion.div>
</div>

        {/* Content Section: List on Left, Image on Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-30">
          
          {/* Left Side: List & Description */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <ul className="space-y-4 mb-8">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-brandAccent mt-1 shrink-0 " size={20} />
                  <span className="text-[#1e1b4b] font-bold text-sm md:text-base">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
              <motion.div
    initial={{ x: -200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}>
            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
              The most reliable clinic for dental implants in Lahore provides safe, permanent 
              solutions for both implants scheduled in advance and emergency dental implants. 
              Come to us for one of the best dental services to regain your killer smile!
            </p></motion.div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="relative w-full max-w-[350px] md:max-w-[450px]">
            
              <div className="absolute -inset-2 border-2 border-green-200/50 rounded-[2.5rem] pointer-events-none"></div>
              <img 
                src="https://smileon.pk/wp-content/uploads/2024/11/Need-Dental-Implants-e1731413028718.webp" 
                alt="Dental implant procedure illustration" 
                className="w-full h-auto rounded-[2.5rem] shadow-lg object-cover"
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>

{/* Benifits  */}
<section className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12 overflow-hidden">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-[#2db6fa] font-bold text-xs uppercase tracking-wider mb-2">
              Long-Lasting Solution for Missing Teeth
            </p>
          </motion.div>

          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mt-2"
          >
            Benefits of Dental Implants
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base"
          >
            There are a lot of benefits. Here are the most common benefits of this treatment:
          </motion.p>
        </div>
{/* Content Section: Changed gap to 4 (16px) for a tiny, professional sliver of space */}
<div className="flex flex-col lg:flex-row items-center justify-center lg:gap-4">
  
  {/* LEFT SIDE: Image - Pinned to the right of its container */}
  <motion.div 
    className="w-full lg:w-1/2 flex justify-center lg:justify-end"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="relative w-full max-w-[350px] md:max-w-[440px]">
      <div className="absolute -inset-2 border-2 border-green-100/60 rounded-[2.5rem] pointer-events-none"></div>
      <img 
        src="https://smileon.pk/wp-content/uploads/2024/11/pexels-fr3nks-287227-1.webp" 
        alt="Dental Benefits" 
        className="w-full h-full rounded-[2.5rem] shadow-xl object-cover"
      />
    </div>
  </motion.div>

  {/* RIGHT SIDE: Content - Pinned to the left of its container */}
  <motion.div 
    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
    initial={{ x: 50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
    <div className="w-full max-w-[500px]"> {/* Contrains text width so it doesn't drift away */}
      <ul className="space-y-4 mb-8">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle2 className="text-[#2db6fa] mt-1 shrink-0" size={20} />
            <span className="text-[#1e1b4b] font-medium text-sm md:text-base leading-tight">
              {benefit}
            </span>
          </li>
        ))}
      </ul>
      
      <p className="text-gray-500 text-xs md:text-sm  pl-4 pr-4">
        At SmileOn, we assure you that our treatments provide better and quality solutions.
      </p>
    </div>
  </motion.div>
  
</div>      </div>
    </section>


{/* Why */}

<section className="bg-black py-12 px-4 md:px-10 lg:px-20 w-full">
  <div className="max-w-6xl mx-auto bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden border-b-4 border-r-4 border-[#2db6fa]">
    
    {/* Title and Intro */}
    <div className="text-center mb-10">
      <h2 className="text-[#1e1b4b] text-2xl md:text-4xl font-bold mb-6">
        Why SmileOn for Dental Implants?
      </h2>
      <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-4xl mx-auto font-medium">
        We Consider Ourselves The Best Clinic For A Dental Implant In Lahore, Pakistan. 
        Our Dental Implant Specialist Is Foreign Qualified And More Than 17 Years Of Experience.
      </p>
    </div>

    {/* Content Row: Now using items-stretch to ensure equal height */}
    <div className="flex flex-col lg:flex-row items-stretch justify-center gap-6 lg:gap-8">
      
      {/* LEFT SIDE: List Box */}
      <div className="w-full lg:w-1/2 bg-slate-50 rounded-[1.5rem] p-8 border border-gray-100 flex flex-col justify-center min-h-[400px] lg:min-h-[350px]">
        <p className="text-[#2db6fa] font-bold text-base italic mb-6">
          Reasons to choose SmileOn:
        </p>
        <ul className="space-y-5">
          {reasons.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <CheckCircle2 className="text-[#2db6fa] shrink-0" size={20} />
              <span className="text-[#1e1b4b] font-bold text-sm">
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* RIGHT SIDE: Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative w-full h-full">
          {/* Decorative Border */}
          <div className="absolute -inset-2 border-2 border-green-200/50 rounded-[2.5rem] pointer-events-none"></div>
          
          <img 
            src={Why} 
            alt="Dental implant procedure illustration" 
            className="w-full h-[200px] lg:h-[350px] rounded-[1.5rem] shadow-lg object-cover"
          />
        </div>
      </div>

    </div>
  </div>
</section>


<ProcedureTimeline 
        title="Procedure For Getting Dental Implant Treatment"
        subtitle="Discover More About Our Cosmetic Dental Implant Procedure"
        steps={implantSteps}
      />

{/* Transformation */}

<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f0f9ff] w-full">
  <div className="max-w-7xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-[#1e1b4b] text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
        Dental Implant Transformations
      </h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
        Dental Implant Are Designed To Improve The Appearance Of Your Teeth And Create A More Aesthetically Pleasing Smile.
      </p>
    </div>

    {/* Transformations Card */}
    <div className="bg-white p-4 md:p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[
          { before: "https://smileon.pk/wp-content/uploads/2024/11/3d-implant-case-before-e1731414512848.webp", after: "https://smileon.pk/wp-content/uploads/2024/11/3d-implant-case-after-e1731414598600.webp" },
          { before: "http://smileon.pk/wp-content/uploads/2024/11/implants-all-on-six-before.webp", after: "https://smileon.pk/wp-content/uploads/2024/10/2-After.webp" },
          { before: "https://smileon.pk/wp-content/uploads/2024/11/veneers-case-before-e1731415221418.webp", after: "https://smileon.pk/wp-content/uploads/2024/11/veneers-case-after-e1731415759639.webp" }
          
        ].map((item, index) => (
          <div key={index} className="overflow-hidden  shadow-lg border border-gray-100">
            <ReactCompareSlider
itemOne={
  <div className="relative w-full h-full">
    <ReactCompareSliderImage src={item.before} alt="Before" />
    <span
      className="
        absolute inset-y-0 left-6
        flex items-center
        text-white text-xl md:text-2xl font-bold
        pointer-events-none
        [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]
      "
    >
      Before
    </span>
  </div>
}

itemTwo={
  <div className="relative w-full h-full">
    <ReactCompareSliderImage src={item.after} alt="After" />
    
    <span
      className="
        absolute inset-y-0 right-6
        flex items-center
        text-white text-xl md:text-2xl font-bold
        pointer-events-none
        [text-shadow:0_2px_10px_rgba(0,0,0,0.4)]
      "
    >
      After
    </span>
  </div>
}

              handle={
                <div className="w-1 h-full bg-white relative flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-white/20  border-2 border-white shadow-lg 
                    flex items-center justify-center cursor-grab active:cursor-grabbing">
                    <div className="flex items-center justify-center  text-white text-xl">
                      <FontAwesomeIcon icon={faCaretLeft}  />
                      <FontAwesomeIcon icon={faCaretRight}  />
                    </div>
                  </div>
                </div>
              }
              style={{ width: '100%', height: '100%', aspectRatio: '4/3' }}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
</section>


<DentalFAQ 
      title="FAQs"
      subtitle="Here are frequently asked questions about dental implants:"
      sideImage="https://smileon.pk/wp-content/uploads/2024/10/pexels-leeloothefirst-5428835-scaled-e1728899133802-1536x1536.jpg"
      questions={implantQuestions}
    />

    </div>
  )
}

export default Implants2
