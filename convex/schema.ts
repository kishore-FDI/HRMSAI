import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  companies: defineTable({
    companyLogo: v.optional(v.string()),
    employee: v.array(v.id("employees")),
    joinCode: v.string(),
    name: v.string(),
    ownerId: v.id("users"),
  }),
  employees: defineTable({
    companyId: v.optional(v.id("companies")),
    employeeId: v.id("users"),
    role: v.string(),
    status: v.union(
      v.literal("active"),
      v.literal("invited"),
      v.literal("inactive")
    ),
  }),
  users: defineTable({
    email: v.string(),
    employements: v.optional(v.array(v.id("employees"))),
    name: v.optional(v.string()),
    profilePic: v.optional(v.string()),
  }).index("by_emailId", ["email"]),
});
