"use client";
import { useUser } from "@clerk/nextjs";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

const AddUserToDb = () => {
  const { user, isSignedIn } = useUser();
  const updateOrInsertUser = useMutation(api.users.updateOrInsertUser);

  useEffect(() => {
    if (isSignedIn && user) {
      updateOrInsertUser({
        email: user.emailAddresses[0]?.emailAddress || "",
        clerkId: user.id,
        name: user.fullName || "",
        profilePic: user.imageUrl || "",
      });
    }
  }, [isSignedIn, user, updateOrInsertUser]);

  return null;
};

export default AddUserToDb;
