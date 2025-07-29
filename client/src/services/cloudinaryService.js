// src/services/cloudinaryService.js
import API from "./api";

// Uploads an image file to the server or Cloudinary proxy endpoint
export const uploadImage = async (file) => {
  const formData = new FormData();
  formData.append("image", file);

  const res = await API.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
