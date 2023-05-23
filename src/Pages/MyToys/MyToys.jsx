import React from "react";
import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";

const MyToys = () => {
  const toys = useLoaderData();
  console.log(toys);

  return (
    <div className="grid grid-cols-3 gap-5 pl-14 py-14">
        {
            toys.map(toy=><MyToy
            key={toys._id}
            toy={toy}
            ></MyToy>)
        }
    </div>
  );
};

export default MyToys;
