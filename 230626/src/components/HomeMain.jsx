import { useFetchMovies } from "customHook/useFetchMovies";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "styles/HomeMain.module.css";

export default function HomeMain() {
  const navigate = useNavigate();
  const API_URL =
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year";
  const { data, loading } = useFetchMovies(API_URL);
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const leftBtn = useRef();
  const rightBtn = useRef();

  const handleLeftBtn = () => {
    if (sliderIndex !== 0) {
      setSliderIndex(sliderIndex - 7);
      rightBtn.current.style = { display: "block" };
    }
  };
  const handleRightBtn = () => {
    if (sliderIndex + 7 < moviesInfo.length) {
      setSliderIndex(sliderIndex + 7);
      leftBtn.current.style = { display: "block" };
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/detail/${movieId}`);
  };

  useEffect(() => {
    setSliderStyle({
      transition: "all 0.5s ease-in-out",
      transform: `translateX(-${100 * sliderIndex}%) translateX(-${
        20 * sliderIndex
      }px)`,
    });
    if (sliderIndex === 0) {
      leftBtn.current.style = { display: "none" };
    } else if (sliderIndex + 7 > moviesInfo.length) {
      rightBtn.current.style = { display: "none" };
    }
  }, [sliderIndex, moviesInfo]);

  useEffect(() => {
    data &&
      setMoviesInfo(
        data.movies.map((val) => [val.medium_cover_image, val.title, val.id])
      );
  }, [data]);

  return (
    <main className={styles.home_main}>
      <section className={styles.slider_wrapper}>
        <div className={styles.movieImg_container}>
          {loading ? (
            <p className={styles.loading_text}>Loading...</p>
          ) : (
            moviesInfo.map((val) => (
              <article
                className={styles.movieInfoBox}
                style={sliderStyle}
                key={val[2]}
                onClick={() => {
                  handleMovieClick(val[2]);
                }}
              >
                <img
                  src={val[0]}
                  alt={`영화 ${val[1]} 포스터`}
                  onError={(e) => (e.target.parentNode.style.display = "none")}
                />
                <p className={styles.movie_title}>{val[1]}</p>
              </article>
            ))
          )}
        </div>
        <button
          type="button"
          className={styles.left_btn}
          onClick={() => handleLeftBtn()}
          ref={leftBtn}
        >{`<`}</button>
        <button
          type="button"
          className={styles.right_btn}
          onClick={() => handleRightBtn()}
          ref={rightBtn}
        >{`>`}</button>
      </section>
    </main>
  );
}
