import { Navigate } from "react-router";
import { useAuthStore } from "./store";
import { ROUTES } from "../../shared/config/consts";

export function AutoAuth({ children }: { children: React.ReactNode }) {
  useAuthStore((s) => s.fetchUser)();

  return children;
}

export function AuthSecure({ children }: { children: React.ReactNode }) {
  const { loading, user } = useAuthStore();

  if (loading) return <div>Loading...</div>;

  if (!user) return Navigate({ to: ROUTES.AUTH, replace: true });

  return children;
}
