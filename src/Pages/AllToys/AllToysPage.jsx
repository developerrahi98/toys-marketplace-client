import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";



const AllToysPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [toys, setToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/singleToy")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);

  console.log(toys);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewDetails = (id) => {
    if (!user) {
      Swal.fire({
        title: "You have to be logged in first",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      navigate("/login");
    } else {
        navigate(`/toy/${id}`)
    }
  };

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
      <Helmet>
        <title>Supper Kiddo | All Toys </title>
      </Helmet>
      <div className="py-12">
        <h2 className="text-3xl leading-9 font-semibold text-violet-900 sm:text-4xl sm:leading-10">
          All Toys
        </h2>
        <div className="mt-8">
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Search by Toy Name"
              value={searchTerm}
              onChange={handleSearchChange}
              className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white"
            />
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Seller
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Toy Name
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Sub-category
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                  Available Quantity
                </th>
                <th className="px-6 py-3 bg-gray-50">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredToys.slice(0, 20).map((toy, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-no-wrap">{toy.seller}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {toy.toyName}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {toy.subCategory}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">{toy.price}</td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {toy.quantity}
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap">
                    <button
                      onClick={() => handleViewDetails(toy._id)}
                      className="text-indigo-600 btn btn-outline btn-primary hover:text-indigo-900"
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllToysPage;
