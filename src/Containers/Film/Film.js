import React from "react";
import FilmData from "../../JSON/Film.json";
import LatestPost from "../../Components/LatestHome/LatestPost";
import { NavLink } from "react-router-dom";

function Film() {
  return (
    <div className="film">
      <h1>LATEST FILM REVIEWS</h1>
      <div className="film__container">
        {FilmData.map((film) => {
          return (
            <NavLink to={"/film/" + film.slug} key={film.slug}>
              <div className="film__post">
                <LatestPost
                  title={film.title}
                  image={film.image}
                  postedOn={film.postedOn}
                  rating={film.rating}
                  highlightColor={"Pink"}
                />
              </div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
}

export default Film;
