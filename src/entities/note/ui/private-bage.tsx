import { Lock } from "lucide-react";

export function NotePrivateBadge() {
  return (
    <div className="flex items-center text-gray-400" title="Private">
      <Lock size={14} />
    </div>
  );
}
