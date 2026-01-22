

const InfoCard2 = ({ title, children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg  shadow-lg h-full ">
      <h3 className="text-cyan-400 text-xl md:text-2xl font-bold mb-4">
        {title}
      </h3>
      
      <div className="text-gray-200 text-sm md:text-base leading-relaxed [&>ul]:list-disc [&>ul]:ml-5 [&>ul]:space-y-2 [&>p]:mb-4 last:[&>p]:mb-0">
        {children}
      </div>
    </div>
  );
};

export default InfoCard2;




