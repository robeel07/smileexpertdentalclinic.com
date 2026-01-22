import React from 'react'
import FAQsSection from "./FAQ";
import Map from "./Map";
import Footer from "./Footer";



const TMJFAQs = [
{ id: 1, question: "01. How much does TMJ treatment cost in Lahore done through a dentist?", answer: "There is no standard price for treating TMJ, as several factors determine the price. Here, there are some methods of treating TMJ, though some may cost more than others, depending on the doctor you visit. If you require dental aids like a plate or braces, your practitioner can inform you of the cost of the treatment at your consultation visit." },
        { id: 2, question: "02. Will a mouthguard help TMJ?", answer: "Yes, a mouth guard will be helpful by limiting jaw clenching, restricting teeth grinding, and decreasing compression on the joint." },
        { id: 3, question: "03. Can stress cause TMJ?", answer: "It is a result of definite stress that can cause TMJ by relating it to raising jaw clenching and muscle tension. Also, it can be caused by putting pressure on the joint." },
        { id: 4, question: "04. Can TMJ go away on its own?", answer: "TMJ pain will not go away unless treated usually, with treatment consisting of several therapies, as discussed above. If you feel like you always have some pain in your jaws or are suffering from TMJ, we advise you to visit your dentist for assistance." },
        { id: 5, question: "05. Can TMJ be serious?", answer: "If TMJ is not treated, it can intensify and become ugly, and this also makes it hard to manage. TMJ or Jaw pain should also be referred to a dentist if you are experiencing any issues. " },
        { id: 6, question: "06. How do you treat TMJ?", answer: ["Here are a few methods in which TMJ can be treated, and the treatment mainly depends on the extent of the problem. Sometimes, treatment may be switching to a soft food diet, administering certain medication, or doing some jaw stretching and relaxation exercises. It can be treated by a dental guard or plate or orthodontic treatment like a brace.",
          "You could also ask your dentist about panoramic X-rays. They provide the overall picture of the whole oral cavity at once on one single x-ray. Diseases of the teeth which included, impacted teeth, jaw bone disorders, infection, abscess and fracture are typically diagnosed using a panoramic x-ray."
        ]

         },
        { id: 7, question: "07. How much time does TMJ take to fade away?", answer: "TMJ symptoms can be cured within weeks to months of treatment of the disorder, depending on the intensity of the disorder and its causative factor." },
         { id: 8, question: "08. Can braces cause TMJ?", answer: "Orthodontic braces do not cause TMJ, but certain bite pressure during the process can sometimes result in problems." },
         
];


