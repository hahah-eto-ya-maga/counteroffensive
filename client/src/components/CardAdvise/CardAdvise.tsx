import React from "react";
import "./CardAdvise.css";

interface ICardAdviceProps {
   advise: string;
}

const CardAdvise: React.FC<ICardAdviceProps> = ({ advise }) => {
   return <div className="card_advise">{advise}</div>;
};

export default CardAdvise;
