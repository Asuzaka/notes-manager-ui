import { Link } from "react-router";
import { NotePrivateBadge } from "./private-bage";
import type { NoteEntity } from "../model/type";
import { ROUTES } from "../../../shared/config/consts";

export function NoteCard({ note }: { note: NoteEntity }) {
  return (
    <Link to={ROUTES.NOTE.D.VIEW(note.documentId)} className="block group">
      <div className="bg-white rounded-lg border border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-black">
            {note.title}
          </h3>
          {!note.isPublic && <NotePrivateBadge />}
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2 leading-relaxed">
          {note.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 items-center">
          <span className="text-xs text-gray-500 ml-auto">
            by {note.author.username} •{" "}
            {new Date(note.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>
    </Link>
  );
}
