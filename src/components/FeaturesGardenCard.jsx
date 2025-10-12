import React from "react";
import { Bounce } from "react-awesome-reveal";

const FeaturesGardenCard = ({ singleFeatureGarden }) => {
  const { image, name, location, status } = singleFeatureGarden;

  return (
    <Bounce>
      <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full mb-4"
      />
      <h3 className="text-xl font-semibold text-primary text-center">{name}</h3>
      <p className="text-center text-gray-500">{location}</p>
      <p className="text-center text-neutral-800">
        Status: <span className="text-secondary">{status}</span>
      </p>
    </div>
    </Bounce>
  );
};

export default FeaturesGardenCard;
