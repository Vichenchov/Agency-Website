import classes from "./Image.module.css";

import { Link } from "react-router-dom";

function Image({ page, img, alt, label, video }) {
  return (
    <div className={classes.mainContainer}>
      <Link to={"/" + page} className={classes.link}>
        <div className={classes.container}>
          {/* img size - 640h*427w */}
          {!video ? (
            <img className={classes.img} src={img} alt={alt}></img>
          ) : (
            <div class="video-container">
              <video className={classes.backgroundVideo} autoPlay loop muted>
                <source src={img} type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <h2 className={classes.label}>{label}</h2>
          <div className={classes.iconCircle}>
            <box-icon name="right-arrow-alt"></box-icon>
          </div>
        </div>
      </Link>
      <h2 className={classes.labelHidden}>{label}</h2>
    </div>
  );
}

export default Image;
