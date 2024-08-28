import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { addLogo, getLogo, deleteLogo } from "../services/operations/logoAPI"; // Adjust the import path as necessary
import { useSelector } from "react-redux";

const LogoManagement = () => {
  const [logos, setLogos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [link, setLink] = useState("");
  const [pic, setPic] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    fetchLogos();
  }, []);

  const fetchLogos = async () => {
    const result = await getLogo();
    console.log("GET_LOGO_API RESULT............", result);
    if (result && result.logo) {
      setLogos(result.logo);
    }
  };

  const handleAddLogo = async () => {
    if (!link || !pic) {
      toast.error("Both link and image are required.");
      return;
    }

    const formData = new FormData();
    formData.append("link", link);
    formData.append("pic", pic);

    const result = await addLogo(formData, token);
    if (result) {
      setLogos([...logos, result]);
      setShowModal(false);
      setLink("");
      setPic(null);
    }
  };

  const handleDeleteLogo = async (id) => {
    const result = await deleteLogo({ id }, token);
    if (result) {
      setLogos(logos.filter((logo) => logo._id !== id));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-center w-full">Logo Management</h1>
        </div>

        <div className="mb-6 text-center">
          <button
            className="bg-blue hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition duration-300"
            onClick={() => setShowModal(true)}
          >
            Add Logo
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {logos.map((logo) => (
            <div
              key={logo._id}
              className="p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center"
            >
              <img src={logo.logo} alt="Logo" className="h-24 w-auto mb-4 object-contain" />
              <a href={logo.link} target="_blank" rel="noopener noreferrer" className="mb-4 text-blue-500 hover:underline break-all">
                {logo.link}
              </a>
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300"
                onClick={() => handleDeleteLogo(logo._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-xl w-96 max-w-full">
              <h2 className="text-2xl font-bold mb-4 text-center">Add New Logo</h2>
              <input
                type="text"
                placeholder="Enter link"
                className="w-full mb-4 p-2 border rounded-md"
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
              <input
                type="file"
                accept="image/*"
                className="w-full mb-4 p-2 border rounded-md"
                onChange={(e) => setPic(e.target.files[0])}
              />
              <div className="flex justify-end space-x-2">
                <button
                  className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded-lg transition duration-300"
                  onClick={() => setShowModal(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition duration-300"
                  onClick={handleAddLogo}
                >
                  Add Logo
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoManagement;