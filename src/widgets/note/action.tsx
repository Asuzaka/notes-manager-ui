import { Link } from "react-router";
import { ROUTES } from "../../shared/config/consts";
import { ArrowLeft, Edit2 } from "lucide-react";

interface NoteActionProps {
  id: string;
}

export function NoteAction({ id }: NoteActionProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <Link
        to={ROUTES.DASHBOARD}
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft size={16} className="mr-1" />
        Back to notes
      </Link>
      <Link
        to={ROUTES.NOTE.D.EDIT(id)}
        className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors"
      >
        <Edit2 size={16} className="mr-1" />
        Edit
      </Link>
    </div>
  );
}
