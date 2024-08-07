import React from "react";
import CountryItemProps from "./type";
import { Image, Typography } from "@/components/core/";

interface Props extends CountryItemProps {
  onClickItem: (v: CountryItemProps) => void;
}

export default function CountryItem(props: Props) {
  const { name, population, region, capital, image, onClickItem } = props;
  return (
    <div
      onClick={(e) => onClickItem(props)}
      className="w-100 shadow-md bg-white dark:bg-gray-600 rounded"
    >
      <div className="h-44 w-full  relative mb-4">
        <Image fill src={image} alt="" className="rounded-t" />
      </div>
      <div className="pl-6 pb-12">
        <Typography className="font-bold font-xl mb-4">{name}</Typography>
        <Typography className="text-sm">
          Population:<span className="text-xs">{population}</span>
        </Typography>
        <Typography className="text-sm">
          Region:<span className="text-xs">{region}</span>
        </Typography>
        <Typography className="text-sm">
          Capital:<span className="text-xs">{capital}</span>
        </Typography>
      </div>
    </div>
  );
}
