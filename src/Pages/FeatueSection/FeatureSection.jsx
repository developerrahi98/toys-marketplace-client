

const FeatureSection = () => {
  return (
    <section className="bg-violet-100 py-12 my-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-semibold text-violet-900 sm:text-4xl sm:leading-10">
            Discover Our Amazing Features
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-violet-900 sm:mt-4">
            Explore the fantastic features that make our toy marketplace the best in the industry.
          </p>
        </div>
        <div className="mt-12">
          <div className="flex flex-wrap -mx-6">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 1L4 7V17L12 23L20 17V7L12 1ZM12 21.2L6 17.4V8.6L12 4.8L18 8.6V17.4L12 21.2Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Wide Selection of Toys
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Browse through a vast collection of toys for children of all ages, from educational toys to action figures and more.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M21 13H3V11H21V13ZM21 7H3V9H21V7ZM21 17H3V19H21V17Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  Safe and Certified Toys
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                  Rest assured knowing that all the toys on our marketplace meet the highest safety standards and are certified for quality.
                </p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-6 mb-8">
              <div className="bg-white rounded-lg shadow-lg px-6 py-8">
                <div className="flex items-center justify-center w-12 h-12 rounded-md bg-indigo-500 text-white">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6V18ZM5 6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H6C5.44772 19 5 18.5523 5 18V6ZM7 8C6.44772 8 6 8.44772 6 9V15C6 15.5523 6.44772 16 7 16H17C17.5523 16 18 15.5523 18 15V9C18 8.44772 17.5523 8 17 8H7Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">
                  User Reviews and Ratings
                </h3>
                <p className="mt-2 text-base leading-6 text-gray-500">
                Browse through a vast collection of toys for children of all ages, from educational toys to action figures and more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
