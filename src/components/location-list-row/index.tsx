import React from "react";

import { LocatioListRowType } from "../../types/components/location-list-type";

const LocationListRow: React.FC<LocatioListRowType> = ({ city, onSelect }) => {
  const handleLocationClick = () => {
    localStorage.setItem("lat", city.coord.lat.toString());
    localStorage.setItem("lon", city.coord.lon.toString());
    onSelect();
  };

  return (
    <div
      className="mb-2 flex items-center justify-between px-2 py-4 hover:border hover:border-[#616475]"
      onClick={handleLocationClick}
    >
      <p>{city.name}</p>
      <span className="material-icons text-[#616475]">chevron_right</span>
    </div>
  );
};

export default LocationListRow;
