import React from "react";

const MyToy = ({ toy }) => {
  return (
    <div className="grid ">
      <div className="card w-96 bg-violet-50 shadow-xl text-violet-800">
        <figure>
          <img src={toy.url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            <span className="font-extrabold">Product Name :</span> {toy.name}
          </h2>
          <p>
            <span className="font-extrabold">Category :</span> {toy.category}
          </p>
          <p>
            <span className="font-extrabold">Price :</span> {toy.price}
          </p>
          <p>
            <span className="font-extrabold">Ratings :</span> {toy.ratings}
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary">Update</button>
            <button className="btn btn-outline btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
