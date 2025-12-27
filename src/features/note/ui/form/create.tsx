import type { FieldErrors, UseFormRegister } from "react-hook-form";
import type { CreateNoteType } from "../../model/type";

interface FormProps {
  register: UseFormRegister<CreateNoteType>;
  errors: FieldErrors<CreateNoteType>;
}

export function Form({ register, errors }: FormProps) {
  return (
    <>
      <div>
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Author
        </label>
        <input
          type="text"
          value={"You"}
          disabled
          className="w-full rounded-lg border border-gray-200 p-3 bg-gray-50 text-gray-500 cursor-not-allowed"
        />
      </div>

      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Title
        </label>
        <input
          type="text"
          {...register("title", { required: "Title is required" })}
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Enter note title"
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}
      </div>

      <div>
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Content
        </label>
        <textarea
          id="content"
          {...register("content", { required: "Content is required" })}
          className="w-full rounded-lg border border-gray-200 p-3 min-h-[300px] focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-y"
          placeholder="Start writing..."
          required
        />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>

      <div className="flex items-center">
        <input
          type="checkbox"
          {...register("isPublic")}
          className="h-4 w-4 text-black border-gray-300 rounded focus:ring-gray-500"
        />
        <label htmlFor="isPublic" className="ml-2 block text-sm text-gray-700">
          Make this note public
        </label>
      </div>
    </>
  );
}
