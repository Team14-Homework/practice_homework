import React from "react";
import { Link } from "react-router-dom";
import styles from "styles/HomeHeader.module.css";

export default function HomeHeader() {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.webName}>
        FILMFLIX
      </Link>
      <p>FILMFLIX</p>
      <input
        type="text"
        className={styles.search_input}
        placeholder="검색어를 입력하세요."
      />
    </header>
  );
}
