import React from "react";
import { Props } from "./type";
import { CiSearch } from "react-icons/ci";

export default function Input(props: Props) {
  const { onChange, icon, ...restProps } = props;
  return (
    <div className=" w-full relative h-11">
      {icon && (
        <div
          data-testid="icon-search"
          className="cursor-pointer h-full absolute left-3 bottom-0 w-6 flex items-center space-between"
        >
          <CiSearch className="text-slate-700 dark:text-slate-100" />
        </div>
      )}
      <input
        className="py-4 pr-3 pl-10 h-full w-full outline-0 border-inherit bg-white dark:bg-gray-600 dark:border-slate-100 rounded-md shadow-md placeholder-slate-700 dark:placeholder-slate-100"
        type="text"
        {...restProps}
        onChange={onChange}
      />
    </div>
  );
}
