const InfoCard = ({ title, items }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/10 shadow-lg h-full ">
      <h3 className="text-lg font-bold text-cyan-400  pb-2">
        {title}
      </h3>

      <ul className="list-disc list-outside space-y-2 text-gray-200 text-sm">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default InfoCard;
