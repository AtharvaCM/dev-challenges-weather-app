import React from "react";

import { MainContainerType } from "../../types/components/main-container";
import { ForecastType } from "../../types/weather";
import FiveDaysForecast from "../five-days-forcast";

import Button from "../UI/button";

const listData: { list: ForecastType[] } = {
  list: [
    {
      dt: 1672304400,
      main: {
        temp: 29.09,
        feels_like: 28.14,
        temp_min: 29.09,
        temp_max: 30.69,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 33,
        temp_kf: -1.6,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.34,
        deg: 47,
        gust: 1.2,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-29 09:00:00",
    },
    {
      dt: 1672315200,
      main: {
        temp: 28.82,
        feels_like: 27.84,
        temp_min: 28.82,
        temp_max: 29.09,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 953,
        humidity: 32,
        temp_kf: -0.27,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.37,
        deg: 38,
        gust: 2.76,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-29 12:00:00",
    },
    {
      dt: 1672326000,
      main: {
        temp: 23.3,
        feels_like: 22.86,
        temp_min: 23.3,
        temp_max: 23.3,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 955,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.38,
        deg: 275,
        gust: 1.91,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-29 15:00:00",
    },
    {
      dt: 1672336800,
      main: {
        temp: 21.83,
        feels_like: 21.4,
        temp_min: 21.83,
        temp_max: 21.83,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 956,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.55,
        deg: 308,
        gust: 1.64,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-29 18:00:00",
    },
    {
      dt: 1672347600,
      main: {
        temp: 20.23,
        feels_like: 19.77,
        temp_min: 20.23,
        temp_max: 20.23,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 0.79,
        deg: 346,
        gust: 0.92,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-29 21:00:00",
    },
    {
      dt: 1672358400,
      main: {
        temp: 19.28,
        feels_like: 18.75,
        temp_min: 19.28,
        temp_max: 19.28,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 0.69,
        deg: 53,
        gust: 0.74,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-30 00:00:00",
    },
    {
      dt: 1672369200,
      main: {
        temp: 22.89,
        feels_like: 22.41,
        temp_min: 22.89,
        temp_max: 22.89,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 957,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 1.24,
        deg: 113,
        gust: 1.62,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-30 03:00:00",
    },
    {
      dt: 1672380000,
      main: {
        temp: 28.83,
        feels_like: 27.85,
        temp_min: 28.83,
        temp_max: 28.83,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 957,
        humidity: 32,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 2.39,
        deg: 99,
        gust: 2.31,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-30 06:00:00",
    },
    {
      dt: 1672390800,
      main: {
        temp: 31.13,
        feels_like: 29.46,
        temp_min: 31.13,
        temp_max: 31.13,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 954,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.25,
        deg: 45,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-30 09:00:00",
    },
    {
      dt: 1672401600,
      main: {
        temp: 29.46,
        feels_like: 28.26,
        temp_min: 29.46,
        temp_max: 29.46,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 954,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.96,
        deg: 3,
        gust: 2.55,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-30 12:00:00",
    },
    {
      dt: 1672412400,
      main: {
        temp: 23.71,
        feels_like: 23.29,
        temp_min: 23.71,
        temp_max: 23.71,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 955,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 5,
      },
      wind: {
        speed: 2.15,
        deg: 272,
        gust: 2.59,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-30 15:00:00",
    },
    {
      dt: 1672423200,
      main: {
        temp: 22.02,
        feels_like: 21.58,
        temp_min: 22.02,
        temp_max: 22.02,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 955,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.69,
        deg: 294,
        gust: 1.81,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-30 18:00:00",
    },
    {
      dt: 1672434000,
      main: {
        temp: 20.38,
        feels_like: 19.83,
        temp_min: 20.38,
        temp_max: 20.38,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 954,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 0.95,
        deg: 314,
        gust: 1.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-30 21:00:00",
    },
    {
      dt: 1672444800,
      main: {
        temp: 19.25,
        feels_like: 18.64,
        temp_min: 19.25,
        temp_max: 19.25,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 953,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 0.36,
        deg: 83,
        gust: 0.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-31 00:00:00",
    },
    {
      dt: 1672455600,
      main: {
        temp: 22.55,
        feels_like: 21.98,
        temp_min: 22.55,
        temp_max: 22.55,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 956,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 23,
      },
      wind: {
        speed: 1.58,
        deg: 92,
        gust: 2.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-31 03:00:00",
    },
    {
      dt: 1672466400,
      main: {
        temp: 27.9,
        feels_like: 26.94,
        temp_min: 27.9,
        temp_max: 27.9,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 956,
        humidity: 28,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 13,
      },
      wind: {
        speed: 2.3,
        deg: 80,
        gust: 1.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-31 06:00:00",
    },
    {
      dt: 1672477200,
      main: {
        temp: 30.49,
        feels_like: 28.93,
        temp_min: 30.49,
        temp_max: 30.49,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 26,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.91,
        deg: 5,
        gust: 2.75,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-31 09:00:00",
    },
    {
      dt: 1672488000,
      main: {
        temp: 28.64,
        feels_like: 27.64,
        temp_min: 28.64,
        temp_max: 28.64,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.39,
        deg: 320,
        gust: 3.66,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2022-12-31 12:00:00",
    },
    {
      dt: 1672498800,
      main: {
        temp: 23.05,
        feels_like: 22.48,
        temp_min: 23.05,
        temp_max: 23.05,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 954,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.13,
        deg: 283,
        gust: 2.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-31 15:00:00",
    },
    {
      dt: 1672509600,
      main: {
        temp: 21.19,
        feels_like: 20.54,
        temp_min: 21.19,
        temp_max: 21.19,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.19,
        deg: 315,
        gust: 1.28,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-31 18:00:00",
    },
    {
      dt: 1672520400,
      main: {
        temp: 19.74,
        feels_like: 19.05,
        temp_min: 19.74,
        temp_max: 19.74,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 952,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 0.43,
        deg: 147,
        gust: 0.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2022-12-31 21:00:00",
    },
    {
      dt: 1672531200,
      main: {
        temp: 18.82,
        feels_like: 18.09,
        temp_min: 18.82,
        temp_max: 18.82,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 953,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 0.91,
        deg: 67,
        gust: 0.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-01 00:00:00",
    },
    {
      dt: 1672542000,
      main: {
        temp: 21.92,
        feels_like: 21.32,
        temp_min: 21.92,
        temp_max: 21.92,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 955,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.56,
        deg: 88,
        gust: 2.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-01 03:00:00",
    },
    {
      dt: 1672552800,
      main: {
        temp: 27.76,
        feels_like: 26.97,
        temp_min: 27.76,
        temp_max: 27.76,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 956,
        humidity: 31,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.34,
        deg: 102,
        gust: 2.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-01 06:00:00",
    },
    {
      dt: 1672563600,
      main: {
        temp: 30.86,
        feels_like: 29.21,
        temp_min: 30.86,
        temp_max: 30.86,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 953,
        humidity: 25,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 35,
      },
      wind: {
        speed: 0.77,
        deg: 356,
        gust: 1.8,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-01 09:00:00",
    },
    {
      dt: 1672574400,
      main: {
        temp: 29.06,
        feels_like: 27.92,
        temp_min: 29.06,
        temp_max: 29.06,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 39,
      },
      wind: {
        speed: 2.21,
        deg: 349,
        gust: 3.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-01 12:00:00",
    },
    {
      dt: 1672585200,
      main: {
        temp: 23.04,
        feels_like: 22.57,
        temp_min: 23.04,
        temp_max: 23.04,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 954,
        humidity: 45,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 1.72,
        deg: 282,
        gust: 2.03,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-01 15:00:00",
    },
    {
      dt: 1672596000,
      main: {
        temp: 21.25,
        feels_like: 20.71,
        temp_min: 21.25,
        temp_max: 21.25,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 954,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.14,
        deg: 0,
        gust: 1.3,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-01 18:00:00",
    },
    {
      dt: 1672606800,
      main: {
        temp: 19.82,
        feels_like: 19.19,
        temp_min: 19.82,
        temp_max: 19.82,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 952,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 0.64,
        deg: 69,
        gust: 0.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-01 21:00:00",
    },
    {
      dt: 1672617600,
      main: {
        temp: 19.13,
        feels_like: 18.43,
        temp_min: 19.13,
        temp_max: 19.13,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 953,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.94,
        deg: 87,
        gust: 2.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 00:00:00",
    },
    {
      dt: 1672628400,
      main: {
        temp: 21.43,
        feels_like: 20.86,
        temp_min: 21.43,
        temp_max: 21.43,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 955,
        humidity: 47,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 1.97,
        deg: 84,
        gust: 2.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-02 03:00:00",
    },
    {
      dt: 1672639200,
      main: {
        temp: 27.81,
        feels_like: 27.1,
        temp_min: 27.81,
        temp_max: 27.81,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 956,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 3.6,
        deg: 112,
        gust: 4.06,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-02 06:00:00",
    },
    {
      dt: 1672650000,
      main: {
        temp: 30.43,
        feels_like: 28.94,
        temp_min: 30.43,
        temp_max: 30.43,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 953,
        humidity: 27,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.7,
        deg: 120,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-02 09:00:00",
    },
    {
      dt: 1672660800,
      main: {
        temp: 29.24,
        feels_like: 28.07,
        temp_min: 29.24,
        temp_max: 29.24,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 952,
        humidity: 30,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 1.04,
        deg: 43,
        gust: 1.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-02 12:00:00",
    },
    {
      dt: 1672671600,
      main: {
        temp: 22.89,
        feels_like: 22.44,
        temp_min: 22.89,
        temp_max: 22.89,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 954,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 1.42,
        deg: 272,
        gust: 1.86,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 15:00:00",
    },
    {
      dt: 1672682400,
      main: {
        temp: 21.55,
        feels_like: 21.09,
        temp_min: 21.55,
        temp_max: 21.55,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 954,
        humidity: 51,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 14,
      },
      wind: {
        speed: 1.71,
        deg: 291,
        gust: 1.78,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 18:00:00",
    },
    {
      dt: 1672693200,
      main: {
        temp: 20.12,
        feels_like: 19.6,
        temp_min: 20.12,
        temp_max: 20.12,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 952,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 6,
      },
      wind: {
        speed: 0.85,
        deg: 301,
        gust: 0.98,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-02 21:00:00",
    },
    {
      dt: 1672704000,
      main: {
        temp: 19.02,
        feels_like: 18.44,
        temp_min: 19.02,
        temp_max: 19.02,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 952,
        humidity: 56,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 0.51,
        deg: 70,
        gust: 0.69,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2023-01-03 00:00:00",
    },
    {
      dt: 1672714800,
      main: {
        temp: 22.4,
        feels_like: 21.9,
        temp_min: 22.4,
        temp_max: 22.4,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 955,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 0.37,
        deg: 70,
        gust: 0.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-03 03:00:00",
    },
    {
      dt: 1672725600,
      main: {
        temp: 28.27,
        feels_like: 27.45,
        temp_min: 28.27,
        temp_max: 28.27,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 955,
        humidity: 33,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 25,
      },
      wind: {
        speed: 1.24,
        deg: 108,
        gust: 1.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2023-01-03 06:00:00",
    },
  ],
};

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
      <FiveDaysForecast forecastList={listData.list} className="mt-10" />
    </div>
  );
};

export default MainContainer;
