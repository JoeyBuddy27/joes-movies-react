import React from "react";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";

function LatestPost(props) {
  const starPathStart = "./images/";
  const starPathEnd = ".png";

  let postedDate;

  if (props.postedOn) {
    postedDate = ((<CalendarTodayIcon />), (<p>props.postedOn</p>));
  }

  return (
    <div className="latestPost">
      <div className="latestPost__container">
        <h4 className="latestPost__title">{props.title}</h4>
        <img
          className="latestPost__image"
          src={props.image}
          alt={props.title}
        />
        <img
          className="latestPost__rating"
          src={`${starPathStart}${props.rating}${props.highlightColor}${starPathEnd}`}
          alt={props.rating}
        />
      </div>
      <div className="latestPost__postedOn">
        {props.postedOn && <p>Posted on: {props.postedOn}</p>}
        <div className="latestPost__teaser">{props.teaser}</div>
      </div>
    </div>
  );
}

export default LatestPost;
