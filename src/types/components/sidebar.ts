import { WeatherType, MainWeatherType } from "../../types/weather";

export type SidebarType = {
  className?: string;
};

export type CurrentWeatherAPIType = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: WeatherType[];
  base: string;
  main: MainWeatherType;
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};
