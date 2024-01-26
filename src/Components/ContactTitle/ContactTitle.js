import React from "react";
import classes from "./ContactTitle.module.css";

import { motion, useAnimation } from "framer-motion";

function ContactTitle() {
  const controls = useAnimation();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const headingPosition =
      document.getElementById("animated-heading").offsetTop;

    if (scrollPosition > headingPosition - window.innerHeight + 100) {
      controls.start({ opacity: 1, y: 0 });
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls]);

  return (
    <div className={classes.container} id="animated-heading">
      <motion.h3
        className={classes.header}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <span>Let's work together.</span>
        <br />
        <span className={classes.subTitle}>Get in touch.</span>
      </motion.h3>
    </div>
  );
}

export default ContactTitle;
