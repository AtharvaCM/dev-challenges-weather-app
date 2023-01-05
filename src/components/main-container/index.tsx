import React, { useEffect, useState } from "react";

import { MainContainerType } from "../../types/components/main-container";
import { ForecastType } from "../../types/weather";
import FiveDaysForecast from "../five-days-forcast";

import Button from "../UI/button";

const MainContainer: React.FC<MainContainerType> = ({ className }) => {
  const URL = `https://api.openweathermap.org/data/2.5/forecast?lat=18.52&lon=73.85&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`;

  const [forecastList, setForecastList] = useState<ForecastType[]>([]);

  useEffect(() => {
    const getFiveDaysForecast = async () => {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const forecasts = await response.json();

          setForecastList(forecasts.list);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getFiveDaysForecast();
  }, [URL]);

  console.log("forecastList: ", forecastList);
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
      <FiveDaysForecast forecastList={forecastList} className="mt-10" />
    </div>
  );
};

export default MainContainer;
