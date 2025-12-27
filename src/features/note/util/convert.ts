import type { NoteEntity } from "../../../entities/note";
import type { UserEntity } from "../../../entities/user";
import type { CreateNoteType, EditNoteType } from "../model/type";

export function convert(data: CreateNoteType, author: UserEntity): NoteEntity {
  return {
    documentId: String(Date.now()) + randomNumbers(),
    title: data.title,
    excerpt: data.content.substring(0, 150),
    content: data.content,

    isPublic: data.isPublic ? true : false,
    author: author,

    views: 0,
    createdAt: new Date(Date.now()).toISOString(),
    updatedAt: new Date(Date.now()).toISOString(),
  };
}

function randomNumbers(): string {
  return String(Math.floor(Math.random() * 999) + 1);
}

export function merge(data: EditNoteType, note: NoteEntity): NoteEntity {
  const { title, content, isPublic } = data;
  return {
    ...note,

    title: title,
    excerpt: content.substring(0, 150),
    content: content,

    isPublic: isPublic ? true : false,
  };
}
