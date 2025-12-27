import z from "zod";

export const UserSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters long"),
  bio: z
    .string()
    .max(160, "Bio must be at most 160 characters long")
    .optional(),
});

export type UserSchemaType = z.infer<typeof UserSchema>;
