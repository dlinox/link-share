import React, { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../layouts/dashboardLayout";

import Modal from "../../components/Modal";

import FormNewLink from "./components/FormNewLink";
import TextInput from "../../components/TextInput";
import ItemLink from "../../components/ItemLink";

import LinkService from "../../services/LinkService";
import UserService from "../../services/UserService";
import FormAvatarUpload from "./components/FormAvatarUpload";
import FormUpdatePassword from "./components/FormUpdatePassword";

function User() {
  const modalRef = useRef();
  const linkService = new LinkService();
  const userService = new UserService();

  const [links, setLinks] = useState([]);
  const [user, setUser] = useState(null);

  const listLink = async () => {
    let res = await linkService.list();
    setLinks(res.data.data.links);
  };

  const getProfile = async () => {
    let res = await userService.getProfile();
    setUser(res.data.user);
    console.log(res);
  };

  useEffect(() => {
    getProfile();
    listLink();
  }, []);

  const onSubmit = (response) => {
    if (response.status === "success") {
      modalRef.current.closeModal();
    }
    console.log(response);
  };
  return (
    <DashboardLayout>
      <div className="flex space-x-3">
        <div className=" w-1/3  bg-slate-100 p-4 rounded-lg">
          <div className="relative w-40 h-40 mx-auto">
            <img
              src={
                user?.avatar
                  ? `http://localhost:8000/${user?.avatar}`
                  : "https://cdn.vectorstock.com/i/preview-1x/84/89/profile-picture-placeholder-vector-38978489.webp"
              }
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-2xl font-semibold"> {user?.username} </h2>
            <p className="text-gray-600">{user?.email}</p>
          </div>

          <div className="mt-4">
            <Modal
              title="Actualizar Avatar"
              textButton="Actualizar Avatar"
              ref={modalRef}
            >
              <FormAvatarUpload />
            </Modal>
          </div>
          <div className="mt-4">
            <Modal
              title="Cambiar contraseña"
              textButton="Cambiar contraseña"
              ref={modalRef}
            >
              {/* <FormNewLink onSubmit={onSubmit} /> */}
              <FormUpdatePassword />
            </Modal>
          </div>
        </div>

        <div className=" w-2/3 h-48">
          <div className=" mx-auto bg-indigo-50 rounded-lg  p-6">
            <div className="flex space-x-3">
              <div className="w-3/4">
                <TextInput placeholder="Buscar" />
              </div>
              <div className="w-1/4">
                <Modal
                  title="Registrar nuevo elemento"
                  textButton="Nuevo"
                  ref={modalRef}
                >
                  
                  <FormNewLink onSubmit={onSubmit} />
                </Modal>
              </div>
            </div>
          </div>

          <div className="mt-4">
            {links.map((item) => (
              <ItemLink key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default User;
