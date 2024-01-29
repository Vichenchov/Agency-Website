import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function NavBtn() {
  return (
    <nav className={classes.nav}>
      <Link to={"/"}>
        <div className={classes.iconCircle}>
          <span className={classes.btnGray}>
            <box-icon className={classes.btnGray} name="x"></box-icon>
          </span>
          <span className={classes.btnBlack}>
            <box-icon
              className={classes.btnBlack}
              name="x"
              color="#fff"
            ></box-icon>
          </span>
        </div>
      </Link>
    </nav>
  );
}

export default NavBtn;
