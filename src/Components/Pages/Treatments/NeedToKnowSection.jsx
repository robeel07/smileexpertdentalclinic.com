import InfoCard from "./InfoCard";

const NeedToKnowSection = ({ title, bgImage, cards }) => {
  return (
    <section
      className="w-full py-16 px-4 md:py-20 md:px-10 lg:px-16 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-white">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">
          {title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {cards.map((card, index) => (
            <InfoCard
              key={index}
              title={card.title}
              items={card.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeedToKnowSection;

