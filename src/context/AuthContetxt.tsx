import React from "react";

const AuthContext = React.createContext<any>({} as any);

interface User {
  user: { accesToken: string };
}

interface Props {
  children: React.ReactNode;
  value: User;
}

export function AuthProvider({ children, value }: Props) {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthValue() {
  return React.useContext(AuthContext);
}
