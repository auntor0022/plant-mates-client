import { FaBookOpen, FaLeaf, FaLightbulb } from "react-icons/fa";

const GardeningKnowledgeHub = () => {
  const topics = [
    {
      icon: <FaLeaf className="text-success text-3xl" />,
      title: "Indoor Plant Care Basics",
      desc: "Everything you need to know about watering schedules, soil, and sunlight for thriving indoor greenery.",
    },
    {
      icon: <FaLightbulb className="text-success text-3xl" />,
      title: "DIY Composting Tips",
      desc: "Turn food waste into rich soil using easy composting hacks. Great for small spaces!",
    },
    {
      icon: <FaBookOpen className="text-success text-3xl" />,
      title: "Monthly Planting Guide",
      desc: "Discover what to plant each month based on your region and garden type.",
    },
  ];

  return (
    <section className="mt-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          📖 Gardening Knowledge Hub
        </h2>
        <div className="space-y-8">
          {topics.map((topic, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center gap-6 bg-white p-6 rounded-2xl shadow-md border-l-4 border-secondary hover:shadow-xl transition"
            >
              <div className="p-4 bg-accent/20 rounded-full">
                {topic.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-neutral mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600">{topic.desc}</p>
              </div>
              <button className="btn btn-outline btn-success btn-sm mt-4 md:mt-0">
                Learn More
              </button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn bg-secondary text-white hover:bg-primary">
            View All Guides
          </button>
        </div>
      </div>
    </section>
  );
};

export default GardeningKnowledgeHub;
