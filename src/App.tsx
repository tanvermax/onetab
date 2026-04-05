import FeatureSection from "./MainLayout/FeatureSection";
import HeroSection from "./MainLayout/Hero/Hero";
import NavbarPage from "./MainLayout/Navber";
import NextFeaturesSection from "./MainLayout/NextFeaturesSection";
import TechnicalUSP from "./MainLayout/TechnicalUSP";

function App() {
  return (
    <>
      <NavbarPage />
      <HeroSection />
      <FeatureSection/>
      <NextFeaturesSection/>
      <TechnicalUSP/>
    </>
  );
}

export default App;
