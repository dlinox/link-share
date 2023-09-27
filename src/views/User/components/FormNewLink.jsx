import React, { useState } from "react";
import TextInput from "../../../components/TextInput";
import Button from "../../../components/Button";

import LinkService from "../../../services/LinkService";

function FormNewLink({onSubmit}) {
  const linkService = new LinkService();

  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await linkService.create({ title, url, description });
    onSubmit(res);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm space-y-3">
        <TextInput
          label="Titulo"
          value={title}
          id="link-title"
          name="link-title"
          onChange={handleTitleChange}
          placeholder="Ingrese un titulo"
        />

        <TextInput
          id="link-url"
          name="link-url"
          label="URL"
          value={url}
          onChange={handleUrlChange}
          placeholder="URL"
        />

        <TextInput
          id="link-description"
          name="link-description"
          label="Descripción"
          value={description}
          onChange={handleDescriptionChange}
          placeholder="Descripción"
        />
      </div>
      <div>
        <Button type="submit">Guardar</Button>
      </div>
    </form>
  );
}

export default FormNewLink;
