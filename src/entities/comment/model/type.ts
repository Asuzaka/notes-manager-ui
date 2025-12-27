import type { Serial } from "../../common/type";
import type { NoteEntity } from "../../note/model/type";
import type { UserEntity } from "../../user";

export interface Comment {
  content: string;
  author: UserEntity;
  // Never even used?
  note: NoteEntity;
  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export type CommentEntity = Serial & Comment;
