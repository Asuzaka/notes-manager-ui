import { useForm } from "react-hook-form";
import { CreateNoteSchema, type CreateNoteType } from "../model/type";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuthStore } from "../../../app/providers/store";
import { convert } from "../util/convert";
import { ENV } from "../../../shared/config/env";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../shared/config/consts";
import { Form } from "./form/create";

export function CreateNote() {
  const author = useAuthStore((s) => s.user)!;
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreateNoteSchema),
  });

  const onSubmit = (data: CreateNoteType) => {
    const save = convert(data, author);
    ENV.OFFLINE.createNote(save);
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Form register={register} errors={errors} />

      <div className="pt-4">
        <button
          type="submit"
          className="bg-black text-white px-6 py-2.5 rounded-lg font-medium hover:bg-gray-800 transition-colors w-full sm:w-auto"
        >
          Create Note
        </button>
      </div>
    </form>
  );
}
