import React, { useEffect, useState } from 'react';

const AllToysPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [toys, setToys] = useState([]);
  useEffect(()=>{
    fetch('car.json')
    .then(res => res.json())
    .then(data => setToys(data))
  },[])

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleViewDetails = (toyName) => {
    if (!isLoggedIn) {
      // Redirect to login page
      // Example: history.push("/login");
    } else {
      // Handle view details for the selected toy
      // Example: history.push(`/toys/${toyName}`);
    }
  };

  const filteredToys = toys.filter((toy) =>
    toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-4 pt-20 sm:px-6 lg:px-8">
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
              className="px-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
                  <td className="px-6 py-4 whitespace-no-wrap">
                    {toy.seller}
                  </td>
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
                      onClick={() => handleViewDetails(toy.toyName)}
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
