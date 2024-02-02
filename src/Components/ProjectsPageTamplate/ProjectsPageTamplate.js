import classes from "./ProjectsPageTamplate.module.css";

import RegularImage from "../RegularImage/RegularImage";

import data from "../../Resources/Data/pagesData";

function ProjectPage({ page }) {
  const currentPageData = data.find((item) => item["page"] === page);

  window.scrollTo(0, 0);

  return (
    <div className={classes.container}>
      <div className={classes.container_row}>
        <RegularImage
          src={currentPageData.images[0]}
          alt={currentPageData.alt}
          width={1350}
          height={872}
        />
      </div>
      <div className={classes.container_row_h}>
        <div>
          <h2 className={classes.gray}>{currentPageData.labels[0].title}</h2>
          <h2>{currentPageData.labels[0].content}</h2>
        </div>
        <div>
          <h2 className={classes.gray}>{currentPageData.labels[1].title}</h2>
          <h2>{currentPageData.labels[1].content}</h2>
        </div>
        <div>
          <h2 className={classes.gray}>{currentPageData.labels[2].title}</h2>
          <h2>{currentPageData.labels[2].content}</h2>
        </div>
        <div>
          <h2 className={classes.gray}>{currentPageData.labels[3].title}</h2>
          <h2>{currentPageData.labels[3].content}</h2>
        </div>
      </div>
      <div className={classes.container_row}>
        <span className={classes.rightImg}>
          <RegularImage
            src={currentPageData.images[2]}
            alt={currentPageData.alt}
            width={640}
            height={427}
          />
        </span>
        <RegularImage
          src={currentPageData.images[3]}
          alt={currentPageData.alt}
          width={640}
          height={427}
        />
      </div>
      <div className={classes.container_row_p}>
        <div>
          <h1>What is Lorem Ipsum?</h1>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <div>
          <h1>Why do we use it?</h1>
          <br />
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </p>
        </div>
      </div>
      <div className={classes.container_row}>
        <RegularImage
          src={currentPageData.images[1]}
          alt={currentPageData.alt}
          width={1350}
          height={872}
        />
      </div>
    </div>
  );
}

export default ProjectPage;
