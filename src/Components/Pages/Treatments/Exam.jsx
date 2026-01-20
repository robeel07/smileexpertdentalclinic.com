import React from 'react'
import FAQsSection from "./FAQ";
import Map from "./Map";
import Footer from "./Footer";




const ExamFAQs = [
{ id: 1, question: "01. What is the price of a dental check up?", answer: "It will usually take up to 2000 PKR for a check of the exam and X-rays. Apart from that, we also add more and limited offers from time to time too." },
        { id: 2, question: "02. What if I need extra work done? Do you have flexible payment options?", answer: "If you need a filling or any other major treatment your dentist will let you know. You can talk to them and ask your dentist about which treatment would be better for you. So I mean that there are many possibilities of how you can pay, including debit/credit cards and web money transfer." },
        { id: 3, question: "03. Will it hurt?", answer: "A dental check up along with the examination and taking x rays should cause no discomfort at all. Nevertheless, let it sometimes one of the instruments touch some small tender spot on your mouth and you may feel some slight tingling of pain." },
        { id: 4, question: "04. I feel nervous about going to the dentist. What can I do?", answer: "Feeling nervous is okay. With us, you can relax. We help make you comfortable and let you know everything that is going on with your teeth and what needs to be done. Every endeavor will be taken to ensure that you make yourself of utmost ease." },
        { id: 5, question: "05. Are dental x-rays harmful?", answer: "No, dental X-rays are not harmful, in fact, they help diagnose dental problems earlier." },
        { id: 6, question: "06. What are standard dental x-rays?", answer: ["Our basic exposure technique is known as the bitewing exposure technique and the common dental X – rays are known as the bitewing x-ray. It is a plastic thing that, so to say, you need to employ in order to maintain the X-ray film in its place. In an exam and x-rays check up you may get a bitewing x-ray, on each side of the mouth. Of them, some enable the dentists to explain what is happening with your molars, these are the large back teeth. They are also useful for monitoring the sections of the mouth that may be hard to see, for instance, at the back there may be an indication of rot between two molars.",
          "You could also ask your dentist about panoramic X-rays. They provide the overall picture of the whole oral cavity at once on one single x-ray. Diseases of the teeth which included, impacted teeth, jaw bone disorders, infection, abscess and fracture are typically diagnosed using a panoramic x-ray."
        ]

         },
        { id: 7, question: "07. Why do I need a dental check-up each year?", answer: "This means that you do not fall under the want to be the emergency dentist because you will have regular dental check-ups. You will also possibly spend less with the dentist in the long run also, as possible expenses are usually cut down by using a better oral health plan." },
         { id: 8, question: "08. Why does it take longer the first time I see a new dentist?", answer: "There is no shame in asking for a few more minutes in your first appointment. It means that all requisite information should be supplied at first instance meeting with us, preparing for a design solution. Once we get all of that data in hand, and get to know you and your needs, then, we can address all your oral problems adequately." },
          { id: 9, question: "09. If I need a filling will the dentist do it at the same time?", answer: "A second visit is usually needed if fillings are needed. But if all you need is a small filling and the dentist has the time to do it then it can be done in a single appointment." },
           { id: 10, question: "10. What else do I need to do to look after my oral health?", answer: "It is rather unadvisable that people dismiss dental care as unimportant as it is a part of your general health. Oral hygiene should be enhanced and people should visit dentists for check ups at times." },
            { id: 11, question: "11. How often should I get an exam and x-rays check-up?", answer: "We recommend you to formally plan a traditional check up at least once a year as a regular oral hygiene routine. Dental check up should not be wait until it is compulsory where one has a sensitivity, a pain or any other discomfort." },

];

const InfoCard = ({ title, children }) => (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg  shadow-lg h-full ">
        <h3 className="text-2xl font-bold text-cyan-400  pb-2">
            {title}
        </h3>
    
        <div className="text-gray-200 text-lg space-y-3">
            {children}
        </div>
    </div>
);


