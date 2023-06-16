
import img1 from "../../../../assets/images/PngItem_1045098.png";
import img2 from "../../../../assets/images/PngItem_1497157.png";
import img3 from "../../../../assets/images/PngItem_2122770.png";
import img4 from "../../../../assets/images/PngItem_1939644.png";
import img5 from "../../../../assets/images/PngItem_219866.png";
import img6 from "../../../../assets/images/PngItem_2122950.png";
import img7 from "../../../../assets/images/PngItem_5025639.png";
import img8 from "../../../../assets/images/PngItem_997567.png";
import img9 from "../../../../assets/images/PngItem_5025669.png";


const GallerySection = () => {
  return (
    <section className="bg-violet-100 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl leading-9 font-semibold text-violet-900 sm:text-4xl sm:leading-10">
            Explore Our Toy Collection
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl leading-7 text-violet-900 sm:mt-4">
            Take a look at some of the amazing toys available in our marketplace.
          </p>
        </div>
        <div className="mt-12 ">
          <div className="grid md:grid-cols-3 gap-6 rounded-lg shadow-lg overflow-hidden">
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10"  src={img1} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Rolls Royce
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $19.99
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10"  src={img2} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Hexasors
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $39.99
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10" src={img3} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Tata Nano
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $20
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10" src={img4} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Ferrari
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $59.99
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10"  src={img5} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Toyota
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $29.99
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
           
            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                <img className="mb-10 " src={img6} alt="" />
                <h3 className="mt-2 text-xl leading-7 font-semibold text-gray-900">
                  Bugati
                </h3>
                <p className="mt-3 text-base leading-6 text-gray-500">
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, similique.
                </p>
              </div>
              <div className="mt-6 flex items-center">
                <span className="text-sm leading-5 font-medium text-gray-500">
                  $59.99
                </span>
                <span className="ml-2 bg-green-200 text-green-800 py-1 px-2 rounded-full text-xs font-semibold uppercase">
                  In Stock
                </span>
              </div>
            </div>
          </div>
          {/* Repeat the above gallery item structure for more toys */}
        </div>
        <div className="mt-8 text-center">
          <a
            href="/gallery"
            className="text-base leading-6 font-medium text-indigo-600 hover:text-indigo-500 transition ease-in-out duration-150"
          >
            View More Toys
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
