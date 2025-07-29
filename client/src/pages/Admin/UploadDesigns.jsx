// src/pages/Admin/UploadDesigns.jsx
'use client';
import { useState } from "react";
import { uploadImage } from "@/services/cloudinaryService";

export default function UploadDesigns() {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    try {
      const uploadedImage = await uploadImage(file);
      setImageUrl(uploadedImage.url); // or uploadedImage.secure_url if using Cloudinary directly
      console.log("Image URL:", uploadedImage.url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
  };

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-xl font-bold">Upload Custom Design Templates</h2>

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block border p-2 rounded"
      />

      {imageUrl && (
        <div>
          <p className="mt-2 text-green-600">Uploaded Successfully!</p>
          <img
            src={imageUrl}
            alt="Uploaded Design"
            className="mt-2 w-64 rounded shadow"
          />
        </div>
      )}
    </div>
  );
}
