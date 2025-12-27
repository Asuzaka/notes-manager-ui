import { create } from "zustand";
import { ENV } from "../../shared/config/env";
import type { UserEntity } from "../../entities/user";

interface AuthState {
  user: UserEntity | null;
  loading: boolean;

  setUser: (user: UserEntity | null) => void;
  fetchUser: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => {
    set({ user });
  },

  fetchUser: () => {
    set({ loading: true });

    const user = ENV.OFFLINE.auth();

    set({ user });

    set({ loading: false });
  },
}));
