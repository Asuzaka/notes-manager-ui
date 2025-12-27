import { useState } from "react";
import { Link } from "react-router";
import { AuthTabs } from "./tabs";
import { SignInForm, SignUpForm } from "../../features/auth";

export type AuthMode = "signup" | "signin";

export function AuthPage() {
  const [mode, setMode] = useState<AuthMode>("signin");

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h1>
          <p className="text-gray-500">
            {mode === "signin"
              ? "Sign in to continue to your notes"
              : "Create an account to get started"}
          </p>
        </div>

        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
          <AuthTabs mode={mode} setMode={setMode} />
          <div className="p-8">
            {mode === "signin" ? <SignInForm /> : <SignUpForm />}
          </div>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-sm text-gray-500 hover:text-gray-900">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
