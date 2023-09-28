import {  Route, Routes } from "react-router-dom";

import Home from "../views/Home"; // Importa tu componente de inicio de sesión
import Login from "../views/Auth/Login"; // Importa tu componente de inicio de sesión
import Register from "../views/Auth/Register"; // Importa tu componente de registro
import User from "../views/User/User";
import AppRouterProtected from "../routes/AppRouterProtected";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route path="/" exact element={<Login />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route element={<AppRouterProtected />}>
            <Route path="/user" element={<User />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};
