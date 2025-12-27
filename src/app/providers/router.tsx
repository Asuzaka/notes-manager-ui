import { createBrowserRouter } from "react-router";
import { ROUTES } from "../../shared/config/consts";
// Pages
import { AuthPage } from "../../pages/auth";
import { DashboardPage } from "../../pages/dashboard";
// Layout
import Layout from "./layout";
import { NoteCreatePage, NoteEditPage, NoteViewPage } from "../../pages/note";
import { ProfilePage } from "../../pages/profile/profile";
import { AuthSecure } from "./secure";

export const router = createBrowserRouter([
  {
    Component: Layout,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: ROUTES.AUTH,
        element: <AuthPage />,
      },
      {
        path: ROUTES.NOTE.VIEW,
        element: <NoteViewPage />,
      },

      {
        path: ROUTES.NOTE.CREATE,
        element: (
          <AuthSecure>
            <NoteCreatePage />
          </AuthSecure>
        ),
      },
      {
        path: ROUTES.NOTE.EDIT,
        element: (
          <AuthSecure>
            <NoteEditPage />,
          </AuthSecure>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <AuthSecure>
            <ProfilePage />
          </AuthSecure>
        ),
      },
    ],
  },
]);
