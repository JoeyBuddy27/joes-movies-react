import React, { useState, useEffect } from "react";
import TVData from "../../JSON/TV.json";
import CreateIcon from "@material-ui/icons/Create";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MovieIcon from "@material-ui/icons/Movie";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

function TVReviewPost(props) {
  //setting the original state (blank post)
  const [post, setPost] = useState({});

  const starPathStart = "../../images/";
  const starPathEnd = ".png";

  const [slug, setSlug] = useState(""); //setting slug to indentify post

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = TVData.find((post) => post.slug === slug);
    setPost(post);
    setSlug(slug);
  }, [post, props.match.params.slug]);

  return (
    <div className="TVReviewPost">
      <img
        className="filmReviewPost__image"
        src={post.image}
        alt={post.title}
      />
      <div className="filmReviewPost__details">
        <div className="filmReviewPost__details__left">
          <h1 className="filmReviewPost__title">{post.title}</h1>
          <img
            className="filmReviewPost__rating"
            src={`${starPathStart}${post.rating}${post.highlightColor}${starPathEnd}`}
            alt={props.rating}
          />
          <h3>"{post.quote}"</h3>
        </div>
        <div className="filmReviewPost__details__right">
          <p>
            <CreateIcon fontSize="small" />
            {post.author}
          </p>
          <p>
            <CalendarTodayIcon fontSize="small" />
            {post.postedOn}
          </p>
          <p>
            <MovieIcon fontSize="small" />
            Film
          </p>
        </div>
      </div>
      <hr />
      <div className="filmReviewPost__body">{post.reviewBody}</div>
      <div className="filmReviewPost__verdict">
        <img
          className="filmReviewPost__verdict__image"
          src={post.image}
          alt={post.title}
        />
        <div className="filmReviewPost__verdict__text filmReviewPost__verdict__text__blue">
          <h1>{post.verdictHeader}</h1>
          <ArrowDownwardIcon />
          <p>{post.verdictText}</p>
        </div>
      </div>
    </div>
  );
}

export default TVReviewPost;
