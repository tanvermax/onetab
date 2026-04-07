import FeatureSection from "./FeatureSection";
import HeroSection from "./Hero/Hero";


import MissionSection from "./MissionSection";
import NextFeaturesSection from "./NextFeaturesSection";


import OneBookSection from "./OneBook/OneBookSection";
import OneBoardSection from "./OneBorard/OneBoardSection";
import Ontab from "./Onetab/Ontab";
import TechnicalUSP from "./TechnicalUSP";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <div className="px-10">
        <MissionSection />
      </div>
      <FeatureSection />
      <div id="onetab">
        <Ontab />
      </div>
      <div id="oneboard">
        <OneBoardSection />
      </div>
      <div id="onebook">
        <OneBookSection />
      </div>
      <NextFeaturesSection />
      <TechnicalUSP />
    </div>
  );
}
