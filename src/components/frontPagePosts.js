import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  getAllFrontPages,
  createFrontPage,
  updateFrontPage,
  deleteFrontPage,
} from "../services/operations/frontPageAPI";

const FrontPagePost = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { frontPage, loading, error } = useSelector((state) => state.frontPage);
  const token = useSelector((state) => state.auth.token);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedPost, setSelectedPost] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    pic: null,
    link: "",
  });

  useEffect(() => {
    dispatch(getAllFrontPages());
  }, [dispatch]);

  const handleOpenModal = (type, post = null) => {
    setModalType(type);
    setSelectedPost(post);
    setFormData(
      post
        ? {
            title: post.title,
            description: post.description,
            pic: null,
            link: post.link,
          }
        : { title: "", description: "", pic: null, link: "" }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
    setFormData({
      title: "",
      description: "",
      pic: null,
      link: "",
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      pic: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();

    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    if (formData.pic) {
      formDataToSend.append("pic", formData.pic, formData.pic.name);
    }
    formDataToSend.append("link", formData.link);

    try {
      if (modalType === "add") {
        await createFrontPage(formDataToSend, token);
      } else if (modalType === "edit") {
        formDataToSend.append("postId", selectedPost._id);
        await updateFrontPage(formDataToSend, token);
      }
      dispatch(getAllFrontPages());
      handleCloseModal();
    } catch (error) {
      toast.error("Failed to handle post");
    }
  };

  const handleDelete = async (postId) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      try {
        await deleteFrontPage({postId}, token);
        dispatch(getAllFrontPages());
      } catch (error) {
        toast.error("Failed to delete post");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>;

  return (
    <div className="flex items-center justify-center h-auto">
      <div className="h-auto w-full text-center bg-black p-4 rounded-lg shadow-lg">
        <ul className="text-black py-10">
          {frontPage && frontPage.length > 0 ? (
            frontPage.map((post) => (
              <li
                key={post._id}
                className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-black text-white flex flex-col gap-y-6 justify-between items-end hover:bg-slate-300 hover:text-black"
              >
                <div className="flex flex-col justify-center items-start w-full">
                  <h2 className="text-justify">{post.title}</h2>
                  <p className="text-justify">{post.description}</p>
                  <img src={post.pic} className="w-20" alt={post.title} />
                  <a href={post.link} target="_blank" rel="noreferrer">
                    {post.link}
                  </a>
                </div>
                {token && (
                  <div className="flex space-x-2">
                    <button onClick={() => handleOpenModal("edit", post)} className="bg-yellow-500 text-black px-4 py-2 rounded-md">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(post._id)} className="bg-red-500 text-white px-4 py-2 rounded-md">
                      Delete
                    </button>
                  </div>
                )}
              </li>
            ))
          ) : (
            <p className="text-center mt-4">No posts available</p>
          )}
        </ul>
        {token && (
          <button
            onClick={() => handleOpenModal("add")}
            className="bg-green-500 text-black px-4 py-2 rounded-md mt-16"
          >
            Add Post
          </button>
        )}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md w-full max-w-md">
            <h2 className="text-xl mb-4">{modalType === "add" ? "Add Post" : "Edit Post"}</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Image</label>
                <input
                  type="file"
                  name="pic"
                  onChange={handleFileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">Link</label>
                <input
                  type="text"
                  name="link"
                  value={formData.link}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  {modalType === "add" ? "Save" : "Update"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default FrontPagePost;
