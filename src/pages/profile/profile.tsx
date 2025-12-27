import { useState } from "react";
import {
  ProfileAvatar,
  ProfileHeader,
  ProfileStatistics,
  ProfileView,
} from "../../widgets/profile";
import { EditProfile } from "../../features/user";
import { ENV } from "../../shared/config/env";
import { useAuthStore } from "../../app/providers/store";

export function ProfilePage() {
  const id = useAuthStore((s) => s.user?.documentId);
  const user = ENV.OFFLINE.getUserById(id!);
  const [isEditing, setIsEditing] = useState(false);

  if (!user) return <div>User not found</div>;

  return (
    <div className="max-w-2xl mx-auto">
      <ProfileHeader isEditing={isEditing} setIsEditing={setIsEditing} />

      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-8">
        <div className="p-8">
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <ProfileAvatar />

            <div className="flex-1 w-full">
              {isEditing ? (
                <EditProfile user={user} setIsEditing={setIsEditing} />
              ) : (
                <ProfileView user={user} />
              )}
            </div>
          </div>
        </div>
      </div>
      <ProfileStatistics />
    </div>
  );
}
