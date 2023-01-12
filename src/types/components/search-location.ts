export type SearchLocationType = {
  onCancel: () => void;
};

export type CityType = {
  id: number;
  name: string;
  state: string;
  country: string;
  coord: {
    lon: number;
    lat: number;
  };
};
