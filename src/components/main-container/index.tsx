import React from "react";

import { MainContainerType } from "../../types/components/main-container";
import FiveDaysForecast from "../five-days-forcast";

import Button from "../UI/button";

const MainContainer: React.FC<MainContainerType> = ({ className }) => {
  return (
    <div className={className}>
      {/* Celcius / Farenheight switch */}
      <div className="flex items-center justify-end">
        <Button className="mr-3 !rounded-full" size="xs">
          &#8451;
        </Button>
        <Button className="!rounded-full" size="xs" color="secondary">
          &#8457;
        </Button>
      </div>

      {/* Five Days Forecast Cards*/}
      <FiveDaysForecast className="mt-10" />
    </div>
  );
};

export default MainContainer;
