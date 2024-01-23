import classes from "./Image.module.css";

import img from "../../Resources/Images/liabon_tram_big.jpg";
import { Link } from "react-router-dom";

function Image() {
  return (
    <Link to={"/#"} className={classes.link}>
      <div className={classes.container}>
        <h2 className={classes.label}>label</h2>
        <img className={classes.img} src={img} alt="air_ballon"></img>
      </div>
    </Link>
  );
}

export default Image;
