import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const GardeningEvents = () => {
  const events = [
    {
      title: "Urban Plant Swap",
      date: "June 15, 2025",
      location: "Dhaka Botanical Garden",
      desc: "Bring a plant, take a plant! Join fellow plant lovers for a fun swap session.",
    },
    {
      title: "Community Composting Workshop",
      date: "July 5, 2025",
      location: "Green Yard Community Center",
      desc: "Learn how to compost effectively and turn waste into garden gold.",
    },
    {
      title: "Balcony Garden Showdown",
      date: "August 12, 2025",
      location: "City Garden Expo",
      desc: "Showcase your balcony setup and discover unique ideas from others.",
    },
  ];

  return (
    <section className="container mx-auto bg-base-100">
      <div className=" mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary mb-12">
          🌿 Gardening Events Near You
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <div
              key={i}
              className="card bg-white border border-accent/40 hover:shadow-xl transition duration-300"
            >
              <div className="card-body">
                <h3 className="card-title text-xl font-semibold text-secondary">
                  {event.title}
                </h3>
                <div className="mt-2 space-y-1 text-gray-600">
                  <p className="flex items-center gap-2 text-sm">
                    <FaCalendarAlt className="text-accent" /> {event.date}
                  </p>
                  <p className="flex items-center gap-2 text-sm">
                    <FaMapMarkerAlt className="text-accent" /> {event.location}
                  </p>
                </div>
                <p className="text-sm text-neutral mt-4">{event.desc}</p>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-sm bg-secondary text-white hover:bg-primary transition-colors">
                    I'm Interested
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="btn btn-outline border-secondary text-secondary hover:bg-secondary hover:text-white transition-all">
            See All Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default GardeningEvents;
