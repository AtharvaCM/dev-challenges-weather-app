import React from "react";

import { ForecastType } from "../../types/weather";

export type FiveDaysForecastType = {
  children?: React.ReactNode;
  className?: string;
  forecastList: ForecastType[];
};
