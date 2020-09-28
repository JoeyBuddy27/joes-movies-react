import React, { useEffect, useState } from "react";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import data from "../../JSON/Links.json";
import FooterLink from "./FooterLink";

function Footer(props) {
  const [randomQuoteNum, setRandomQuoteNum] = useState(0);

  let quotesArray = [
    "Shit man, I'm a natural born killer!",
    "Hey man!",
    "You talkin' to me?",
    "As if!",
  ];
  let quotesAuthorArray = [
    "Mickey - Natural Born Killers",
    "Jones - Secret Life of Jones",
    "Travis - Taxi Driver",
    "Cher - Clueless",
  ];

  useEffect(() => {
    setTimeout(() => {
      if (randomQuoteNum >= quotesArray.length - 1) {
        setRandomQuoteNum(0);
      } else {
        setRandomQuoteNum(randomQuoteNum + 1);
      }
    }, 3000);
  }, [randomQuoteNum, setRandomQuoteNum, quotesArray.length]);

  let socialLinks = data.map((item) => (
    <FooterLink
      key={item.social}
      linkName={item.social}
      href={item.socialHref}
    />
  ));

  let otherLinks = data.map((item) => (
    <FooterLink key={item.links} linkName={item.links} href={item.linksHref} />
  ));

  return (
    <div className="footer">
      <div className="footer__grid">
        <div className="footer__quotes">
          <span className="footer__quotes__text">
            <FormatQuoteIcon className="footer__quotes__icon" />
            <h3 className="footer__quotes__quote">
              {quotesArray[randomQuoteNum]}
            </h3>
            <FormatQuoteIcon className="footer__quotes__icon" />
          </span>
          <span className="footer__quotes__author">
            {quotesAuthorArray[randomQuoteNum]}
          </span>
        </div>
        <div className="footer__social">
          <h2>Find me Elsewhere!</h2>
          <ul>{socialLinks}</ul>
        </div>

        <div className="footer__links">
          <h2>Sites I like!</h2>
          <ul>{otherLinks}</ul>
        </div>
        <div className="footer__copyright">&copy; Copyright 2020</div>
      </div>
    </div>
  );
}

export default Footer;
