// # Cloudinary upload preview
// src/components/ImageUploader.jsx
import { useState } from 'react';
import axios from 'axios';

export default function ImageUploader({ onUpload }) {
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'your_upload_preset');

    setLoading(true);
    try {
      const res = await axios.post('https://api.cloudinary.com/v1_1/dh6fpityf/image/upload', formData);
      onUpload(res.data.secure_url);
    } catch (err) {
      console.error('Image upload failed', err);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center gap-2">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {loading && <p className="text-sm text-gray-500">Uploading...</p>}
      {preview && <img src={preview} alt="preview" className="w-32 h-32 object-cover mt-2 rounded" />}
    </div>
  );
}
