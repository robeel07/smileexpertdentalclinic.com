import FAQsSection from "./FAQ";
import React, { useState } from 'react';
import Map from "./Map";
import Footer from "./Footer";

const FillingFAQs = [
{ id: 1, question: "01. How much do Scaling & Polishing services cost?", answer: "The price of Scaling & Polishing services depends upon the tartar deposit upon the teeth which we determine in initial examination. In most cases its 8000 PKR." },
        { id: 2, question: "02. Does Scaling & Polishing cause discomfort?", answer: "This treatment should never cause you any discomfort or pain. However, we have to mention that it is totally fine to experience some discomfort during the services." },
        { id: 3, question: "03. Do teeth polishing whiten teeth?", answer: "Teeth polishing may not be as effective as bleaching procedures since it only removes stains on the outer layer of the teeth, but it makes your teeth seem polished." },
        { id: 4, question: "04. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },

];
const Fillings = () => {
  const [activeTab, setActiveTab] = useState('advantages');

  const content = {
    advantages: [
      "Strong and durable",
      "Cheapest filling type",
      "Can help prevent recurrent decay"
    ],
    disadvantage: [
      "Not tooth-colored (noticeable when smiling)",
      "Can darken over time",
      "Requires more removal of healthy tooth structure",
      "Contains trace amounts of mercury"
    ]
  };

  


  const content2 = {
    advantages: [
      "Natural appearance matched to your teeth",
      "Strong and durable for modern use",
      "Almost impossible to detect",
      "Excellent for replacing stained or chipped fillings"
    ],
    disadvantage: [
      "Takes longer to place",
      "Sometimes leads to increased sensitivity",
      "More expensive than amalgam fillings"
    ]
  };


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


  return (
    <div className='font-jost'>

      
      {/* Hero Section */}


            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Fillings.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                      Fillings
                        </h1>
                    </div>
                </div>
            </div> 

                             {/* --- Top Text --- */}
            <section className="w-full pl-4 sm:pl-6 lg:pl-8 py-10 md:pt-20 md:pb-0 md:mb-20">

             <p className="text-left text-sm md:text-base text-black mb-1  ">
        Fillings are a common dental treatment that fix a hole in your tooth caused by decay. Think you might need a filling? Fillings are very common and most people will need one at some stage in their lives. It’s important to take good care of your oral health to reduce the chance of needing a filling.
      </p>
<p className="text-left text-sm md:text-base text-black  ">
      If you need a filling your dentist will first remove the caries, or decay, from inside your tooth and then fill the cavity with one of a wide range of filling materials. Depending on the damage to your tooth, dentists use several types of fillings. This is usually based on the material that your dentist uses to fill the cavity left by the decay.
 </p>
 </section>


     <div >

      
      {/* --- Section 1: What is it? (Text Left, Image Right on Desktop) --- */}
      <section className="max-w-full mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-6">
              What is it?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
            Fillings help to restore your damaged teeth to their normal shape and function. Depending on the damage to your tooth, dentists use several types of fillings. This is usually based on the material that your dentist uses to fill the cavity left by the decay. Some of the more common filling types include composite, amalgam and gold fillings. In many cases you’ll be able to choose which filling type you prefer. Common signs you may need a filling include:
            </p>
            <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
              <li>Tooth pain caused by pressure on the tooth.</li>
              <li>An uncomfortable sensation when consuming sugary foods or drinks.</li>
              <li>any particular area being sensitive to hot/cold/sweet etc.</li>
              <li>A persistent ache or toothache in the affected tooth or surrounding area.</li>

            </ul>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              It’s important that you see a dentist regularly for routine check-ups because not all decay and problems that might need a filling have symptoms or pain. Most symptoms start silently in the early stages and if found early usually mean a simple, cost effective and less invasive treatment is all that’s needed. Prevention really is the key. That’s why it’s so important to visit a dentist regularly.
            </p>
          </div>

          {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2 self-stretch">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/What-is-it-2048x1365.jpg"
              alt="Dental procedure" 
              className="w-full h-64 sm:h-72 lg:h-full object-cover rounded-3xl lg:rounded-l-[3rem]  shadow-lg"
            />
          </div>
        </div>
      </section>

        {/* --- Section 2: What Happens (Text Right, Image Left on Desktop) --- */}
        <section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-[rgba(105, 113, 137, 1)]">
          {/* flex-col-reverse ensures Text stays on top when stacked on mobile */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-10 xl:gap-20">
            
              {/* Image: Wide & Responsive Height */}
            <div className="w-full lg:w-1/2 ">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/09/What-happens-1536x1024.jpg"
                alt="Hand using dental tools" 
              className="w-full h-64 sm:h-72 lg:h-80 object-cover rounded-3xl lg:rounded-l-[3rem]  shadow-lg"
                        />
            </div>

            {/* Text Content */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-2xl md:text-5xl font-bold text-[#1e1b4b] mb-6">
                What happens
              </h2>
              <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
                Your dentist will usually numb the decayed tooth using a local anaesthetic that’s injected into your gum... How they do this will depend on the type of filling material used.
              </p>
              <div className="bg-grey-200  ">
                <p className="text-sm md:text-base text-gray-700 font-medium">
                  NOTE: local anaesthesia is not usually required in all types of fillings.
                </p>
              </div>
            </div>
          
          </div>
        </section>

{/* --- Section3 : Which type (Text Right, Image Left on Desktop) --- */}
      <section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-gray-50/50">
        {/* flex-col-reverse ensures Text stays on top when stacked on mobile */}
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b] mb-6">
              Which type
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              The type of filling that your dentist will use to fill the cavity may depend on the decay damage to your tooth. Often you may be able to choose which filling type you prefer. Common filling types include amalgam, composite, ceramic and gold fillings. Glass ionomer cement fillings are less common. You can read more about the common filling types below.
            </p>
          </div>
          {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/Which-type-1536x1024.jpg"
              alt="Hand using dental tools" 
              className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>

        </div>
      </section>
    </div>


    {/* Amalgam fillings */}

<section className="max-w-full mx-auto px-6 py-12 md:py-20 font-sans">
      <div className="flex flex-col lg:flex-row gap-10 items-center">
        
        {/* Left: Image Container */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1 ">
          <img 
            src="https://smileon.pk/wp-content/uploads/2025/09/Amalgam-fillings-2048x1365.jpg" 
            alt="Dentist working with loupes" 
            className="rounded-[2.5rem] w-full h-auto object-cover shadow-sm"
          />
        </div>

        {/* Right: Content Container */}
        <div className="w-full lg:w-1/2 space-y-6 oorder-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a237e]">
            Amalgam fillings
          </h2>
          
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Dental amalgam fillings have been used to fill teeth for over 150 years. 
              Amalgam is what we know as traditional silver fillings. They are not actually 
              made of silver but a combination of a few metals including silver, tin, 
              copper and mercury.
            </p>
            <p>
              They are a low-cost filling mostly used for large cavities in back molars 
              because of their colour. An amalgam filling will darken over time but can 
              last many years before it needs replacing, typically between 10 and 15 years.
            </p>
          </div>

          {/* Tab Buttons */}
          <div className="flex gap-4 pt-2">
            <button 
              onClick={() => setActiveTab('advantages')}
              className={`px-8 py-2 rounded-md font-semibold transition-all ${
                activeTab === 'advantages' 
                ? 'bg-[#1a2b4b] text-white' 
                : 'bg-gray-100 text-cyan-400'
              }`}
            >
              Advantages
            </button>
            <button 
              onClick={() => setActiveTab('disadvantage')}
              className={`px-8 py-2 rounded-md font-semibold transition-all ${
                activeTab === 'disadvantage' 
                ? 'bg-[#1a2b4b] text-white' 
                : 'bg-gray-100 text-cyan-400'
              }`}
            >
              Disadvantage
            </button>
          </div>

          {/* List Content */}
          <ul className="space-y-3 min-h-[120px]">
            {content[activeTab].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-xl mt-[-2px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>

{/* Composite */}

<section className="max-w-full mx-auto px-6 py-12 md:py-20 font-sans">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        


        {/* Right: Image Container */}
        <div className="w-full lg:w-1/2 order-2 lg:order-1">
          <div className="relative">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/Composite-white-fillings-1536x1024.jpg" 
              alt="Dental professional with tools" 
              className="rounded-[2.5rem] w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Left: Content Container */}
        <div className="w-full lg:w-1/2 space-y-6 order-1 lg:order-2">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a2b4b]">
            Composite white fillings
          </h2>
          
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Composite or synthetic white fillings are popular because of their 
              natural appearance and strength. They typically last up to five years.
            </p>
            <p>
              A composite filling will be matched to the colour of your teeth as 
              closely as possible. They are almost impossible to detect and are 
              an excellent replacement for stained, chipped or leaking fillings.
            </p>
          </div>

          {/* Interactive Tab Buttons */}
          <div className="flex gap-3 pt-2">
            <button 
              onClick={() => setActiveTab('advantages')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
                activeTab === 'advantages' 
                ? 'bg-[#1a2b4b] text-white' 
                : 'bg-gray-100 text-cyan-400'
              }`}
            >
              Advantages
            </button>
            <button 
              onClick={() => setActiveTab('disadvantage')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors duration-200 ${
                activeTab === 'disadvantage' 
                ? 'bg-[#1a2b4b] text-white' 
                : 'bg-gray-100 text-cyan-400'
              }`}
            >
              Disadvantage
            </button>
          </div>

          {/* Dynamic List */}
          <ul className="space-y-3 min-h-[140px] pt-2">
            {content2[activeTab].map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-700">
                <span className="text-black font-bold mt-[-2px]">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>


      </div>
    </section>
    
        {/* Need to know */}
    
    <section 
                className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                style={{ backgroundImage: `url(https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
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
                            <ul className="list-disc list-inside space-y-2">
                                <li>Usually 1-2 appointments</li>
                                <li>At the first consultation visit your dentist will examine your teeth</li>
                                <li>At the second visit you will usually have the treatment</li>
                            </ul>
                            
                        </InfoCard>
    
                        {/* 2.  */}
                        <InfoCard title="Before your appointment">
                            <ul className="list-disc list-inside space-y-2">
                                <li>No special preparation needed.</li>
                            </ul>
                        </InfoCard>
    
                        {/* 3. */}
                        <InfoCard title="How long it takes">
                            <ul className="list-disc list-inside space-y-2">
                                <li>The consultation will usually take around 30 to 60 minutes</li>
                                <li>Getting the filling will usually take around 30 to 60 minutes</li>
                            </ul>
                        </InfoCard>
    
                        {/* 4. Before Procedure */}
                        <InfoCard title="You may be asked about">
                          <ul className="list-disc list-inside space-y-2">
                                <li>Your dental and medical history</li>
                                <li>Your normal oral care routine at home</li>
                            </ul>
                        </InfoCard>

                 
                        {/* 6. Choose SmileOn for Dental Treatment */}
                        <InfoCard title="Quick tip">
                            <ul className="list-disc list-inside space-y-1">
                                <li>If your hygienist gives you advice about daily dental care like teeth brushing techniques and how often you should floss, write it down. It takes time to build a new habit – some say 21 days or more. In the meantime, here’s a handy idea. Stick your note about your new dental care routine on your bathroom mirror as a daily reminder.</li>
                            </ul>
                        </InfoCard>

                        {/* 5. Need to Know (Duration) */}
                        <InfoCard title="After your appointment">
                             <ul className="list-disc list-inside space-y-1">
                                <li>You can usually carry on as normal.</li>
                            </ul>
                           
                        </InfoCard>
   
                        
                    </div>
                </div>
            </section>
    
      <FAQsSection  title="FAQs"
        faqs={FillingFAQs}/>
  <Map />
      <Footer />
        

    </div>
  )
}

export default Fillings




