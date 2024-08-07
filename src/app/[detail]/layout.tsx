"use client";
import Button from "@/components/core/Button";
import React from "react";
import { IoIosArrowRoundBack } from "react-icons/io";
import { useRouter } from "next/navigation";

export default function layout({ children, params }: rootLayout) {
  const { back } = useRouter();

  return (
    <div className="px-11 py-8 bg-white dark:bg-slate-700 bg-main h-full">
      <div className="flex mt-10  mb-20">
        <Button onClick={() => back()}>
          <IoIosArrowRoundBack className="mr-2" />
          Back
        </Button>
      </div>
      {children}
    </div>
  );
}
