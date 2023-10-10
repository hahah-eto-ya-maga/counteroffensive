import React from "react";
import "./CardAdvice.css";

interface ICardAdviceProps {
   advice: string;
}

const CardAdvise: React.FC<ICardAdviceProps> = ({ advice }) => {
   return <div className="card_advise">{advice}</div>;
};

export default CardAdvise;
