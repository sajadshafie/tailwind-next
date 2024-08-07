import React, { useContext, useMemo } from "react";
import { Props } from "./type";
import { context } from "@/context";
import { default as Dropdown } from "react-select";

export default function Select(props: Props) {
  const { options, placeholder } = props;
  const { state, setState } = useContext(context);

  const styles = useMemo(
    () => ({
      control: (style: any) => ({
        ...style,
        placeholder: (res: any) => {
          return {
            ...res,
            color: state == "Dark" ? "#f8fafc" : "#0f172a",
          };
        },
        width: "100%",
        background: state == "Light" ? "#f1f5f9" : "#475569",
        border: "none",
        color: state == "Dark" ? "#f8fafc" : "#0f172a",
        boxShadow:
          "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
      }),
      option: (style: any) => ({
        ...style,
        border: "none",
        background: state == "Light" ? "#f1f5f9" : "#475569",
        color: state == "Dark" ? "#f8fafc" : "#0f172a",
      }),
    }),
    [state]
  );
  return (
    <Dropdown
      styles={styles}
      components={{
        IndicatorSeparator: () => null,
      }}
      options={options}
      placeholder={
        <div className="text-slate-700 dark:text-slate-100">{placeholder}</div>
      }
    />
  );
}
