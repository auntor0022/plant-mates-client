import React, { use, useEffect } from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const UpdateTips = () => {

  useEffect(() => {
      document.title = "Plant Mates | update-tips";
    }, []);

  const { user } = use(AuthContext);
  const {
    _id,
    title,
    topic,
    difficulty,
    category,
    photo,
    availability,
    description,
  } = useLoaderData();
  console.log(_id);

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updateTips = Object.fromEntries(formData.entries());
    // console.log(updateTips);

    //   send updated tips in db
    fetch(`https://plant-mates-server.vercel.app/tips/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateTips),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tips Update successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="text-center px-[82px] bg-base-100 mb-8 rounded-xl">
        <h2 className="font-semibold text-4xl mb-8">Update Your Garden Tip</h2>
        <form onSubmit={handleUpdate} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
            <div className="fieldset text-left">
              <label className="label font-semibold text-xl">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={title}
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                // placeholder="e.g. How I Grow Tomatoes Indoors"
              />

              <label className="label font-semibold text-xl mt-2">
                Plant Type or Topic
              </label>
              <input
                type="text"
                name="topic"
                defaultValue={topic}
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                // placeholder="Tomatoes / Herbs / Balcony Tips"
              />

              <label className="label font-semibold text-xl mt-2">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                defaultValue={difficulty}
                className="select input cursor-pointer w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>

              <label className="label font-semibold text-xl mt-2">
                Category
              </label>
              <select
                name="category"
                defaultValue={category}
                className="select input cursor-pointer w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
              >
                <option>Plant Care</option>
                <option>Composting</option>
                <option>Vertical Gardening</option>
                <option>Indoor Plants</option>
              </select>
            </div>

            <div className="fieldset text-left">
              <label className="label font-semibold text-xl">Image URL</label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                placeholder="https://example.com/image.jpg"
              />

              <label className="label font-semibold text-xl mt-2">
                Availability
              </label>
              <select
                name="availability"
                defaultValue={availability}
                className="select input cursor-pointer w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
              >
                <option>Public</option>
                <option>Hidden</option>
              </select>
              <label className="label font-semibold text-xl mt-3">
                Description
              </label>
              <textarea
                name="description"
                defaultValue={description}
                className="textarea input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                rows={10}
                placeholder="Write your detailed tip here..."
              ></textarea>
            </div>
          </div>

          <div className="fieldset text-left mt-4">
            <label className="label font-semibold text-xl">Your Name</label>
            <input
              name="name"
              type="text"
              readOnly
              value={user.displayName}
              className="input w-full text-base border-none bg-gray-100"
            />

            <label className="label font-semibold text-xl mt-2">
              Your Email
            </label>
            <input
              name="email"
              type="email"
              readOnly
              value={user.email}
              className="input w-full text-base border-none bg-gray-100"
            />
          </div>

          <input
            type="submit"
            value="Update Tip"
            className="btn mt-4 mb-14 w-full bg-secondary text-white hover:bg-primary text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateTips;
