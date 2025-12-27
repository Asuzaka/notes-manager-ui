import type { NoteEntity } from "../model/type";
import { NoteCard } from "./card";

export function NoteList({ notes, tab }: { notes: NoteEntity[]; tab: string }) {
  return (
    <div className="space-y-4">
      {notes.length > 0 ? (
        notes.map((note) => <NoteCard key={note.documentId} note={note} />)
      ) : (
        <div className="text-center py-12 text-gray-500">
          {tab === "my"
            ? "No notes found. Create your first note!"
            : "No public notes available."}
        </div>
      )}
    </div>
  );
}
