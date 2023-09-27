import { useEffect, useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authService = new AuthService();

  const navigate =  useNavigate();

  useEffect(() => {
    setIsAuthenticated(false);
    const storedToken = localStorage.getItem("token");

    if (storedToken !== null && storedToken !== "") {
      setIsAuthenticated(true);

      navigate('/user');
    }
  }, [isAuthenticated]);

  const useSignIn = async ({ email, password }) => {
    let res = await authService.signIn({ email, password });
    if (res.status === "success") {
      setIsAuthenticated(true);
    }
  };

  const useSignUp = async ({ email, password, userName }) => {
    let res = await authService.signUp({ email, password, userName });

    if (res.status === "success") {
      setIsAuthenticated(true);
    }
  };

  return {
    isAuthenticated,
    setIsAuthenticated,
    useSignIn,
    useSignUp,
  };
}
