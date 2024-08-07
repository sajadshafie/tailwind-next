import React from "react";
import { Props } from "./type";
export default function Typography(props: Props) {
  const { children, className, ...restProps } = props;
  return (
    <p
      className={`text-slate-700 dark:text-slate-50 ${className}`}
      {...restProps}
    >
      {children}
    </p>
  );
}
