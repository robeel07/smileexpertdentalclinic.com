import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Endodontist = () => {


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
const endoFAQs = [
{ id: 1, question: "01. How much does an endodontist's visit cost?", answer: "The cost of an endodontist is different from the price of a visit, depending on the extent of the treatment needed and the extent of the treatment." },
        { id: 2, question: "02. Can an endodontist do a root canal?", answer: "Yes, because an endodontist best handles the root canal. He specializes in diagnosing and treating the inner parts of the tooth." },
        { id: 3, question: "03. What is difference between endodontists and periodontists?", answer: "An endodontist is a dentist who treats the inside of teeth, such as root canals and the infection of teeth. In comparison, a periodontist treats the gums and structures around your teeth, including gum disease and dental implants." },
        { id: 4, question: "04. Is endodontic treatment painful?", answer: "Avoid highly pigmented foods and beverages like chai or coffee for a few days to maintain your bright smile." },

        { id: 5, question: "05. Why would I need an endodontic procedure?", answer: "While Zoom or laser teeth whitening is suitable for most people, our team of best dentists in Lahore can confirm if this teeth whitening treatment is right for you." },
        { id: 6, question: "06. What is the difference between a dentist and an endodontist?", answer: "Multiple studies provide evidence that Zoom or laser is safe for teeth whitening." },
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
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-xl ">Treatments</h2>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Endodontist Services
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">At SmileOn, we pride ourselves in making sure that you have total oral health as a major priority. We have an endodontist specialist in Lahore providing exceptional treatment that can help you save your natural teeth. Are you curious to know what is endodontist meaning? An endodontist is a specialized dentist who focuses on the tooth’s root, so see them as our root canal warriors and beyond! 
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">What Do Endodontists Treat?</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Endodontists are dentists who diagnose and treat the tissues inside the tooth. Endodontist specialists can treat:
              </p>
                        <ul className="list-disc list-inside space-y-2 mb-0">
                            <li>Tooth decay that extends to the pulp of the tooth</li>
                            <li>Cracked or fractured teeth</li>
                            <li>Dental abscesses or infections</li>
                            <li>Chronic toothache that cannot be easily treated</li>
                        </ul>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Endodontist in Lahore specialize in managing pain effectively, maintaining or restoring teeth, or even rebuilding the whole oral tissues. If a patient has a severe toothache or dental trauma, you can contact a consultant endodontist, who will then accurately manage the situation.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/09/What-Do-Endodontists-Treat-1536x1024.jpg"
                alt="Doctor performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

{/* Benifits */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fbfe] w-full font-sans">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    

    <div className="w-full lg:w-[45%] order-2 md:order-2">
      <div className="mb-10 lg:mb-12">
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-0">Benefits of Endodontist Services</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">SmileOn provides specialty treatments for affordable endodontist cost to provide optimal value for lifetime dental care.
        </p>
                <p className="text-gray-600 text-sm md:text-base font-medium leading-relaxed mb-0">Our endodontist services include:</p>
                <ul className="list-disc list-inside space-y-2 mb-0">
                            <li className='mb-0'>Root Canal Therapy</li>
                            <li>Retreatment of Root Canals</li>
                            <li>Cracked Tooth Repair</li>
                            <li>Endodontic Surgery</li>
                            <li>Traumatic Dental Injuries Care</li>
                        </ul>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
This treatment will treat facial injuries, allowing you to smile again. Selecting a qualified endodontist enables many teeth requiring moderate and complex treatment to be saved from extraction and restore a natural, appealing smile.


        </p>
      </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/09/Benefits-of-Endodontist-Services-2-1536x1024.jpg" 
          alt="Dentist performing procedure" 
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
                    
                    {/* 1. Benefits of Scaling Teeth */}
                    <InfoCard title="Why Choose Us for Endodontist Services">
                        <ul className="list-disc list-outside">
                            <li>Expert team</li>
                            <li>Use of advanced technology</li>
                            <li>Painless procedures</li>
                            <li>Affordable care</li>
                        </ul>
                    </InfoCard>

                    {/* 2. Tips to Follow After Scaling and Polishing Teeth */}
                    <InfoCard title="Before your appointment">
                        <ul className="list-disc list-outside space-y-2">
                            <li>No special preparation needed</li>
                        </ul>
                    </InfoCard>

                    {/* 3. What to Expect During the Procedure */}
                    <InfoCard title="How long it takes">
                        <ul className="list-disc list-outside space-y-2">
                            <li>The consultation will usually take around 30 minutes</li>
                            <li>Treatment will usually take around 90 minutes each</li>
                        </ul>
                    </InfoCard>

                    {/* 4. Before Procedure */}
                    <InfoCard title="Quick tip">
                        <p>Whether it’s your emergency endodontist treatment or regular treatment, for a speedy and better recovery; it is good to take a rest of at least 2 days. Do not put stress on your jaws, teeth and mouth.</p>
                    </InfoCard>

                    
                </div>
            </div>
        </section>

      <FAQsSection  title="FAQs"
        faqs={endoFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Endodontist
