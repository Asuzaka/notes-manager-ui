import { Outlet } from "react-router";
import { Header } from "../../widgets/header";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      <Header />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Outlet />
      </main>
    </div>
  );
}
