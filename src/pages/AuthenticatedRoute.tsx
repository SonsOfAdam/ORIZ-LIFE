import { Navigate } from "react-router-dom";
import { useReadLocalStorage } from "usehooks-ts";

const Private = (Component: JSX.Element) => {
  const token = useReadLocalStorage<string>("BD_ADMIN_TOKEN");

  return token ? Component : <Navigate to="/signin" replace />;
};

const Public = (Component: JSX.Element) => {
  const token = useReadLocalStorage<string>("BD_ADMIN_TOKEN");

  return token ? <Navigate to="/dashboard" replace /> : Component;
};

export { Private, Public };
