import React from "react";

function FooterLink(props) {
  return (
    <div className="footerLink">
      <li className="footer__social__item">
        <a href={props.href}>{props.linkName}</a>
      </li>
    </div>
  );
}

export default FooterLink;
