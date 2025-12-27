import type { Serial } from "../../common/type";
import type { NoteEntity } from "../../note/model/type";

export interface Category {
  name: string;
  slug: string;
  description?: string;
  notes?: NoteEntity[];
}

export type CategoryEntity = Serial & Category;
