import React from "react";
import Intro from "../components/about/Intro";
import Msme from "../components/about/Msme";
import Vision from "../components/about/Vision";
import Leadership from "../components/about/Leadership";
import Initiators from "../components/about/Initiators";
import Philosophy from "../components/about/Philosophy";
import Impact from "../components/about/Impact";
import SponsorsScroll from "../components/home/SponsorsScroll";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Intro />
      <Msme />
      <Vision />
      <Leadership />
      <Initiators />
      <Philosophy />
      <Impact />
      <SponsorsScroll />
      <Footer useBackgroundImage={true} textColor="text-white" />
    </div>
  );
};

export default About;
