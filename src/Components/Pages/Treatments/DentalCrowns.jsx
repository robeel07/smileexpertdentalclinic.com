import React, { useState } from 'react';
import FAQsSection from './FAQ';


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
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="relative h-full max-w-6xl px-4 flex items-end">
                    <div className="pb-8 mt-6 w-full">
                        <h2 className="text-white text-xl ml-40 mb-2">Treatments</h2>
                        <h1 className="text-white text-3xl md:text-5xl ml-40 font-bold">
                            Dental Braces
                        </h1>
                    </div>
                </div>
            </div>

            {/* Intro Text */}
            <section className="py-12 px-8 md:pt-12 md:pb-0 max-w-7xl mx-auto text-left ">
                <p className="text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    Are you interested in improving your smile with a tooth crown? Not only can a crown enhance your appearance, but it can also improve your oral health. Crowns are restorations that fully cover dental implants or damaged teeth, providing complete protection.
                </p>
            </section>

            {/* What Are Teeth Crowns Section */}
            <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">What Are Teeth Crowns?</h2>
                        <div className="space-y-4 text-gray-600 text-sm leading-relaxed">
                            <p>Crowns have the ability to enhance your smile by modifying the size, shape, and color of your natural teeth. Additionally, they can provide reinforcement for a tooth that has undergone significant restorative work due to cavities or injuries.</p>
                            <p>When getting a dental crown, your dentist will usually use porcelain teeth that match the color of your natural teeth. However, some people may opt for lighter shades for cosmetic reasons.</p>
                            <p className="font-bold text-gray-800">Tooth crowns provide many advantages, including repairing and strengthening weak or fractured teeth, protecting teeth after root canal therapy, and enhancing overall oral health.</p>
                        </div>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/What-Are-Teeth-Crowns-768x512.jpg"
                            alt="Dental Crown Procedure"
                            className="rounded-3xl shadow-xl"
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
                        <h2 className="text-2xl font-bold text-blue-900 mb-6">Types of Dental Crowns</h2>
                        <div className="space-y-6">
                            <div>
                                <h3 className="font-bold text-blue-800">1. Porcelain Fused to Metal (PFM) Crowns</h3>
                                <p className="text-sm text-gray-600 mt-2">PFM crowns consist of a metal core and a porcelain shell. The porcelain matches your natural teeth while the metal core provides strength.</p>
                            </div>
                            <div>
                                <h3 className="font-bold text-blue-800">2. Zirconia Crowns</h3>
                                <p className="text-sm text-gray-600 mt-2">Zirconia crowns are a strong, white material that offers a highly natural appearance. They are a safe choice for patients with sensitive teeth as they are less likely to cause allergic reactions.</p>
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
        </div>
    );
};

export default DentalCrowns;