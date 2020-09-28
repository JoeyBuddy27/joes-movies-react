import React from "react";
import LatestPost from "./LatestPost";
import FilmData from "../../JSON/Film.json";
import { Link } from "react-router-dom";

function LatestHome() {
  return (
    <div className="latestHome">
      <div className="latestHome__film">
        <h1 className="latestHome__film__title">LATEST FILM REVIEWS</h1>
        <div className="latestHome__film__container">
          {FilmData.map((film) => (
            <div className="latestHome__film__component" key={film.slug}>
              <Link to={"/film/" + film.slug}>
                <LatestPost
                  title={film.title}
                  image={film.image}
                  rating={film.rating}
                  highlightColor={"Pink"}
                  teaser={film.teaser}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Link to="/film">
        <button className="latestHome__film__all">See all Film reviews</button>
      </Link>
    </div>
  );
}

export default LatestHome;
