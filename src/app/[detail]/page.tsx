"use client";
import { Image, Typography } from "@/components/core";
import React, { useEffect, useState } from "react";
import { countries } from "@/constant";
import CountryItemType from "@/components/base/CountryItem/type";
import { useParams } from "next/navigation";
import Detail from "@/components/base/Detail";

export default function page() {
  const [data, setData] = useState<CountryItemType | null>(null);
  const params = useParams();
  useEffect(() => {
    const res = countries.find((v, i) => {
      return v.slug == params.detail;
    });
    setData(res as CountryItemType);
  }, []);
  return (
    <div>
      <Detail {...(data as CountryItemType)} />
    </div>
  );
}
