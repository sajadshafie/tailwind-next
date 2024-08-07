import React from "react";
import { Props } from "./type";
import Typography from "../Typhography";
import { IoIosArrowDown } from "react-icons/io";

export default function Popover(props: Props) {
  const { defaultValue, buttonText, children } = props;
  return (
    <div className="w-full relative">
      <div className="bg-white shadow-inner flex items-center space-between">
        <Typography>{buttonText}</Typography>
        <IoIosArrowDown />
      </div>
      <div className="absolute top-4 shadow-inner">{children}</div>
    </div>
  );
}
