import { zodResolver } from "@hookform/resolvers/zod";
import { CommentSchema } from "../model/type";
import { useForm } from "react-hook-form";

export function PostComment() {
  const {
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(CommentSchema) });

  return (
    <form className="mb-8">
      <div className="mb-3">
        <textarea
          {...register("content")}
          placeholder="Write a comment..."
          className="w-full rounded-lg border border-gray-200 p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 min-h-[80px] resize-y"
        />
        {errors.content && (
          <p className="text-red-500">{errors.content.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Post Comment
        </button>
      </div>
    </form>
  );
}
