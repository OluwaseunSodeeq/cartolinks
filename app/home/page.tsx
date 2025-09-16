import React from "react";
import Wrapper from "../components/Wrapper";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HerosectionSliders from "../components/HerosectionSliders";
import { GenerateSection } from "../components/GenerateSection";

export default function Page() {
  return (
    <Wrapper>
      <Navbar />
      <HerosectionSliders />
      <GenerateSection />
      <Footer />
    </Wrapper>
  );
}
