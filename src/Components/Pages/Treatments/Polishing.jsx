import "../../../index.css";
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";


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
const polishingFAQs = [
{ id: 1, question: "01. How much do Scaling & Polishing services cost?", answer: "The price of Scaling & Polishing services depends upon the tartar deposit upon the teeth which we determine in initial examination. In most cases its 8000 PKR." },
        { id: 2, question: "02. Does Scaling & Polishing cause discomfort?", answer: "This treatment should never cause you any discomfort or pain. However, we have to mention that it is totally fine to experience some discomfort during the services." },
        { id: 3, question: "03. Do teeth polishing whiten teeth?", answer: "Teeth polishing may not be as effective as bleaching procedures since it only removes stains on the outer layer of the teeth, but it makes your teeth seem polished." },
        { id: 4, question: "04. How often should I get this treatment?", answer: "To maintain healthy teeth and gums, we recommend that you visit your dentist for Scaling twice a year. This will help diagnose and prevent future problems, including gum disease." },
        { id: 5, question: "05. What will happen if I have poor oral hygiene?", answer: "Poor oral hygiene can lead to a number of health concerns, some of them extremely serious if left untreated. Some of the common signs of poor oral health are bleeding gums, swollen or inflamed gums, loose teeth and bad breath. Research also shows a clear link between periodontal disease and cardiovascular disease, including increased risk of stroke and heart attack, premature birth and an increased risk of pneumonia, particularly in elderly patients." },
        { id: 6, question: "06. What is periodontal disease?", answer: "Periodontal (or gum) disease is a process that starts with a biofilm that adheres to the surface of your teeth. Gums first become red, inflamed and swollen. Later, the bone that supports the teeth is eaten away. In the final stages, this leads to tooth loss." },
        { id: 7, question: "07. Why does the dental need to scrape off plaque and tartar?", answer: "We all have bacteria in our mouth, even if we have great oral hygiene at home. Plaque is formed when this bacteria mixes with food and proteins in your mouth. It’s the sticky, pale yellow film that coats your teeth and gets under your gum line. If plaque stays on your teeth it can harden into tartar and give you even bigger problems. Tartar build-up can’t be removed at home. It needs to be carefully scraped off by a special scaler tool in a dental clinic. The bacteria in plaque and tartar damages the enamel, or outer layer of your teeth. But if you remove it regularly, you can help prevent tooth decay, receding gums and gum disease." },
        { id: 8, question: "08. Is scaling good for teeth?", answer: "Yes, scaling is very good for teeth! It helps prevent and treat gum disease and reduces plaque and tartar build-up on their teeth." },
];

