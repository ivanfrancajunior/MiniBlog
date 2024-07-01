import { useState, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

interface NewUserProps {
  displayName: string;
  email: string;
  password: string;
}

interface LoginUser {
  email: string;
  password: string;
}

export const useAuthentication = () => {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean | null>(null);
  const [cancelled, setCancelled] = useState<boolean | null>(false);

  const auth = getAuth();
  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const createUser = async (data: NewUserProps) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await updateProfile(user, {
        displayName: data.displayName,
      });
      setLoading(false);
      console.log("user: ", user);
      return user;
    } catch (error: any) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde.";
      }
      setLoading(false);
      setError(systemErrorMessage);
    }
  };
  const login = async (data: LoginUser) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error: any) {
      let systemErrorMessage;

      if (error.message.includes("user-not-found")) {
        systemErrorMessage = "Usuário não encontrado.";
      } else if (error.message.includes("wrong-password")) {
        systemErrorMessage = "Senha incorreta.";
      } else {
        systemErrorMessage = "Ocorreu um erro, tente mais tarde.";
      }

      console.log(systemErrorMessage);
      setError(systemErrorMessage);

      setLoading(false);
    }
  };
  const logout = () => {
    signOut(auth);

    checkIfIsCancelled();
  };
  useEffect(() => {
    return setCancelled(true);
  }, []);
  return { auth, login, logout, createUser, error, loading };
};
