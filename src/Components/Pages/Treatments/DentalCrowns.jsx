import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";


const DentalCrowns = () => {

    
const CrownFAQs = [
{ id: 1, question: "01. What is the estimated price of tooth crowns?", answer: "To take care of temporary crowns, you must avoid chewing on hard and sticky foods. Also, while brushing or flossing, you have to be extra careful." },
        { id: 2, question: "02. Does it hurt getting a crown?", answer: "Doctors make sure that they do not hurt you while doing any dental treatment. However, you might just feel a little uncomfortable while getting your teeth crown." },
        { id: 3, question: "03. What is the lifespan of tooth crowns?", answer: "A crown may last up to 15 years, depending on how you take care of your oral health." },
        { id: 4, question: "04. How does the process of placing tooth crowns go?", answer: "It is recommended to have an orthodontic evaluation by age 7, but treatment can be effective for patients of all ages." },
        { id: 5, question: "Q5. How do I brush my teeth with braces?", answer: "Use a soft-bristled brush and fluoride toothpaste. You should brush at a 45-degree angle around the brackets and use interdental brushes for tight spots." },
        { id: 6, question: "06. How much time braces take to straighten teeth?", answer: "It takes an average of a year and a half to three years to straighten teeth with braces, though it can take less or longer depending on the complexity of the case." },
        { id: 7, question: "07. How to stop braces pain immediately?", answer: "Yes, braces can minimally improve your facial features (particularly, the jawline and lips), aligning the bite and your teeth. " },
        { id: 8, question: "08. Can braces change your face shape?", answer: "Yes, scaling is very good for teeth! It helps prevent and treat gum disease and reduces plaque and tartar build-up on their teeth." },
        { id: 9, question: "09. What is the best age to get braces?", answer: "The most appropriate age is normally between 10-14 years, when the teeth and gums are still under development and there is a higher chance of fixation of teeth." },
        { id: 10, question: "10. 10. How to brush teeth with braces?", answer: "Apply a soft-bristled toothbrush or electric brush, clean between each bracket, brush at 45 45-degree angle, and remember to floss the teeth every day." },
        
];


    return (
        <div className="font-jost text-gray-800 bg-white">
            {/* Hero Section */}
            

               <div
                className="relative w-full h-[45vh] bg-cover bg-[center_50%]"
                style={{ backgroundImage: `url("https://smileon.pk/wp-content/uploads/2023/04/Braces.jpg")` }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 flex items-end">
                    <div className="pb-8 md:pb-9  w-full">
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-medium">
Dental Crowns Treatment in Lahore
                        </h1>
                    </div>
                </div>
            </div> 


            {/* Intro Text */}
            <section className="py-12 px-8 md:pt-12 md:pb-0 max-w-7xl mx-auto text-left ">
                <p className="text-gray-600 leading-relaxed max-w-full mx-auto">
                    Are you interested in improving your smile with a tooth crown? Not only can a crown enhance your appearance, but it can also improve your oral health. Crowns are restorations that fully cover dental implants or damaged teeth, providing complete protection.
                </p>
            </section>

            {/* What Are Teeth Crowns Section */}
            <section className="py-16 px-8 md:px-24 max-w-full mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-blue-900 mb-6">What Are Teeth Crowns?</h2>
                        <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                            <p>Crowns have the ability to enhance your smile by modifying the size, shape, and color of your natural teeth. Additionally, they can provide reinforcement for a tooth that has undergone significant restorative work due to cavities or injuries. The most frequently used materials for dental crowns are zirconia and porcelain fused to metal (PFM), which are both known for their durability.</p>
                            <p>A provisional crown is attached to your tooth in order to protect it during the process of preparing for a dental crown, and before the final crown is permanently installed.</p>
                            <p className="font-bold text-gray-800">When getting a dental crown, your dentist will usually use porcelain teeth that match the color of your natural teeth. However, some people may opt for lighter shades for cosmetic reasons. For your molars, you have the option to choose from materials like zirconia and porcelain based on your desired level of strength, durability, and aesthetics.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/What-Are-Teeth-Crowns-768x512.jpg"
                            alt="Dental Crown Procedure"
              className="w-full h-64 sm:h-72 lg:h-full object-cover rounded-3xl lg:rounded-l-[3rem]  shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Are They Right For You Section */}
            <section className="py-16 px-8 md:px-24 bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Are Teeth Crowns Right For You?</h2>
                        <p className="text-sm text-gray-600 mb-6">Dental crowns are an excellent way to safeguard your teeth. They are commonly used to cover and protect weakened teeth, preventing decay and fractures.</p>
                        <ul className="space-y-3">
                            {[
                                { title: "Enhanced appearance", desc: "crowns can significantly enhance the aesthetics of your smile." },
                                { title: "Convenience", desc: "crowns are a long-lasting and effective dental treatment." },
                                { title: "Improved self-esteem", desc: "crowns can restore your smile and give you a confidence boost." },
                                { title: "Durability", desc: "with proper care, crowns can last a long time." }
                            ].map((item, idx) => (
                                <li key={idx} className="text-sm">
                                    <span className="font-bold text-gray-800">• {item.title} — </span>
                                    <span className="text-gray-600">{item.desc}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/Are-Teeth-Crowns-Right-For-You-2048x1365.jpg"
                            alt="Patient Smile"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

            {/* Types of Crowns Section */}
            <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-4xl font-bold text-blue-900 mb-6">Types of Dental Crowns</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-blue-800">1. Porcelain Fused to Metal (PFM) Crowns</h3>
                                <p className="text-xs text-gray-600 mt-2">PFM (porcelain-fused-to-metal) crowns consist of a metal core and a porcelain shell. The porcelain exterior provides a natural appearance, while the metal core gives it strength and resilience. PFM crowns are an excellent choice for patients with tooth-colored fillings or bonding, as they are less prone to discoloration compared to other types of crowns.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800">2. Zirconia Crowns</h3>
                                <p className="text-xs text-gray-600 mt-2">Zirconia crowns are a strong, white material that offers a highly natural appearance when used for teeth. Zirconia is a safe choice for patients with sensitive teeth as it is less likely to cause allergic reactions than other materials. While zirconia crowns may be slightly more expensive than other types of crowns, many patients feel that the benefits justify the extra cost.</p>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/Types-of-Dental-Crowns-768x512.jpg"
                            alt="Types of Crowns"
                            className="rounded-3xl shadow-xl"
                        />
                    </div>
                </div>
            </section>

<FAQsSection  title="FAQs"
        faqs={CrownFAQs}/>
        
                  <Map />
                   <Footer />
        </div>
    );
};

export default DentalCrowns;