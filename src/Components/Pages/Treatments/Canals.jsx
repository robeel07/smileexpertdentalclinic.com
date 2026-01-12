import React from 'react'
import FAQsSection from "./FAQ";



const CanalsFAQs = [
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
         
];


const Canals = () => {
  return (
    <div className="font-jost">
      

      {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%] bg-blue-900/40"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Root-Canals.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-6xl px-4 flex items-end">
                    <div className="pb-8 mt-6 w-full">
                        <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
                        <h1 className="text-white text-3xl md:text-5xl ml-40 ">
Root Canals

                        </h1>
                    </div>
                </div>
            </div>  


                                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                                   {/* --- Top Text --- */}
            <p className="text-left text-sm md:text-base text-black mb-1  ">Do you feel nervous about having to get a root canal treatment? Do not worry; this treatment is known to help save millions of teeth each year. Root canal treatments allow dentists and endodontists to save millions of teeth from extraction annually.
            </p>
                        <p className="text-left text-sm md:text-base text-black mb-1  ">Endodontic treatment is another name associated with the process; the goal is to save a tooth affected by decay, disease, or injury. From this, we get that through root canal treatment; patients can keep their natural teeth rather than extracting them.


            </p>

           </section>
      
      
           <div className="font-sans text-gray-800">
            {/* --- Section 1: What is it? (Text Left, Image Right on Desktop) --- */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
              <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl md:text-4xl text-[#1e1b4b] mb-6">
                    When Do You Need a Root Canal?
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                The primary purpose of root canal therapy is to control pain, eliminate infection, and restore the capacity of your tooth. Here are some reasons to consider root canal services:  </p>
                  <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
                    <li>Sharp or hard-to-bear pain when chewing food or touching that specific tooth</li>
                    <li>Advanced periodontal disease, periodontitis, and caries extending to the root canal.</li>
                    <li>Inflammation or redness of the gum close to the aching tooth.</li>
                    <li>Crowning of the tooth signifies an infection within the tooth.</li>
      
                  </ul>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                   A root canal is required if a tooth’s pulp becomes inflamed or, in extreme cases, dead. This infection will swell and might cause you pain; if not well dealt with, it may spread to other teeth. Root canal treatment is the solution to this problem, eliminating pain and infection in the future.

                  </p>
                </div>
      
                {/* Image: Wide & Responsive Height */}
                <div className="w-full lg:w-1/2">
                  <img 
                    src="https://smileon.pk/wp-content/uploads/2025/12/When-Do-You-Need-a-Root-Canal-root-canal-2048x1365.jpg"
                    alt="What" 
                    className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
                  />
                </div>
              </div>
            </section>
      </div>  
      
       <section 
                      className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                      style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                  >
        <div className="absolute inset-0 bg-black/70"></div>
      
      
      
      
                                      {/* Content wrapper */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-white">
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      
                {/* LEFT COLUMN */}
                <div className="space-y-10">
      
                  {/* Benefits */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      Benefits of Root Canal Treatment
                    </h3>
      
                    <p className="text-sm text-white mb-4">
                    Tooth extraction, whether simple or surgical, has numerous advantages for oral well-being and comfort, with several additional benefits.
                    </p>
      
                    <ul className="list-disc list-outside space-y-2 text-sm text-white">
                      <li> <span className='text-cyan-500'><strong>Infection Prevention:</strong></span> Reduces the intensity of extreme toothache and pain.</li>
                      <li> <span className='text-cyan-500'><strong>Improved Alignment:</strong></span> Halts wear and tear and prevents infections from spreading across the body.</li>
                      <li> <span className='text-cyan-500'><strong>Enhanced Oral Health:</strong></span> Provides the opportunity to align the overcrowded teeth.</li>
                      <li> <span className='text-cyan-500'><strong>Protects Neighbouring Teeth:</strong></span>Helps prevent possible future dental ailments.</li>
                      <li> <span className='text-cyan-500'><strong>Easier Hygiene:</strong></span>Reduces the chances of affecting other teeth and gums.</li>
                      <li> <span className='text-cyan-500'><strong>Easier Hygiene:</strong></span> It helps make brushing and flossing easier.</li>
                    </ul>
                  <p className='text-sm text-white mb-4'>  This procedure is standard if a tooth is chipped, broken, or rotted or if it is causing issues affecting other teeth or the gum tissues.</p>
      
      <p className='text-sm text-white mb-4'>Extraction can alleviate pain, halt the spread of infection, and protect healthy teeth; this is a goal of the procedure. Besides, it can also help with overcrowding, where other teeth can move into better positions naturally. Extraction methods are recommended for impacted teeth as part of a healthy mouth later in life, such as wisdom teeth.
      </p>
      
      
                  </div>
      
                  {/* Procedure */}
                  <div>
                      
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      Tooth Extraction Procedure
                    </h3>
      
                    <p className="text-sm text-white mb-4">
                    Here is a step-by-step procedure for extracting the tooth.
                    </p>
                    
      
                    <ul className="list-disc list-outside space-y-2 text-sm text-white">
                      <li> <span className='text-cyan-500'><strong>Consultation:</strong></span> Your dentist will ask a few questions and review your dental profile, then will give you the best option to extract your tooth.</li>
                      <li> <span className='text-cyan-500'><strong>Anesthesia:</strong></span> You will be given local anesthesia before starting the procedure to numb that area.</li>
                      <li> <span className='text-cyan-500'><strong>Enhanced Oral Health:</strong></span> Provides the opportunity to align the overcrowded teeth.</li>
                      <li> <span className='text-cyan-500'><strong>Process:</strong></span> It is either extracted or taken out after a small surgical cut on the gum.</li>
                      <li> <span className='text-cyan-500'><strong>Easier Hygiene:</strong></span>Reduces the chances of affecting other teeth and gums.</li>
                      <li> <span className='text-cyan-500'><strong>Post-Procedure Care:</strong></span> The dentist will ask you to follow aftercare instructions to reduce pain and swelling.</li>
                    </ul>
                  </div>
      
                  {/* Need to Know */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg ">
                      Need to Know
                    </h3>
      
                    <p className="text-sm text-white leading-relaxed">
                      Pain and slight soreness after the procedure are natural, mainly if your wisdom teeth are extracted. We often advise the patient to stay in bed for at least two to three days. It is also acceptable to experience some bleeding. Plus, the cost of tooth extraction in Pakistan ranges from 2,000 – 10,000 PKR. For more information, visit us today!
                    </p>
                  </div>
      
                </div>
      
                {/* RIGHT COLUMN */}
                <div className="space-y-10">
      
                  {/* Types */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      Types of Tooth Extraction: Simple vs. Surgical
                    </h3>
      
                    <p className="text-sm text-white leading-relaxed">
                      There are two categories of tooth extraction: simple and surgical tooth extraction, depending on the situation and the nature of the tooth. The simple extraction would be done in a case where the dentist can readily see the tooth. The surgical extraction is done when the tooth is impacted so it cannot be pulled out easily.
                    </p>
                                 <p className="text-sm text-white leading-relaxed">
      Understanding these differences will make your process smoother.
                    </p>
                    <ul className="list-disc list-outside space-y-2 text-sm text-gray-200">
                      <li>The simple procedure is undertaken when the whole tooth can be seen without much struggle, whereas the surgical procedure is undertaken when the tooth cannot easily be seen.</li>
                      <li>A simple procedure takes just a few minutes to extract the tooth naturally, whereas surgery extraction of a tooth might leave an incision on the gum to extract the tooth.</li>
                      <li>The recovery time for the less complex procedure is shorter than for the surgical tooth extraction.</li>
                    </ul>
                  </div>
      
                  {/* Precautions */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      Precautions After Extraction of Teeth
                    </h3>
                    <p className="text-sm text-white leading-relaxed">
      Understanding these differences will make your process smoother.
                    </p>
      
                     <ul className="list-disc list-outside space-y-2 text-sm text-white">
                      <li> <span className='text-cyan-500'><strong>Control Bleeding:</strong></span> Bite gently on a gauze pad over the extraction site of the bleeding. Change the gauze as necessary, and do not spit or use a straw because either procedure will disturb the clot.</li>
                      <li> <span className='text-cyan-500'><strong>Manage Pain and Swelling:</strong></span> Use analgesics only when the doctor recommends or use non-prescribed medications only at the recommended doses. Crush ice with water and put the mixture on the outside of your face for about 15-20 minutes to bring the swelling down.</li>
                      <li> <span className='text-cyan-500'><strong>Follow a Soft Diet: </strong></span> Take cold, pure, or blander liquid and semi-solid foods such as yogurts, milk soups, and mashed vegetables. No hot, spicy, or hard goods are to be taken for a few days after extraction, as the side of the extraction should not be chewed on.</li>
                      <li> <span className='text-cyan-500'><strong>Maintain Oral Hygiene: </strong></span> From now on, you should clean your mouth delicately and not brush the extraction area for the first 2-3 days. After 24 hours, wash the site gently with salt water to minimize possible pain and encourage faster healing.</li>
                    </ul>
                  </div>
      
 <div>
                    <h3 className="text-cyan-400 font-semibold text-lg mb-3">
                      Quick Tip
                    </h3>
                    <p className="text-sm text-white leading-relaxed">
                    After the treatment, rest and good oral hygiene are essential for speedy recovery.
                    </p>
      
                  </div>
      

                </div>
      
              </div>
            </div>
      
                                </section>
                                   
      <FAQsSection  title="FAQs"
        faqs={CanalsFAQs}/>
      
    </div>
  )
}

export default Canals;
