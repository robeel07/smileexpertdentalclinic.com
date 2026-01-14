import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";


const Wisdom = () => {
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

 



const WisdomFAQs = [
{ id: 1, question: "01. How much do Scaling & Polishing services cost?", answer: "The price of Scaling & Polishing services depends upon the tartar deposit upon the teeth which we determine in initial examination. In most cases its 8000 PKR." },
        { id: 2, question: "02. Does Scaling & Polishing cause discomfort?", answer: "This treatment should never cause you any discomfort or pain. However, we have to mention that it is totally fine to experience some discomfort during the services." },
        { id: 3, question: "03. Do teeth polishing whiten teeth?", answer: "Teeth polishing may not be as effective as bleaching procedures since it only removes stains on the outer layer of the teeth, but it makes your teeth seem polished." },
        { id: 4, question: "04. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },
        { id: 5, question: "05. What will happen if I have poor oral hygiene?", answer: "Poor oral hygiene can lead to a number of health concerns, some of them extremely serious if left untreated. Some of the common signs of poor oral health are bleeding gums, swollen or inflamed gums, loose teeth and bad breath. Research also shows a clear link between periodontal disease and cardiovascular disease, including increased risk of stroke and heart attack, premature birth and an increased risk of pneumonia, particularly in elderly patients." },
        { id: 6, question: "06. What is periodontal disease?", answer: "Periodontal (or gum) disease is a process that starts with a biofilm that adheres to the surface of your teeth. Gums first become red, inflamed and swollen. Later, the bone that supports the teeth is eaten away. In the final stages, this leads to tooth loss." },
        { id: 7, question: "07. Why does the dental need to scrape off plaque and tartar?", answer: "We all have bacteria in our mouth, even if we have great oral hygiene at home. Plaque is formed when this bacteria mixes with food and proteins in your mouth. It’s the sticky, pale yellow film that coats your teeth and gets under your gum line. If plaque stays on your teeth it can harden into tartar and give you even bigger problems. Tartar build-up can’t be removed at home. It needs to be carefully scraped off by a special scaler tool in a dental clinic. The bacteria in plaque and tartar damages the enamel, or outer layer of your teeth. But if you remove it regularly, you can help prevent tooth decay, receding gums and gum disease." },
        { id: 8, question: "08. Is scaling good for teeth?", answer: "Yes, scaling is very good for teeth! It helps prevent and treat gum disease and reduces plaque and tartar build-up on their teeth." },
];

  return (
    <div className='font-jost'>
      
      {/* Hero Section */}
            
                          
                          
                        <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Wisdom-Teeth-Removal.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-xl ">Treatments</h2>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
Wisdom Teeth Removal
                        </h1>
                    </div>
                </div>
            </div> 
         
                          
                          
                             <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                             {/* --- Top Text --- */}
      <p className="text-left text-sm md:text-base text-black mb-1  ">
        The extraction of wisdom teeth is an action performed with such regularity that it has become a somewhat banal occurrence. Although you may be feeling apprehensive, rest assured that the process is not as unpleasant as you might imagine. If you have received news that your wisdom teeth must be extracted, you may be experiencing some trepidation. However, do not fret, for our team of considerate dentists are experts in making the removal of your wisdom teeth a seamless and worry-free experience.
      </p>
     </section>

     <div className="font-sans text-gray-800">
      {/* --- Section 1: What is it? (Text Left, Image Right on Desktop) --- */}
<section className="w-full py-12 md:py-2 flex flex-col lg:flex-row items-center overflow-hidden">
            <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* Text Content */}
<div className="w-full lg:w-1/2 px-6 lg:pl-[calc((100vw-1280px)/2+24px)] lg:pr-12">
            <h2 className="text-2xl md:text-4xl text-[#1e1b4b] mb-6">
              What is it?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
           Many people need to have their wisdom teeth removed due to problems they are having. The removal of wisdom teeth is a frequent dental procedure. The removal of wisdom teeth by a professional, such as an oral and maxillofacial surgeon, is occasionally necessary. Timely removal of your wisdom teeth may also help to avoid additional issues if they have gotten impacted or lodged under your gums. These include:
            </p>
            <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
              <li>Gum flap on top of tooth infection</li>
              <li>Deterioration in the wisdom teeth</li>
              <li>Damage to the teeth nearby</li>
              <li>A cyst that could be harmful to the nearby bone’s health</li>

            </ul>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Your dentist will evaluate your wisdom teeth and your alternatives for having them removed when you visit. To aid with the removal of a tooth, an incision may occasionally be created in the gum to expose the entire tooth. In other circumstances, the tooth may need to be extracted in parts after some of the surrounding bone has been removed.
            </p>
          </div>

          {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-[50%]">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/What-Is-It-wt-2048x1365.jpg"
              alt="What" 
              className="w-full h-56 sm:h-72 lg:h-[450px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>
        </div>
      </section>
</div>  
    {/* Need to know */}
    
    <section 
                className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                {/* Dark Overlay for contrast  */}
                <div className="absolute inset-0 bg-black/70"></div>
                
                <div className="relative z-10 max-w-7xl mx-auto text-white">
                    
                    <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
                        Need To Know
                    </h2>
    
                    {/* Cards Section */}
                    {/* 1 column on small screens, 2 on medium, 3 on large */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        
                        {/* 1. Benefits of Scaling Teeth */}
                        <InfoCard title="Appointments">
                            <ul className="list-disc list-outside space-y-2">
                                <li>Usually 1-2 appointments</li>
                                <li>At the first consultation visit your dentist will examine your teeth</li>
                                <li>At the second visit you will usually have the treatment</li>
                            </ul>
                            
                        </InfoCard>
    
                        {/* 2.  */}
                        <InfoCard title="Before your appointment">
                           <p className="text-sm md:text-base text-white leading-relaxed">
             This depends on the removal procedure and where it is done.
            </p>
                            <ul className="list-disc list-outside space-y-2">
                                <li>In a general dental practice the extraction will usually take around 30 to 60 minutes</li>
                                <li>At oral surgery clinics it will usually take around 45 to 90 minutes</li>
                                <li>For extraction under general anaesthetic at the hospital you will usually be at the hospital for around 2 to 3 hours</li>
                            </ul>
                        </InfoCard>
    
                        {/* 3. */}
                        <InfoCard title="How long it takes">
                            <ul className="list-disc list-outside space-y-2">
                                <li>The consultation will usually take around 30 to 60 minutes</li>
                                <li>Getting the filling will usually take around 30 to 60 minutes</li>
                            </ul>
                        </InfoCard>
    
                        {/* 4. Before Procedure */}
                        <InfoCard title="You may be asked about">
                          <ul className="list-disc list-outside space-y-2">
                                <li>Your dental and medical history</li>
                                <li>Your normal oral care routine at home</li>
                            </ul>
                        </InfoCard>

                 
                        {/* 6. Choose SmileOn for Dental Treatment */}
                        <InfoCard title="Quick tip">
                            <ul className="list-disc list-outside space-y-1">
                                <li>If your hygienist gives you advice about daily dental care like teeth brushing techniques and how often you should floss, write it down. It takes time to build a new habit – some say 21 days or more. In the meantime, here’s a handy idea. Stick your note about your new dental care routine on your bathroom mirror as a daily reminder.</li>
                            </ul>
                        </InfoCard>

                        {/* 5. Need to Know (Duration) */}
                        <InfoCard title="After your appointment">
                             <ul className="list-disc list-outside space-y-1">
                                <li>You can usually carry on as normal.</li>
                            </ul>
                           
                        </InfoCard>
   
                        
                    </div>
                </div>
            </section>
    

      <FAQsSection  title="FAQs"
        faqs={WisdomFAQs}/>

          <Map />
                   <Footer />
    </div>
  )
}

export default Wisdom;
