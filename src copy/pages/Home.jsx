import React from "react";
import HeroPage from "../components/home/HeroSection";
import AboutDA from "../components/home/AboutDA";
import Voices from "../components/home/Voices";
import Events from "../components/home/Events";
import Action from "../components/home/Action";
const Home = () => {
  return (
    <div>
      <HeroPage />
      <AboutDA />
      <Voices />
      <Events />
      <Action />
    </div>
  );
};

export default Home;
