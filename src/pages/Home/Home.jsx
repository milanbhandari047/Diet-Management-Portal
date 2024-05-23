import React from "react";
import HeroSection from "./HeroSection";
import Subscription from "../Subscriptions/Subscription";
import DietPrograms from "../DietProgram/DietPrograms";
import WhoCanUse from "../whoCanUse/WhoCanUse";
import ContactForm from "../Contact/Contact";

const Home = () => {
  return (
    <>
      <HeroSection />
      <DietPrograms />
      <Subscription />
      <WhoCanUse />
      <ContactForm />
    </>
  );
};

export default Home;
