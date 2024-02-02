import classes from "./RegularImage.module.css";

function RegularImage({ src, alt, width, height }) {
  return (
    <div className={classes.container}>
      <img
        src={src}
        alt={alt}
        className={classes.img}
        width={width}
        height={height}
      />
    </div>
  );
}

export default RegularImage;
