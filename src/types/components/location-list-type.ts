import { CityType } from "./search-location";

export type LocatioListRowType = {
  city: CityType;
  onSelect: () => void;
};
