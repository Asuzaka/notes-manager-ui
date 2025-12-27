import type { Serial } from "../../common/type";
import type { UserEntity } from "../../user";

export interface Note {
  title: string;
  // slug: string;
  excerpt: string;
  content: string;
  // tags: TagEntity[];
  author: UserEntity;
  // categories: CategoryEntity[];
  isPublic: boolean;

  // Additional fields
  views: number;
  // comments: CommentEntity[];

  // Media
  attachments?: string[];
  coverImage?: string;
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export type NoteEntity = Serial & Note;
