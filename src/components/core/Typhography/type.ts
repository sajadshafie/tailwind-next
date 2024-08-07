import React from "react";

export interface Props extends React.HTMLProps<HTMLParagraphElement> {
  children: React.ReactNode | string;
}
