import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import AddCompanies from "@/components/Home/AddCompanies";
import ListOfCompanies from "@/components/Home/ListOfCompanies";
const page = async () => {
  const user = await currentUser();
  if (!user) {
    redirect("/landing");
  }
  return (
    <main>
      <div className="items-center justify-center flex-col gap-2 mt-5 flex">
        <span className="sm:text-5xl text-xl">Welcome , {user.firstName}</span>
        <span className="text-center">
          Select a company to continue or create a new one
        </span>
      </div>
      <section className="flex sm:flex-row-reverse flex-col justify-between items-center sm:items-stretch">
        <AddCompanies />
        <ListOfCompanies />
      </section>
    </main>
  );
};

export default page;
