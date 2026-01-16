import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Prosthodontist = () => {


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
const prosthoFAQs = [
{ id: 1, question: "01. What is a prosthodontist?", answer: "A prosthodontist is a dental specialist who focuses on the design, manufacture, and fitting of artificial replacements for teeth and other parts of the mouth. They specialize in restoring and replacing lost or damaged teeth." },
        { id: 2, question: "02. What procedures do prosthodontists perform?", answer: "Prosthodontists perform procedures such as dental implants, crowns, bridges, dentures, veneers, and full mouth reconstruction to restore function and aesthetics." },
        { id: 3, question: "03. When should I see a prosthodontist?", answer: "You should see a prosthodontist if you need complex dental restorations, have missing teeth, need full mouth reconstruction, or require specialized prosthetic dental work." },
        { id: 4, question: "04. How long does prosthodontic treatment take?", answer: "Treatment duration varies depending on the complexity of the case. Simple restorations may take a few visits, while full mouth reconstruction can take several months." },
        { id: 5, question: "05. Are prosthodontic treatments expensive?", answer: "The cost depends on the type and complexity of treatment needed. Our prosthodontist in Lahore provides affordable options and will discuss costs during your consultation." },
        { id: 6, question: "06. What is the difference between a dentist and a prosthodontist?", answer: "A prosthodontist has completed additional specialized training beyond dental school, focusing specifically on the restoration and replacement of teeth and oral structures." },
];


  return (
    <div className='font-jost'>
              {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Endodontist-Services.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Prosthodontist Services
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">At SmileOn, we have expert prosthodontists in Lahore who specialize in restoring and replacing teeth. A prosthodontist is a dental specialist with advanced training in the design, manufacture, and fitting of artificial replacements for teeth and other oral structures. Our prosthodontist services help restore your smile, improve function, and enhance your quality of life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">What Do Prosthodontists Treat?</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Prosthodontists are specialists who focus on restoring and replacing teeth. Our prosthodontist specialists can treat:
              </p>
                        <ul className="list-disc list-inside space-y-2 mb-0">
                            <li>Missing teeth with dental implants</li>
                            <li>Damaged or decayed teeth with crowns</li>
                            <li>Multiple missing teeth with bridges</li>
                            <li>Complete tooth loss with dentures</li>
                            <li>Cosmetic improvements with veneers</li>
                            <li>Full mouth reconstruction</li>
                        </ul>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Our prosthodontist in Lahore specializes in creating custom-made dental prosthetics that look natural and function perfectly. Whether you need a single crown or a full mouth reconstruction, our team provides exceptional care tailored to your needs.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/09/What-Do-Endodontists-Treat-1536x1024.jpg"
                alt="Prosthodontist performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

{/* Benefits */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fbfe] w-full font-sans">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    

    <div className="w-full lg:w-[45%] order-2 md:order-2">
      <div className="mb-10 lg:mb-12">
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-0">Benefits of Prosthodontist Services</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">SmileOn provides comprehensive prosthodontic services to restore your smile and oral function.
        </p>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-0">Our prosthodontist services include:</p>
                <ul className="list-disc list-inside space-y-2 mb-0">
                            <li className='mb-0'>Dental Implants</li>
                            <li>Dental Crowns and Bridges</li>
                            <li>Complete and Partial Dentures</li>
                            <li>Dental Veneers</li>
                            <li>Full Mouth Reconstruction</li>
                            <li>TMJ Treatment</li>
                        </ul>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
Our prosthodontist team uses the latest technology and materials to create restorations that are both functional and aesthetically pleasing. We work closely with you to develop a treatment plan that meets your needs and budget.


        </p>
      </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/09/Benefits-of-Endodontist-Services-2-1536x1024.jpg" 
          alt="Prosthodontist performing procedure" 
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    
                    {/* 1. Benefits */}
                    <InfoCard title="Why Choose Us for Prosthodontist Services">
                        <ul className="list-disc list-outside">
                            <li>Expert prosthodontist team</li>
                            <li>Advanced dental technology</li>
                            <li>Custom-made restorations</li>
                            <li>Comprehensive care</li>
                        </ul>
                    </InfoCard>

                    {/* 2. Before Procedure */}
                    <InfoCard title="Before your appointment">
                        <ul className="list-disc list-outside space-y-2">
                            <li>Initial consultation required</li>
                            <li>X-rays and impressions may be needed</li>
                        </ul>
                    </InfoCard>

                    {/* 3. Procedure Duration */}
                    <InfoCard title="How long it takes">
                        <ul className="list-disc list-outside space-y-2">
                            <li>Consultation: 30-60 minutes</li>
                            <li>Treatment varies by procedure</li>
                            <li>Multiple visits may be required</li>
                        </ul>
                    </InfoCard>

                    {/* 4. Quick Tip */}
                    <InfoCard title="Quick tip">
                        <p>Maintain good oral hygiene and follow your prosthodontist's care instructions to ensure the longevity of your dental restorations.</p>
                    </InfoCard>

                    
                </div>
            </div>
        </section>

      <FAQsSection  title="FAQs"
        faqs={prosthoFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Prosthodontist

