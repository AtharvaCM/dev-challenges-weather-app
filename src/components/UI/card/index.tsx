import React from "react";

import { CardType } from "../../../types/components/card";

const Card: React.FC<CardType> = (props) => {
  const { children, className } = props;

  return <div className={`bg-[#1E213A] p-5 ${className}`}>{children}</div>;
};

export default Card;
