import { createContext, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async (email, password) => {
    const res = await api.post("/signup", {
      user: { email, password, password_confirmation: password },
    });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const login = async (email, password) => {
    const res = await api.post("/login", {
      user: { email, password },
    });
    localStorage.setItem("token", res.data.token);
    setUser(res.data.user);
  };

  const logout = async () => {
    await api.delete("/logout");
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
