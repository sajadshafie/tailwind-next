import { Image, Typography } from "@/components/core";
import React from "react";
import CountryItemType from "../CountryItem/type";
import Chips from "@/components/core/chips";

export default function Detail(props: CountryItemType) {
  const {
    image,
    name,
    nativeName,
    population,
    region,
    capital,
    topLevelDomain,
    currencies,
    Languages,
    borderCountries,
  } = props;
  return (
    <div className="flex items-center justify-between flex-col md:flex-row">
      <div className="w-full mb-10 md:mb-0 md:w-[40%] relative h-60 ">
        <Image src={image} fill alt="" />
      </div>
      <div className="w-full md:w-[47%] ">
        <Typography className="font-bold text-2xl mb-5">{name}</Typography>
        <div className="flex flex-wrap mb-8">
          <Typography className="w-full sm:w-6/12 text-xs mb-3">
            Native Name : <span className="text-[11px]">{nativeName}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            Population : <span className="text-[11px]">{population}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            Region : <span className="text-[11px]">{region}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            Capital : <span className="text-[11px]">{capital}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            Top Level Domain :
            <span className="text-[11px]">{topLevelDomain}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            currencies : <span className="text-[11px]">{currencies}</span>
          </Typography>
          <Typography className="text-xs w-full sm:w-6/12 mb-3">
            Languages :{" "}
            <span className="text-[11px]">
              {Languages?.map((v) => `${v} ` + " ")}
            </span>
          </Typography>
        </div>
        <div className="flex items-center">
          <Typography className="mr-4 text-sm">Border Countries :</Typography>
          {borderCountries?.map((v, i) => (
            <Chips key={i} className="mr-2">
              <Typography className="text-[11px]">{v}</Typography>
            </Chips>
          ))}
        </div>
      </div>
    </div>
  );
}
