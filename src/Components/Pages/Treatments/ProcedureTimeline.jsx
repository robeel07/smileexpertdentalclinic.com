import React from 'react';
import { motion } from 'framer-motion';

const ProcedureTimeline = ({ title, subtitle, steps }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#1e1b4b] text-3xl md:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-gray-500 text-sm italic">{subtitle}</p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#2db6fa] hidden md:block"></div>

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col md:flex-row items-center w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Content Box */}
                  <div className="w-full md:w-1/2 px-4 md:px-10">
                    <motion.div 
                      initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      className="bg-[#f0f9ff] p-6 rounded-xl border border-blue-100 shadow-sm relative"
                    >
                      <h3 className="text-[#1e1b4b] font-bold text-xl mb-3 text-center md:text-right">{step.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed text-center md:text-right">
                        {step.description}
                      </p>
                      
                      {/* Decorative Arrow (Desktop Only) */}
                      <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-[#f0f9ff] border-t border-r border-blue-100 rotate-45 
                        ${isEven ? '-left-2' : '-right-2'}`} 
                      />
                    </motion.div>
                  </div>

                  {/* Center Icon/Step Indicator */}
                  <div className="relative flex items-center justify-center z-10 my-4 md:my-0">
                    <div className="bg-[#1e1b4b] text-white w-12 h-12 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="text-xs font-bold uppercase">Step {index + 1}</span>
                    </div>
                  </div>

                  {/* Empty Spacer for desktop alignment */}
                  <div className="hidden md:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcedureTimeline;