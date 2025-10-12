import React, { use, useEffect } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const ShareTips = () => {

  useEffect(() => {
      document.title = "Plant Mates | share-tips";
    }, []);

  const { user } = use(AuthContext);

  const handleShareTips = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newTips = Object.fromEntries(formData.entries());
    // console.log(newTips);

    // send tips data in db
    fetch("https://plant-mates-server.vercel.app/tips", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newTips),
    })
      .then((res) => res.json())
      .then((data) => {
          console.log("after adding tips data", data);
          toast.success('your tips added successfully');
          form.reset();
      });
  };

  return (
    <div className="container mx-auto mt-12">
      <div className="text-center px-6 md:px-[82px] bg-base-100 mb-8 rounded-xl">
        <h2 className="font-semibold text-3xl md:text-4xl mb-4">Share a Garden Tip</h2>
        <p className="font-normal text-base md:text-lg text-neutral md:w-3/4 mx-auto">
          Help other gardeners by sharing your tips and experiences. Whether
          you're an expert or a beginner, your insights are valuable!
        </p>

        <form onSubmit={handleShareTips} className="mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 md:space-x-6">
            <div className="fieldset text-left">
              <label className="label font-semibold text-xl">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                placeholder="e.g. How I Grow Tomatoes Indoors"
                required
              />

              <label className="label font-semibold text-xl mt-2">
                Plant Type or Topic
              </label>
              <input
                type="text"
                name="topic"
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                placeholder="Tomatoes / Herbs / Balcony Tips"
                required
              />

              <label className="label font-semibold text-xl mt-2">
                Difficulty Level
              </label>
              <select
                name="difficulty"
                required
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
                required
                name="category"
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
                required
                className="input w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
                placeholder="https://example.com/image.jpg"
              />

              <label className="label font-semibold text-xl mt-2">
                Availability
              </label>
              <select
                required
                name="availability"
                className="select input cursor-pointer w-full text-base bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary shadow-sm"
              >
                <option>Public</option>
                <option>Hidden</option>
              </select>
              <label className="label font-semibold text-xl mt-3">
                Description
              </label>
              <textarea
                required
                name="description"
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
            value="Submit Tip"
            className="btn mt-4 mb-14 w-full bg-secondary text-white hover:bg-primary text-xl"
          />
        </form>
      </div>
    </div>
  );
};

export default ShareTips;
