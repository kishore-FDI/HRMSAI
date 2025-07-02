import LandingLayout from "@/components/Landing/LandingLayout";

export default async function Page({
  searchParams,
}: {
  searchParams?: Promise<{ redirect?: string }>;
}) {
  const resolvedSearchParams = await searchParams;
  const forceRedirectUrl = resolvedSearchParams?.redirect || "/";
  return <LandingLayout forceRedirectUrl={forceRedirectUrl} />;
}
