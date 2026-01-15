import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Pediatric = () => {


const InfoCard = ({ title, children }) => (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg  shadow-lg h-full ">
        <h3 className="text-xl  text-cyan-400  pb-2">
            {title}
        </h3>
    
        <div className="text-gray-200 text-base space-y-3">
            {children}
        </div>
    </div>
);
const pediatricFAQs = [
{ id: 1, question: "01. What is a pediatric dentist?", answer: "A pediatric dentist is a dental specialist who focuses on the oral health of children from infancy through adolescence, including those with special healthcare needs." },
        { id: 2, question: "02. At what age should my child first see a pediatric dentist?", answer: "The American Academy of Pediatric Dentistry recommends that children should have their first dental visit by age 1 or within 6 months after their first tooth appears." },
        { id: 3, question: "03. What procedures do pediatric dentists perform?", answer: "Pediatric dentists perform procedures such as dental cleanings, fluoride treatments, sealants, fillings, extractions, and preventive care tailored specifically for children." },
        { id: 4, question: "04. Is pediatric dental treatment safe for children?", answer: "Yes, pediatric dental treatments are specifically designed to be safe for children. Pediatric dentists use child-friendly techniques and materials appropriate for developing teeth." },
        { id: 5, question: "05. How can I prepare my child for their first dental visit?", answer: "Talk positively about the dentist, read children's books about dental visits, and explain that the dentist helps keep their teeth healthy. Avoid using scary words or sharing negative experiences." },
        { id: 6, question: "06. What is the difference between a general dentist and a pediatric dentist?", answer: "A pediatric dentist has completed additional specialized training beyond dental school, focusing specifically on children's dental development, behavior management, and treatment of children's dental issues." },
];


  return (
    <div className='font-jost'>
              {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Paediatric-Dentist.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-xl ">Treatments</h2>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
Pediatric dentists
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">SmileOn Pediatric Dental Care: Where Little Smiles Shine Bright! 
          </p>
           <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">Pediatric dentists are specialized professionals characterized by specialized care in children’s dental health and is our primary concern. We are proud to be the best pediatric dentist in Lahore. Thus, our environment is friendly enough to make your little ones comfortable.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl">Overview</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">For children, our dental care services start from the first signs of tooth eruption up to the normal development of regular teeth.
              </p>
                       
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Hence, our staff is committed to offering quality dental services that benefit children. Rather than having dentist appointments being a chore you attend due to health concerns, SmileOn is exciting and where every person prepares to go for the appointment so they can have a great smile!
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/12/Overview-pediatric-dentist-1536x1024.jpg"
                alt="Pediatric dentist performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

{/* Benefits */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fbfe] w-full ">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    

    <div className="w-full lg:w-[45%] lg:order-2 lg:pt-16">
      <div className="mb-10 lg:mb-12">
        <h2 className="text-[#1e1b4b] text-3xl md:text-2xl font-bold  mb-2 ">Choose SmileOn for the Pediatric Dentist</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-2">we embrace professionalism in dental care in a pediatric setting. Here’s why families trust us with their children’s smiles:
        </p>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-0">Our pediatric dentist services include:</p>
                <ul className="list-disc list-inside space-y-2 mb-0">
                            <li>Certified pediatric dentists</li>
                            <li>Advanced technology</li>
                            <li>Kid-friendly environment</li>
                            <li>Special treatment for chronic diseases</li>
                            <li>Effective treatments</li>
                            <li>Pain-free pediatric dentistry</li>
                            <li>Prevent further complications</li>
                        </ul>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">Whether you need an emergency pediatric dentist or a normal one, we offer personalized solutions for your needs. We make sure that our little patients feel as comfortable as they can.




        </p>
      </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] lg:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/12/Choose-SmileOn-for-the-Pediatric-Dentist-1536x1024.jpg" 
          alt="Pediatric dentist performing procedure" 
          className="w-full h-auto lg:h-[450px] rounded-[2.5rem] shadow-md object-cover"
        />
      </div>
    </div>


  </div>
</section>
   {/* Procedure */}

<section 
            className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative " 
            style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
    
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto text-white">
                
                <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-4 sm:mb-12 md:mb-16 tracking-wide">
Need To Know
                </h2>
                {/* Cards Section */}
                {/* 1 column on small screens, 2 on medium, 3 on large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* 1. Benefits */}
                    <InfoCard title="Aftercare Tips for Little Buddies">
                        <ul className="list-disc list-outside">
                            <li>Advise the patient to take gentle brushings.</li>
                            <li>Take soft foods only during the initial 24 hours</li>
                            <li>Stay away from sweet products for a day </li>
                        </ul>
                        <p>Start dental visits early to help your child develop positive dental habits and prevent dental problems before they start.</p>
                    </InfoCard>

                    {/* 2. Before Procedure */}
                    <InfoCard title="How long it takes">
                      <p>A normal appointment will take about 30-60 minutes. However, if any treatment is required then it will take a little longer.</p>
                    </InfoCard>

                    {/* 3. Procedure Duration */}
                    <InfoCard title="Before your appointment">
                      <p>You make an appointment with our dentist for kids to review your child’s dental health and the issues you may have.</p>
                    </InfoCard>

                    {/* 4. Quick Tip */}
                    <InfoCard title="You may be asked about">
                        <p>Using the latest equipment, your pediatrician will perform a thorough survey of your child’s teeth, gums, and oral cavity. Treatments may be about restoring the teeth, tooth extraction, or other orthodontic treatments.</p>
                    </InfoCard>

                    {/* 5. Quick Tip */}
                    <InfoCard title="Quick tip">
                        <p>Maintaining good dental hygiene as you grow up is suggested. Also, a child should see a pediatric dentist within the first year of life or when the first tooth occurs.</p>
                    </InfoCard>

                        {/* 6. Quick Tip */}
                    <InfoCard title="Ongoing Care & Education">
                        <p>We give advice on how to take care of your oral health at home and make sure to attend review appointments to monitor the development of your child’s teeth.</p>
                    </InfoCard>


                    
                </div>
            </div>
        </section>

      <FAQsSection  title="FAQs"
        faqs={pediatricFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Pediatric

