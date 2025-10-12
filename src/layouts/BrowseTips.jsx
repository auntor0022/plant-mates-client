import React, { useEffect, useState } from "react";
import { FaEye } from "react-icons/fa";
import { Link, useLoaderData } from "react-router";

const BrowseTips = () => {

  useEffect(() => {
    document.title = "Plant Mates | browse-tips";
  }, []);

  const tipsData = useLoaderData();

  const [tips, setTips] = useState(tipsData);

  useEffect(() => {
    const publicTips = tipsData.filter((tip) => tip.availability === "Public");
    setTips(publicTips);
  }, [tipsData]);

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;

    let filteredTips = tipsData.filter((tip) => tip.availability === "Public");

    if (search === "Easy" || search === "Medium" || search === "Hard") {
      filteredTips = filteredTips.filter((tip) => tip.difficulty === search);
    }

    setTips(filteredTips);
  };

  return (
    <div className="container mx-auto px-4 md:px-12 py-10">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        Browse Garden Tips
      </h2>

      {/* Searh by defficulty */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center items-center gap-5 mb-10"
      >
        <select name="search" className="select w-1/3 md:w-1/6">
          <option disabled={true} className="text-base font-semibold">
            Difficulty Level
          </option>
          <option>All</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <input
          type="submit"
          value="Search"
          className="btn btn-secondary hover:btn-primary"
        />
      </form>

      <div className="overflow-x-auto shadow rounded-xl bg-white">
        <table className="min-w-full text-sm text-neutral-800">
          <thead className="bg-primary text-white">
            <tr>
              <th className="text-left py-3 px-4">No.</th>
              <th className="text-left py-3 px-4">Image</th>
              <th className="text-left py-3 px-4">Title</th>
              <th className="text-left py-3 px-4">Category</th>
              <th className="text-left py-3 px-4">Availability</th>
              <th className="text-left py-3 px-4">Difficulty</th>
              <th className="text-left py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr
                key={tip._id}
                className="border-b hover:bg-[#FAFAF5] transition"
              >
                <td className="py-3 px-4 text-base">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={tip.photo}
                    alt={tip.title}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </td>
                <td className="py-3 px-4 font-semibold">{tip.title}</td>
                <td className="py-3 px-4">{tip.category}</td>
                <td className="py-3 px-4">{tip.availability}</td>
                <td className="py-3 px-4">{tip.difficulty}</td>
                <td className="py-3 px-4">
                  <Link
                    to={`/browseTipsDetails/${tip._id}`}
                    className="text-secondary hover:text-[#A0D468]"
                  >
                    <FaEye size={20} />
                  </Link>
                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-2xl py-6 text-gray-400">
                  No public tips available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