const Exam = () => {
  return (
    <div>
          {/* Hero Section */}

               <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                    style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Exam-X-Rays-Check-Up.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                        Exam & X-rays Check-up
                        </h1>
                    </div>
                </div>
            </div> 


   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                             {/* --- Top Text --- */}
      <p className="text-left text-sm md:text-base text-black mb-1  ">
       Do you have any hidden dental problems that are affecting your smile?  Our dental X-ray diagnoses other hidden pathologies, such as cavities, gum disease, or the presence of impacted teeth, without necessarily causing discomfort. Fast, safe, and necessary, X-rays enable us to create an individualized plan to keep your teeth bright and in perfect condition. Choose SmileOn, the best dental X-ray clinic with professionals and powerful tools for proper care of your teeth.
      </p>
     </section>
       <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
             <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
               
               {/* Text Content */}
               <div className="w-full lg:w-1/2">
                 <h2 className="text-3xl   text-[#1e1b4b] mb-6">
                  When Should You Go for a Dental X-Ray?
                 </h2>
                 <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                Dental X-rays are very essential during any routine dental examination checkup.

Here’s why they are essential:
                 </p>
                 <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
                   <li>Early Problem Detection</li>
                   <li>Dental X-Ray for Braces</li>
                   <li>Assess Infected/damaged</li>
                   <li>Wisdom Teeth</li>
                    <li>Monitor Oral Health</li>
     
                 </ul>
                 <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                   Moreover, they reveal more comprehensive information on diseases that may be undetectable sometimes such as cavities, bone loss or impacted teeth. SmileOn offers advanced dental X-ray Lahore services to improve the quality of your dental health.
                 </p>
               </div>
     
               {/* Image: Wide & Responsive Height */}
               <div className="w-full lg:w-1/2">
                 <img 
                   src="https://smileon.pk/wp-content/uploads/2025/09/When-Should-You-Go-for-a-Dental-X-Ray-2048x1365.jpg"
                   alt="Dental procedure" 
                   className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
                 />
               </div>
             </div>
           </section>

           {/* Benifits of X-Ray */}
<section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-[#28D2EA1A]">
        {/* flex-col-reverse ensures Text stays on top when stacked on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 xl:gap-10">
          
            {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/Benefits-of-Dental-X-Rays-2048x1365.jpg"
              alt="Hand using dental tools" 
              className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl  text-[#1e1b4b] mb-6">
            Benefits of Dental X-Rays
            </h2>
            <div className="text-sm md:text-base text-black mb-8 ">
            <p className='m-0'>X-rays provide the best view that helps in early diagnosing and treating oral diseases.</p>
            <p className='m-0'>Here’s why dental X-rays matter:</p>
            <p className='m-0'>Enhanced accuracy</p>
            <p className='m-0'>Kids teeth x-ray for preventive care</p>
            <p className='m-0'>Support for dental restorations</p>
            <p className='m-0'>Orthodontic guidance</p>
            <p className='m-0'>Comprehensive assessment</p>
            <p className='m-0'>At SmileOn, we have turned X-Ray into a comfortable experience whether for families or kids. Dental X-ray photographs are essential for oral health depending on the regimen or a specific treatment.</p>
</div>

            
          </div>
        
        </div>
      </section>

    {/* Need to know */}

<section 
            className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative " 
            style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Dark Overlay for contrast  */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto text-white">
                
                <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-4 sm:mb-12 md:mb-16 tracking-wide">
                    Need To Know
                </h2>

                {/* Cards Section */}
                {/* 1 column on small screens, 2 on medium, 3 on large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                    
                    {/* 1. Benefits of Scaling Teeth */}
                    <InfoCard title="Types of Dental X-rays">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Bitewing Xrays</li>
                            <li>Panoramic Xrays</li>
                            <li>Periapical Xrays</li>
                            <li>Occlusal Xrays</li>
                        </ul>

                    </InfoCard>

                    {/* 2. Tips to Follow After Scaling and Polishing Teeth */}
                    <InfoCard title="Preparation">
                        <ul className="list-disc list-inside space-y-2">
                            <li>We will put you in the appropriate position for the X-ray, and you will be required to wear a protective apron</li>
                            <li>Your instructor will help you know when to hold still while an X-ray is being done on you.</li>
                          
                        </ul>
                    </InfoCard>

                    {/* 3. What to Expect During the Procedure */}
                    <InfoCard title="Image Processing">

                        <ul className="list-disc list-inside space-y-2">
                            <li>We will put you in the appropriate position for the X-ray, and you will be required to wear a protective apron</li>
                            <li>Your instructor will help you know when to hold still while an X-ray is being done on you.</li>
                          
                        </ul>
                        
                    </InfoCard>

                    {/* 4. Before Procedure */}
                    <InfoCard title="Dental X-rays Transformation">
                       <ul className="list-disc list-inside space-y-2">
                            <li>The procedure usually takes 30-60 minutes.</li>
                            <li> Follow your doctor’s instructions regarding further treatment.</li>
                          
                        </ul>
                    </InfoCard>

                    
                </div>
            </div>
        </section>


<FAQsSection  title="FAQs"
        faqs={ExamFAQs}/>
      <Map />
      <Footer />
    </div>
  )
}

export default Exam

