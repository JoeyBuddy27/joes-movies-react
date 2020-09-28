import React, { useEffect, useState } from "react";
import data from "../../JSON/Features.json";
import { Link } from "react-router-dom";

function Slider() {
  const [sliderNum, setSliderNum] = useState(0);
  const sliderImage = data[sliderNum].sliderImg;
  const articleHeading = data[sliderNum].articleHeading;

  //function for the slider. Cleanup when unmounting
  useEffect(() => {
    let timer = setTimeout(() => {
      if (sliderNum === data.length - 1) {
        setSliderNum(0);
      } else {
        setSliderNum(sliderNum + 1);
      }
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [sliderNum]);

  return (
    <div className="slider">
      <h1 className="slider__heading">LATEST FEATURES</h1>
      <Link to={"/feature/" + data[sliderNum].slug}>
        <div className="slider__image__container">
          {
            <img
              className="slider__image"
              src={sliderImage}
              alt="Top 10 Films 2018"
            />
          }
          <div className="slider__title">
            <h1>{articleHeading}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Slider;
