import classes from "./Home.module.css";

import MainTitle from "../Components/MainTitle/MainTtitle";
import Image from "../Components/Image/Image";

import data from "../Resources/Data/pagesData";

function HomePage() {
  const titleRows = [
    "A brand and product",
    "designer working with",
    "clients globally",
  ];
  const badges = ["Experties", "Branding", "Product", "Design Systems"];

  return (
    <>
      <MainTitle titleRows={titleRows} badges={badges} />
      <div className={classes.container}>
        {data.map((img, index) => (
          <Image
            key={index}
            page={img.page}
            img={img.img}
            alt={img.alt}
            label={img.label}
          />
        ))}
      </div>
    </>
  );
}

export default HomePage;
