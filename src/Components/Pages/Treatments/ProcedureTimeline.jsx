
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTeeth } from '@fortawesome/free-solid-svg-icons';

const ProcedureTimeline = ({ title, subtitle, steps }) => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#1e1b4b] text-3xl md:text-5xl font-bold mb-4">{title}</h2>
          <p className="text-[#2db6fa] text-sm md:text-base font-semibold uppercase tracking-widest">
            {subtitle}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
{/* Vertical Line */}
<div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 h-full w-1 bg-[#2db6fa]/20"></div>


          <div className="space-y-20 md:space-y-28">
            {steps.map((step, index) => {
              // Even Index: Card Left | Circle | Step Right
              // Odd Index:  Step Left | Circle | Card Right
              const isCardLeft = index % 2 === 0;

              return (
                <div key={index} className="relative flex flex-col md:flex-row items-center justify-center">
                  
                  {/* LEFT SIDE */}
                  <div className="w-full md:w-[45%] flex justify-start md:justify-end px-4 ml-20 md:ml-0">
                    {isCardLeft ? (
                      <motion.div 
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-brandAccent/30 p-6 rounded-2xl border border-blue-100 shadow-sm w-full text-center md:text-right relative"
                      >
                        <span className="absolute -top-4 -left-4 bg-[#1e1b4b] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center md:hidden">
  {index + 1}
</span>

                        <h3 className="text-[#1e1b4b] font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        {/* Right Arrow for card on left */}
                        <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 w-4 h-4 bg-brandAccent/30 border-t border-r border-black rotate-45" />
                      </motion.div>
                    ) : (
<motion.span className="hidden md:block text-[#1e1b4b] font-black text-2xl opacity-100">
  Step {index + 1}
</motion.span>

                    )}
                  </div>
<div className="absolute left-6 md:static md:transform-none z-10">

  <div className="bg-[#1e1b4b] text-brandAccent w-14 h-14 rounded-full flex items-center justify-center border-4 border-brandAccent shadow-xl">
    <FontAwesomeIcon icon={faTeeth} className="text-4xl" />
  </div>
</div>

                  {/* RIGHT SIDE */}
<div className="w-full md:w-[45%] flex justify-start px-4 ml-20 md:ml-0">

                    {!isCardLeft ? (
                      <motion.div 
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        className="bg-brandAccent/30 p-6 rounded-2xl border border-blue-100 shadow-sm w-full text-center md:text-left relative"
                      >
                        <span className="absolute -top-4 -left-4 bg-[#1e1b4b] text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center md:hidden">
  {index + 1}
</span>

                        <h3 className="text-[#1e1b4b] font-bold text-xl mb-2">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                        {/* Left Arrow for card on right */}
                        <div className="hidden md:block absolute top-1/2 -left-2 transform -translate-y-1/2 w-4 h-4 bg-brandLight/10 border-t border-l border-black -rotate-45" />
                      </motion.div>
                    ) : (
<motion.span className="hidden md:block text-[#1e1b4b] font-black text-2xl opacity-100">
  Step {index + 1}
</motion.span>

                    )}
                  </div>
                  
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




