import { Link, useParams } from "react-router";
import { ROUTES } from "../../shared/config/consts";
import { ArrowLeft } from "lucide-react";
import { EditNote } from "../../features/note";

export function NoteEditPage() {
  const { id } = useParams();

  if (!id) return <div>Note Not Found</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <Link
          to={ROUTES.DASHBOARD}
          className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900 transition-colors mb-4"
        >
          <ArrowLeft size={16} className="mr-1" />
          Cancel
        </Link>
        <h1 className="text-3xl font-bold text-gray-900">Create New Note</h1>
      </div>
      <EditNote id={id} />
    </div>
  );
}
