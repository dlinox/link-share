import React, { useState } from "react";
import TextInput from "../../components/TextInput";
import { Link } from "react-router-dom";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/useAuth";

function Login() {

  const { useSignIn } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await useSignIn({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Inicia sesión en tu cuenta
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm space-y-3">
            <TextInput
              label="Dirección de correo electrónico"
              value={email}
              id="login-email"
              name="login-email"
              onChange={handleEmailChange}
              placeholder="Ingresa tu correo electrónico"
            />

            <TextInput
              id="login-password"
              name="login-password"
              label="Contraseña"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              placeholder="Contraseña"
            />
          </div>

          <div className="flex items-center justify-end">
            <div className="text-sm">
              <Link
                to="/register"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Aun no tengo una cuenta
              </Link>
            </div>
          </div>

          <div>
            <Button type="submit">Iniciar sesión</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
