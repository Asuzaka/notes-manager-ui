import { FileText, Globe, Lock } from "lucide-react";

const static_data = {
  totalNotes: 42,
  publicNotes: 27,
  privateNotes: 15,
};

export function ProfileStatistics() {
  return (
    <>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistics</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gray-100 rounded-md text-gray-600">
              <FileText size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">
              Total Notes
            </span>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {static_data.totalNotes}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-blue-50 rounded-md text-blue-600">
              <Globe size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Public</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {static_data.publicNotes}
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-gray-100 rounded-md text-gray-600">
              <Lock size={20} />
            </div>
            <span className="text-sm font-medium text-gray-600">Private</span>
          </div>
          <p className="text-3xl font-bold text-gray-900">
            {static_data.privateNotes}
          </p>
        </div>
      </div>
    </>
  );
}
