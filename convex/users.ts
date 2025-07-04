import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const updateOrInsertUser = mutation({
  args: {
    email: v.string(),
    clerkId: v.string(),
    name: v.optional(v.string()),
    profilePic: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_emailId", (q) => q.eq("email", args.clerkId))
      .unique();

    if (!existing) {
      await ctx.db.insert("users", {
        email: args.email,
        name: args.name,
        profilePic: args.profilePic,
        employements: [],
      });
    }
  },
});
