import React from "react";
import FeaturePost from "../../Components/FeaturePost/FeaturePost";

function FeatureContainer(props) {
  return (
    <div className="featureContainer">
      <FeaturePost {...props} />
    </div>
  );
}

export default FeatureContainer;
