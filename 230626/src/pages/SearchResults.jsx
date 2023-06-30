import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import SearchMain from "components/SearchMain";

export default function SearchResults() {
  return (
    <div className="layout">
      <HomeHeader />
      <SearchMain />
      <HomeFooter />
    </div>
  );
}
