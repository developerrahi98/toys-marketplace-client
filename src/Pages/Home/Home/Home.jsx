import Banner from "../HomeComponents/Banner/Banner";
import Gallery from "../HomeComponents/Gallery/Gallery";
import Tabs from "../HomeComponents/Categories/Categories";
import FeatureSection from "../../FeatueSection/FeatureSection";



const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
      <Tabs ></Tabs>
      <FeatureSection></FeatureSection>
    </div>
  );
};

export default Home;
