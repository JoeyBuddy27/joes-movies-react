import React from "react";
import FilmReviewPost from "../../Components/FilmReviewPost/FilmReviewPost";

function FilmReview(props) {
  return (
    <div className="filmReview">
      <FilmReviewPost {...props} />
    </div>
  );
}

export default FilmReview;
