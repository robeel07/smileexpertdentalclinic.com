import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onClick, index }) => {
  return (
    <div className="mb-3 font-jost">
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-4 rounded-full transition-all duration-300 ${
          isOpen ? 'bg-[#2db6fa] text-white shadow-lg' : 'bg-[#1e1b4b] text-white'
        }`}
      >
        <span className="text-left font-medium text-sm md:text-base pr-4">
          {index + 1}. {question}
        </span>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown size={20} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
<div className="p-5 text-gray-600 text-sm md:text-base leading-relaxed  ml-6 my-2 space-y-3">

  {/* Paragraph */}
  {answer?.text && (
    <p>{answer.text}</p>
  )}

  {/* Numbered list */}
  {Array.isArray(answer?.points) && (
    <ol className="list-decimal pl-5 space-y-2">
      {answer.points.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ol>
  )}

</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


const DentalFAQ = ({ title, subtitle, questions, sideImage }) => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-white w-full font-jost">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[#1e1b4b] text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <motion.p  
            initial={{ x: -80, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-gray-600 text-sm md:text-base">{subtitle}</motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Side Image */}
<div className="w-full lg:w-1/2">
  <div className="sticky top-24">
    <img
      src={sideImage}
      alt="Treatment Info"
      className="w-full h-auto rounded-[2.5rem] shadow-xl object-cover aspect-square md:aspect-video lg:aspect-square"
    />
  </div>
</div>


          {/* FAQ List */}
          <motion.div
           initial={{ x: 120, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full lg:w-1/2">
            {questions.map((item, index) => (
              <FAQItem
                key={index}
                index={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DentalFAQ;




