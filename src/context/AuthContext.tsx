import { createContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import { AdminUser } from "@/types/user";

type IAuthContext = {
  user: AdminUser | null;
  signout: () => void;
  setUser: (user: AdminUser) => void;
};

export const AuthContext = createContext<IAuthContext | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const [user, setUser] = useLocalStorage<AdminUser | null>(
    "BD_ADMIN_USER",
    null
  );

  const signout = () => {
    setUser(null);
    localStorage.removeItem("BD_ADMIN_USER");
    localStorage.removeItem("BD_ADMIN_TOKEN");
    navigate("/signin", { replace: true });
  };

  const value = useMemo(() => ({ user, setUser, signout }), [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
