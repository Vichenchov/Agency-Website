import { useParams } from "react-router-dom";
import MainTtitle from "../Components/MainTitle/MainTtitle";

function Projects() {
  const params = useParams();

  const titleRows = ["A better way to deal with", "every day"];

  return (
    <>
      <MainTtitle titleRows={titleRows} badges={[params.pageName]} />;
    </>
  );
}

export default Projects;
