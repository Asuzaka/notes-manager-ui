import { useParams } from "react-router";
import { NoteAction, NoteHeader } from "../../widgets/note";
import { ENV } from "../../shared/config/env";
import ReactMarkdown from "react-markdown";

export function NoteViewPage() {
  const { id } = useParams();
  const note = ENV.OFFLINE.getNoteById(id!);
  if (!note) {
    return <div> Note not Found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto">
      <NoteAction id={note.documentId} />

      <NoteHeader note={note} />

      <div className="prose prose-gray">
        <ReactMarkdown>{note.content}</ReactMarkdown>
      </div>
    </article>
  );
}
