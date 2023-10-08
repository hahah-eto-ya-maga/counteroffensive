import React from "react";
import  "./ProgressBar.css";

interface IProgressBarProps {
  progress: number;
}

const ProgressBar: React.FC<IProgressBarProps> = ({ progress }) => {
  return (
    <div className='progress_wrapper'>
      Загрузка...
      <div className='progress_bar'>
        <div className='progress' style={{ width: `${progress}%` }} />
        <div className='progress_text'>{progress}/100%</div>
      </div>
    </div>
  );
};

export default ProgressBar;
