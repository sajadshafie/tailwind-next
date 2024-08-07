"use client";
import React from "react";
import { Props } from "./type";
import { Input, Typography } from "@/components/core";
import Popover from "@/components/core/Popover";
import { RegionList } from "@/constant";
import Select from "@/components/core/Select";

function SearchBar(props: Props) {
  return (
    <div className="w-full flex justify-between items-center w-full flex-wrap ">
      <div className="xl:w-4/12 lg:w-3/12 md:w-5/12 sm:w-12/12 mb-8 sm:mb-0 ">
        <Input icon placeholder="Search for a country" />
      </div>
      {/* <Popover buttonText={"Filter by Region"}>
        {RegionList.map((v, i) => {
          return <Typography key={v.value}>{v.label}</Typography>;
        })}
      </Popover> */}
      <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 sm:w-5/12">
        <Select options={RegionList} placeholder="Filter by Region" />
      </div>
    </div>
  );
}

export default SearchBar;
