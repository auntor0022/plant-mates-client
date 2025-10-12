import React from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router"; // use react-router-dom
import { FaHeart } from "react-icons/fa";

const TopTrendingTipsCard = ({ tip }) => {
  return (
    <Bounce>
      <div className="bg-white shadow-xl rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition duration-300 h-full flex flex-col">
        {/* Image */}
        <img
          src={tip.photo}
          alt={tip.title}
          className="w-full h-48 md:h-56 object-cover"
        />

        {/* Content */}
        <div className="p-5 flex flex-col justify-between flex-grow">
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-primary mb-1">{tip.title}</h2>
            <p className="text-gray-500 text-sm mb-2">{tip.description}</p>
            <p className="text-gray-500 text-sm mb-2">Category: {tip.category}</p>
          </div>

          {/* Bottom Row */}
          <div className="flex items-center justify-between mt-4">
            <span className="text-gray-600 flex items-center gap-1 text-sm">
              <FaHeart className="text-red-500" />
              {tip.totalLike || 0} Likes
            </span>

            <Link
              to={`/browseTipsDetails/${tip._id}`}
              className="px-4 py-1.5 bg-secondary hover:bg-primary text-white text-sm font-medium rounded-full transition duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </Bounce>
  );
};

export default TopTrendingTipsCard;
