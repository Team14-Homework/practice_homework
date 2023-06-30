import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import DetailMain from "components/DetailMain";

export default function MovieDetail() {
  return (
    <div className="layout">
      <HomeHeader />
      <DetailMain />
      <HomeFooter />
    </div>
  );
}
