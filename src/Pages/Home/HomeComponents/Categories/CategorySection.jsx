import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CategorySection = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();

  const tabs = [
    {
      category: 'Racing Cars',
      subCategories: [
        {
          name: 'Toy 1',
          price: '$19.99',
          rating: 4.5,
          image: '/src/assets/images/Tabs/japanese_old_drift_car_4.jpg',
        },
        {
          name: 'Toy 2',
          price: '$24.99',
          rating: 4.2,
          image: '/src/assets/images/Tabs/japanese_old_drift_car_3.jpg',
        },
      ],
    },
    {
      category: 'Jeep Cars',
      subCategories: [
        {
          name: 'Toy 3',
          price: '$16.99',
          rating: 4.8,
          image: '/src/assets/images/Tabs/5706071.jpg',
        },
        {
          name: 'Toy 4',
          price: '$21.99',
          rating: 4.4,
          image: '/src/assets/images/Tabs/8547448.jpg',
        },
      ],
    },
    {
      category: 'Sedan Cars',
      subCategories: [
        {
          name: 'Toy 5',
          price: '$29.99',
          rating: 4.6,
          image: '/src/assets/images/Tabs/64366.jpg',
        },
        {
          name: 'Toy 6',
          price: '$34.99',
          rating: 4.3,
          image: '/src/assets/images/Tabs/67352.jpg',
        },
      ],
    },
  ];

  const handleViewDetails = (subCategoryName) => {
    if (!user) {
      Swal.fire({
        title: 'You have to be logged in first',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
      navigate('/login')
    } else {
      navigate(`/alltoys`)
    }
  };

  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-semibold text-violet-900 sm:text-4xl sm:leading-10">
            Shop by Category
          </h2>
        </div>
        <div className="mt-8">
          <div className="flex justify-center">
            <div className="border-b border-gray-300">
              <nav className="-mb-px flex">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => handleTabChange(index)}
                    className={`whitespace-no-wrap ml-8 py-4 px-1 border-b-2 font-medium ${
                      activeTab === index
                        ? 'border-indigo-500 text-indigo-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab.category}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="mt-8 md:flex justify-evenly">
            {tabs[activeTab].subCategories.map((subCategory, index) => (
              <div key={index} className="mb-8 flex items-start bg-slate-50 p-6">
                <img
                  className="h-20 w-20 rounded-md object-cover"
                  src={subCategory.image}
                  alt={subCategory.name}
                />
                <div className="ml-4 flex-grow">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {subCategory.name}
                  </h3>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Price: {subCategory.price}
                  </p>
                  <p className="mt-2 text-base leading-6 text-gray-500">
                    Rating: {subCategory.rating}
                  </p>
                  <button
                    onClick={() => handleViewDetails(subCategory.name)}
                    className="mt-4 bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
