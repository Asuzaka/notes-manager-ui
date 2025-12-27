export const ROUTES = {
  DASHBOARD: "/",
  AUTH: "/auth",
  PROFILE: "/profile",

  NOTE: {
    CREATE: "/note/create",
    VIEW: "/note/:id",
    EDIT: "/note/:id/edit",

    D: {
      VIEW: (id: string) => `/note/${id}`,
      EDIT: (id: string) => `/note/${id}/edit`,
    },
  },
} as const;
