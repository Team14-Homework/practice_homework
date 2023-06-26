import React, { useEffect, useState } from "react";
import "./style.css";

export default function ImageSlider() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [sliderStyle, setSliderStyle] = useState({});
  const imgPath = [
    require("../../images/image1.jpg"),
    require("../../images/image2.jpg"),
    require("../../images/image3.jpg"),
    require("../../images/image4.jpg"),
    require("../../images/image5.jpg"),
    require("../../images/image6.jpg"),
  ];

  const handleLeftBtn = () => {
    if (sliderIndex !== 0) {
      setSliderIndex(sliderIndex - 1);
    }
  };
  const handleRightBtn = () => {
    if (sliderIndex !== imgPath.length - 1) {
      setSliderIndex(sliderIndex + 1);
    }
  };

  useEffect(() => {
    setSliderStyle({
      transition: "all 0.5s ease-in-out",
      transform: `translateX(-${700 * sliderIndex}px)`,
    });
  }, [sliderIndex]);

  return (
    <section className="imgSlider-wrapper">
      <div className="img-container">
        {imgPath.map((val, idx) => (
          <img src={val} alt="" className="img" key={idx} style={sliderStyle} />
        ))}
        <button
          type="button"
          className="btn left-btn"
          onClick={() => handleLeftBtn()}
        >{`<`}</button>
        <button
          type="button"
          className="btn right-btn"
          onClick={() => handleRightBtn()}
        >{`>`}</button>
      </div>
    </section>
  );
}
