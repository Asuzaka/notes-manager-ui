import { Edit2 } from "lucide-react";

interface ProfileHeaderProps {
  isEditing: boolean;
  setIsEditing: (editing: boolean) => void;
}

export function ProfileHeader({ isEditing, setIsEditing }: ProfileHeaderProps) {
  return (
    <div className="mb-8 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
      {!isEditing && (
        <button
          onClick={() => setIsEditing(true)}
          className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-black transition-colors"
        >
          <Edit2 size={16} className="mr-2" />
          Edit Profile
        </button>
      )}
    </div>
  );
}
