import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";

// Oral & Maxillofacial

const Facial = () => {
    const FacialFAQs = [
{ id: 1, question: "01. What is a maxillofacial prosthodontist?", answer: "A maxillofacial prosthodontist focuses on restoring facial and oral structures in patients who have lost structures through injury, operation, or birth deficiency." },
        { id: 2, question: "02. Can oral surgery be prevented?", answer: "In some cases, oral surgery can be prevented with good oral health and hygiene, as well as regular dentist visits. However sometimes you will need oral surgery even if your oral health is good and you regularly visit the dentist. Wisdom tooth removal surgery is difficult to prevent as it depends on the pain your wisdom teeth cause and the way they have erupted in the mouth." },
        { id: 3, question: "03. Is oral surgery painful?", answer: "Oral surgeons prioritize ensuring patients are comfortable during treatment and surgery. During the consultation, patients can discuss any concerns they have about the procedure with their surgeon, who will recommend the best options to help them feel at ease during the surgery. Many oral surgeries can be performed under sedation, which can effectively manage pain and help patients feel more relaxed during the procedure. Following the surgery, patients may experience some pain or discomfort, but this can usually be managed with pain medication and typically subsides within a few days." },
        { id: 4, question: "04. When do you need to see an oral surgeon?", answer: "Oral surgery, which includes complex dental treatments like implant placement, wisdom tooth removal, and TMJ treatment, typically involves sedation to ensure patient comfort. Following the procedure, patients may require rest and recovery time, as it may take some time for the sedation to wear off. Swelling, pain, and discomfort may also be experienced, but these can be managed with ice packs and pain medication. Recovery time usually takes a few days, during which patients may need to modify their diet and dental care routine. It is important to have someone available to drive the patient home after the surgery." },
        { id: 5, question: "05. What can I expect after oral surgery?", answer: "Oral surgery involves more complex dental treatment such as implant placement, treatment for TMJ and wisdom tooth removal. For most oral surgeries you’ll be sedated. This means you will likely need time to rest and recover following surgery. It may take some time for the sedation to wear off so you may need someone to drive you home. You might experience some swelling, pain or discomfort. Using ice packs and taking pain medication can help with recovery and pain. It will normally take a couple of days for you to recover. You will need to make some changes to your diet and dental care routine during that time." },
        { id: 6, question: "06. Difference between a dentist and an oral surgeon.", answer: "A general dentist offers simple dental services, including checkups, scaling and fillings while an oral surgeon specializes in complicated surgeries which include; dental implants and jaw surgery." },
];

  return (
    <div>
        {/* Hero Section */}
        <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Oral-Maxillofacial-Surgeon.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h2 className="text-white font-bold text-sm sm:text-base md:text-xl ">Treatments</h2>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
Oral & Maxillofacial Surgeon
                        </h1>
                    </div>
                </div>
            </div> 


<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:pt-20 md:pb-0 ">
             <p className="text-left text-sm md:text-base text-black mb-1  ">
 Restore your smile and confidence with the best maxillofacial surgeon in Lahore!


      </p>
<p className="text-left text-sm md:text-base text-black  ">
The oral and maxillofacial surgeon, is one who specializes in treating conditions in the mouth, face, and jaw region. Patients who require complex dental treatments or surgery are typically referred to an oral and maxillofacial specialist, who makes sure of their comfort before, during, and after the procedure.

 </p>
 <p className="text-left text-sm md:text-base text-black  ">
We have specialized training in sedation techniques and working under general anesthesia to help patients feel as comfortable as possible during surgery.
 </p>
 </section>


      {/* --- Section 1: What is it?  --- */}
      <section className="max-w-screen-xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-20">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl text-[#1e1b4b] mb-6">
What an Oral and Maxillofacial Surgeon Can Do?
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-0 leading-relaxed">
An oral surgeon can treat various diseases affecting the face, mouth and jaws.
            </p>

                        <p className="text-sm md:text-base text-gray-600 mb-6 leading-relaxed mb-0">
Here’s how an oral surgeon can help:

            </p>

            <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600  mb-0">
              <li className='mb-0'>Orthodontic treatment</li>
             <li>Wisdom teeth extractions</li>
             <li>Implant surgeries of teeth</li>
             <li>Treat facial trauma and injuries</li>
             <li>Treatment of TMJ disorders</li>
             <li>Reconstructive surgery to treat diseases</li>
             <li>Treat cysts or even tumours</li>
             <li>Treat cysts or even tumours</li>
             <li>Cosmetic surgery for the face and head region</li>
            </ul>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
The oral and maxillofacial surgery specialists provide remarkable outcomes when addressing functional and esthetic problems.

            </p>
          </div>

          {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2 self-stretch">
            <img 
              src="https://smileon.pk/wp-content/uploads/2023/03/oral-surgeon.webp"
              alt="Dental procedure" 
              className="w-full h-64 sm:h-72 lg:h-full object-cover rounded-3xl lg:rounded-l-[3rem]  shadow-lg"
            />
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
Care for Every Jaw and Face
                    </h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
      
                {/* LEFT COLUMN */}
                <div className="space-y-10">
      
                  {/* Benefits */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
Types of Surgeries We Can Perform
                    </h3>
      
      
                    <ul className="list-disc list-outside space-y-2 text-base text-white">
                    <li>Dental Implant Surgery</li>
                    <li>Wisdom Tooth Extraction</li>
                    <li>Jaw Surgery</li>
                    <li>Facial Trauma Surgery  </li>
                    </ul>
      
      
                  </div>
      
                  {/* Procedure */}
                  <div className='mb-16'>
                      
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
Benefits of Oral and Maxillofacial Surgery
                    </h3>
      
                    
      
                    <ul className="list-disc list-outside  text-base text-white">
                      <li> Helping position of the jaw</li>
                      <li> Give relief from TMJ disorders</li>
                      <li> Provide better chewing, speaking, and breathing abilities</li>
                      <li> Tooth replacement and dental implants</li>
                      <li> Surgery helps avoid further infections</li>
                     <li> Improve your smile and give confidence</li>
                    </ul>
                    <p className="text-base text-white leading-relaxed">
                      Get to be treated by a specialist maxillofacial oral surgeon at SmileOn to help improve your quality of life.
                    </p>
                  </div>
      
                  {/* Need to Know */}
                  <div className='pt-20'>
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
What To Expect During Procedure
                    </h3>
      
                    <p className="text-base text-white leading-relaxed">
                     Modern technology and anaesthetics used to make operations to be very accurate to the patient’s comfort.
                    </p>
                                        <p className="text-base text-white leading-relaxed">
                     After the treatments end, recommendations for follow-up care and recovery are offered to the patient.
                    </p>
                  </div>
      
                </div>
      
                {/* RIGHT COLUMN */}
                <div className="space-y-10">
      
                  {/* Types */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
Before Procedure
                    </h3>
      
                    <p className="text-base text-white leading-relaxed">
                      The surgeon determines a patient’s case and then develops a management plan for the treatment.

                    </p>
                  <p className="text-base text-white leading-relaxed">
                  Routine information for the procedure and any examinations and tests needed before the operation is given.
                    </p>
                  </div>
      
                  {/* Precautions */}
                  <div>
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
Why Choose SmileOn?
                    </h3>
                    <p className="text-base text-white leading-relaxed">
Our specialized oral surgery practice in Lahore offers a range of services to cater to your oral and maxillofacial surgery needs. Our experienced oral and maxillofacial surgeon, Dr. Ali Farooq, has 17 years of expertise in the field and ensures patients feel comfortable and at ease during their surgical procedures.

                    </p>
      
                     <ul className="list-disc list-outside space-y-2 text-base text-white">
                     <li> Professional treatment from a specialist </li>
                     <li> Modern and latest technology</li>
                     <li> Personalized treatment plan </li>
                    <li> Relaxed and hygienic environment</li>
                    <li> Can treat both functional and aesthetic issues</li>
                     <li> Thousands of happy and satisfied clients</li>
                    
                    </ul>
                  </div>
      
 <div>
                    <h3 className="text-cyan-400 font-semibold text-3xl mb-3">
                      Quick Tip
                    </h3>
                    <p className="text-base text-white leading-relaxed">
                    After the treatment, rest and good oral hygiene are essential for speedy recovery.
                    </p>
      
                  </div>
      

                </div>
      
              </div>
            </div>
      
  </section>
  <FAQsSection  title="FAQs"
        faqs={FacialFAQs}/>
        
      
    <Map />
    <Footer />

    </div>
  )
}

export default Facial
