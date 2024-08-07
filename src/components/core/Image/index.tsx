import React from "react";
import { Props } from "./type";
import { default as NextImage } from "next/image";

const Image = (props: Props) => {
  return <NextImage {...props} />;
};
export default Image;
