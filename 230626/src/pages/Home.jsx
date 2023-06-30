import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import HomeMain from "components/HomeMain";

export default function Home() {
  return (
    <div className="layout">
      <HomeHeader />
      <HomeMain />
      <HomeFooter />
    </div>
  );
}
