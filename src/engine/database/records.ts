import type { CategoryEntity } from "../../entities/categories";
import type { CommentEntity } from "../../entities/comment";
import type { NoteEntity } from "../../entities/note";
import type { TagEntity } from "../../entities/tag";
import type { UserEntity } from "../../entities/user";

export type NoteRecord = Omit<
  NoteEntity,
  "author" | "comments" | "categories" | "tags"
> & {
  authorId: string;
};

export type CommentRecord = Omit<CommentEntity, "author" | "note"> & {
  authorId: string;
  noteId: string;
};

export type UserRecord = Omit<UserEntity, "notes"> & {
  noteIds: string[];
};

export type CategoryRecord = Omit<CategoryEntity, "notes"> & {
  noteIds: string[];
};

export type TagRecord = Omit<TagEntity, "notes"> & {
  noteIds: string[];
};
