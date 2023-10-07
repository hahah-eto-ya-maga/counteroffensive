import React from "react";
import clases from "./ProgressBar.module.css";

interface IProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <div className={clases.progress_wrapper}>
      Загрузка...
      <div className={clases.progress_bar}>
        <div className={clases.progress} style={{ width: `${progress}%` }} />
        <div className={clases.progress_text}>{progress}/100%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
