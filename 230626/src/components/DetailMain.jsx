import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetchMovies } from "customHook/useFetchMovies";
import styles from "styles/DetailMain.module.css";

export default function DetailMain() {
  const { movieId } = useParams();
  const API_URL = `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}`;
  const { data, loading } = useFetchMovies(API_URL);
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    data && setDetail(data.movie);
  }, [data]);

  return (
    <main className={styles.detail_main}>
      <section className={styles.detail_wrapper}>
        {loading ? (
          <p className={styles.loading_text}>Loading...</p>
        ) : (
          <>
            <img
              src={detail.large_cover_image}
              alt={`${detail.title} 포스터 이미지`}
              className={styles.detail_img}
            />
            <div className={styles.content_container}>
              <h3 className={styles.movieTitle}>{detail.title_long}</h3>
              <p className={styles.movieInfo}>
                <span>Genres : </span>
                {detail.genres}
              </p>
              <p className={styles.movieInfo}>
                <span>Description : </span>
                {detail.description_full}
              </p>
            </div>
          </>
        )}
      </section>
    </main>
  );
}
