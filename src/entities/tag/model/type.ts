import type { Serial } from "../../common/type";
import type { NoteEntity } from "../../note";

export interface Tag {
  name: string;
  slug: string;
  notes?: NoteEntity[];
}

export type TagEntity = Serial & Tag;
