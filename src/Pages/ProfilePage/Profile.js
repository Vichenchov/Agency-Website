import classes from "./Profile.module.css";

import MainTitle from "../../Components/MainTitle/MainTtitle";

function Profile() {
  const titleRows = ["Hey 👋🏼 I'm Max"];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  window.scrollTo(0, 0);

  return (
    <div className={classes.container}>
      <MainTitle titleRows={titleRows} />
      <div onClick={() => scrollToSection("footer")}>
        <span className={classes.btnNotHover}>
          <box-icon type="solid" name="down-arrow" color="#7f7f7f"></box-icon>
        </span>
        <span className={classes.btnHover}>
          <box-icon type="solid" name="down-arrow"></box-icon>
        </span>
      </div>
    </div>
  );
}

export default Profile;
