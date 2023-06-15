import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../../../../assets/images/closeup-shot-small-toy-car-wooden-train-track.jpg";
import img2 from "../../../../assets/images/closeup-shot-toy-red-wooden-train-wooden-table.jpg";
import img3 from "../../../../assets/images/red-car-with-christmas-ball-top.jpg";
import img4 from "../../../../assets/images/toy-red-car-with-pinecone-top.jpg";

const Banner = () => {
  return (
    <Carousel>
    <div>
        <img src={img1} />
    </div>
    <div>
        <img src={img2} />
    </div>
    <div>
        <img src={img3} />
    </div>
    <div>
        <img src={img4} />
    </div>
</Carousel>
  );
};

export default Banner;
