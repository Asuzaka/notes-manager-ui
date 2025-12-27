import type { UserEntity } from "../../../entities/user";

interface ProfileView {
  user: UserEntity;
}

export function ProfileView({ user }: ProfileView) {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-1">{user.username}</h2>
      <p className="text-gray-500 mb-4">{user.email}</p>
      <p className="text-gray-700 leading-relaxed">{user.bio}</p>
      <div className="mt-4 text-xs text-gray-400">
        Member since {new Date(user.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}
