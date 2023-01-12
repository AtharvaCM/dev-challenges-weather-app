import React, { useEffect, useState } from "react";

import {
  CityType,
  SearchLocationType,
} from "../../types/components/search-location";

import CityListJson from "../../utils/city.min.json";
import LocationListRow from "../location-list-row";

import Button from "../UI/button";

const SearchLocation: React.FC<SearchLocationType> = ({ onCancel }) => {
  const [enteredSearch, setEnteredSearch] = useState<string>("");
  const [cityList, setCityList] = useState<CityType[]>([]);

  useEffect(() => {
    if (enteredSearch === "") {
      setCityList([]);
      return;
    }

    setCityList(
      CityListJson.cities.filter((city) => {
        return city.name.toLowerCase().includes(enteredSearch.toLowerCase());
      })
    );
  }, [enteredSearch]);

  return (
    <div className="h-screen w-screen bg-[#1E213A] px-3 pb-3 md:h-full md:w-full md:px-7">
      {/* Close button */}
      <div className="mb-5 flex w-full justify-end">
        <button className="text-white" onClick={onCancel}>
          <span className="material-icons">cancel</span>
        </button>
      </div>
      {/* Search form */}
      <div className="flex w-full">
        <input
          type="text"
          placeholder="Search location"
          className="mr-3 w-full border border-[#E7E7EB] bg-transparent p-3 text-[#E7E7EB]"
          value={enteredSearch}
          onChange={(e) => setEnteredSearch(e.target.value)}
        />
        <Button color="primary" className="!rounded-none">
          Search
        </Button>
      </div>
      {/* Result list */}
      <div className="mt-9 text-[#E7E7EB]">
        {cityList.length === 0 && enteredSearch !== "" && (
          <p>Location not found!</p>
        )}
        {cityList.length !== 0 &&
          cityList.map((city) => (
            <LocationListRow city={city} key={city.id} onSelect={onCancel} />
          ))}
      </div>
    </div>
  );
};

export default SearchLocation;
