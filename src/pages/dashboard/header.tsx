import { Search } from "lucide-react";

interface DashboardHeaderProps {
  value: string;
  setValue: (val: string) => void;
}

export function DashboardHeader({ value, setValue }: DashboardHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h1 className="text-3xl font-bold text-gray-900">Notes</h1>

      <div className="relative w-full sm:w-64">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search notes..."
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 sm:text-sm"
        />
      </div>
    </div>
  );
}
