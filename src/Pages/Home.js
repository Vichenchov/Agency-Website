import classes from "./Home.module.css";

import MainTitle from "../Components/MainTitle/MainTtitle";
import Image from "../Components/Image/Image";

import airBalloons from "../Resources/Images/airbaloons.jpg";
import mykonos from "../Resources/Images/mykonos.jpg";
import ski from "../Resources/Images/ski.jpg";
import lisbon from "../Resources/Images/lisbon.jpg";
import barcelona from "../Resources/Images/barcelona.jpg";
import italy from "../Resources/Images/italy.jpg";
import newzeland from "../Resources/Images/newzeland.jpg";
import la from "../Resources/Images/la.jpg";
import ContactTitle from "../Components/ContactTitle/ContactTitle";

function HomePage() {
  const titleRows = [
    "A brand and product",
    "designer working with",
    "clients globally",
  ];
  const badges = ["Experties", "Branding", "Product", "Design Systems"];
  const imagesObjects = [
    {
      page: "airBalloons",
      img: airBalloons,
      alt: "airBalloons",
      label: "airBalloons",
    },
    { page: "mykonos", img: mykonos, alt: "mykonos", label: "mykonos" },
    { page: "ski", img: ski, alt: "ski", label: "ski" },
    { page: "#", img: lisbon, alt: "lisbon", label: "lisbon" },
    { page: "#", img: barcelona, alt: "barcelona", label: "barcelona" },
    { page: "#", img: italy, alt: "italy", label: "italy" },
    { page: "#", img: newzeland, alt: "newzeland", label: "newzeland" },
    { page: "#", img: la, alt: "la", label: "la" },
  ];

  return (
    <>
      <MainTitle titleRows={titleRows} badges={badges} />
      <div className={classes.container}>
        {imagesObjects.map((img, index) => (
          <Image
            key={index}
            page={img.page}
            img={img.img}
            alt={img.alt}
            label={img.label}
            video={img.video === undefined ? false : true}
          />
        ))}
      </div>
      <ContactTitle />
    </>
  );
}

export default HomePage;
