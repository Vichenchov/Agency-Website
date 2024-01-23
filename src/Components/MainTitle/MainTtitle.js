import React from "react";

import classes from "./MainTitle.module.css";

function MainTtitle({ titleRows, badges }) {
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        {titleRows.map((rowText, index) => (
          <React.Fragment key={index}>
            <span>{rowText}</span>
            <br />
          </React.Fragment>
        ))}
      </h1>
      <div className={classes.container_peragraphs}>
        {badges &&
          badges.map((badgeText, index) => (
            <p
              key={index}
              className={`${classes.p} ${
                badges.count !== 1 ? classes.bckgWhite : ""
              }`}
            >
              {badgeText}
            </p>
          ))}
      </div>
    </div>
  );
}

export default MainTtitle;
