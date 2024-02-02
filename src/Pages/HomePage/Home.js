import classes from "./Home.module.css";

import MainTitle from "../../Components/MainTitle/MainTtitle";
import BtnImage from "../../Components/BtnImage/BtnImage";

import data from "../../Resources/Data/pagesData";

function HomePage() {
  const titleRows = [
    "A brand and product",
    "designer working with",
    "clients globally",
  ];
  const badges = ["Experties", "Branding", "Product", "Design Systems"];

  window.scrollTo(0, 0);

  return (
    <>
      <MainTitle titleRows={titleRows} badges={badges} />
      <div className={classes.container}>
        {data.map((img, index) => (
          <BtnImage
            key={index}
            page={img.page}
            img={img.mainImg}
            alt={img.alt}
            label={img.label}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
