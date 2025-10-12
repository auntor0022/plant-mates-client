import React, { use, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";

const MyTips = () => {

  useEffect(() => {
      document.title = "Plant Mates | my-tips";
    }, []);

  const { user } = use(AuthContext);
  // console.log(user);
  const [myTips, setMyTips] = useState([]);

  useEffect(() => {
    if (user) {
      fetch(`https://plant-mates-server.vercel.app/mydata/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTips(data));
    }
  }, [user]);

  const handleDelete = (_id) => {
    // console.log(_id);

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          // delete in db
          fetch(`https://plant-mates-server.vercel.app/tips/${_id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              // console.log("after delete", data);
              if (data.deletedCount) {
                swalWithBootstrapButtons.fire({
                  title: "Deleted!",
                  text: "Your Tips has been deleted.",
                  icon: "success",
                });
                const remainingCoffee = myTips.filter((t) => t._id !== _id);
                setMyTips(remainingCoffee);
              }
            });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  return (
    <div className="container mx-auto px-4 md:px-12 py-10">
      <h2 className="text-4xl font-bold text-primary text-center mb-8">
        My Garden Tips
      </h2>

      <div className="overflow-x-auto bg-white rounded-xl shadow">
        <table className="min-w-full text-sm ">
          <thead className="bg-primary text-white text-left">
            <tr>
              <th className="text-left py-3 px-4">No.</th>
              <th className="py-3 px-4">Image</th>
              <th className="py-3 px-4">Title</th>
              <th className="py-3 px-4">Category</th>
              <th className="py-3 px-4">Status</th>
              <th className="py-3 px-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {myTips.map((tip, index) => (
              <tr
                key={tip._id}
                className="border-b hover:bg-[#FAFAF5] transition"
              >
                <td className="py-3 px-4 text-black">{index + 1}</td>
                <td className="py-3 px-4">
                  <img
                    src={tip.photo}
                    alt={tip.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                </td>
                <td className="py-3 px-4 text-black font-semibold">{tip.title}</td>
                <td className="py-3 px-4 text-black">{tip.category}</td>
                <td className="py-3 px-4">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
                      tip.availability === "Public"
                        ? "bg-[#68B047]"
                        : "bg-gray-500"
                    }`}
                  >
                    {tip.availability}
                  </span>
                </td>
                <td className="pt-6 px-4 flex justify-center items-center gap-3">
                  <Link to={`/updateTips/${tip._id}`}>
                    <button
                      className="text-blue-600 hover:text-blue-800 transition cursor-pointer"
                      title="Edit Tip"
                    >
                      <FaEdit size={23} />
                    </button>
                  </Link>
                  <button
                    onClick={() => handleDelete(tip._id)}
                    className="text-red-600 hover:text-red-800 transition cursor-pointer"
                    title="Delete Tip"
                  >
                    <FaTrash size={22} />
                  </button>
                </td>
              </tr>
            ))}
            {myTips.length === 0 && (
              <tr>
                <td colSpan="8" className="text-center text-xl py-6 text-gray-400">
                  You haven't added any tips yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyTips;
