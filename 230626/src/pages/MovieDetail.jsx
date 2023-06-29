import React from "react";
import HomeFooter from "components/HomeFooter";
import HomeHeader from "components/HomeHeader";
import DetailMain from "components/DetailMain";
import "styles/reset.css";
import styles from "styles/layout.module.css";

export default function MovieDetail() {
  return (
    <div className={styles.layout}>
      <HomeHeader />
      <DetailMain />
      <HomeFooter />
    </div>
  );
}
