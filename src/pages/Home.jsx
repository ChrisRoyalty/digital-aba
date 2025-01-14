import React from "react";
import HeroPage from "../components/home/HeroSection";
import AboutDA from "../components/home/AboutDA";
import Voices from "../components/home/Voices";
import Events from "../components/home/Events";
import SponsorsScroll from "../components/home/SponsorsScroll";
import Impact from "../components/about/Impact";
import Footer from "../components/Footer";
const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutDA />
      <Impact />
      <SponsorsScroll />
      {/* <Voices /> */}
      <Events />
      <Footer useBackgroundImage={true} />
    </div>
  );
};

export default Home;
