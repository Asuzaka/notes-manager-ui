import { Plus, User } from "lucide-react";
import { Link } from "react-router";
import { ROUTES } from "../../../shared/config/consts";

export function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            to={ROUTES.DASHBOARD}
            className="text-xl font-bold tracking-tight text-gray-900"
          >
            Notes<span className="text-gray-400">.app</span>
          </Link>

          <div className="flex items-center gap-4">
            <Link
              to={ROUTES.PROFILE}
              className="text-gray-500 hover:text-gray-900 transition-colors p-2 rounded-full hover:bg-gray-100"
              title="Profile"
            >
              <User size={20} />
            </Link>

            <Link
              to={ROUTES.NOTE.CREATE}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-black hover:bg-gray-800 transition-colors"
            >
              <Plus size={16} className="mr-2" />
              New Note
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
