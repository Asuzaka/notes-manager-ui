import { User } from "lucide-react";

export function ProfileAvatar() {
  return (
    <div className="flex-shrink-0">
      <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 border border-gray-200">
        <User size={40} />
      </div>
    </div>
  );
}
