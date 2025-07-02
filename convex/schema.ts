import { v } from "convex/values";
import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    name: v.optional(v.string()),
    profilePic: v.optional(v.string()),
    email: v.string(),
    clerkId: v.string(),
    employements: v.optional(v.array(v.id("employees"))),
  }).index("by_clerkId", ["clerkId"]),

  employees: defineTable({
    employeeId: v.id("users"),
    status: v.union(
      v.literal("active"),
      v.literal("invited"),
      v.literal("inactive")
    ),
  }),

  companies: defineTable({
    name: v.string(),
    joinCode: v.string(),
    companyLogo: v.optional(v.string()),
    ownerId: v.id("users"),
    employee: v.array(v.id("employees")),
  }),
});
