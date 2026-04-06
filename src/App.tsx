import FeatureSection from "./MainLayout/FeatureSection";
import Footer from "./MainLayout/Footer";
import HeroSection from "./MainLayout/Hero/Hero";
import MissionSection from "./MainLayout/MissionSection";
import NavbarPage from "./MainLayout/Navber";
import NextFeaturesSection from "./MainLayout/NextFeaturesSection";
import Ontab from "./MainLayout/Onetab/Ontab";
import TechnicalUSP from "./MainLayout/TechnicalUSP";

function App() {
  return (
    <>
      <NavbarPage />
      <HeroSection />
      <MissionSection/>
      <FeatureSection/>
      <Ontab/>
      <NextFeaturesSection/>
      
      <TechnicalUSP/>
      <Footer/>
    </>
  );
}

export default App;
