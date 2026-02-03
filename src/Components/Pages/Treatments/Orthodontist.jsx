import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";


const Orthodontist = () => {

const OrthodontistFAQs = [
{ id: 1, question: "01. What is orthodontic treatment and why do I need it?", answer: "Orthodontic treatment is the use of braces, clear aligners, or other appliances to move teeth into better positions. It is typically recommended to improve the function and appearance of your teeth and bite or to correct issues like overcrowding, gaps between teeth, and misaligned bites." },
        { id: 2, question: "02. What are the different types of braces available?", answer: "The length of treatment depends on the severity of your dental issues and the type of treatment you receive. Typically, treatment can last anywhere from 6 months to 2 years or more." },
        { id: 3, question: "03. How long does orthodontic treatment usually take?", answer: "The length of treatment depends on the severity of your dental issues and the type of treatment you receive. Typically, treatment can last anywhere from 6 months to 2 years or more." },
        { id: 4, question: "04. Will I need to wear a retainer after my orthodontic treatment is complete?", answer: "An orthodontist is a specialist who has completed additional study after completing a four-year dental undergraduate program, an orthodontist typically practices first as a general dentist, before undertaking further post-graduate specialist studies FCPS. After additional full-time study in the field of orthodontics." },
        { id: 5, question: "05. Is orthodontic treatment painful?", answer: "It’s normal to experience some discomfort or soreness after getting braces or having them adjusted, but this usually goes away within a few days. Over-the-counter pain relievers like acetaminophen or ibuprofen can help manage any discomfort. Clear aligners like Invisalign are typically less painful than traditional braces, as they don’t involve any wires or brackets." },
        { id: 6, question: "06. What is orthodontics?", answer: "Orthodontics is the specialist field of dentistry focused on the diagnosis and treatment of issues developing from alignment problems with the teeth and jaws. Specialist orthodontists have extra training, specifically in this field." },
];

  return (
    <div className='font-jost text-black bg-white'>
          {/* Hero Section */}
            <div
                className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]  bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Orthodontics-2.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center
        text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Orthodontist Specialist in Khanewal
    </h1>
  
</div>
            </div>
      

<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed">
            Having straight teeth can completely transform your smile, which is why many dental practices offer orthodontic services. 
            Orthodontic treatments, including traditional braces and <span className="text-[#2db6fa] font-bold">Invisalign or Clear Aligners</span>, 
            have revolutionized the options available for individuals with crowded or <span className="text-[#2db6fa] font-bold">crooked teeth</span>. 
            At our practices, we have both <span className="text-[#2db6fa] font-bold">specialist orthodontists</span> and general dentists 
            with a special interest in orthodontics who can provide a range of orthodontic services to help straighten teeth and achieve a more confident and radiant smile.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">Overview</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Your <span className="text-[#2db6fa] font-bold">specialist orthodontist</span> or dentist will recommend the best option for you, 
                after assessing your teeth. Your treatment options vary from fixed <span className="text-[#1e1b4b] font-bold">braces</span>, 
                to retainers, to Invisalign treatments and more, for both adults and children.
              </p>
            </div>

            <div>
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl   ">Braces</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                You will have likely heard of <span className="text-[#2db6fa] font-bold">braces</span>. They're traditionally a metal device 
                used to straighten your teeth. There are a range of different braces options available.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/09/Overview-1024x684.jpg"
                alt="Doctor performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>


{/* Braces */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fbfe] w-full font-sans">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    
    {/* CONTENT COLUMN: order-1 pushes it to the top on mobile */}
    <div className="w-full lg:w-[45%] order-2 md:order-2">
      {/* Fixed Braces Block */}
      <div className="mb-10 lg:mb-12">
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-4">Fixed braces</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          Fixed braces are a more traditional and commonly used type of <span className="text-[#2db6fa] font-bold">braces</span>, 
          consisting of small brackets that are bonded to the front surfaces of your teeth, with a wire running through 
          them and held in place with a small colored elastic band. These brackets can be made of plastic or metal.
        </p>
      </div>

      {/* Invisalign Block */}
      <div>
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-4">Invisalign</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
          <span className="text-[#2db6fa] font-bold">Invisalign or Clear Aligners</span> treatment involves wearing a series 
          of clear and thin aligners, similar to a very thin mouthguard or tray. Each aligner is worn for two weeks before 
          moving on to the next one in the series. Invisalign aligners are removable, making them easy to take out for 
          eating, drinking, and participating in sports.
        </p>
      </div>
    </div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/09/Fixed-braces-2048x1367.jpg" 
          alt="Dentist performing procedure" 
          className="w-full h-auto lg:h-[450px] rounded-[2.5rem] shadow-md object-cover"
        />
      </div>
    </div>


  </div>
</section>
{/* Education */}

<section className="w-full bg-white  overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">        
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mb-6">Education</h2>
          
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              Braces have been in use for thousands of years, with the first invention dating back to the early 1800s. 
              Over time, they have undergone significant changes and advancements to become the popular orthodontic treatment they are today. 
              Braces are used to straighten <span className="text-[#2db6fa] font-bold">crooked teeth</span>, achieving a perfect and straight smile that can last a lifetime.
            </p>

            <p>
              Invisalign, on the other hand, is a modern and nearly invisible way to straighten teeth. Since its introduction in 1997, 
              Invisalign has transformed millions of smiles around the world.
            </p>

            <p className="font-medium text-[#1e1b4b]">
              Apart from making your teeth look great, there are also many important functional reasons for straightening teeth:
            </p>

            <ul className="list-disc pl-5 space-y-3">
              <li>
                <span className="text-[#2db6fa] font-bold">Crowded and crooked teeth</span> are hard to clean which can, in turn, cause a range of problems in the future
              </li>
              <li>
                Too much space between the teeth, caused by the jaw being too big for the teeth or missing teeth
              </li>
              <li>
                If the upper and lower jaws are misaligned or there's an underbite or overbite
              </li>
            </ul>

            <p>
              You could also consult a <span className="text-[#2db6fa] font-bold">specialist orthodontist</span> if you notice other problems 
              such as difficulty chewing or biting, if your child complains of a clicking jaw, tooth grinding or clenching, 
              speech difficulties and breathing through the mouth instead of the nose.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 flex ">
          <div className="relative w-full h-full  ">

            <img 
              src="https://smileon.pk/wp-content/uploads/2022/11/Benefits-of-Invisalign-clear-aligners-over-traditional-braces-e1759240546413.jpg" 
              alt="Comparison of traditional braces and clear aligners" 
className="w-full h-full min-h-[400px] lg:min-h-full rounded-3xl lg:rounded-r-none lg:rounded-l-[3rem] shadow-sm object-cover"            />
          </div>
        </div>

      </div>
    </section>


{/* FAQ  */}

      <FAQsSection  title="FAQs"
        faqs={OrthodontistFAQs}/>
        
                  <Map />
                   <Footer />

    </div>
  )
}

export default Orthodontist




