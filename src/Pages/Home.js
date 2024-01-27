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
import video1 from "../Resources/videos/video1.mp4";
import video2 from "../Resources/videos/video2.mp4";
import ContactTitle from "../Components/ContactTitle/ContactTitle";
import Footer from "../Components/Footer/Footer";

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
      ale: "airBalloons",
      label: "airBalloons",
    },
    { page: "mykonos", img: mykonos, ale: "mykonos", label: "mykonos" },
    { page: "ski", img: ski, ale: "ski", label: "ski" },
    { page: "#", img: lisbon, ale: "lisbon", label: "lisbon" },
    { page: "#", img: barcelona, ale: "barcelona", label: "barcelona" },
    { page: "#", img: italy, ale: "italy", label: "italy" },
    { page: "#", img: newzeland, ale: "newzeland", label: "newzeland" },
    { page: "#", img: la, ale: "la", label: "la" },
    { page: "#", img: video1, ale: "video1", label: "video1", video: true },
    { page: "#", img: video2, ale: "video2", label: "video2", video: true },
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
      <Footer />
    </>
  );
}

export default HomePage;
