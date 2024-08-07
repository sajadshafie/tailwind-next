import React from "react";
import { Props } from "./type";

export default function Chips(props: Props) {
  const { children, className, ...restProps } = props;
  return (
    <div
      {...restProps}
      className={`px-4 py-2 shadow-md cursor-pointer  inline-block dark:bg-slate-600 bg-white ${className}`}
    >
      {children}
    </div>
  );
}
