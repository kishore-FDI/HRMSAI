import React from "react";
import LandingLayout from "@/components/Landing/LandingLayout";

const page = ({ searchParams }: { searchParams?: { redirect?: string } }) => {
  const forceRedirectUrl = searchParams?.redirect || "/";
  return <LandingLayout forceRedirectUrl={forceRedirectUrl} />;
};

export default page;