const TMJ = () => {
  return (
    <div className="font-sans">


      {/* Hero Section */}
        


                 <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/TMJ.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
TMJ
                        </h1>
                    </div>
                </div>
            </div> 



                                <section className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:pb-0">
                                   {/* --- Top Text --- */}
            <p className="text-left text-sm md:text-lg text-black mb-1  ">If you feel extreme jaw pain while eating and carrying out your normal activities, you have temporomandibular joint dysfunction. TMJ treatment in Pakistan is possible with the expert and advanced treatment at SmileOn Dental Clinic, where we focus on your comfort and the easing of pain in your jaw.


            </p>
                        <p className="text-left text-sm md:text-lg text-black mb-1  ">TMJ is a disorder of the joint that is between the jaw bone and the skull. It may lead to several conditions, including toothache, jaw pops, headache, or even cause problems in chewing foods. Our TMJ specialist dentist diagnoses and treats TMJ disorders to suit each patient individually.



            </p>

           </section>
      
      
           <div className="font-sans text-gray-800">
            {/* --- Section 1: What is it? (Text Left, Image Right on Desktop) --- */}
            <section className="max-w-full mx-auto px-6 py-12 md:py-20">
              <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <h2 className="text-2xl md:text-4xl text-[#1e1b4b] mb-6">
Symptoms of TMJ
                  </h2>
                  <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed">
                Common TMJ Symptoms are:
  </p>
                  <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6">
                    <li>Jaw pain or tenderness.</li>
                    <li>General muscle weakness or paralysis.</li>
                    <li>Difficulty in controlling their tongue.</li>
                    <li>Pain while chewing</li>
                    <li>Impossible to open the jaw.</li>
                    <li>Migraine or any ear problems</li>
      
                  </ul>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                  Indeed, it might be TMJ disorder if you are having pain in the jaw or have limited ability to move it. Patients may complain of pain, clicking noises, and joint stiffness while opening the mouth. Getting a consultation from one of the best TMJ specialists is useful in giving the right diagnosis and treatment.

                  </p>
                </div>
      
                {/* Image: Wide & Responsive Height */}
                <div className="w-full lg:w-1/2">
                  <img 
                    src="https://smileon.pk/wp-content/uploads/2025/09/Symptoms-of-TMJ-2048x1365.jpg"
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




                                {/* Benifits */}
      <div className="relative z-10 max-w-full mx-auto px-4 md:px-8 text-white">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* LEFT COLUMN */}
          <div className="space-y-10">

            {/* Benefits */}
            <div>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
Benefits of Getting TMJ Treatment
              </h3>

                           <p className="text-base text-white leading-relaxed">
             Our treatments can give long-term pain relief at affordable jaw surgery cost in Pakistan.
TMJ Treatment Can Help You:
              </p>

              <ul className="list-disc list-outside space-y-2 text-base text-white">
                <li> Treat TMJ disorder and muscle tension</li>
                <li>Better chewing and speaking skills</li>
                <li> Reduce headaches and ear discomfort</li>
                <li> Prevent further damage to teeth and jaw</li>
              </ul>
            <p className='text-base text-white mb-4'>  Our TMJ services can provide the right treatment option, which can help in managing your symptoms efficiently. It would be best to visit the TMJ specialist in Lahore at SmileOn Dental Clinic for such issues.</p>
            </div>

            {/* Why */}
            <div className='"pt-10 lg:pt-40 mb-20"'>
                
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
Why Choose SmileOn for TMJ Treatment?
              </h3>

                           <p className="text-base text-white leading-relaxed">
Get your treatment done with our highly qualified staff and the best doctor for jaw pain.
<p className='font-bold'>Reasons to Choose SmileOn:</p>


              </p>
              

              <ul className="list-disc list-outside space-y-2 text-base text-white">
                <li> Expert doctor for jaw pain in Pakistan.</li>
                <li> Advance treatment options</li>
                <li> Budget-friendly treatments</li>
                <li> Follow-ups and individualized care mapping</li>
                <li> Trusted by patients for effective treatment of TMJ</li>
              </ul>
            </div>

            {/* Follow up */}
            <div className='"pt-10 lg:pt-24 mb-20"'>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
Follow Ups
              </h3>

                           <p className="text-base text-white leading-relaxed">
                Follow-up visits are done periodically to review your status and modify the management plan. We also offer guidance on preventing possible causes affecting the sustainable outcome.


              </p>
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-10">

            {/* Types */}
            <div>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
TMJ Self-Care Advice After Treatment
              </h3>

                    <h3 className=" font-semibold text-lg mb-0">
1. Avoid Hard or Chewy Foods
              </h3>

                           <p className="text-base text-white leading-relaxed mb-5">
Taking meals gently without forcing your jaws to open wide will help heal the joint.


              </p>


              
                    <h3 className=" font-semibold text-lg mb-0">
2. Practice Good Posture
              </h3>

                           <p className="text-base text-white leading-relaxed mb-5">
Stand correctly to reduce pressure on your jaw; thus, your neck muscles will also not be under pressure.


              </p>


              
                    <h3 className=" font-semibold text-lg mb-0">
3. Limit Jaw Movements
              </h3>

                           <p className="text-base text-white leading-relaxed mb-5">
Do not yawn widely, chew gum, or engage in any activity that overstretches your jaw muscles.


              </p>


              
                    <h3 className=" font-semibold text-lg mb-0">
4. Follow Dentist’s Instruction
              </h3>

                           <p className="text-base text-white leading-relaxed mb-5">
Follow all recommendations of the TMJ specialist dentist about medications, exercises, and check-up times to get better and last.


              </p>
                   
            </div>

            {/* Precautions */}
            <div className="pt-10 lg:pt-24 mb-20">
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
Before your appointment
              </h3>
                         
               <ul className="list-disc list-outside space-y-2 text-base text-white">
                <li> No special preparation needed</li>
              </ul>
            </div>
  <div className='"pt-10 lg:pt-40 mb-10"'>
                    <h3 className="text-cyan-400 font-semibold text-2xl mb-3">
Need to Know
              </h3>

                           <p className="text-base text-white leading-relaxed">
For better and speedy recovery, it is advised to take the rest of the week and not to put pressure on your jaws.



              </p>
            </div>


          </div>



        </div>
      </div>

                          </section>
      
      
      
      
                                   
      <FAQsSection  title="FAQs"
        faqs={TMJFAQs}/>

           <Map />
           <Footer />
      
    </div>
  )
}

export default TMJ;




