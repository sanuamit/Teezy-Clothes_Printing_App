// utils/uploadToCloudinary.js
import axios from "axios";

export const uploadToCloudinary = async (file) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", "your_upload_preset"); // replace with actual preset if needed

  try {
    const res = await axios.post("https://api.cloudinary.com/v1_1/dh6fpityf/image/upload", formData);
    return res.data.secure_url;
  } catch (error) {
    console.error("Error uploading to Cloudinary:", error);
    throw error;
  }
};
