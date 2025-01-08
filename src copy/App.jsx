// App.js
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./components/Main";
import About from "./pages/About";
import Home from "./pages/Home";
import MSME from "./pages/MSME";
import ImpactPage from "./pages/ImpactPage";
import JoinPage from "./pages/JoinPage";
import EventPage from "./pages/EventPage";
import HackathonsPage from "./pages/HackathonsPage";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import "flowbite";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/msme" element={<MSME />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/join" element={<JoinPage />} />
        <Route path="/event" element={<EventPage />} />
        <Route path="/hackathon" element={<HackathonsPage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Route>
    </Routes>
  );
}

export default App;
