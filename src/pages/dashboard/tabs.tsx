import type { DashboardMode } from "./dashboard";

interface DashboardTabsProps {
  mode: DashboardMode;
  setMode: (mode: DashboardMode) => void;
}

export function DashboardTabs({ mode, setMode }: DashboardTabsProps) {
  return (
    <div className="border-b border-gray-200">
      <div className="flex gap-8">
        <button
          onClick={() => setMode("my")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            mode === "my"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          My Notes
          {mode === "my" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
          )}
        </button>
        <button
          onClick={() => setMode("public")}
          className={`pb-3 text-sm font-medium transition-colors relative ${
            mode === "public"
              ? "text-gray-900"
              : "text-gray-500 hover:text-gray-700"
          }`}
        >
          Public Notes
          {mode === "public" && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-black" />
          )}
        </button>
      </div>
    </div>
  );
}
