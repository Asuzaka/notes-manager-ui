import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { UserSchema } from "../model/type";
import { Save, X } from "lucide-react";
import type { UserEntity } from "../../../entities/user";

interface EditProfileProps {
  user: UserEntity;
  setIsEditing: (editing: boolean) => void;
}

export function EditProfile({ user, setIsEditing }: EditProfileProps) {
  const {
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
    defaultValues: { username: user.username, bio: user.bio },
  });

  return (
    <div className="space-y-4">
      <div>
        <label
          htmlFor="username"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          {...register("username")}
          className="w-full rounded-lg border border-gray-200 p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
        />
        {errors.username && (
          <p className="text-red">{errors.username.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          disabled
          value={user.email}
          className="w-full rounded-lg border border-gray-200 p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
        />
      </div>
      <div>
        <label
          htmlFor="bio"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Bio
        </label>
        <textarea
          id="bio"
          {...register("bio")}
          rows={3}
          className="w-full rounded-lg border border-gray-200 p-2.5 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 resize-none"
        />
        {errors.bio && <p className="text-red">{errors.bio.message}</p>}
      </div>
      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors"
        >
          <Save size={16} className="mr-2" />
          Save Changes
        </button>
        <button
          type="button"
          onClick={() => setIsEditing(false)}
          className="inline-flex items-center px-4 py-2 bg-white border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
        >
          <X size={16} className="mr-2" />
          Cancel
        </button>
      </div>
    </div>
  );
}
