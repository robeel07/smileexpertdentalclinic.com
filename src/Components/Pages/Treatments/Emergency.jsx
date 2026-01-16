import React from 'react'
import headerImg from "../../Images/EmergencyHeaderImage.png";
import Injuries from "../../Images/DentalInjuriesimage.png";
import Symptoms from "../../Images/Symptomsimage.png";
import { Link } from "react-router-dom";
import FAQsSection from "../../FAQ";

const EmergencyFAQs = [
{ id: 1, question: "01. How much do Scaling & Polishing services cost?", answer: "The price of Scaling & Polishing services depends upon the tartar deposit upon the teeth which we determine in initial examination. In most cases its 8000 PKR." },
        { id: 2, question: "02. Does Scaling & Polishing cause discomfort?", answer: "This treatment should never cause you any discomfort or pain. However, we have to mention that it is totally fine to experience some discomfort during the services." },
        { id: 3, question: "03. What should you do when a tooth falls out?",
           answer: [ "A lost tooth is one of the more common dental emergencies. If a tooth is knocked out, it can be very distressing, for children and adults. It’s very important to act quickly.",
            " If your child has lost a baby tooth don’t put it back in the socket. This can damage the new permanent tooth underneath.",
            "For adults, recover your tooth but do not touch the tooth at the root. While it may be difficult, make sure to only handle the crown part of your lost tooth to avoid any additional damage. Rinse the tooth using water, milk, or a saline solution to clean it. If you’re using saline solution make sure it’s sterile. Don’t wipe or scrub the tooth, just gently rinse off the root and crown. You can try to put your tooth into the empty socket. At the very least this will help keep the root protected. Hold the tooth in place by gently biting down on medical gauze or soft fabric. The pressure will keep your tooth from moving too much. If reinserting the tooth doesn’t work, place the tooth in a glass of milk or saline solution. Water won’t work for preserving your tooth as you go to a dentist or doctor. If you don’t have any milk or saline solution, place the tooth in your mouth between your cheek and gums.",
            "The faster you get to a dentist, the better chance you have of saving your tooth. If a dentist is unavailable, go straight to a hospital emergency room. Make sure to bring your tooth with you so they can try to reinsert it."
           ],
          
         },
        { id: 4, question: "04. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },
          { id: 5, question: "05. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },
            { id: 6, question: "06. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },

];


const Emergency = () => {
  return (
    <div>
           <div
                  className="w-full h-[20em] bg-center bg-cover"
                  style={{ backgroundImage: `url(${headerImg})` }}
                >
                  <div className='w-full h-full  text-white pt-[12em] p-6 md:p-10 lg:p-40'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold'>
            Emergency Dentist
                    </h1>
                  </div>
                         </div>
                 <section className="max-w-7xl mx-auto px-6 py-12 font-sans text-black  ">
      
      {/* Example of the link in the top paragraph */}
      <div className="mb-20">
        <p className="leading-relaxed  ">
          Do you feel pain? Have you got a dental emergency?{" "}
          <Link 
            to="/" 
            className="text-cyan-500 font-bold hover:text-blue-700 no-underline transition"
          >
            Toothache
          </Link>, 
          dental traumas, and {" "}
          <Link 
            to="/" 
            className="text-cyan-500 font-bold hover:text-blue-700 no-underline transition"
          >
            missing teeth
          </Link>{" "}
          as a result of being knocked out playing sports are all examples of a dental emergencies. Other dental emergencies could involve {" "}   
          <Link 
            to="/" 
            className="text-cyan-500 font-bold hover:text-blue-700 no-underline transition"
          >
             factured teeth
          </Link>
          , swollen facial tissues, or missing fillings. You can call us or schedule an urgent appointment online if you require a quick check-up for pain or a dental emergency.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 ">
        <div className="lg:w-1/2">
          <h2 className="text-3xl  text-blue-900 mb-6">Dental Injuries</h2>
          <p className="mb-4">
            You might shatter or chip or{" "}
            <Link 
              to="/services/broken-tooth" 
              className="text-cyan-500 font-semibold hover:text-cyan-700 no-underline transition"
            >
              break a tooth
            </Link>{" "}
            while eating anything hard, necessitating immediate dental care. It’s also typical to get oral trauma in an accident and require emergency care. Some other common dental injury emergencies include:
          </p>
          
          <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6 "> 
              <li>A <Link to="/services/broken-tooth" 
              className="text-cyan-500 font-semibold hover:text-cyan-700 no-underline transition"> broken tooth</Link></li>
              <li>Directly impacting a tooth and knocking it out</li>
              <li>Avulsion of the teeth, or full tooth loss</li>

            </ul>
        </div>

        {/* Image Container */}
        <div className="w-full lg:w-1/2 ">
           <img 
            src={Injuries} 
            className="w-full h-55 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg" 
            alt="Dental Care"
          />
        </div>
      </div>
    </section>


    {/* Common Emergency */}
<section className="max-w-full mx-auto px-6 py-12 md:py-20 bg-[#28D2EA1A]">
        {/* flex-col-reverse ensures Text stays on top when stacked on mobile */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 xl:gap-20">
          
            {/* Image: Wide & Responsive Height */}
          <div className="w-full lg:w-1/2">
            <img 
              src={Symptoms} 
              alt="Hand using dental tools" 
              className="w-full h-56 sm:h-72 lg:h-[400px] object-cover rounded-[2.5rem] shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl  text-[#1e1b4b] mb-6">
              Common emergency symptoms
            </h2>
            <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
              Dental crises can be excruciatingly painful and disruptive. They occur suddenly and put you through a lot of stress. You may not feel any pain in some circumstances, but you still need emergency care. Always pay attention to any odd symptoms you experience in your mouth.</p>
              <p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
The following are the warning symptoms of a dental emergency:
            </p>

                      <ul className="list-disc list-outside ml-5 text-md md:text-base text-gray-600 space-y-2 mb-6 "> 
              <li> <Link to="/services/broken-tooth" 
              className="text-cyan-500 font-semibold hover:text-cyan-700 no-underline transition "> Tooth pain </Link>{" "} that comes on suddenly</li>
              <li>Swelling in your mouth or jaw</li>
            </ul>

            
          </div>
        
        </div>
      </section>
 <FAQsSection  title="EmergencyFAQs"
        faqs={EmergencyFAQs}/>
     
                         </div>
    
  )
}

export default Emergency;
