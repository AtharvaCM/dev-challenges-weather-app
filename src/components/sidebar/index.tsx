import React from "react";

import { SidebarType } from "../../types/components/sidebar";

import Button from "../UI/Button";

import Shower from "../../../src/assets/Shower.png";
import CloudBackground from "../../../src/assets/Cloud-background.png";

const Sidebar: React.FC<SidebarType> = ({ className }) => {
  return (
    <div className={`${className} h-screen py-5`}>
      {/* Top Buttons */}
      <div className="flex justify-between px-10">
        <Button size="xs" className="!rounded-none !bg-[#6E707A] !text-white">
          Search for places
        </Button>
        <Button
          size="xs"
          starticon="gps_fixed"
          className="!rounded-full !bg-[#6E707A] !text-white"
        ></Button>
      </div>

      {/* Weather Day/Night Img */}
      <div
        style={
          { backgroundImage: `url(${CloudBackground})` } as React.CSSProperties
        }
        className={`mt-5 flex h-2/5 items-center justify-center bg-cover bg-center bg-no-repeat`}
      >
        <img src={Shower} alt="weather img" height={120} width={120} />
      </div>

      {/* Temperature */}
      <div className="mt-5 flex items-center justify-center font-[Raleway]">
        <p className="text-7xl font-bold text-[#E7E7EB]">15</p>
        <span className="text-3xl text-[#A09FB1] md:mt-2">&#8451;</span>
      </div>

      {/* Weather main */}
      <div className="mt-14 flex items-center justify-center text-2xl">
        <p className="text-[#A09FB1]">Shower</p>
      </div>

      {/* Today's date */}
      <div className="mx-24 mt-14 flex items-center justify-between text-[#88869D]">
        <p>Today</p>
        <p>.</p>
        <p>Fri, 5 Jun</p>
      </div>

      {/* Location Name */}
      <div className="mt-8 flex items-center justify-center text-[#88869D]">
        <span className="material-icons">location_on</span>
        <p>Helsinki</p>
      </div>
    </div>
  );
};

export default Sidebar;
