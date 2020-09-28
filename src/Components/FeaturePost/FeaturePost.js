import React, { useState, useEffect } from "react";
import FeatureData from "../../JSON/Features.json";
import CreateIcon from "@material-ui/icons/Create";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import MovieIcon from "@material-ui/icons/Movie";
import FeatureItem from "./FeatureItem";

function FeaturePost(props) {
  //setting the original state (blank post)
  const [post, setPost] = useState({});

  const [postList, setPostList] = useState([]);

  //   const starPathStart = "../../images/";
  //   const starPathEnd = ".png";

  const [slug, setSlug] = useState(""); //setting slug to indentify post

  useEffect(() => {
    const slug = props.match.params.slug;
    const post = FeatureData.find((post) => post.slug === slug);
    setPost(post);
    setSlug(slug);
    setPostList(post.list);
  }, [post, props.match.params.slug]);

  return (
    <div className="featurePost">
      <img
        className="featurePost__header__image"
        src={post.headerImage}
        alt={post.title}
      />
      <div className="featurePost__details">
        <div className="featurePost__details__left">
          <h1 className="featurePost__title">{post.title}</h1>
        </div>
        <div className="featurePost__details__right">
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
      <div className="featurePost__introduction">{post.introduction}</div>
      <div className="filmReviewPost__body">
        {postList.map((currentPost) => {
          console.log(currentPost);
          return (
            <div className="featureItem">
              <FeatureItem
                key={currentPost.slug}
                title={currentPost.title}
                number={currentPost.number}
                image={currentPost.image}
                quote={currentPost.quote}
                imageOwner={currentPost.imageOwner}
                body={currentPost.body}
              />
            </div>
          );
        })}
        {/* {console.log("post", postList.typeOf())} */}
      </div>
    </div>
  );
}

export default FeaturePost;
