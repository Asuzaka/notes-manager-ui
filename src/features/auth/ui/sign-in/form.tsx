import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignInSchema, type SignInType } from "../../model/type";
import { ENV } from "../../../../shared/config/env";
import { useAuthStore } from "../../../../app/providers/store";
import { useState } from "react";
import { useNavigate } from "react-router";
import { ROUTES } from "../../../../shared/config/consts";

type StatusType = "error" | "success" | "loading" | null;

export function SignInForm() {
  const [status, setStatus] = useState<StatusType>(null);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const signin = useAuthStore((s) => s.setUser);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignInSchema) });

  const onSubmit = (data: SignInType) => {
    setStatus("loading");

    const user = ENV.OFFLINE.signin(data);

    if (user instanceof Error) {
      setStatus("error");
      setError(user.message);
      return;
    }

    signin(user);
    setStatus("success");
    navigate(ROUTES.DASHBOARD);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          {...register("email")}
          placeholder="you@example.com"
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>

      <div>
        <div className="flex justify-between items-center mb-1">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>

          <a href="#" className="text-xs text-gray-500 hover:text-black">
            Forgot password?
          </a>
        </div>
        <input
          type="password"
          {...register("password")}
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="••••••••"
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <p className="text-green-500">{status === "success" && "Success!"}</p>
      <p className="text-red-500">
        {status === "error" && (error || "Error! try again later.")}
      </p>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2"
      >
        Sign In
      </button>
    </form>
  );
}