const Polishing = () => {
    
  return (
    <div className='font-jost'>
      {/* Hero Section */}
            <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Scaling-Polishing-compressed.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
                            Scaling & Polishing
                        </h1>
                    </div>
                </div>
            </div> 


            <section className="w-full pl-4 sm:pl-6 lg:pl-8 py-10 md:pt-20 md:pb-0 md:mb-0">
             <p className="text-center text-sm md:text-sm lg:text-lg  text-black leading-relaxed">
        Your smile will remain healthy and cheerful if you receive regular scaling & polishing treatment. SmileOn Dental Clinic believes every person needs a perfect set of teeth to achieve that dazzling smile. Our teeth scaling and polishing treatment is one of the ways of making your teeth look clean and healthy. Let us maintain your healthy smile and prevent gum diseases!
      </p>
      </section>

<section className="w-full pl-4 sm:pl-6 lg:pl-8 py-10 md:pt-20 md:pb-5">
       

      {/* --- Main Content Layout  */}
      <div className="flex flex-col lg:flex-row lg:gap-12 items-start">
        
        {/* --- Text Content Container --- */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Who Requires Teeth Scaling and Polishing
          </h2>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 leading-relaxed">
            This treatment is suitable for anyone wishing to have healthier, cleaner and much shinier teeth.
          </p>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 mb-4 font-semibold">
            This treatment is ideal for:
          </p>
          

          <ul className="list-disc list-inside text-sm md:text-base lg:text-lg text-gray-700 space-y-2 mb-6 ml-2 leading-relaxed">
            <li>People with food deposits</li>
            <li>Patients who are noticing symptoms of gum disease</li>
            <li>Anybody needing white teeth through teeth polishing</li>
            <li>People who smoke, take excessive coffee or tea</li>
            <li>Those who wish to have a good oral health</li>
          </ul>

          <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
            If you have the formation of plaque or colored teeth needlessly or simply do not want a buildup of tartar, professional polishing of teeth after scaling is a nice option. For instance, it is useful to users with gum complications or those wanting a beautiful smile.
          </p>
        </div>

        {/* --- Image Container --- */}
        <div className="lg:w-1/2 w-full flex justify-center lg:justify-end px-4 sm:px-0 lg:mt-16">
          
          <img 
            src="https://smileon.pk/wp-content/uploads/2022/11/ascent-dental-care-blog-header-38.jpg" 
            alt="Illustration of teeth scaling and polishing procedure" 
            className="w-[90%] md:w-[80%]  lg:w-full  max-h-[400px] object-cover rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>  

    {/* Need to know */}

<section 
            className="w-full py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative " 
            style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg")`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            {/* Dark Overlay for contrast  */}
            <div className="absolute inset-0 bg-black/70"></div>
            
            <div className="relative z-10 max-w-7xl mx-auto text-white">
                
                <h2 className="text-3xl sm:text-2xl md:text-4xl lg:text-4xl font-bold text-center mb-4 sm:mb-12 md:mb-16 tracking-wide">
                    Need To Know
                </h2>

                {/* Cards Section */}
                {/* 1 column on small screens, 2 on medium, 3 on large */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    
                    {/* 1. Benefits of Scaling Teeth */}
                    <InfoCard title="Benefits of Scaling Teeth">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Helps to avoid gum diseases and bleeding.</li>
                            <li>Has the effect of preventing carries and tooth decay.</li>
                            <li>Helps to eliminate the foul smell.</li>
                            <li>Gives your teeth a great look to make you gain that smile.</li>
                        </ul>
                        <p className="pt-2 text-base ">
                            At SmileOn Dental Clinic, we provide affordable teeth scaling price in Lahore to make it available to everyone.
                        </p>
                    </InfoCard>

                    {/* 2. Tips to Follow After Scaling and Polishing Teeth */}
                    <InfoCard title="Tips to Follow After Scaling and Polishing Teeth">
                        <ul className="list-disc list-inside space-y-2">
                            <li>Avoid Staining Foods and Drinks.</li>
                            <li>Gentle Brushing and Flossing.</li>
                            <li>Use a Soft-Bristled Toothbrush.</li>
                            <li>Stay Hydrated and Rinse with Salt Water.</li>
                        </ul>
                    </InfoCard>

                    {/* 3. What to Expect During the Procedure */}
                    <InfoCard title="What to Expect During the Procedure">
                        <p>
                            The dentist uses unique tools to scrape off the hard materials such as the plaque, tartar, and debris from the surface of the gums, as well as from the gum line.After scaling, the teeth are exposed to a special paste to remove rough surfaces, which makes the teeth shiny and clean.
                        </p>
                    </InfoCard>

                    {/* 4. Before Procedure */}
                    <InfoCard title="Before Procedure">
                        <p>
                            The dentist checks the mouth and looks for softened and hard deposits of tartar.
                        </p>
                    </InfoCard>

                    {/* 5. Need to Know (Duration) */}
                    <InfoCard title="Need to Know">
                        <p>
                            The whole process takes around 1-2 appointments depending on the condition of your teeth.
                        </p>
                    </InfoCard>

                    {/* 6. Choose SmileOn for Dental Treatment */}
                    <InfoCard title="Choose SmileOn for Dental Treatment">
                        <p className="mb-2">
                            At the clinic, we give you the best dental health care for your beautiful smile.
                        </p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Experienced Dentists</li>
                            <li>Painless Treatment</li>
                            <li>Affordable Services</li>
                        </ul>
                        <p className="pt-2 text-base ">
                            Contact us for teeth scaling and polishing price in Pakistan.
                        </p>
                    </InfoCard>
                    
                </div>
            </div>
        </section>


      <FAQsSection  title="FAQs"
        faqs={polishingFAQs}/>

        <Map />
        <Footer />


    </div>
  )
}

export default Polishing




