import classes from "./ProjectPage.module.css";

import RegularImage from "../RegularImage/RegularImage";

import data from "../../Resources/Data/pagesData";

function ProjectPage({ page }) {
  const currentPageData = data.find((item) => item["page"] === page);
  console.log(currentPageData);

  window.scrollTo(0, 0);

  return (
    <div className={classes.container}>
      <RegularImage
        src={currentPageData.images[0]}
        alt={currentPageData.alt}
        width={420}
        height={500}
      />
      <div className={classes.container}>
        <RegularImage
          src={currentPageData.images[1]}
          alt={currentPageData.alt}
          width={420}
          height={640}
        />
        <RegularImage
          src={currentPageData.images[2]}
          alt={currentPageData.alt}
          width={427}
          height={640}
        />
      </div>
    </div>
  );
}

export default ProjectPage;
