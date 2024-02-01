import classes from "./RegularImage.module.css";

function RegularImage({ src, alt, width, height }) {
  const aspectRatio = (height / width) * 100;

  return (
    <div
      className={classes.container}
    //   style={{ paddingTop: `${aspectRatio}%` }}
    >
      <img src={src} alt={alt} className={classes.img} />
    </div>
  );
}

export default RegularImage;
