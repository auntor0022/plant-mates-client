import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { FaHeart } from "react-icons/fa";
import Swal from "sweetalert2";

const BrowseTipsDetails = () => {

  useEffect(() => {
      document.title = "Plant Mates | browse-tips-details";
    }, []);

  const tip = useLoaderData(); // Load single tip
  // const { id } = useParams();
  // console.log(id);
  let likeCount = tip.totalLike || 0;
  // console.log(likeCount);

  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    likeCount = likeCount + 1;

    fetch(`https://plant-mates-server.vercel.app/likes/${tip._id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ totalLike: likeCount }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          setLikes(likes + 1);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Liked successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container mx-auto px-4 md:px-12 mt-12">
      <div className="bg-[#FAFAF5] p-6 md:p-12 rounded-xl shadow-md">
        <div className="flex flex-col lg:flex-row gap-8">
          <img
            src={tip.photo}
            alt={tip.title}
            className="w-full lg:w-2/5 object-cover rounded-xl shadow"
          />

          <div className="flex-1">
            <h2 className="text-4xl font-bold text-primary mb-4">
              {tip.title}
            </h2>

            <p className="mb-2 font-semibold text-secondary">
              Category:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.category}
              </span>
            </p>
            <p className="mb-2 font-semibold text-secondary">
              Plant Type / Topic:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.topic}
              </span>
            </p>
            <p className="mb-2 font-semibold text-secondary">
              Difficulty:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.difficulty}
              </span>
            </p>
            <p className="mb-2 font-semibold text-secondary">
              Status:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.availability}
              </span>
            </p>
            <p className="mb-2 font-semibold text-secondary">
              Shared by:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.name}
              </span>
            </p>
            <p className="mb-2 font-semibold text-secondary">
              Email:
              <span className="text-neutral-600 ml-1 font-normal">
                {tip.email}
              </span>{" "}
            </p>

            <div className="my-6">
              <h4 className="text-2xl font-semibold text-primary mb-2">
                Description
              </h4>
              <p className="text-neutral-700 leading-relaxed">
                {tip.description}
              </p>
            </div>

            <button
              onClick={handleLike}
              className="flex items-center gap-2 px-5 py-2 cursor-pointer rounded-full text-white transition
                liked bg-secondary"
            >
              <FaHeart /> Like
            </button>
            <p className="text-sm text-neutral-600 mt-4">{likes} Likes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseTipsDetails;
