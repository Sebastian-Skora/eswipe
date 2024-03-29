import React, { Component } from "react";
import AboutSection from "./AboutSection/AboutSection";
import HeroPage from "./HeroPage/HeroPage";
import ClientsOpinionSection from "./ClientsOpinionSection/ClientsOpinionSection";
import TecSection from "./TecSection/TecSection.js";
import FindUsSection from "./FindUsSection/FindUsSection";
import OfferSection from "./OfferSection";

class MainPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        <HeroPage />
        <AboutSection />
        <OfferSection />
        <ClientsOpinionSection />

        <TecSection />
        <FindUsSection />
      </>
    );
  }
}
export default MainPage;
