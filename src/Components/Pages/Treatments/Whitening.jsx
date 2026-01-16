import React from 'react'
import InfoCard2 from './InfoCard2';
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";


const Whitening = () => {

const cardData = [
    {
      id: 1,
      title: "Appointments",
      content: (
        <>
          <ul className="list-disc list-outside ml-5 text-md md:text-base  space-y-2 mb-6">
            <li>Usually 1 to 2 appointments</li>
            <li>During your first consultation, our best dentists will assess the suitability of teeth whitening for you. If deemed suitable, the whitening procedure can be performed during the same visit.</li>
          </ul>
        </>
      ),
    },
    {
      id: 2,
      title: "Before your appointment",
      content: (
        <ul>
          <li>Avoid Staining Foods and Drinks</li>
          <li>Gentle Brushing and Flossing</li>
          <li>Use a Soft-Bristled Toothbrush</li>
          <li>Stay Hydrated and Rinse with Salt Water</li>
        </ul>
      ),
    },
    {
      id: 3,
      title: "What to Expect During the Procedure?",
      content: (
        <p>
          The dentist uses unique tools to scrape off the hard materials such as the plaques, tartar, and stains from the surface of the gums, as well as from the gum line. After scaling, the teeth are exposed to a special paste to remove rough surfaces, which makes the teeth shiny and clean.
        </p>
      ),
    },
    {
      id: 4,
      title: "Before Procedure",
      content: (
        <p>
          The dentist checks the mouth and looks for softened and hard deposits of tartar.
        </p>
      ),
    },
    {
      id: 5,
      title: "Need to Know",
      content: (
        <p>
          The whole process takes around 1-2 appointments depending on the condition of your teeth.
        </p>
      ),
    },
    {
      id: 6,
      title: "Choose SmileOn for Dental Treatment",
      content: (
        <>
          <p>At the clinic, we give you the best dental health care for your beautiful smile.</p>
          <ul>
            <li>Experienced Dentists</li>
            <li>Painless Treatment</li>
            <li>Affordable Services</li>
          </ul>
          <p>Contact us for teeth scaling and polishing price in Pakistan.</p>
        </>
      ),
    },
  ];


  
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
    <div className='font-sans'>
                                <div
        className="w-full h-[20em] bg-center bg-cover relative"
        style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Teeth-Whitening.jpg")` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className='relative w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-end pb-8'>
          <div>
            
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white'>
              Teeth Whitening in Lahore: Get a Brighter Smile Now
            </h1>
          </div>
        </div>
      </div>


<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 bg-white font-sans">
      <div>
        {/* Top Text Content */}
        <div className="text-black text-lg leading-relaxed space-y-4 mb-16">
              {/* --- Top Text --- */}
      <p className="text-left text-sm md:text-base text-black mb-1  ">
       Want to enhance your smile? Teeth whitening is a cost-effective and popular solution to add extra sparkle to your teeth. In recent years, teeth whitening has gained widespread popularity, and for good reason. Brightening your teeth can significantly boost your self-confidence, as a radiant smile can do wonders for your overall appearance. SmileOn provides teeth whitening in Lahore, with the best dentist offering professional in-office treatments.
      </p>
<p className="text-left text-sm md:text-base text-black  ">
     After a comprehensive evaluation, your dentist will suggest the optimal solution tailored to your individual needs.


 </p></div>

    
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-3xl  text-blue-700 mb-10">
            Achieve a Radiant Smile
          </h2>
          
          <button className="bg-cyan-400 hover:bg-blue-700 text-white  py-2 px-10 rounded-full text-md">
            Book Your Teeth Whitening
          </button>
        </div>
      </div>
    </section>

     <div className="font-sans ">
      {/* --- Section 1: What is it? (Text Left, Image Right on Desktop) --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl  text-[#1e1b4b] mb-6">
              Teeth Whitening: A Modern Guide
            </h2>
            <div className="text-sm md:text-base text-black mb-6 leading-relaxed">
            <p>
            Teeth whitening uses bleaching to lighten teeth by several shades. It is performed by a
dental professional. At our Lahore facility, we offer various teeth whitening options
tailored to your needs. To determine the most suitable option for you, please schedule
an appointment for a clinical examination.
            </p>
            <p >
            You will need a pre-whitening consultation with the best dentist or hygienist in Lahore
before teeth whitening treatment to ensure your suitability for the procedure. During this
consultation, any additional treatments needed before the whitening process will be
identified and discussed. Please note that any additional treatments will be chargeable.
            </p>
            </div>
            <h2 className="text-2xl md:text-3xl  text-[#1e1b4b] mb-6">
            For a Brighter, Confident Smile

            </h2>
            <div className="text-sm md:text-base text-black mb-6 leading-relaxed">
            <p>
In-practice teeth whitening is a professional procedure performed in the dental chair. It is the quickest and most effective method typically taking around two hours. Our teeth whitening expert in Johar Town will ensure you achieve the best results. As the best dentists for teeth whitening in Lahore, we ensure instant results with no long treatments or multiple visits.
            </p>
            </div>
           

          </div>

          {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2">
            <img 
              src="https://smileon.pk/wp-content/uploads/2025/09/Teeth-Whitening-A-Modern-Guide-3-1536x1024.jpg"
              alt="Dental procedure" 
              className="w-full h-80 md:h-[500px] lg:h-[600px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>
        </div>
      </section>


<section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-[#DDEEED]">
  <div className="text-center mb-8 md:mb-16">
    <h2 className="text-3xl md:text-3xl font-bold text-[#1e1b4b]">
     Why Choose Smile On For Teeth Whitening?

    </h2>
   </div>

 {/* --- Wrapper with a narrower max-width to constrain the overall area --- */}
<div className="max-w-5xl mx-auto px-6"> 
  
  {/* Flex container with a small gap (gap-8) to bring columns closer */}
  <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">

    {/* Column 1 */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-left text-xl md:text-xl font-bold text-[#1e1b4b] mb-6">
        We are the industry leaders
      </h2>
      {/* max-w-md ensures the bullet points don't stretch too far horizontally */}
      <ul className="list-disc list-outside ml-5 text-sm text-gray-600 space-y-4 mb-6 max-w-md">
        <li><strong>Patients trust us –</strong> At our dental clinic in Johar Town, we aim to offer you choices
and ensure each visit is a positive experience for you.</li>
        <li><strong>We’re affordable –</strong>  Our skilled team of dentists attend your concerns
to address them.</li>
        <li><strong>We stand by our work –</strong> We provide a variety of payment alternatives to
accommodate our patient’s needs and preferences.</li>
      </ul>
    </div>

    {/* Column 2 */}
    <div className="w-full lg:w-1/2">
      <h2 className="text-left text-xl md:text-xl font-bold text-[#1e1b4b] mb-6">
        We give our patients options
      </h2>
      <ul className="list-disc list-outside ml-5 text-sm text-gray-600 space-y-4 mb-6 max-w-md">
        <li><strong>Happy patients –</strong> Our clinic has achieved a 100% rate of patient satisfaction, demonstrating our dedication to providing exceptional dental care to every individual who walks through our doors.</li>
        <li><strong>We understand your needs –</strong> We are proud to offer affordable teeth whitening services in Lahore, competitively priced in the market to benefit our patients</li>
        <li><strong>Choose how you pay –</strong> We guarantee our work, using only top-rated international teeth whitening kits to ensure exceptional results without harming your teeth.</li>
      </ul>
    </div>

  </div>
</div>
  
        <div className="flex flex-col items-center text-center">
          <h2 className="text-2xl   text-blue-700 mb-10">
            Choose Confidence with Our Guaranteed Results

          </h2>
          
          <button className="bg-cyan-400 hover:bg-blue-700 text-white  py-2 px-10 rounded-full text-md">
            Scehdule Your Teeth Whitening Appointment
          </button>
        </div>
    
</section>


</div>

<section 
      className="relative py-16 md:py-24 bg-cover bg-center bg-fixed"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Main Section Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-12">
          What You Must Know
        </h2>

        {/* 2. THE GRID SETUP */}
        {/* Responsive grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* 3. MAPPING THE DATA */}
          {cardData.map((card) => (
            <InfoCard2 key={card.id} title={card.title}>
              {card.content}
            </InfoCard2>
          ))}
          
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

export default Whitening;
