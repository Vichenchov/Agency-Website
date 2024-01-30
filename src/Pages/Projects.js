import classes from "./Projects.module.css";

import { useParams } from "react-router-dom";
import MainTtitle from "../Components/MainTitle/MainTtitle";

import data from "../Resources/Data/pagesData";
import Image from "../Components/Image/Image";

function Projects() {
  const { pageName } = useParams();

  const currentPage = data.find((item) => item["page"] === pageName);

  window.scrollTo(0, 0);

  return (
    <>
      <MainTtitle
        titleRows={currentPage.titleRows}
        badges={[currentPage.page]}
      />
      ;
      <div className={classes.container}>
        {/* create a regular img component - not as a btn */}
        <Image
          page={currentPage.page}
          img={currentPage.img}
          alt={currentPage.alt}
          label={currentPage.label}
        />
      </div>
    </>
  );
}

export default Projects;
