import React, { useEffect, useState } from "react";
import styles from "styles/HomeMain.module.css";

export default function HomeMain() {
  const [moviesInfo, setMoviesInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});

  const handleLeftBtn = () => {
    if (sliderIndex !== 0) {
      setSliderIndex(sliderIndex - 7);
    }
  };
  const handleRightBtn = () => {
    if (sliderIndex + 7 < moviesInfo.length - 1) {
      setSliderIndex(sliderIndex + 7);
    }
  };

  useEffect(() => {
    setSliderStyle({
      transition: "all 0.5s ease-in-out",
      transform: `translateX(-${100 * sliderIndex}%) translateX(-${
        20 * sliderIndex
      }px)`,
    });
  }, [sliderIndex]);

  useEffect(() => {
    const getAPI = () => {
      fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
      )
        .then((response) => response.json())
        .then((json) => {
          setLoading(true);
          setMoviesInfo(
            json.data.movies.map((val) => [val.medium_cover_image, val.title])
          );

          console.log(json.data.movies);
          // console.log(moviesInfo);
        });
    };
    getAPI();
  }, [loading]);

  return (
    <main className={styles.main}>
      <section className={styles.slider_wrapper}>
        <div className={styles.movieImg_container}>
          {moviesInfo.map((val, idx) => (
            <article className={styles.movieInfoBox} style={sliderStyle}>
              <img
                src={val[0]}
                alt={`영화 ${val[1]} 포스터`}
                className={styles.movie_img}
                key={`img${idx}`}
                onError={(e) => (e.target.parentNode.style.display = "none")}
              />
              <p key={`title${idx}`} className="movie-title">
                {val[1]}
              </p>
            </article>
          ))}
        </div>
        <button
          type="button"
          className={styles.left_btn}
          onClick={() => handleLeftBtn()}
        >{`<`}</button>
        <button
          type="button"
          className={styles.right_btn}
          onClick={() => handleRightBtn()}
        >{`>`}</button>
      </section>
    </main>
  );
}
