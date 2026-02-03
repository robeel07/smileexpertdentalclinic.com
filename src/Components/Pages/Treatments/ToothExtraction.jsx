import React from 'react'
import FAQsSection from "./FAQ";
import Map from "./Map";
import Footer from "./Footer";


const ExtractionFAQs = [
{ id: 1, question: "01. How much do Scaling & Polishing services cost?", answer: "The price of Scaling & Polishing services depends upon the tartar deposit upon the teeth which we determine in initial examination. In most cases its 8000 PKR." },
        { id: 2, question: "02. Does Scaling & Polishing cause discomfort?", answer: "This treatment should never cause you any discomfort or pain. However, we have to mention that it is totally fine to experience some discomfort during the services." },
        { id: 3, question: "03. Do teeth polishing whiten teeth?", answer: "Teeth polishing may not be as effective as bleaching procedures since it only removes stains on the outer layer of the teeth, but it makes your teeth seem polished." },
        { id: 4, question: "04. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },
        { id: 5, question: "05. What will happen if I have poor oral hygiene?", answer: "Poor oral hygiene can lead to a number of health concerns, some of them extremely serious if left untreated. Some of the common signs of poor oral health are bleeding gums, swollen or inflamed gums, loose teeth and bad breath. Research also shows a clear link between periodontal disease and cardiovascular disease, including increased risk of stroke and heart attack, premature birth and an increased risk of pneumonia, particularly in elderly patients." },
        { id: 6, question: "06. What is periodontal disease?", answer: "Periodontal (or gum) disease is a process that starts with a biofilm that adheres to the surface of your teeth. Gums first become red, inflamed and swollen. Later, the bone that supports the teeth is eaten away. In the final stages, this leads to tooth loss." },
        { id: 7, question: "07. Why does the dental need to scrape off plaque and tartar?", answer: "We all have bacteria in our mouth, even if we have great oral hygiene at home. Plaque is formed when this bacteria mixes with food and proteins in your mouth. It’s the sticky, pale yellow film that coats your teeth and gets under your gum line. If plaque stays on your teeth it can harden into tartar and give you even bigger problems. Tartar build-up can’t be removed at home. It needs to be carefully scraped off by a special scaler tool in a dental clinic. The bacteria in plaque and tartar damages the enamel, or outer layer of your teeth. But if you remove it regularly, you can help prevent tooth decay, receding gums and gum disease." },
        { id: 8, question: "08. Is scaling good for teeth?", answer: "Yes, scaling is very good for teeth! It helps prevent and treat gum disease and reduces plaque and tartar build-up on their teeth." },
];

const Extraction = () => {
  return (
    <div className='font-jost'>
      
        {/* Hero Section */}
      
       <div
                className="relative w-full min-h-[300px] sm:min-h-[400px] lg:min-h-[350px]  bg-cover bg-[center_50%] flex items-center pt-28 sm:pt-32"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Tooth-Extraction.jpg")` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>

    <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <h1 className="text-white font-extrabold text-center
        text-3xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl
        leading-tight pt-5 pb-1 max-w-5xl -mt-12 sm:mt-0 mx-auto drop-shadow-[0_6px_20px_rgba(0,0,0,0.7)]">
      Tooth Extraction
    </h1>
  
</div>
            </div> 

                           <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
      
      {/* --- Top Text --- */}
      <div className="text-left text-sm md:text-base text-black mb-12  mx-auto">
      <p className='mb-0'>
        Are you feeling anxious about pulling your teeth? No need to worry! The experienced dentist tooth extraction is now in your town. Furthermore, people are usually surprised that extraction is more frequent than expected.
      </p>
      <p className='mb-0'>
        Tooth extraction is the procedure in which one or more teeth are removed from the patient’s jaw. Extraction is the right thing to do if it cannot be saved. The dentist may need to pull it out for several reasons: the tooth is rotten, affected by some infection, or, for instance, if there are overcrowded teeth in the mouth.
      </p>
      <p className='mb-0'>
        Tooth extraction is the procedure in which one or more teeth are removed from the patient’s jaw. Extraction is the right thing to do if it cannot be saved. The dentist may need to pull it out for several reasons: the tooth is rotten, affected by some infection, or, for instance, if there are overcrowded teeth in the mouth.
      </p>
</div>
      {/* --- Main Content Layout (Image and Text) --- */}
      <div className="flex flex-col lg:flex-row lg:space-x-12">
        
        {/* --- Text Content Container --- */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-2xl sm:text-3xl  text-blue-600 mb-6">
            Common Reasons For Tooth Extraction
          </h2>

          <p className="text-sm md:text-base text-black mb-4">
           Dentists always try to save teeth as much as possible, but extraction is sometimes necessary.
          </p>

          
          {/* --- Bulleted List --- */}
          <ul className="list-disc list-inside text-sm md:text-base text-black space-y-2 ml-4">
            <li>The tooth cannot be restored anymore due to the extent of its decay.</li>
            <li>Teeth in poor alignment can also lead to hurt or infection of the teeth.</li>
            <li>Undermines the root of a tooth and presents potential for extraction.</li>
            <li>To create room for aligned teeth.</li>
            <li>Infections that are resistant to treatment may call for removal.</li>
            <li>For other immune-compromised individuals to avoid spreading.</li>
          </ul>

          <p className="text-sm md:text-base text-black mt-6">
            These cases will lead to the broken tooth extraction or complete tooth extraction to embrace general improved health. Extraction helps to avoid complications involving a given tooth and improves the general oral health of an individual. Besides, extraction can be necessary for those teeth that started to influence other teeth, like the wisdom teeth that, as stated, can push other teeth and cause crowding, misalignment, or pain. Sometimes, when gum disease is severe, extraction helps avoid further damage to the tissues and maintains the rest of the dental structure.
          </p>
        </div>

        {/* --- Image Container --- */}
        <div className="lg:w-1/2">
          
          <img 
            src="https://smileon.pk/wp-content/uploads/2025/09/Common-Reasons-For-Tooth-Extraction-2048x1365.jpg"
            alt="Illustration of teeth scaling and polishing procedure" 
            className="w-full h-auto object-cover rounded-lg  shadow-xl"
          />
        </div>

      </div>
    </section>  



 <section 
                className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative " 
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
  <div className="absolute inset-0 bg-black/70"></div>




                                {/* Benifits */}
      <div className="relative z-10 max-w-full mx-auto px-4 md:px-8 text-white">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* Benefits */}
            <div>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
                Benefits of Tooth Extraction
              </h3>

                           <p className="text-base text-white leading-relaxed">
              Tooth extraction, whether simple or surgical, has numerous advantages for oral well-being and comfort, with several additional benefits.
              </p>

              <ul className="list-disc list-outside space-y-2 text-base text-white">
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
                
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
                Tooth Extraction Procedure
              </h3>

                           <p className="text-base text-white leading-relaxed">
              Here is a step-by-step procedure for extracting the tooth.
              </p>
              

              <ul className="list-disc list-outside space-y-2 text-base text-white">
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
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
                Need to Know
              </h3>

                           <p className="text-base text-white leading-relaxed">
                Pain and slight soreness after the procedure are natural, mainly if your wisdom teeth are extracted. We often advise the patient to stay in bed for at least two to three days. It is also acceptable to experience some bleeding. Plus, the cost of tooth extraction in Pakistan ranges from 2,000 – 10,000 PKR. For more information, visit us today!
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* Types */}
            <div>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
                Types of Tooth Extraction: Simple vs. Surgical
              </h3>

                           <p className="text-base text-white leading-relaxed">
                There are two categories of tooth extraction: simple and surgical tooth extraction, depending on the situation and the nature of the tooth. The simple extraction would be done in a case where the dentist can readily see the tooth. The surgical extraction is done when the tooth is impacted so it cannot be pulled out easily.
              </p>
                           <p className="text-base text-white leading-relaxed">
Understanding these differences will make your process smoother.
              </p>
              <ul className="list-disc list-outside space-y-2 text-base text-gray-200">
                <li>The simple procedure is undertaken when the whole tooth can be seen without much struggle, whereas the surgical procedure is undertaken when the tooth cannot easily be seen.</li>
                <li>A simple procedure takes just a few minutes to extract the tooth naturally, whereas surgery extraction of a tooth might leave an incision on the gum to extract the tooth.</li>
                <li>The recovery time for the less complex procedure is shorter than for the surgical tooth extraction.</li>
              </ul>
            </div>

            {/* Precautions */}
            <div className="pt-10 lg:pt-24 mb-20">
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
                Precautions After Extraction of Teeth
              </h3>
                           <p className="text-base text-white leading-relaxed">
Understanding these differences will make your process smoother.
              </p>

               <ul className="list-disc list-outside space-y-2 text-base text-white">
                <li> <span className='text-cyan-500'><strong>Control Bleeding:</strong></span> Bite gently on a gauze pad over the extraction site of the bleeding. Change the gauze as necessary, and do not spit or use a straw because either procedure will disturb the clot.</li>
                <li> <span className='text-cyan-500'><strong>Manage Pain and Swelling:</strong></span> Use analgesics only when the doctor recommends or use non-prescribed medications only at the recommended doses. Crush ice with water and put the mixture on the outside of your face for about 15-20 minutes to bring the swelling down.</li>
                <li> <span className='text-cyan-500'><strong>Follow a Soft Diet: </strong></span> Take cold, pure, or blander liquid and semi-solid foods such as yogurts, milk soups, and mashed vegetables. No hot, spicy, or hard goods are to be taken for a few days after extraction, as the side of the extraction should not be chewed on.</li>
                <li> <span className='text-cyan-500'><strong>Maintain Oral Hygiene: </strong></span> From now on, you should clean your mouth delicately and not brush the extraction area for the first 2-3 days. After 24 hours, wash the site gently with salt water to minimize possible pain and encourage faster healing.</li>
              </ul>
            </div>

          </div>

        </div>
      </div>

                          </section>


    <FAQsSection  title="FAQs"
        faqs={ExtractionFAQs}/>

           <Map />
           <Footer />

    </div>
  )
}

export default Extraction;




