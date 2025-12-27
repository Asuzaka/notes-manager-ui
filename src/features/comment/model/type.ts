import z from "zod";

export const CommentSchema = z.object({
  content: z.string().min(1).max(1000),
});

export type CommentSchemaType = z.infer<typeof CommentSchema>;
