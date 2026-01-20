import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Specialist = () => {


const specialistFAQs = [
{ id: 1, question: "01. What is a dental specialist?", answer: "A dental specialist is a dentist who has completed additional training in a specific area of dentistry beyond general dental school, such as orthodontics, periodontics, endodontics, or oral surgery." },
        { id: 2, question: "02. When should I see a dental specialist?", answer: "You should see a dental specialist when your general dentist refers you for complex procedures, specialized treatments, or when you need advanced care in a specific area of dentistry." },
        { id: 3, question: "03. What types of dental specialists are available?", answer: "Common dental specialists include orthodontists (braces), periodontists (gum disease), endodontists (root canals), oral surgeons (surgery), prosthodontists (restorations), and pediatric dentists (children's dentistry)." },
        { id: 4, question: "04. Do I need a referral to see a dental specialist?", answer: "While some specialists accept direct appointments, many work in coordination with your general dentist who will refer you when specialized care is needed." },
        { id: 5, question: "05. Are specialist treatments more expensive?", answer: "Specialist treatments may cost more due to the advanced training and specialized equipment required, but they provide expert care for complex dental issues." },
        { id: 6, question: "06. What is a specialist orthodontist?", answer: "A general dentist provides routine dental care, while a specialist has completed additional years of training in a specific area of dentistry and focuses on complex cases in their specialty." },
];


  return (
    <div className='font-jost'>
              {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Orthodontist-Specialists.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
Orthodontist Specialist in Lahore
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">
            The importance of braces is no secret. Braces are very familiar to most people, especially during the teenage years. Dental braces have been around for many years to correct teeth and jaws and help achieve a straight and attractive smile. They are typically used byorthodontist specialist, who have extra post-graduate training, specifically in orthodontic treatments.
          </p>
                    <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">
           Braces can straighten, align and position teeth. Most people get braces in their early teenage years, but it’s now becoming more common for adults to get braces too. Modern materials have made having braces much more comfortable and attractive than in the past. This has contributed to the increase in the popularity of getting braces.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
             
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">Overview</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                to retainers, to Invisalign treatments and more, for both adults and children.
               Your specialist orthodontist will recommend the best option for you, after assessing your teeth. Your treatment options vary from braces, to retainers, to <span className="text-cyan-400 hover:text-blue-900 font-bold">Invisalign clear aligners </span>treatments and more, for both adults and children.

              </p>
            </div>

            <div>
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl   ">Braces</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                Braces are the more traditional device used to straighten your teeth. There’s a range of different braces options available.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/10/OverviewOS-1536x1025.jpg"
                alt="Dental specialist performing procedure" 
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
      <div className="mb-10">
             
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">Fixed braces</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                These are the more traditional and common type of braces. Small brackets are bonded to the front of the teeth surfaces and a wire is run through them and held in place with a small coloured elastic band. You can have either plastic or metal brackets.

              </p>
            </div>

            <div>
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl   ">Braces</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                
                <span className="text-cyan-400 hover:text-blue-900 font-bold">Invisalign clear aligners </span>treatment involves wearing a series of clear thin aligners, which are a bit like a very thin mouthguard, or tray. Each aligner is worn for two weeks and then the next one in the series is used. Because they are removable, they can be taken out for eating, drinking and sport.


              </p>
            </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/10/Fixed-bracesOS-1536x1025.jpg" 
          alt="Dental specialist performing procedure" 
          className="w-full h-auto lg:h-[450px] rounded-[2.5rem] shadow-md object-cover"
        />
      </div>
    </div>


  </div>
</section>


{/* Education */}

<section className="w-full bg-white  overflow-hidden mb-10 mt-10 px-4 md:px-8">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12">        
        {/* LEFT COLUMN: Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mb-6">Education</h2>
          
          <div className="text-gray-600 text-sm md:text-base  mb-0">
            <p>Braces have been around for thousands of years. They were first invented in the early 1800s and have changed dramatically since then. They’re used to fix crooked teeth by straightening them to help you achieve that perfect straight smile, for life.
            </p>
            <p>
              Apart from making your teeth look great, there are also many important functional reasons for straightening teeth:

            </p>


            <ul className="list-disc pl-5 mb-0">
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
              You could also consult a specialist orthodontist if you notice other problems 
              such as difficulty chewing or biting, if your child complains of a clicking jaw, tooth grinding or clenching, 
              speech difficulties and breathing through the mouth instead of the nose.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 flex justify-center ">
          <div className="relative w-full max-w-[500px]  ">

            <img 
              src="https://smileon.pk/wp-content/uploads/2025/10/EducationOS0-2048x1367.jpg" alt="dental"
className="w-full h-[350px] md:h-[450px] object-cover rounded-3xl shadow-md"/>
          </div>
        </div>

      </div>
    </section>



 <section 
                      className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                      style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
        <div className="absolute inset-0 bg-black/70"></div>
      
      
      
      
              {/* Content wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">

                 <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16 tracking-wide">
You Need To Know
                    </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      
                {/* LEFT COLUMN */}
                <div className="space-y-10">
      
                  {/* Benefits */}
                  <div>
                    <h3 className="text-cyan-400  text-3xl mb-3">
Appointments
                    </h3>
      
      
                    <ul className="list-disc list-outside space-y-2 text-base text-white">
                    <li>Regular appointments are needed every 6 to 8 weeks while you have braces</li>
                    <li>The first consultation visit will include exams, x-rays, photographs and potentially moulds</li>
                    <li>The next visit is where your braces are glued onto your teeth surfaces</li>
                    <li>Once your braces are on, the wires will be adjusted every 6 to 8 weeks to make sure your teeth are moving into the correct position</li>
                    <li>Once your braces have done their job they are removed</li>
                    </ul>
      
      
                  </div>
      
                  {/* Procedure */}
                  <div className='mb-16'>
                      
                    <h3 className="text-cyan-400  text-3xl mb-3">
Before your appointment
                    </h3>
      
                    
      
                    <ul className="list-disc list-outside  text-base text-white">
                      <li> No special preparation is needed</li>
                      <li> Just call us and book your appointment</li>
                    </ul>
                  </div>
      
                  {/* Need to Know */}


                              <div>
                    <h3 className="text-cyan-400  text-3xl mb-3">
                How long it takes
                    </h3>
      
                    <p className="text-base text-white leading-relaxed">
                      The surgeon determines a patient’s case and then develops a management plan for the treatment.

                    </p>
                  <p className="text-base text-white leading-relaxed">
                  Routine information for the procedure and any examinations and tests needed before the operation is given.
                    </p>
                  </div>
      
      
                </div>
      
                {/* RIGHT COLUMN */}
                <div className="space-y-10">
      
                  {/* Types */}

                                    <div >
                    <h3 className="text-cyan-400  text-3xl mb-3">
How long it takes
                    </h3>
      
                    <p className="text-base text-white leading-relaxed">
The total length of time braces are on for depends on the person.. On average braces will be on for 2 years, in some cases this will be shorter or longer.
                    </p>
                    
                    <ul className="list-disc list-outside  text-base text-white">
                    <li> How long you have braces on for depends on your teeth and situation</li>
                    <li> On average braces will be on for 2 years, although in some cases this can be shorter or longer</li>
                    <li> The consultation visit will usually take around 60 minutes</li>
                    <li> Getting your braces will usually take around 60 minutes</li>
                    <li> Just call us and book your appointment</li>
                     <li> Just call us and book your appointment</li>
                    </ul>


                        
                  </div>

      
                  {/* Precautions */}
                  <div>
                    <h3 className="text-cyan-400  text-3xl mb-3">
After your appointment
                    </h3>
      
                     <ul className="list-disc list-outside space-y-2 text-base text-white">
                     <li> You will need to follow the home care routine recommended by your orthodontist specialist in Lahore </li>
                     <li> After your braces are removed, you will need to use the retainer or removable plate custom-made for you</li>

                    
                    </ul>
                  </div>
      
 <div>
                    <h3 className="text-cyan-400  text-3xl mb-3">
                      Quick Tip
                    </h3>
                    <p className="text-base text-white leading-relaxed">Follow the care instructions provided by your orthodontist specialist. Try to avoid overly hard to sticky foods so they don’t get stuck in your braces.


                    </p>
      
                  </div>
      

                </div>
      
              </div>
            </div>
      
  </section>
      <FAQsSection  title="FAQs"
        faqs={specialistFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Specialist


