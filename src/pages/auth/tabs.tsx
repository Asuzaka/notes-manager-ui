import type { AuthMode } from "./auh";

export function AuthTabs({
  mode,
  setMode,
}: {
  mode: AuthMode;
  setMode: (mode: AuthMode) => void;
}) {
  return (
    <div className="flex border-b border-gray-200">
      <button
        onClick={() => setMode("signin")}
        className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
          mode === "signin"
            ? "text-black border-b-2 border-black -mb-[2px]"
            : "text-gray-500 hover:text-gray-700 bg-gray-50"
        }`}
      >
        Sign In
      </button>
      <button
        onClick={() => setMode("signup")}
        className={`flex-1 py-4 text-sm font-medium text-center transition-colors ${
          mode === "signup"
            ? "text-black border-b-2 border-black -mb-[2px]"
            : "text-gray-500 hover:text-gray-700 bg-gray-50"
        }`}
      >
        Sign Up
      </button>
    </div>
  );
}
