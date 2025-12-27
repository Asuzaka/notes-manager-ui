import type {
  CategoryRecord,
  CommentRecord,
  NoteRecord,
  TagRecord,
  UserRecord,
} from "./records";

export interface DatabaseSchema {
  users: UserRecord[];
  notes: NoteRecord[];
  comments: CommentRecord[];
  categories: CategoryRecord[];
  tags: TagRecord[];
}
