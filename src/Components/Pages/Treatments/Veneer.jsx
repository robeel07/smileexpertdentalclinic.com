import React from 'react'
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import Map from "./Map";
import Footer from "./Footer";

const Veneer = () => {

    const reasons = [
    "Even teeth size and shape",
    "Improve alignment",
    "Treat minor teeth gap",
    "Improve Cracked or chipped teeth",
    "Treat Fractured or worn teeth",

  ];


    const benefits = [
    
    "Improved appearance",
 "Stain resistance",
 "Durability and longevity",
 "Minimal invasive procedure",
 "Improved functionality",
 "Customizable and natural look",

  ]


  return (
    <div className='font-jost text-black bg-white'>
          {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2024/10/Untitled-design-3-150x150.png")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Dental Veneer Treatment in Lahore
                        </h1>
                    </div>
                </div>
            </div>
      

      <section className="py-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      
      <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">
        
        {/* RIGHT SIDE: Text Content (on Desktop) */}
        <div className="w-full lg:mr-32 ">
          <h1 className="text-xl md:text-4xl font-bold text-[#1e1b4b] mb-6 ">
            Do you want to feel more confident{' '}
            <span className="relative inline-block text-[#2db6fa]">
             smile more,
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
            or have better-looking teeth?
          </h1>

          <div className="text-sm md:text-base text-gray-600 space-y-6 mb-10 leading-loose">
            <p>
            Dental Veneers are a great choice for you. Veneer treatment is used to repair a variety of dental problems, including chipped, damaged, stained, and discolored teeth. They make your teeth look better and help you feel more confident by enhancing their size, color, and shape.
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
            src="https://smileon.pk/wp-content/uploads/2024/10/dental-veneers-in-pakistan-e1729744316998.webp" 
            alt="Smiling patient" 
            className="w-full   rounded-[2.5rem] shadow-2xl object-cover"
          />
        </motion.div>

      </div>
    </section>


    
        {/* Improve*/}
    
    
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
      Porcelain & Emax
        </p>
      </motion.div>
    
      {/* MAIN TITLE: Drops from Top to Bottom */}
      <motion.h2 
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-[#1e1b4b] text-3xl md:text-3xl lg:text-3xl font-semibold "
      >
Veneers Can Improve

      </motion.h2>
    
      {/* Description slides from Left to Right */}
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
      >
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto text-xs md:text-base">
         Our variety of veneer teeth is custom-made according to your needs and dental requirements! Explore what veneer treatment can do to get a beautiful smile.
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
Cosmetic dentistry including composite veneers and porcelain teeth veneers is not limited to cosmetics. They improve the overall appearance of the teeth and also have functional benefits. Dental veneers are perfect for making your smile more attractive and handling many more cosmetic issues in the process.

                </p>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
At SmileExpert, we have the best dentist for porcelain veneers. Veneers are used to fix the slight misalignments giving a cosmetic and functional addition to human dentition. Made of high-quality porcelain material our veneers are personalized in terms of color, size and shape to perfectly fit your tooth. It is possible with the right maintenance that veneers can last more than ten years giving you the smile that you have always wanted.


                </p>
                
                </motion.div>
              </div>
    
              {/* Right Side: Image */}
              <div className="w-full lg:w-1/2 order-2 lg:order-2">
                <div className="relative w-full max-w-[350px] md:max-w-[450px]">
                
                  <div className="absolute -inset-2 border-2 border-green-200/50 rounded-[2.5rem] pointer-events-none"></div>
                  <img 
                    src="https://smileon.pk/wp-content/uploads/2024/11/pexels-arvind-philomin-187831830-12934843-1536x1536-1.webp" 
                    alt="Dental implant procedure illustration" 
                    className="w-full h-auto rounded-[2.5rem] shadow-lg object-cover"
                  />
                </div>
              </div>
              
            </div>
          </div>
        </section>
    
{/* Benifits */}


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
             Porcelain & Emax
            </p>
          </motion.div>

          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mt-2"
          >
           Benefits of Dental Veneers
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto text-sm md:text-base"
          >
           Here are a few key benefits associated with choosing veneers:
          </motion.p>
        </div>
{/* Content Section: */}
<div className="flex flex-col lg:flex-row items-center justify-start ">

  
  {/* LEFT SIDE: Image - */}
  <motion.div 
    className="w-full lg:w-1/2 flex justify-center lg:justify-start"
    initial={{ x: -50, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
  >
<div className="relative w-full max-w-[350px] md:max-w-[440px] h-[420px] md:h-[520px]">

      <div className="absolute -inset-2 border-2 border-green-100/60 rounded-[2.5rem] pointer-events-none"></div>
      <img 
        src="https://smileon.pk/wp-content/uploads/2024/11/pexels-arvind-philomin-187831830-12712256-1536x1536-1.webp" 
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
    <div className="w-full max-w-full">
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
      
      <p className="text-gray-500 text-xs md:text-sm  pl-4 ">
        Cosmetic Dentistry veneers have many advantages in addition to providing extra features and design…. If unfortunately, your front teeth are severely damaged and cannot be saved or restored, a front teeth veneers treatment can also be used to replace those teeth.

      </p>
            <p className="text-gray-500 text-xs md:text-sm  pl-4 pr-4">
      Many benefits come with dental veneers and that makes them one of the best options when it comes to gaining the smile you want in the shortest time possible. These thin custom-made veneers resemble natural teeth and can easily match the color of your teeth.

      </p>
      <p className="text-gray-500 text-xs md:text-sm  pl-4 pr-4">
Veneers can quite literally fix anything from stains and cracks to spacing and small rotations in a matter of a few appointments and give a remarkable result. They will help you get the beautiful smile that you have always dreamt of.
      </p>

    </div>
  </motion.div>
  
</div>      </div>
    </section>

    <Map />
    <Footer />

    </div>
  )
}

export default Veneer




