import React from "react";
import { Props } from "./type";

export default function Button(props: Props) {
  const { children, ...restProps } = props;
  return (
    <button
      data-testid="button-core"
      {...restProps}
      className="outline-none border-main bg-white hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 text-slate-700 font-semibold hover:text-white py-2 px-4 border shadow-md hover:border-transparent rounded flex items-center"
    >
      {children}
    </button>
  );
}
