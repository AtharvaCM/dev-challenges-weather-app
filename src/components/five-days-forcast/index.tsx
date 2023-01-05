import React from "react";

import { FiveDaysForecastType } from "../../types/components/five-days-forecast";

import { getDate } from "../../utils/date-helper";

import Card from "../UI/card";

const FiveDaysForecast: React.FC<FiveDaysForecastType> = (props) => {
  const { className, forecastList } = props;

  if (forecastList.length === 0) {
    return <p>No forecast data found!</p>;
  }

  console.log(getDate(forecastList[0].dt_txt));
  return (
    <div className={`flex justify-between ${className}`}>
      <Card className="flex flex-col items-center justify-center text-white">
        <p>Tomorrow</p>
        <img
          src={`http://openweathermap.org/img/wn/${forecastList[0].weather[0].icon}@2x.png`}
          alt="Weather Img"
          height={65}
          width={65}
        />
        <div className="mt-7 flex justify-between text-sm">
          <p>{forecastList[0].main.temp_max | 0} &#8451;</p>
          <p className="ml-3 text-[#A09FB1]">
            {forecastList[0].main.temp_min | 0} &#8451;
          </p>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-center text-white">
        <p>{getDate(forecastList[8].dt_txt)}</p>
        <img
          src={`http://openweathermap.org/img/wn/${forecastList[8].weather[0].icon}@2x.png`}
          alt="Weather Img"
          height={65}
          width={65}
        />
        <div className="mt-7 flex justify-between text-sm">
          <p>{forecastList[8].main.temp_max | 0} &#8451;</p>
          <p className="ml-3 text-[#A09FB1]">
            {forecastList[8].main.temp_min | 0} &#8451;
          </p>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-center text-white">
        <p>{getDate(forecastList[16].dt_txt)}</p>
        <img
          src={`http://openweathermap.org/img/wn/${forecastList[16].weather[0].icon}@2x.png`}
          alt="Weather Img"
          height={65}
          width={65}
        />
        <div className="mt-7 flex justify-between text-sm">
          <p>{forecastList[16].main.temp_max | 0} &#8451;</p>
          <p className="ml-3 text-[#A09FB1]">
            {forecastList[16].main.temp_min | 0} &#8451;
          </p>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-center text-white">
        <p>{getDate(forecastList[24].dt_txt)}</p>
        <img
          src={`http://openweathermap.org/img/wn/${forecastList[24].weather[0].icon}@2x.png`}
          alt="Weather Img"
          height={65}
          width={65}
        />
        <div className="mt-7 flex justify-between text-sm">
          <p>{forecastList[24].main.temp_max | 0} &#8451;</p>
          <p className="ml-3 text-[#A09FB1]">
            {forecastList[24].main.temp_min | 0} &#8451;
          </p>
        </div>
      </Card>

      <Card className="flex flex-col items-center justify-center text-white">
        <p>{getDate(forecastList[32].dt_txt)}</p>
        <img
          src={`http://openweathermap.org/img/wn/${forecastList[32].weather[0].icon}@2x.png`}
          alt="Weather Img"
          height={65}
          width={65}
        />
        <div className="mt-7 flex justify-between text-sm">
          <p>{forecastList[32].main.temp_max | 0} &#8451;</p>
          <p className="ml-3 text-[#A09FB1]">
            {forecastList[32].main.temp_min | 0} &#8451;
          </p>
        </div>
      </Card>
    </div>
  );
};

export default FiveDaysForecast;
