import Banner from "../HomeComponents/Banner/Banner";
import FeatureSection from "../../FeatueSection/FeatureSection";
import GallerySection from "../HomeComponents/Gallery/GallerySection";
import AboutUsSection from "../../AboutUs/AboutUsSection";
import CategorySection from "../HomeComponents/Categories/CategorySection";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <GallerySection></GallerySection>
      <CategorySection></CategorySection>
      <FeatureSection></FeatureSection>
      <AboutUsSection></AboutUsSection>
    </div>
  );
};

export default Home;
