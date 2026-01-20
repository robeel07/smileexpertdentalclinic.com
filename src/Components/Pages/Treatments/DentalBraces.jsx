
import FAQsSection from './FAQ';
import Map from "./Map";
import Footer from "./Footer";
const DentalBraces = () => {
    



    
const DentalFAQs = [
{ id: 1, question: "Q1. Are braces a painful treatment process?", answer: "While the application of braces isn't painful, you may experience some soreness or discomfort for a few days after they are first put on or adjusted as your teeth begin to move." },
        { id: 2, question: "Q2. How many days it would take to straighten teeth?", answer: "The duration varies per person, typically ranging from 12 to 24 months depending on the complexity of the alignment needed." },
        { id: 3, question: "Q3. How much do braces cost?", answer: "Cost depends on the type of braces (metal, ceramic, or Invisalign) and the duration of treatment. A consultation is required for a specific quote." },
        { id: 4, question: "Q4. When should I see an orthodontist?", answer: "It is recommended to have an orthodontic evaluation by age 7, but treatment can be effective for patients of all ages." },
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
                            Dental Braces
                        </h1>
                    </div>
                </div>
            </div>

            {/* What are Dental Braces Section */}
            <section className="py-16 px-8 md:px-24 max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">What Are Dental Braces?</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            Dental braces (also known as orthodontic cases) are devices used in orthodontics that align and straighten teeth and help position them with regard to a person's bite, while also aiming to improve dental health.
                        </p>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            They are often used to correct underbites, as well as malocclusions, overbites, cross bites, open bites, deep bites, crooked teeth, and various other flaws of the teeth and jaw.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            Braces can be either structural or cosmetic. Dental braces are often used in conjunction with other orthodontic appliances to help widen the palate or jaws and to otherwise assist in shaping the teeth and jaws.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/What-are-Dental-Braces-1024x683.jpg"
                            alt="Applying Braces"
                            className="rounded-3xl shadow-lg w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Are Braces Right For You? Section */}
            <section className="py-16 px-8 md:px-24 bg-blue-50">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Are Dental Braces Right For You?</h2>
                        <p className="mb-4 text-gray-600 leading-relaxed">
                            Braces are a common type of orthodontic treatment that can help improve the appearance and function of your smile.
                        </p>
                        <p className="font-semibold mb-2">Braces can effectively address various dental problems, such as:</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-600 mb-4">
                            <li>Crowded or crooked teeth, which can be difficult to clean and may lead to tooth decay and gum disease.</li>
                            <li>Gaps between teeth, which can affect your appearance and speech.</li>
                            <li>Misaligned upper and lower jaws.</li>
                            <li>Bite issues, such as overbites.</li>
                        </ul>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/09/Are-Dental-braces-right-for-you-2048x1365.jpg"
                            alt="Dental Examination"
                            className="rounded-3xl shadow-lg w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-16 px-8 md:px-24 bg-blue-50">
                <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">Benefits of traditional metal Teeth braces</h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="font-bold text-lg mb-2">1. Affordable</h3>
                        <p className="text-gray-600">Despite the availability of different types of teeth braces on the market today, metal braces remain one of the most cost-effective solutions. While they may not be as discreet as some other types of braces, they are still a great option for those seeking an affordable way to straighten their teeth.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">2. Durable</h3>
                        <p className="text-gray-600">Metal braces are engineered to withstand more pressure than other types of braces. They are made of high-quality stainless steel and are built to withstand the rigors of daily wear and tear. This means that metal braces are less likely to break or become damaged compared to other types of braces.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">3. Effective</h3>
                        <p className="text-gray-600">Metal braces are highly effective at straightening teeth and correcting a wide range of orthodontic issues. They are particularly good for treating complex cases that may be difficult to treat with other types of braces.</p>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2">4. Versatile</h3>
                        <p className="text-gray-600">Another great benefit of metal braces is that they can be used to treat patients of all ages, from children to adults. They are also highly customizable, allowing your dentist to tailor your treatment to your specific needs.</p>
                    </div>
                </div>
            </section>

            {/* Alternative Section */}
            <section className="py-16 px-8 md:px-24">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <h2 className="text-2xl font-bold text-blue-900 mb-4">Metal Braces Alternative</h2>
                        <h3 className="text-lg font-semibold text-blue-700 mb-4 italic">Invisalign Or Clear Teeth Braces</h3>
                        <p className="mb-4 text-gray-600">Invisalign is a clear teeth aligner used as a more aesthetically pleasing alternative to traditional braces. They are almost invisible and can be easily removed for eating and cleaning.</p>
                        <p className="text-gray-600">Invisalign is an effective way to straighten teeth, especially for people with mild to moderate dental issues.</p>
                    </div>
                    <div className="md:w-1/2">
                        <img
                            src="https://smileon.pk/wp-content/uploads/2025/10/Metal-Braces-Alternative.jpg"
                            alt="Clear Aligners"
                            className="rounded-3xl shadow-lg w-full"
                        />
                    </div>
                </div>
            </section>

            {/* Need To Know Section */}
            <section className="relative py-16 px-6 md:px-24 text-white font-sans overflow-hidden">
                {/* Background Image with Dark Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://smileon.pk/wp-content/uploads/2022/11/Entrepreneur-Writing-Book-scaled.jpg"
                        alt="Hands writing in a notebook"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/75"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <h2 className="text-3xl font-normal text-center mb-12">Need To Know</h2>

                    <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                        {/* Left Column */}
                        <div className="space-y-10">
                            {/* Appointments */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">Appointments</h3>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>While wearing braces, regular appointments are required every 6 to 8 weeks.</li>
                                    <li>During the initial consultation appointment, tests, x-rays, photographs, and maybe molds will all be taken.</li>
                                    <li>Your braces will be attached to the surfaces of your teeth at the following appointment.</li>
                                    <li>Every six to eight weeks after your braces are put on, the wires will be changed to ensure that your teeth are moving into the proper position.</li>
                                    <li>Your braces are taken off once they have served their purpose.</li>
                                    <li>Following the removal of your braces, you'll probably still schedule regular sessions to monitor your development.</li>
                                    <li>If you experience issues with your braces, more appointments can be required.</li>
                                </ul>
                            </div>

                            {/* Before your appointment */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">Before your appointment</h3>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>No extra planning is required.</li>
                                </ul>
                            </div>

                            {/* You may be asked about */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">You may be asked about</h3>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>Your medical and dental histories</li>
                                    <li>Your dental hygiene routine</li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="space-y-10">
                            {/* How long it takes */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">How long it takes</h3>
                                <p className="text-sm mb-4 leading-relaxed opacity-90">
                                    The length of time that teeth braces are worn varies from person to person. Braces are typically worn for two years, but there are exceptions to this rule.
                                </p>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>Your situation and teeth will determine how long you need to wear braces.</li>
                                    <li>Typically, braces are worn for two years, however in certain circumstances they may last longer or shorter.</li>
                                    <li>Typically, the consultation appointment lasts for 60 minutes.</li>
                                    <li>The average wait time to get braces is about 60 minutes.</li>
                                    <li>The typical duration of the six to eight-week visits is 15 to 30 minutes.</li>
                                    <li>Your braces will often need to be removed for at least 60 minutes.</li>
                                </ul>
                            </div>

                            {/* After your appointment */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">After your appointment</h3>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>You will need to utilize the retainer or removable plate developed specifically for you after your braces are taken off.</li>
                                    <li>You must adhere to the home care instructions provided by the orthodontist specialist.</li>
                                </ul>
                            </div>

                            {/* Quick tip */}
                            <div>
                                <h3 className="text-[#4FD1C5] text-lg font-semibold mb-4">Quick tip</h3>
                                <ul className="list-disc list-outside ml-5 space-y-2 text-sm leading-relaxed opacity-90">
                                    <li>Follow the instructions for treatment that your orthodontist specialist has given. To avoid food getting trapped in your teeth braces, stay away from meals that are too dense or sticky.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                  <FAQsSection  title="FAQs"
        faqs={DentalFAQs}/>

          <Map />
           <Footer />

        </div>
    );
};

export default DentalBraces;

