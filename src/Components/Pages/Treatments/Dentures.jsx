import React from 'react'
import { Link } from "react-router-dom";
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";





const Dentures = () => {

const polishingFAQs = [
{ id: 1, question: "01. How much do dentures cost?", answer: "The cost of dentures can depend on a few different factors. The price may depend on the scale of the treatment and the condition of your teeth. Each situation can be unique. We recommend booking a consultation with a dentist. At the consultation appointment, they will examine your teeth and be able to give you an estimate of the price." },
        { id: 2, question: "02. Does it hurt to get dentures?", answer: "Our experienced dental team are experts at providing you the best care when getting your dentures placed. Making sure you feel comfortable during and after the procedure is a high priority. However, it’s normal to experience some pain and discomfort with your dentures, particularly after the procedure as it takes time to get used to your new dentures. Pain and swelling can be common following extraction and fitting. The pain will go away once the healing is complete and you have adjusted to your dentures. We recommend regular visits to the dentist following the fitting, as you adjust to your new dentures." },
        { id: 3, question: "03. Is it difficult to eat once you get dentures?", answer: "It will usually take you a bit of time to adjust to your new dentures and eating may be a bit uncomfortable for a few weeks. We recommend eating soft foods and small pieces of food to start off with. Once you become used to your new dentures you will be able to return to your normal diet. You should continue to be careful when eating hard, hot or sticky foods." },
        { id: 4, question: "04. Is it possible to repair cracked dentures?", answer: "Yes, cracked dentures can be repaired if the dentist uses the right tools and materials to fix it and make it fit as new again." },
        { id: 5, question: "05. How many teeth are there in a set of dentures?", answer: "A complete denture has up to 28 teeth; a partial denture will have as many teeth as you require." },
        { id: 6, question: "06. What is the best way to clean dentures?", answer: "It’s important to keep your dentures clean as they’re prone to stains, plaque and tartar build-up. Just like brushing your teeth cleaning dentures is an easy and necessary process. A recommended cleaning process for full or partial dentures involves, using a denture-cleaning tablet in warm water (make sure it’s not too hot and enough to cover the denture). The next step is to use a soft brush and gently brush your dentures just like you would brush your teeth. Once you’ve brushed your dentures, rinse it thoroughly underwater." },
        {
  id: 7,
  question: "07. Appointment overview",
  answer: [
    "At least 4 appointments are needed for dentures",
    "At the first consultation visit your dentist will examine your teeth and make a recommendation. You will also have an impression taken of your mouth",
    "If you need teeth extracted your dentist will remove your teeth and fit your dentures immediately using immediate dentures",
    "After the fitting of your dentures you will need to have another appointment during the first week so your dentist can review the healing process",
    "You will usually need your dentures adjusted within the first 3 to 6 months of having them fitted.",
    "You will usually need your dentures re-lined within the first 6 to 12 months",
    "Further appointments may be needed if you have any problems or issues with your dentures."
  ]
}
,
        { id: 8, question: "08. What does denture breath smell like?", answer: "Denture breath may have a foul smell because of the build-up of hardened deposits such as plaque, bacteria, or debris from food particles on the dentures if not cleaned well." },
        { id: 9, question: "09. How to prevent dry mouth when you have dentures?", answer: "Drinking fluids and using mouth sprays can help to keep your mouth hydrated. However, you should also clean your dentures daily and visit your dentist for more information." },
        { id: 10, question: "10. What are implant supported dentures?", answer: "Dentures supported by implants that can be fixed to dental implants, thus enjoying better security and comfort versus standard dentures." },
        { id: 11, question: "11. What are dentures made of?", answer: "Dentures can be made from materials such as acrylic resin, porcelain or metal and acrylic due to their strength and appearance." },
];

  return (
    <div className='font-jost'>
{/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Dentures.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Dentures
                        </h1>
                    </div>
                </div>
            </div>

                    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      <div className="text-left text-sm md:text-base text-black mb-1">                       {/* --- Top Text --- */}
      <p className="mb-0">
    If you want your smile back, we have custom-made denture teeth for you. 
      </p>
      <p className="mb-0">
        In one way or another, dentures have helped people for many years, and they have come a long way from that. These are not the same removable artificial teeth that used to be at your side table next to a glass of water. Dentures may indeed be fixed in place using {" "}
        <Link 
        to="/polish" className="text-cyan-600 font-bold hover:text-blue-800">dental implants
        </Link>. 
        They are comfortable and allow you to eat and taste your meal better!
      </p>


       <section className="max-w-full mx-auto px-6 py-12 md:py-20  mb-0">
             <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
               
               {/* Text Content */}
               <div className="w-full lg:w-1/2">
                 <h2 className="text-4xl   font-bold text-[#1e1b4b] mb-6">
                What are Dentures?
                 </h2>
                 <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                Dentures are specialized dental prosthetics designed to help you regain your smile if you have lost some teeth. <span className='font-bold'>Key Features of Dentures</span>:
                 </p>
                 <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
                   <li>Custom Fit</li>
                   <li>Natural Appearance</li>
                   <li>Restored Function</li>
                   <li>Durable Materials</li>
                    <li>Easy Maintenance</li>
     
                 </ul>
                 <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  They are considered both a necessity and a luxury, helping satisfy your hunger, help you speak properly, and show off a stunning smile. No matter how many teeth you lack, at SmileOn we are offering partial dentures as well as total teeth replacement. Come to SmileOn for complete
                   <Link 
        to="/polish" className="text-cyan-600 font-bold hover:text-blue-800"> denture problems
        </Link> and solutions, getting your dazzling smile today!

                 </p>
               </div>
     
               {/* Image: Wide & Responsive Height */}
               <div className="w-full lg:w-1/2">
                 <img 
                   src="https://smileon.pk/wp-content/uploads/2025/09/What-are-Dentures-2048x1365.jpg"
                   alt="Dental procedure" 
                   className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
                 />
               </div>
             </div>
           </section>

      </div>
     </section>

 {/* Advantages */}
<section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-[#28D2EA1A]">
        {/* flex-col-reverse ensures Text stays on top when stacked on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 xl:gap-20">
          
            {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/Advantages-of-Dentures-2048x1366.jpg"
              alt="Hand using dental tools" 
              className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl  text-[#1e1b4b] mb-6">
            Advantages of Dentures
            </h2>
            <div className="text-sm md:text-base text-black mb-8 ">
            <p className='m-0'>Removable partial dentures and complete teeth dentures help people with many advantages if they want to have beautiful and functional teeth again. <span className='font-extrabold'>Advantages of teeth dentures</span></p>
            
                 <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-0">
                   <li>Improved Teeth Appearance</li>
                   <li>Better Functionality</li>
                   <li>Affordable Option</li>
                   <li>Custom Fit</li>
                    <li>Convenience</li>
                 </ul>
                 <p className="text-sm md:text-base text-black mb-8 ">If you are looking for a denture replacement near me, then look further than SmileOn. Easily accessible dental clinic providing quality services to your whole family. Whether you need bottom teeth dentures or partial dentures, we are at your service. Are you curious about the dentures price in Pakistan? We give the best quality denture teeth at a reasonable price. Our prices depend on the treatment situation.</p>

</div>

            
          </div>
        
        </div>
      </section>


      {/* Injuries */}

 <section 
                className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                          <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">
        
        {/* Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold mb-12">
          Permanent Solution for Missing Teeth
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          
          {/* Left column */}
          <div>
            <h3 className="text-cyan-400 text-lg md:text-xl font-semibold mb-4">
              Types of Denture Base
            </h3>

            <p className="text-sm md:text-base mb-6 text-white">
            Depending on your needs, there are four main types of denture bases, each with unique features:

            </p>

            <ul className="list-disc list-outside ml-5 text-md md:text-base text-white space-y-2 mb-6">
              <li>
                <strong>Acrylic Resin Base:-</strong> This method is the most widely used and relatively easier on the pocket. Suitable for use where there will be a complete or partial denture and provides the natural look and feel of gums.
              </li>
              <li>
                <strong>Flexible Base:-</strong>  Made from a very smooth thermoplastic polymer, including nylon. It is outstandingly comfortable and accessible, which makes it very suitable for patients with sensitive gums.
              </li>
              <li>
                <strong>Hybrid Base:-</strong> Surgically places metal and acrylic together for strength and enhanced comfort. Recommended for bottom teeth dentures and complete teeth dentures cases where any additional stability is required.
              </li>
              <li>
                <strong>Cast Partial Denture:-</strong> CPD can be described as a partial denture made of a cast metal framework for the base and containing artificial teeth made of an acrylic material. Compared to the conventional acrylic denture, Cast Partial Denture is stronger and has better wear resistance and retention.
              </li>
            </ul>
          </div>

          {/* Right column */}
          <div>
            <h3 className="text-cyan-400 text-lg md:text-xl font-semibold mb-4">
              Why Choose Us?
            </h3>

            <p className="text-sm md:text-base mb-6 text-white">
              Reasons to choose SmileOn for your dental procedures:
            </p>

            <ul className="list-disc list-inside space-y-3 text-sm md:text-base text-white">
              <li>Higher success rate</li>
              <li>Affordable prices</li>
              <li>Quality work</li>
              <li>Professional team</li>
              <li>Clean environment</li>
            </ul>
          </div>

        </div>
</div>

    </section>

 
<FAQsSection  title="FAQs"
        faqs={polishingFAQs}/>

    <Map />
    <Footer />

    </div>
  )
}

export default Dentures;

