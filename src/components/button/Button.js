import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, isDownloadLink}) {
  return (
    <div className={className}>
      {isDownloadLink ? (
        <div className="main-button">{text}</div>
      ) : (
        <a
          className="main-button"
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : ""}
        >
          {text}
        </a>
      )}
    </div>
  );
}
