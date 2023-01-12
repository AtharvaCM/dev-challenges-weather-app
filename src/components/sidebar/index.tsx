import React, { useEffect, useState } from "react";

import {
  CurrentWeatherAPIType,
  SidebarType,
} from "../../types/components/sidebar";

import Button from "../UI/button";

import CloudBackground from "../../../src/assets/Cloud-background.png";
import { getTodaysDate } from "../../utils/date-helper";
import SearchLocation from "../search-location";

const Sidebar: React.FC<SidebarType> = ({ className }) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=18.52&lon=73.85&units=metric&appid=${process.env.REACT_APP_WEATHER_APPID}`;

  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherAPIType>();
  const [showSearch, setShowSearch] = useState<boolean>(false);

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

  const handleCancelClick: () => void = () => {
    setShowSearch(false);
  };

  if (currentWeather === undefined) {
    return <p>Current weather data not available!</p>;
  }

  return (
    <div className={`${className} h-screen py-5`}>
      {/* Search Location */}
      {showSearch && <SearchLocation onCancel={handleCancelClick} />}

      {!showSearch && (
        <div>
          {/* Top Buttons */}
          <div className="flex justify-between px-10">
            <Button
              size="xs"
              className="!rounded-none !bg-[#6E707A] !py-0 !text-white"
              onClick={() => setShowSearch(true)}
            >
              Search for places
            </Button>
            <Button
              size="xs"
              starticon="gps_fixed"
              className="!rounded-full !bg-[#6E707A] !py-0 !text-white"
            ></Button>
          </div>

          {/* Weather Day/Night Img */}
          <div
            style={
              {
                backgroundImage: `url(${CloudBackground})`,
              } as React.CSSProperties
            }
            className={`mt-5 flex h-2/5 items-center justify-center bg-cover bg-center bg-no-repeat`}
          >
            <img
              src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}
              alt="weather img"
              height={120}
              width={120}
            />
          </div>

          {/* Temperature */}
          <div className="mt-5 flex items-center justify-center font-[Raleway]">
            <p className="text-7xl font-bold text-[#E7E7EB]">
              {currentWeather.main.temp | 0}
            </p>
            <span className="text-3xl text-[#A09FB1] md:mt-2">&#8451;</span>
          </div>

          {/* Weather main */}
          <div className="mt-14 flex items-center justify-center text-2xl">
            <p className="text-[#A09FB1]">
              {currentWeather.weather[0].description}
            </p>
          </div>

          {/* Today's date */}
          <div className="mx-20 mt-14 flex items-center justify-between text-[#88869D]">
            <p>Today</p>
            <p>.</p>
            <p>{getTodaysDate()}</p>
          </div>

          {/* Location Name */}
          <div className="mt-8 flex items-center justify-center text-[#88869D]">
            <span className="material-icons">location_on</span>
            <p>{currentWeather.name}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
