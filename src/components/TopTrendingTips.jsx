import React from "react";
import TopTrendingTipsCard from "./TopTrendingTipsCard";
import { FaFireAlt } from "react-icons/fa";

const TopTrendingTips = ({ allTips }) => {
  console.log(allTips);
  const topTips = allTips
    .filter((tip) => tip.availability === "Public")
    .sort((a, b) => b.totalLike - a.totalLike)
    .slice(0, 6);

  // console.log(topTips);

  return (
    <div className="container mx-auto mt-12">
      <div className="text-center mb-10">
        <div className="flex justify-center items-center gap-2 text-3xl md:text-4xl font-bold text-secondary">
          <FaFireAlt className="text-primary" />
          <h1>Top Trending Tips</h1>
        </div>
        <p className="text-base sm:text-base text-gray-600 mt-2 max-w-xl mx-auto">
          🔍 Discover the most loved and effective gardening tips — handpicked
          by the community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 px-5">
        {topTips.map((tip) => (
          <TopTrendingTipsCard key={tip._id} tip={tip}></TopTrendingTipsCard>
        ))}
      </div>
    </div>
  );
};

export default TopTrendingTips;
