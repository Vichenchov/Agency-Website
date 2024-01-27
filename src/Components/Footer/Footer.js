import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.links}>
        <a href="#">Linkedin</a>
        <a href="#">Mail</a>
        <a href="#">Twitter</a>
      </div>
      <div className={classes.name}>
        <box-icon type="solid" name="color"></box-icon>
        <label>Max Viventsov 2024</label>
      </div>
    </div>
  );
}

export default Footer;
