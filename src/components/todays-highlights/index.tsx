import React, { useEffect, useState } from "react";
import { CurrentWeatherAPIType } from "../../types/components/sidebar";
import { TodaysHighlightsType } from "../../types/components/todays-highlights";

import Card from "../UI/card";

const TodaysHighlights: React.FC<TodaysHighlightsType> = ({ className }) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=18.52&lon=73.85&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`;

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherAPIType>();

  useEffect(() => {
    const getFiveDaysForecast = async () => {
      try {
        const response = await fetch(URL);
        if (response.ok) {
          const weather = await response.json();

          setCurrentWeather(weather);
        }
      } catch (error) {
        console.log("error: ", error);
      }
    };

    getFiveDaysForecast();
  }, [URL]);
  return (
    <div className={className}>
      {/* Title */}
      <h1 className="mb-6 font-[Raleway] text-2xl font-bold text-[#E7E7EB]">
        Today's Highlights
      </h1>

      {/* Card Grid */}
      <div className="grid w-full grid-cols-1 gap-6 text-[#E7E7EB] md:grid-cols-2">
        <Card className="flex w-full flex-col items-center justify-center text-white">
          <p className="mb-2">Wind status</p>
          {/* Wind speed */}
          <div className="flex justify-center">
            <p className="font-[Raleway] text-4xl font-bold">
              {currentWeather?.wind.speed}
            </p>
            <p className="mt-2 text-lg">mph</p>
          </div>
          {/* Wind direction */}
          <div className="mt-3 flex justify-center">
            <span className="material-icons rotate-[230deg]">navigation</span>
            <p className="ml-1 text-sm">WSW</p>
          </div>
        </Card>

        <Card className="flex w-full flex-col items-center justify-center text-white">
          <p className="mb-2">Humidity</p>
          {/* Humidity */}
          <div className="flex justify-center">
            <p className="font-[Raleway] text-4xl font-bold">
              {currentWeather?.main?.humidity}
            </p>
            <p className="mt-2 text-lg">%</p>
          </div>
          {/* Humidity bar */}
          <div className="mt-3 flex w-full justify-center">
            <div className="mx-2 mb-4 h-1.5 w-full rounded-full bg-[#E7E7EB]">
              <div
                className="h-1.5 rounded-full bg-[#FFEC65]"
                style={{ width: `${currentWeather?.main?.humidity}%` }}
              ></div>
            </div>
          </div>
        </Card>

        <Card className="flex w-full flex-col items-center justify-center text-white">
          <p className="mb-2">Visibility</p>
          {/* Visibility distance */}
          <div className="flex justify-center">
            <p className="font-[Raleway] text-4xl font-bold">
              {currentWeather?.visibility && currentWeather.visibility / 1000}
            </p>
            <p className="mt-2 text-lg">KMs</p>
          </div>
        </Card>

        <Card className="flex w-full flex-col items-center justify-center text-white">
          <p className="mb-2">Air Pressure</p>
          {/* Air pressure */}
          <div className="flex justify-center">
            <p className="font-[Raleway] text-4xl font-bold">
              {currentWeather?.main?.pressure}
            </p>
            <p className="mt-2 text-lg">mb</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default TodaysHighlights;
