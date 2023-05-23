import React from "react";

const MyToy = ({ toy }) => {
  return (
    <div className="grid ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={toy.url} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {toy.name}
          </h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
