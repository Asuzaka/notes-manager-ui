import type { Serial } from "../../common/type";
import type { NoteEntity } from "../../note/model/type";

export interface User {
  username: string;
  email: string;
  bio?: string;
  provider?: string;
  password?: string;
  confirmed: boolean;
  blocked: boolean;
  notes?: NoteEntity[];

  // Timestamps
  createdAt: string;
  updatedAt: string;
}

export type UserEntity = Serial & User;
