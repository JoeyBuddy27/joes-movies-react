import React from "react";
import Slider from "../../Components/Slider/Slider";
import LatestHomeFilm from "../../Components/LatestHome/LatestHomeFilm";
import LatestHomeTV from "../../Components/LatestHome/LatestHomeTV";

function Home() {
  return (
    <div className="home">
      <div className="home__main">
        <div className="home__main__left">
          <Slider />
        </div>
        <div className="home__main__right">
          <LatestHomeTV />
        </div>
      </div>
      <LatestHomeFilm />
    </div>
  );
}

export default Home;
