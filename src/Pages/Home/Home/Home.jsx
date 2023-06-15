import Banner from "../HomeComponents/Banner/Banner";
import Tabs from "../HomeComponents/Categories/Categories";
import FeatureSection from "../../FeatueSection/FeatureSection";
import GallerySection from "../HomeComponents/Gallery/GallerySection";
import AboutUsSection from "../../AboutUs/AboutUsSection";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <Tabs ></Tabs>
      <FeatureSection></FeatureSection>
      <AboutUsSection></AboutUsSection>
    </div>
  );
};

export default Home;
