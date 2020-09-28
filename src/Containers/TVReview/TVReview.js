import React from "react";
import TVReviewPost from "../../Components/TVReviewPost/TVReviewPost";

function TVReview(props) {
  return (
    <div className="tvReview">
      <TVReviewPost {...props} />
    </div>
  );
}

export default TVReview;
