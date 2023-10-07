import React, { useState } from "react";
import { ProgressBar, Logo } from "../../components";

import classes from "./LoadingPage.module.css";
import CardAdvise from "../../components/CardAdvise/CardAdvise";

const LoadingPage: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const advise = "Рандомный совет";
  return (
    <div className={classes.logo_page_wrapper}>
      <Logo />
      <CardAdvise advise={advise} />
      <ProgressBar progress={progress} />
    </div>
  );
};

export default LoadingPage;
