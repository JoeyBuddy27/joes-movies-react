import React from "react";

function FeatureItem(props) {
  return (
    <div className="featureItem">
      <main className="featureItem__top">
        {/* image + alt // number + title + quote  // body text */}
        <section className="featureItem__info">
          <h1 className="featureItem__info__number">{props.number}</h1>
          <h2 className="featureItem__info__title">{props.title}</h2>
          <h4 className="featureItem__info__quote">"{props.quote}"</h4>
          <div className="featureItem__body">{props.body}</div>
        </section>
        <section className="featureItem__imageContainer">
          <img
            className="featureItem__imageContainer__image"
            src={props.image}
            alt={props.title}
          />
          <i className="featureItem__imageContainer__alt">{props.imageOwner}</i>
        </section>
      </main>
    </div>
  );
}

export default FeatureItem;
