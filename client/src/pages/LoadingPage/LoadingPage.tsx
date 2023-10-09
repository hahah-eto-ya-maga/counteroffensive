import React, { useState } from "react";
import { ProgressBar, CardAdvise, Logo } from "../../components";

import "./LoadingPage.css";

const LoadingPage: React.FC = () => {
   const [progress, setProgress] = useState<number>(0);
   const advice = "Рандомный совет";
   return (
      <div className="logo_page_wrapper">
         <Logo />
         <CardAdvise advice={advice} />
         <ProgressBar progress={progress} />
      </div>
   );
};

export default LoadingPage;
