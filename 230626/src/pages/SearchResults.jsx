import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import SearchMain from "components/SearchMain";
import "styles/reset.css";
import styles from "styles/layout.module.css";

export default function SearchResults() {
  return (
    <div className={styles.layout}>
      <HomeHeader />
      <SearchMain />
      <HomeFooter />
    </div>
  );
}
