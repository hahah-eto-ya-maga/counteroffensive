import React, { useState } from "react";
import { ProgressBar, Logo, CardAdvise } from "../../components";
import "./LoadingPage.css";

const LoadingPage: React.FC = () => {
   const [progress, setProgress] = useState<number>(0);
   const advise = "Рандомный совет";
   return (
      <div className="logo_page_wrapper">
         <Logo />
         <CardAdvise advise={advise} />
         <ProgressBar progress={progress} />
      </div>
   );
};

export default LoadingPage;
