import React from "react";
import classes from "./CardAdvise.module.css";

interface ICardAdviceProps {
  advise: string;
}

const CardAdvise: React.FC<ICardAdviceProps> = ({ advise }) => {
  return <div className={classes.card_advise}>{advise}</div>;
};

export default CardAdvise;
