import React from 'react'
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";



const Makeover = () => {


const InfoCard = ({ title, children }) => (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg  shadow-lg h-full ">
        <h3 className="text-xl  text-cyan-400  pb-2">
            {title}
        </h3>
    
        <div className="text-gray-200 text-base space-y-3">
            {children}
        </div>
    </div>
);
const makeoverFAQs = [
{ id: 1, question: "01. How much does a dental makeover cost?", answer: "The extent of your cosmetic treatment determines the approach. It may involve a single or multiple treatments. Consult a dentist or specialist to discuss your goals and the recommended plan. They will guide you through the process. Book your dental makeover appointment online and indicate your preferences." },
        { id: 2, question: "02. How can I improve my smile?", answer: "There are a number of options available to enhance your smile, depending on the condition of your teeth and what you’re hoping to achieve. Some cosmetic dentistry treatments include teeth whitening, crowns and veneers, bonding, orthodontic treatments and implants. Talk to your dentist or specialist about your concerns and your treatment options." },
        { id: 3, question: "03. Is a smile makeover permanent?", answer: "Cosmetic dentists serve to correct the cosmetic look of your teeth and gums and your smile. They also do a lot of procedures for visual purposes like teeth whitening, veneer bonding, reshaping and many others. In addition, treating the misaligned teeth, and fixing crowns, braces, and bridges is also done by cosmetic dentists." },
        { id: 4, question: "04. What do cosmetic dentists do?", answer: "Cosmetic dentists serve to correct the cosmetic look of your teeth and gums and your smile. They also do a lot of procedures for visual purposes like teeth whitening, veneer bonding, reshaping and many others. In addition, treating the misaligned teeth, and fixing crowns, braces, and bridges is also done by cosmetic dentists." },

        { id: 6, question: "06. How can I make my teeth whiter?", answer: "Establishing good oral health habits and seeing your dentist and hygienist regularly is key for achieving whiter teeth. If you desire to address yellow teeth, there are diverse teeth whitening options. These range from at-home treatments to comprehensive dental makeovers. It’s advisable to consult your dentist to discuss your goals, as they can recommend the most suitable options for you." },
        { id: 7, question: "07. I’m anxious about visiting the dentist.", answer: "We understand dental fears from past negative experiences. Our caring dentists empathize with your concerns. Whether it’s anxiety, fear of pain, or worries about treatment costs, expressing your feelings is important. Ensuring your comfort is our priority." },
        { id: 8, question: "08. Is there a reasonable way to make my smile brighter?", answer: "Accidents with the tooth and mouth will require reconstructive cosmetic dentistry. Excellent oral health care and a good dentist relationship can stave off dental problems. That means home care and having your dentist’s number on speed dial. The daily healthy habits and the regular visits to the dentist. For the best oral health:" },
];


  return (
    <div className='font-jost'>
              {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Cosmetic-Dental-Makeover.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Cosmetic Dental Makeover Service in Lahore
                        </h1>
                    </div>
                </div>
            </div>
      
{/* What */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-12 ">
          <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed mb-0">
           Are you considering a makeover?  SmileOn Dental has the best cosmetic dentist, who will help you in crafting a perfect smile. Choosing cosmetic dentists for a makeover is a major decision. Here, you will get professionals, you can trust for this investment.
          </p>
            <p className="text-gray-600 text-[13px] md:text-[15px] leading-relaxed">
         Cosmetic dentistry services differ from essential or emergency care. Do thorough research for an informed choice. Our Lahore team consists of skilled and experienced cosmetic dentists.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[45%] mt-10 lg:mt-24">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">What is a Smile Makeover?</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Smile Makeover is a personal treatment plan personalized to your smile’s appearance using several cosmetic dental procedures. Getting your chipped, stained, or misaligned teeth fixed, and much more is no problem.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">The best team of dentists in Lahore leads our team to provide you with a variety of solutions to fix them that will suit your desires. A smile makeover treatment includes teeth whitening, veneers, braces, implants and more.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">Not only does it help you make a better impression but it also helps you be more confident and have healthier teeth and gums.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/10/smile-makeover.jpg"
                alt="Doctor performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

{/* Benifits */}
<section className="py-16 px-6 md:px-12 lg:px-24 bg-[#f8fbfe] w-full font-sans">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

    

    <div className="w-full lg:w-[45%] order-2 md:order-2">
      <div className="mb-10 lg:mb-12">
        <h2 className="text-[#1e1b4b] text-3xl md:text-4xl  mb-4">Benefits of Cosmetic Dentistry</h2>
        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
Dental development, oral health, and gum disease issues can affect teeth and smile appearance, as well as the function of teeth, mouth, and jaw. Injuries and accidents contribute as well. Damaged, broken teeth, or missing teeth can affect neighboring teeth. 
        </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">Living with compromised teeth and smiles before seeking a dentist or cosmetic specialist is common. 
        </p>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
<strong>Smile makeover dental</strong> clinic helps shape teeth, brighten and craft your smile, and appearance. It will boost self-confidence and self-esteem. So, there are multiple reasons to justify considering a smile makeover dentist. Explore available options to avail the best cosmetic dentistry services.

        </p>
      </div>
</div>
    
    {/* IMAGE COLUMN: order-2 pulls it to the bottom on mobile */}
    <div className="w-full lg:w-[55%] order-1 md:order-1 flex justify-center lg:justify-start">
      <div className="w-full"> 
        <img 
          src="https://smileon.pk/wp-content/uploads/2025/10/Cosmetic-Dentistry-Treatment.jpg" 
          alt="Dentist performing procedure" 
          className="w-full h-auto lg:h-[450px] rounded-[2.5rem] shadow-md object-cover"
        />
      </div>
    </div>


  </div>
</section>
   {/* Procedure */}

<section 
            className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative " 
            style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
    
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto text-white">
                
                <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-4 sm:mb-12 md:mb-16 tracking-wide">
Cosmetic Dentistry Procedures
                </h2>
                <p className="text-white mb-0 text-center">
           This procedure helps you in reshaping your teeth and jaw appearance. It can also aid in reconstruction after accidents or injuries. However, each case is unique. Whether it’s a long-standing concern or a dream smile makeover treatment, we are here to meet your specific needs.
          </p>
                <p className="text-white mb-10 text-center">
           You can trust us for your family cosmetic dentistry which includes several different treatments including:
          </p>
                {/* Cards Section */}
                {/* 1 column on small screens, 2 on medium, 3 on large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* 1. Benefits of Scaling Teeth */}
                    <InfoCard title="Teeth Whitening">
                        <ul className="list-disc list-inside space-y-2">
                            <li>With our latest <span className='text-cyan-400 font-medium hover:text-blue-900'>teeth whitening treatments</span> you can enjoy a brighter and whiter smile. We use the safest, most effective techniques to remove discoloration and stains, so you can have a brilliant, confident smile again.</li>
                        </ul>
                    </InfoCard>

                    {/* 2. Tips to Follow After Scaling and Polishing Teeth */}
                    <InfoCard title="White Fillings for Replacing Amalgam Fillings">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Upgrade your old, silver <span className='text-cyan-400 font-medium hover:text-blue-900'>amalgam fillings</span> to natural-looking white fillings. Your teeth look seamless and aesthetic yet provide the strongest, toughest protection, all with the expertise of our expert team.</li>
                        </ul>
                    </InfoCard>

                    {/* 3. What to Expect During the Procedure */}
                    <InfoCard title="Teeth Straightening with Invisalign or Orthodontic Treatment">
                        <p>Invisalign or traditional orthodontic treatments are straightening your teeth discreetly. <span className='text-cyan-400 font-medium hover:text-blue-900'>With clear</span> aligners or braces, SmileOn can customize solutions to get your teeth aligned and get the perfect smile you deserve.
                        </p>
                    </InfoCard>

                    {/* 4. Before Procedure */}
                    <InfoCard title="Crowns and Veneers">
                        <p>
<span className='text-cyan-400 font-medium hover:text-blue-900'>Dentals crowns</span> and veneers restore damaged or unattractive teeth. Our properly fitted, high-quality, custom-crafted restorations will provide you with a beautiful, natural-looking appearance and proper function.
                        </p>
                    </InfoCard>

                    {/* 5. Need to Know (Duration) */}
                    <InfoCard title="Implants and Bridges">
                        <p>Long-lasting <span className='text-cyan-400 font-medium hover:text-blue-900'>dental implants</span> or bridge, to replace missing teeth. We offer durable, beautiful solutions that restore your smile and your ability to chew comfortably.

                        </p>
                    </InfoCard>

                    {/* 6. Choose SmileOn for Dental Treatment */}
                    <InfoCard title="Choose SmileOn for Dental Treatment">
                        <p className="mb-2">
Under the leadership of the best female dentist in Lahore, our team strives to provide you, with excellent cosmetic dentistry services to meet your personal goals.
                        </p>
                    </InfoCard>
                    
                </div>
            </div>
        </section>

        {/* prepared */}

<section className="pt-16 pb-0 px-6 md:px-12 lg:px-24 lg:mb-0 bg-white w-full font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Text Content */}
          <div className="w-full lg:w-[55%] mt-10 lg:mt-4">
          
            <div className="mb-10">
              <h2 className="text-[#1e1b4b] text-3xl md:text-3xl  ">Get Prepared</h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">When you schedule a smile makeover treatment at SmileOn, you’ll likely have questions about the process. It’s natural to be curious. However, it’s always better to get prepared earlier. It helps your dentist understand your needs.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">A good cosmetic dentist will ask for your medical history and perform a general examination of your mouth, teeth, gum, jaws, tongue, throat, sinuses, ears, nose, and neck. They may also ask you to go for x-rays to get a complete checkup of your mouth.
              </p>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-0">Your dentist will ask you some questions, such as:
              </p>
                        <ul className="list-disc list-inside space-y-2 mb-0">
                            <li>What are hoping to achieve?</li>
                            <li>What are you happy about?</li>
                            <li>What are you unhappy about?</li>
                            <li>What’s your biggest concern?</li>
                            <li>How has this issue affected you?</li>
                        </ul>
                         <p className="text-gray-600 text-sm md:text-base leading-relaxed">Think about your answers to these questions before your appointment with SmileOn cosmetic dental makeover specialist. Being prepared can speed up the process.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Image */}
          <div className="w-full lg:w-[55%] flex justify-center lg:justify-end">
            <div className="w-full max-w-[650px]">
              <img 
                src="https://smileon.pk/wp-content/uploads/2025/10/Gett-Prepareed.webp"
                alt="Doctor performing dental procedure" 
                className="w-full h-auto rounded-[2.5rem] shadow-sm object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>

      <FAQsSection  title="FAQs"
        faqs={makeoverFAQs}/>
        <Map />
        <Footer />


    </div>
  )
}

export default Makeover
