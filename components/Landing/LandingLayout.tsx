import React from "react";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";

const GlobeIcon = () => (
  <svg
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    className="w-20 h-20 mx-auto mb-6">
    <g clipPath="url(#a)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M41.08 56.4a26 26 0 0 0 14.68-13.8q-4.96.84-10.8 1.36-.48 7.32-3.88 12.44M32 64A32 32 0 1 0 32 0a32 32 0 0 0 0 64m1.92-6.08a28 28 0 0 1-3.84 0h-.08a16 16 0 0 1-3.36-5.28q-1.52-3.56-2.52-8.32a160 160 0 0 0 15.68 0q-1 4.76-2.52 8.32a16 16 0 0 1-3.36 5.28zm11.76-19.04q6.64-.6 11.8-1.72a28 28 0 0 0 0-10.32q-5.16-1.12-11.8-1.72a72 72 0 0 1 0 13.76m-5.08-14.16a68 68 0 0 1 0 14.56 156 156 0 0 1-17.2 0 68 68 0 0 1 0-14.56 156 156 0 0 1 17.2 0m4.4-4.68q5.8.52 10.76 1.36A26 26 0 0 0 41.08 7.6q2.6 5.12 3.88 12.44M33.92 6l.04.08q1.64 1.48 3.36 5.28 1.52 3.56 2.52 8.32a160 160 0 0 0-15.68 0q1-4.76 2.52-8.32A16 16 0 0 1 27.96 6a28 28 0 0 1 3.84 0m-11 1.6A26 26 0 0 0 8.24 21.32q4.96-.84 10.8-1.36.48-7.32 3.88-12.44M18.32 25.12q-6.64.6-11.8 1.72a28 28 0 0 0 0 10.32q5.16 1.12 11.8 1.72a72 72 0 0 1 0-13.76m.68 18.84q-5.8-.52-10.76-1.36A26 26 0 0 0 22.92 56.4q-2.6-5.12-3.88-12.44"
        fill="#666"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h64v64H0z" />
      </clipPath>
    </defs>
  </svg>
);

const LandingLayout = ({
  children,
  forceRedirectUrl,
}: {
  children?: React.ReactNode;
  forceRedirectUrl: string;
}) => {
  return (
    <main className="flex flex-col items-center justify-center min-h-[80vh] px-4 text-center">
      <GlobeIcon />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Empower Your Management with AI
      </h1>
      <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
        The modern manager&apos;s toolkit: streamline decisions, automate tasks,
        and unlock your team&apos;s potential with intelligent AI assistance.
      </p>
      <SignInButton forceRedirectUrl={forceRedirectUrl}>
        <Button size="lg" className="text-lg px-8 py-4">
          Get Started
        </Button>
      </SignInButton>
      {children}
    </main>
  );
};

export default LandingLayout;
