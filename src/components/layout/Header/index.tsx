"use client";
import React, { useContext } from "react";
import { BsMoon } from "react-icons/bs";

import { BsMoonFill } from "react-icons/bs";

import { Typography } from "@/components/core";
import { context } from "@/context";

export default function Header() {
  const { state, setState } = useContext(context);
  return (
    <div className="bg-white dark:bg-gray-600 w-full px-11 py-8 flex justify-between items-center shadow-md">
      <Typography className="text-base font-bold">
        Where in the world?
      </Typography>
      <div
        onClick={() => {
          const res = state == "Dark" ? "Light" : "Dark";
          setState(res);
          localStorage.setItem("displayMode", res);
        }}
        className="flex space-between items-center cursor-pointer"
      >
        {state == "Dark" ? (
          <BsMoonFill className="text-slate-700 dark:text-slate-100" />
        ) : (
          <BsMoon />
        )}
        <Typography className="pl-2 text-xs">{state} mode</Typography>
      </div>
    </div>
  );
}
