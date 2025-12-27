import { useForm } from "react-hook-form";
import { CreateNoteSchema, type CreateNoteType } from "../model/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./form/edit";
import { merge } from "../util/convert";
import { ENV } from "../../../shared/config/env";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../shared/config/consts";

interface EditNoteProps {
  id: string;
}

export function EditNote({ id }: EditNoteProps) {
  const note = ENV.OFFLINE.getNoteById(id);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateNoteSchema),
    defaultValues: {
      title: note?.title,
      content: note?.content,
      isPublic: note?.isPublic,
    },
  });

  if (!note) return <div>Note not found</div>;

  const onSubmit = (data: CreateNoteType) => {
    const edit = merge(data, note);
    ENV.OFFLINE.updateNote(edit);
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Form register={register} errors={errors} author={note.author.username} />

      <div className="pt-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Edit Note
        </button>
      </div>
    </form>
  );
}
