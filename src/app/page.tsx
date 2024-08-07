"use client";
import CountryItem from "@/components/base/CountryItem";
import SearchBar from "@/components/base/searchbar";
import { countries } from "@/constant";
import React from "react";
import CountryItemType from "@/components/base/CountryItem/type";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const onClickItem = (v: CountryItemType) => {
    router.push(`/${v.slug}`, v as any);
  };

  return (
    <div className="px-11 py-8 bg-main dark:bg-gray-700">
      <SearchBar />
      <div className="flex flex-wrap justify-between mt-20">
        {countries.map((v, i) => {
          return (
            <div
              className="w-full sm:w-full md:w-[48%] lg:w-[30%] xl:w-[22%] mb-20"
              key={i}
            >
              <CountryItem {...v} onClickItem={onClickItem} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
