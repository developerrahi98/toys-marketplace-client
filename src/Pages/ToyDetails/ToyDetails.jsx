import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const toy = useLoaderData();
  const { _id } = toy;
  const { image, toyName, seller, price, quantity, description } = toy;

  return (
    <div className="bg-gray-50 mx-auto shadow-md rounded-lg  my-10 m  w-1/2">
      <img src={image} alt={name} className="w-full mb-4 rounded-md" />
      <div className="p-7 text-center">
        <h3 className="text-violet-900 text-xl font-extrabold mb-2 p">
          {toyName}
        </h3>
        <p className="text-violet-900 mb-2">
          <span className="font-bold">Seller:</span> {seller}
        </p>
        <p className="text-violet-900 mb-2">
          <span className="font-bold">Price:</span> {price}
        </p>
        <p className="text-violet-900 mb-2">
          <span className="font-bold">Available Quantity:</span> {quantity}
        </p>
        <p className="text-violet-900 ">
          <span className="font-bold">Description:</span> {description}
        </p>
      </div>
    </div>
  );
};

export default ToyDetails;
