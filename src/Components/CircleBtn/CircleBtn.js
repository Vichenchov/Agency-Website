import classes from "./CircleBtn.module.css";

function CircleBtn({ children }) {
  return <div className={classes.iconCircle}>{children}</div>;
}

export default CircleBtn;
