import Banner from "../HomeComponents/Banner/Banner";
import Tabs from "../HomeComponents/Categories/Categories";
import FeatureSection from "../../FeatueSection/FeatureSection";
import GallerySection from "../HomeComponents/Gallery/GallerySection";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <Tabs ></Tabs>
      <FeatureSection></FeatureSection>
    </div>
  );
};

export default Home;
