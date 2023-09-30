import React, { useState } from "react";
import Button from "../../../components/Button";

import UserService from "../../../services/UserService";

function FormAvatarUpload() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatarFile, setAvatarFile] = useState(null);

  const userService = new UserService();

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setAvatarFile(event);
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    let res = await userService.updateAvatar({ avatar: avatarFile });
    console.log(res);
  };

  return (
    <>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />

      {selectedImage && (
        <div className="my-3">
          <h5 className="text-md font-semibold mb-2">Vista previa:</h5>
          <img
            src={selectedImage}
            alt="Vista previa"
            className="max-w-full h-auto mx-auto max-h-60"
          />
        </div>
      )}

      <Button type="button" onClick={handleSubmit}>
        Guardar
      </Button>
    </>
  );
}

export default FormAvatarUpload;
