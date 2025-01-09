import React from "react";
import HeroPage from "../components/home/HeroSection";
import AboutDA from "../components/home/AboutDA";
import Voices from "../components/home/Voices";
import Events from "../components/home/Events";
import Action from "../components/home/Action";
import SponsorsScroll from "../components/home/SponsorsScroll";
const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutDA />
      <SponsorsScroll />
      {/* <Voices /> */}
      <Events />
      <Action />
    </div>
  );
};

export default Home;
