import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import HomeMain from "components/HomeMain";
import "styles/reset.css";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </>
  );
}
