"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Globe } from "lucide-react";
import React from "react";

const ListOfCompanies = () => {
  const messages = useQuery(api.companies.getForCurrentUser);
  console.log(messages);
  const data = [
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
    {
      title: "hi",
    },
  ];
  return (
    <div className="bg-black text-white w-fit rounded-2xl mt-5 mx-5">
      <span className="flex m-4 gap-4">
        <Globe className="size-6" /> Your Companies
      </span>
      <div className="flex-grow flex flex-wrap gap-4 pl-4">
        {data &&
          data.map((item, index) => {
            return (
              <div key={index} className="p-4 bg-gray-800 rounded-lg size-40">
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ListOfCompanies;
