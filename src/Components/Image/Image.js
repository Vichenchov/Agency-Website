import classes from "./Image.module.css";

import { Link } from "react-router-dom";

function Image({ page, img, alt, label }) {
  return (
    <div className={classes.mainContainer}>
      <Link to={"/" + page} className={classes.link}>
        <div className={classes.container}>
          {/* img size - 640h*427w */}
          <img className={classes.img} src={img} alt={alt}></img>
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
