import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { SignUpSchema, type SignUpType } from "../../model/type";
import { ENV } from "../../../../shared/config/env";
import { useState } from "react";

type StatusType = null | "error" | "success" | "loading";

export function SignUpForm() {
  const [status, setStatus] = useState<StatusType>(null);
  const [error, setError] = useState<string | null>(null);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(SignUpSchema) });

  const onSubmit = (data: SignUpType) => {
    setStatus("loading");
    const user = ENV.OFFLINE.signup(data);

    if (user instanceof Error) {
      setStatus("error");
      setError(user.message);
      return;
    }

    setStatus("success");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Full Name
        </label>
        <input
          type="text"
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="Alice Vampire"
          {...register("username")}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Email Address
        </label>
        <input
          type="email"
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="you@example.com"
          {...register("email")}
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
        </div>
        <input
          type="password"
          className="w-full rounded-lg border border-gray-200 p-3 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400"
          placeholder="••••••••"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}
      </div>

      <p className="text-green-500">
        {status === "success" && "Success! now sign in"}
      </p>
      <p className="text-red-500">
        {status === "error" && (error || "Error! try again later.")}
      </p>

      <button
        disabled={status === "loading"}
        type="submit"
        className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors mt-2"
      >
        Create Account
      </button>
    </form>
  );
}
