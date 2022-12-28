import React from "react";

import { FiveDaysForecastType } from "../../types/components/five-days-forecast";

import LightRain from "../../../src/assets/LightRain.png";

import Card from "../UI/card";

const FiveDaysForecast: React.FC<FiveDaysForecastType> = (props) => {
  const { className } = props;

  return (
    <div className={`flex justify-between ${className}`}>
      <Card className="flex flex-col justify-center text-white">
        <p>Tomorrow</p>
        <img src={LightRain} alt="Weather Img" height={75} width={75} />
        <div className="mt-4 flex justify-between text-sm">
          <p>16 &#8451;</p>
          <p className="text-[#A09FB1]">11 &#8451;</p>
        </div>
      </Card>

      <Card className="flex flex-col justify-center text-white">
        <p>Tomorrow</p>
        <img src={LightRain} alt="Weather Img" height={75} width={75} />
        <div className="mt-4 flex justify-between text-sm">
          <p>16 &#8451;</p>
          <p className="text-[#A09FB1]">11 &#8451;</p>
        </div>
      </Card>

      <Card className="flex flex-col justify-center text-white">
        <p>Tomorrow</p>
        <img src={LightRain} alt="Weather Img" height={75} width={75} />
        <div className="mt-4 flex justify-between text-sm">
          <p>16 &#8451;</p>
          <p className="text-[#A09FB1]">11 &#8451;</p>
        </div>
      </Card>

      <Card className="flex flex-col justify-center text-white">
        <p>Tomorrow</p>
        <img src={LightRain} alt="Weather Img" height={75} width={75} />
        <div className="mt-4 flex justify-between text-sm">
          <p>16 &#8451;</p>
          <p className="text-[#A09FB1]">11 &#8451;</p>
        </div>
      </Card>

      <Card className="flex flex-col justify-center text-white">
        <p>Tomorrow</p>
        <img src={LightRain} alt="Weather Img" height={75} width={75} />
        <div className="mt-4 flex justify-between text-sm">
          <p>16 &#8451;</p>
          <p className="text-[#A09FB1]">11 &#8451;</p>
        </div>
      </Card>
    </div>
  );
};

export default FiveDaysForecast;
