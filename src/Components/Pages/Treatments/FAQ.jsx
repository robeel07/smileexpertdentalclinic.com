import React, { useState } from "react";

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/20 font-jost">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 w-full p-4 md:p-5 text-left
        transition duration-300 bg-teal-600/70  hover:bg-blue-700
        rounded-none"
      >
        <span className="text-xl text-white text-blue-300 group-hover:text-white transition-colors duration-300">
          {isOpen ? "—" : "+"}
        </span>

        <span className="text-base sm:text-lg font-medium text-white">
          {question}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out  ${
          isOpen
            ? "max-h-[400px] p-4 md:p-5 bg-gray-100 overflow-y-auto opacity-100"
      : "max-h-0 overflow-hidden opacity-0"
        }`}
      >
         {Array.isArray(answer) ? (
          <div className="space-y-4 text-sm text-black whitespace-pre-line">
            {answer.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
          </div>
        ) : (
        <p className="text-sm text-black">{answer}</p>
        )}
      </div>
    </div>
  );
};

const FAQsSection = ({ title = "FAQs", faqs }) => {
  const half = Math.ceil(faqs.length / 2);
  const column1 = faqs.slice(0, half);
  const column2 = faqs.slice(half);

  return (
    <section className="py-12 md:py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">{title}</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
          <div className="space-y-4">
            {column1.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))}
          </div>

          <div className="space-y-4">
            {column2.map((item, i) => (
              <FAQItem key={i} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsSection;
