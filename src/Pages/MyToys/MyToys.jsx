import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import MyToy from "./MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
  const toys = useLoaderData();
  const [toy, setToy] = useState();
  console.log(toys);
  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://toys-marketpalace-server-developerrahi98.vercel.app/addToy/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            toy.find;
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = toys.filter((toy) => toy._id !== _id);
              setToy(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="grid grid-cols-3 gap-5 pl-14 py-14">
      {
        Array.from(toys).map(toy => <MyToy
            key={toys._id} toy={toy} handleDelete={handleDelete}
        > 
        </MyToy>)
      }
    </div>
  );
};

export default MyToys;
