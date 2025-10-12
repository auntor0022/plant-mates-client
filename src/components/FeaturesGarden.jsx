import React, { useState } from "react";
import FeaturesGardenCard from "./FeaturesGardenCard";

const FeaturesGarden = () => {
  const [featureGarden, setFeatureGarden] = useState([]);

  fetch("https://plant-mates-server.vercel.app/features-garden")
    .then((res) => res.json())
    .then((data) => setFeatureGarden(data));

  return (
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl text-secondary font-bold text-center mb-6">
        🌿 Featured Gardeners
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 px-5">
        {featureGarden.map((singleFeatureGarden) => (
            <FeaturesGardenCard
                key={singleFeatureGarden._id}
            singleFeatureGarden={singleFeatureGarden}
          ></FeaturesGardenCard>
        ))}
      </div>
    </div>
  );
};

export default FeaturesGarden;
