import classes from "./Error.module.css";

import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();

  function toHomePage() {
    navigate("/");
  }

  return (
    <div className={classes.container}>
      <h1>Page Not Found</h1>
      <button className={classes.btn} onClick={toHomePage}>
        Back to Home Page
      </button>
    </div>
  );
}

export default ErrorPage;
