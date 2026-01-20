import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Periodontist = () => {


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
const perioFAQs = [
{ id: 1, question: "01. What is a periodontist?", answer: "A periodontist is a dental specialist who focuses on the prevention, diagnosis, and treatment of diseases affecting the gums and supporting structures of the teeth, including dental implants." },
        { id: 2, question: "02. What procedures do periodontists perform?", answer: "Periodontists perform procedures such as scaling and root planing, gum surgery, dental implant placement, gum grafting, and treatment of periodontal disease." },
        { id: 3, question: "03. When should I see a periodontist?", answer: "You should see a periodontist if you have bleeding gums, gum recession, loose teeth, persistent bad breath, or if your dentist refers you for specialized gum treatment." },
        { id: 4, question: "04. Is periodontal treatment painful?", answer: "Modern periodontal treatments are designed to be as comfortable as possible. Local anesthesia is used during procedures, and most patients experience minimal discomfort." },
        { id: 5, question: "05. How long does periodontal treatment take?", answer: "Treatment duration depends on the severity of the condition. Initial treatment may take a few visits, while maintenance appointments are typically scheduled every 3-6 months." },
        { id: 6, question: "06. What is the difference between a dentist and a periodontist?", answer: "A periodontist has completed additional specialized training beyond dental school, focusing specifically on gum health and the supporting structures of teeth." },
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
                            Periodontist Services
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">At SmileOn, we have expert periodontists in Lahore who specialize in the prevention, diagnosis, and treatment of gum disease and the placement of dental implants. A periodontist is a dental specialist with advanced training in treating the gums and supporting structures of your teeth. Our periodontist services help maintain healthy gums and prevent tooth loss.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">What Do Periodontists Treat?</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Periodontists are specialists who focus on gum health and the supporting structures of teeth. Our periodontist specialists can treat:
              </p>
                        <ul className="list-disc list-inside space-y-2 mb-0">
                            <li>Gum disease (gingivitis and periodontitis)</li>
                            <li>Gum recession</li>
                            <li>Bone loss around teeth</li>
                            <li>Dental implant placement</li>
                            <li>Gum grafting procedures</li>
                            <li>Cosmetic gum procedures</li>
                        </ul>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Our periodontist in Lahore specializes in maintaining healthy gums and supporting structures. Early treatment of gum disease can prevent tooth loss and improve your overall oral health.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/09/What-Do-Endodontists-Treat-1536x1024.jpg"
                alt="Periodontist performing dental procedure" 
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
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-0">Benefits of Periodontist Services</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">SmileOn provides comprehensive periodontal care to maintain healthy gums and prevent tooth loss.
        </p>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-0">Our periodontist services include:</p>
                <ul className="list-disc list-inside space-y-2 mb-0">
                            <li className='mb-0'>Scaling and Root Planing</li>
                            <li>Gum Surgery</li>
                            <li>Dental Implant Placement</li>
                            <li>Gum Grafting</li>
                            <li>Periodontal Maintenance</li>
                            <li>Treatment of Gum Disease</li>
                        </ul>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
Our periodontist team uses advanced techniques and technology to treat gum disease effectively. Regular periodontal care helps maintain healthy gums and prevents the progression of gum disease.


        </p>
      </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/09/Benefits-of-Endodontist-Services-2-1536x1024.jpg" 
          alt="Periodontist performing procedure" 
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
                    <InfoCard title="Why Choose Us for Periodontist Services">
                        <ul className="list-disc list-outside">
                            <li>Expert periodontist team</li>
                            <li>Advanced gum treatment</li>
                            <li>Comprehensive care</li>
                            <li>Preventive approach</li>
                        </ul>
                    </InfoCard>

                    {/* 2. Before Procedure */}
                    <InfoCard title="Before your appointment">
                        <ul className="list-disc list-outside space-y-2">
                            <li>Initial consultation required</li>
                            <li>X-rays and periodontal exam</li>
                        </ul>
                    </InfoCard>

                    {/* 3. Procedure Duration */}
                    <InfoCard title="How long it takes">
                        <ul className="list-disc list-outside space-y-2">
                            <li>Consultation: 30-60 minutes</li>
                            <li>Treatment varies by procedure</li>
                            <li>Maintenance visits every 3-6 months</li>
                        </ul>
                    </InfoCard>

                    {/* 4. Quick Tip */}
                    <InfoCard title="Quick tip">
                        <p>Maintain good oral hygiene with regular brushing, flossing, and professional cleanings to prevent gum disease and maintain periodontal health.</p>
                    </InfoCard>

                    
                </div>
            </div>
        </section>

      <FAQsSection  title="FAQs"
        faqs={perioFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Periodontist


