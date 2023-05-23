import React from "react";
import img1 from "../../../../assets/images/PngItem_1045098.png";
import img2 from "../../../../assets/images/PngItem_1497157.png";
import img3 from "../../../../assets/images/PngItem_2122770.png";
import img4 from "../../../../assets/images/PngItem_1939644.png";
import img5 from "../../../../assets/images/PngItem_219866.png";
import img6 from "../../../../assets/images/PngItem_2122950.png";
import img7 from "../../../../assets/images/PngItem_5025639.png";
import img8 from "../../../../assets/images/PngItem_997567.png";
import img9 from "../../../../assets/images/PngItem_5025669.png";

const Gallery = () => {
  return (
    <div
      className="py-8"
    >
      <h1 className="text-6xl text-center mb-6 text-violet-800 font-bold">
        Toys Gallery
      </h1>
      <div className="grid grid-cols-3 gap-12 px-5 mt-16">
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img1} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img2} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img3} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img4} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img5} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img6} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img7} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img8} alt="" />
        </div>
        <div className="border rounded-3xl bg-violet-100 p-7">
          <img src={img9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
