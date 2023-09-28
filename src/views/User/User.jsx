import React, { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../layouts/dashboardLayout";

import Modal from "../../components/Modal";

import FormNewLink from "./components/FormNewLink";
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import ItemLink from "../../components/ItemLink";

import LinkService from "../../services/LinkService";

function User() {
  const modalRef = useRef();
  const linkService = new LinkService();

  const [links, setLinks] = useState([]);

  const listLink = async () => {
    let res = await linkService.list();

    console.log(res.data.data.links);

    setLinks(res.data.data.links);
  };

  useEffect(() => {
    listLink();
  }, []);

  // const listLink = async () => {
  //   let res = await linkService.list();
  //   console.log('-->', res);
  // };

  // listLink();

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
              src="https://via.placeholder.com/150"
              alt="Foto de perfil"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div className="mt-4 text-center">
            <h2 className="text-2xl font-semibold">Nombre de Usuario</h2>
            <p className="text-gray-600">
              Correo electrónico: usuario@example.com
            </p>
          </div>
        </div>
        <div className=" w-2/3 h-48">
          <div className=" mx-auto bg-indigo-50 rounded-lg  p-6">
            <div className="flex space-x-3">
              <div className="w-3/4">
                <TextInput placeholder="Buscar" />
              </div>
              <div className="w-1/4">
                <Modal title="Registrar nuevo elemento" ref={modalRef}>
                  <FormNewLink onSubmit={onSubmit} />
                </Modal>
              </div>
            </div>
          </div>

          <div className="mt-4">

            {links.map((item, i) => (
              <ItemLink title={item.title} username={item.username} votes={item.votes} url={item.url} />
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default User;
