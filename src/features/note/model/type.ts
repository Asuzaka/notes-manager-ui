import z from "zod";

export const CreateNoteSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Title is too long"),
  content: z.string().min(1, "Content is required"),
  isPublic: z.boolean().optional(),
});

export type EditNoteType = z.infer<typeof CreateNoteSchema>;
export type CreateNoteType = z.infer<typeof CreateNoteSchema>;
