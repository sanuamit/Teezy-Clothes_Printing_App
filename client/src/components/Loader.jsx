// src/components/Loader.jsx
export default function Loader() {
  return (
    <div className="flex justify-center items-center h-[60vh]">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-t-4 border-purple-500 border-opacity-25 border-t-white"></div>
    </div>
  );
}
