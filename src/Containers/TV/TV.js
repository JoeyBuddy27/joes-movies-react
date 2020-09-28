import React from "react";
import TVData from "../../JSON/TV.json";
import LatestPost from "../../Components/LatestHome/LatestPost";
import { NavLink } from "react-router-dom";

function Film() {
  return (
    <div className="tv">
      <h1>LATEST TV REVIEWS</h1>
      <div className="tv__container">
        {TVData.map((tv) => {
          return (
            <NavLink to={"/tv/" + tv.slug}>
              <div className="tv__post">
                <LatestPost
                  title={tv.title}
                  image={tv.image}
                  postedOn={tv.postedOn}
                  rating={tv.rating}
                  highlightColor={"Blue"}
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
