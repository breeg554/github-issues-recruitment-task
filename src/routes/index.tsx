import { useRoutes } from "react-router-dom";
import { ErrorPage } from "../features/misc";
import { publicRoutes } from "./public";

export const AppRoutes = () => {
  const commonRoutes = [{ path: "*", element: <ErrorPage /> }];
  const element = useRoutes([...publicRoutes, ...commonRoutes]);

  return <>{element}</>;
};
