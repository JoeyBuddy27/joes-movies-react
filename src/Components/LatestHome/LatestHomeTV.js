import React from "react";
import LatestPost from "./LatestPost";
import TVData from "../../JSON/TV.json";
import { Link } from "react-router-dom";

function LatestHomeTV() {
  return (
    <div className="latestHome">
      <div className="latestHome__tv">
        <h1 className="latestHome__tv__title">LATEST TV REVIEWS</h1>
        {TVData.map((tv) => (
          <div className="latestHome__tv__component" key={tv.slug}>
            <Link to={"/tv/" + tv.slug}>
              <LatestPost
                title={tv.title}
                image={tv.image}
                rating={tv.rating}
                highlightColor={"Blue"}
                teaser={tv.teaser}
              />
            </Link>
          </div>
        ))}
      </div>
      <Link to="/tv">
        <button className="latestHome__tv__all">See all TV reviews</button>
      </Link>
    </div>
  );
}

export default LatestHomeTV;
