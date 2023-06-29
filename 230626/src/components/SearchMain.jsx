import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "styles/SearchMain.module.css";

export default function SearchMain() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get("query");
  const [moviesTitle, setMoviesTitle] = useState([]);

  const filteredMovies = moviesTitle.filter((movie) =>
    movie[1].toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const getAPI = () => {
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
        .then((response) => response.json())
        .then((json) => {
          setMoviesTitle(
            json.data.movies.map((val) => [
              val.medium_cover_image,
              val.title,
              val.id,
            ])
          );
        });
    };
    getAPI();
  }, []);

  const handleMovieClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  return (
    <main className={styles.seacrh_main}>
      <section className={styles.filteredMovies_wrapper}>
        {filteredMovies.map((val, idx) => (
          <article
            key={idx}
            className={styles.movie_wrapper}
            onClick={() => {
              handleMovieClick(val[2]);
            }}
          >
            <img
              src={val[0]}
              alt={`영화 ${val[1]} 포스터 이미지`}
              className={styles.movie_img}
              onError={(e) => (e.target.parentNode.style.display = "none")}
            />
            <p className={styles.title}>{val[1]}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
