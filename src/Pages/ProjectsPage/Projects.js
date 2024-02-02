import classes from "./Projects.module.css";

import { useParams } from "react-router-dom";
import MainTtitle from "../../Components/MainTitle/MainTtitle";
import ProjectPage from "../../Components/ProjectsPageTamplate/ProjectsPageTamplate";

import data from "../../Resources/Data/pagesData";

function Projects() {
  const { pageName } = useParams();

  const currentPageData = data.find((item) => item["page"] === pageName);

  window.scrollTo(0, 0);

  return (
    <>
      <MainTtitle
        titleRows={currentPageData.titleRows}
        badges={currentPageData.badges}
      />

      <div className={classes.container}>
        <ProjectPage page={currentPageData.page} />
      </div>
    </>
  );
}

export default Projects;
