import { Globe, Lock } from "lucide-react";
import type { NoteEntity } from "../../entities/note";

interface NoteHeaderProps {
  note: NoteEntity;
}

export function NoteHeader({ note }: NoteHeaderProps) {
  return (
    <header className="mb-8 border-b border-gray-100 pb-8">
      <div className="flex items-center gap-3 mb-4 text-sm text-gray-500">
        <span className="flex items-center gap-1">
          {note.isPublic ? <Globe size={14} /> : <Lock size={14} />}
          {note.isPublic ? "Public" : "Private"}
        </span>
        <span>•</span>
        <span>by {note.author.username}</span>
        <span>•</span>
        <span>{new Date(note.createdAt).toLocaleDateString()}</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
        {note.title}
      </h1>
    </header>
  );
}
