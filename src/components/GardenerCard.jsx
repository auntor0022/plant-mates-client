import React from "react";
import { Fade } from "react-awesome-reveal";
import { FaLeaf, FaMapMarkerAlt, FaSeedling, FaUser } from "react-icons/fa";

const GardenerCard = ({ gardener }) => {
  // console.log(gardener);

  return (
    <Fade
      delay={200} 
      duration={1000}
      triggerOnce 
      fraction={0.5}
    >
      <div className="card w-full md:w-96 bg-base-100 shadow-xl border border-base-300">
        <figure>
          <img
            src={gardener.image}
            alt={gardener.name}
            className="w-[400px] md:w-[500px] h-60 object-cover"
          />
        </figure>
        <div className="card-body space-y-2">
          <h2 className="card-title text-xl font-bold">{gardener.name}</h2>
          <div className="text-sm text-base-content/80 space-y-1">
            <p>
              <FaUser className="inline mr-1" /> Age: {gardener.age}, Gender:{" "}
              {gardener.gender}
            </p>
            <p>
              <FaMapMarkerAlt className="inline mr-1" /> {gardener.location}
            </p>
            <p>
              <FaLeaf className="inline mr-1" /> Status:{" "}
              <span
                className={`font-semibold ${
                  gardener.status === "Active"
                    ? "text-secondary"
                    : "text-red-600"
                }`}
              >
                {gardener.status}
              </span>
            </p>
            <p>
              <FaSeedling className="inline mr-1" /> {gardener.experiences}
            </p>
            <p>
              🌱 Tips Shared:{" "}
              <span className="font-semibold">{gardener.sharedTips}</span>
            </p>
          </div>
          <div className="card-actions justify-end mt-2">
            <button className="btn btn-sm btn-primary">View Profile</button>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default GardenerCard;
