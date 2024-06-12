import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  getAllProfile,
  addProfile,
  updateProfile,
  deleteProfile,
} from "../services/operations/profileAPI";

const ProfileList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile, loading, error } = useSelector((state) => state.profile);
  const token = useSelector((state) => state.auth.token);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    about: "",
    socialLinks: [],
    profilePic: null,
  });

  useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);

  const handleProfileClick = (profileId) => {
    navigate(`/profile/${profileId}`);
  };

  const handleOpenModal = (type, profile = null) => {
    setModalType(type);
    setSelectedProfile(profile);
    setFormData(
      profile
        ? {
            name: profile.name,
            email: profile.email,
            about: profile.about,
            socialLinks: profile.socialLinks || [],
            profilePic: null,
          }
        : { name: "", email: "", about: "", socialLinks: [], profilePic: null }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProfile(null);
    setFormData({
      name: "",
      email: "",
      about: "",
      socialLinks: [],
      profilePic: null,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (index, field, value) => {
    const updatedSocialLinks = formData.socialLinks.map((link, i) =>
      i === index ? { ...link, [field]: value } : link
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialLinks: updatedSocialLinks,
    }));
  };

  const handleAddSocialLink = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialLinks: [...prevFormData.socialLinks, { name: "", url: "" }],
    }));
  };

  const handleRemoveSocialLink = (index) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      socialLinks: prevFormData.socialLinks.filter((_, i) => i !== index),
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = async () => {
    const formDataToSend = new FormData();
    
    // Append data common to both creating and updating profiles
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("about", formData.about);
    
    // Append profile picture if available
    if (formData.profilePic) {
      formDataToSend.append("profilePic", formData.profilePic);
    }
    
    // Append social links
    formData.socialLinks.forEach((link, index) => {
      formDataToSend.append(`socialLinks[${index}][name]`, link.name);
      formDataToSend.append(`socialLinks[${index}][url]`, link.url);
    });
  
    try {
      if (modalType === "add") {
        // Handle creating a new profile without appending ID
        await addProfile(formDataToSend, token);
      } else if (modalType === "edit") {
        // Append profile ID for updating an existing profile
        formDataToSend.append("profileId", selectedProfile._id);
        await updateProfile(formDataToSend, token);
      }
      dispatch(getAllProfile());
      handleCloseModal();
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("Failed to update profile");
    }
  };
  
  

  const handleDelete = async (profileId) => {
    if (window.confirm("Are you sure you want to delete this profile?")) {
      try {
        await deleteProfile(profileId, token);
        dispatch(getAllProfile());
      } catch (error) {
        console.error("Error deleting profile:", error);
        toast.error("Failed to delete profile");
      }
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error)
    return <p className="text-center mt-4 text-red-500">Error: {error}</p>;

  return (
    <div className="mt-4">
      <ul className="text-black">
        {profile && profile.profiles && profile.profiles.length > 0 ? (
          profile.profiles.map((profiles) => (
            <li
              key={profiles._id}
              className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-blue-500 text-black hover:bg-blue-600 flex justify-between items-center"
            >
              <div onClick={() => handleProfileClick(profiles._id)}>
                <p>{profiles.name}</p>
                <p>{profiles.email}</p>
                <p>{profiles.about}</p>
                {/* You can add more details here */}
              </div>
              {/* Buttons for editing and deleting profiles */}
              <button onClick={() => handleOpenModal("edit", profiles)}>
                Edit
              </button>
              <button onClick={() => handleDelete(profiles._id)}>Delete</button>
            </li>
          ))
        ) : (
          <p className="text-center mt-4">No profiles available</p>
        )}
      </ul>
      {token && (
        <button
          onClick={() => handleOpenModal("add")}
          className="bg-green-500 text-black px-4 py-2 rounded-md mt-4"
        >
          Add Profile
        </button>
      )}

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-xl mb-4">
              {modalType === "add" ? "Add Profile" : "Edit Profile"}
            </h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  About
                </label>
                <textarea
                  name="about"
                  value={formData.about}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Profile Picture
                </label>
                <input
                  type="file"
                  name="profilePic"
                  onChange={handleFileChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Social Links
                </label>
                {formData.socialLinks.map((link, index) => (
                  <div key={index} className="flex mb-2">
                    <input
                      type="text"
                      name={`socialLinkName-${index}`}
                      placeholder="Name"
                      value={link.name}
                      onChange={(e) =>
                        handleSocialLinkChange(index, "name", e.target.value)
                      }
                      className="mr-2 block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <input
                      type="text"
                      name={`socialLinkUrl-${index}`}
                      placeholder="URL"
                      value={link.url}
                      onChange={(e) =>
                        handleSocialLinkChange(index, "url", e.target.value)
                      }
                      className="block w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSocialLink(index)}
                      className="ml-2 bg-red-500 text-white px-4 py-2 rounded-md"
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={handleAddSocialLink}
                  className="bg-green-500 text-black px-4 py-2 rounded-md mt-2"
                >
                  Add Social Link
                </button>
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
                  className="bg-blue-500 text-black px-4 py-2 rounded-md"
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

export default ProfileList;
