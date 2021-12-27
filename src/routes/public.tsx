import { lazyImport } from "../utils/lazyImport";

const { Dashboard } = lazyImport(() => import("../features/results"), "Dashboard");
const { Profile } = lazyImport(() => import("../features/user"), "Profile");

export const publicRoutes = [
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/:username",
    element: <Profile />,
  },
];
