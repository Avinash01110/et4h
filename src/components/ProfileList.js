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
    qualifications: "",
    designation: "",
    AreaofInterest: "",
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
            socialLinks: profile.socialLinks || [], // Initialize as an empty array if it's null
            profilePic: null,
            qualifications: profile.qualifications,
            designation: profile.designation,
            AreaofInterest: profile.AreaofInterest,
          }
        : {
            name: "",
            email: "",
            about: "",
            socialLinks: [], // Initialize as an empty array here
            profilePic: null,
            qualifications: "",
            designation: "",
            AreaofInterest: "",
          }
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
      qualifications: "",
      designation: "",
      AreaofInterest: "",

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
    const updatedSocialLinks = [...formData.socialLinks];
    updatedSocialLinks[index] = { ...updatedSocialLinks[index], [field]: value };
    
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
      formDataToSend.append("profilePic", formData.profilePic, formData.profilePic.name);
    }

    // Append social links
    formData.socialLinks.forEach((link, index) => {
      formDataToSend.append(`socialLinks[${index}][name]`, link.name);
      formDataToSend.append(`socialLinks[${index}][url]`, link.url);
    });
    formDataToSend.append("qualifications", formData.qualifications);
    formDataToSend.append("designation", formData.designation);
    formDataToSend.append("AreaofInterest", formData.AreaofInterest);
    
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
      {profile.length > 0 ? (
        profile.map((profileItem) => (
          <li
            key={profileItem._id}
            className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-black text-white hover:bg-black flex flex-col justify-between items-start overflow-hidden"
          >
            <div onClick={() => handleProfileClick(profileItem._id)}>
              <p>{profileItem.name}</p>
              <p>{profileItem.email}</p>
              <p className="truncate">{profileItem.about}</p>
              {profileItem.profilePic && <img src={profileItem.profilePic} className="w-20"/>}
            </div>
            {token && (
              <>
                <button className="mt-2" onClick={() => handleOpenModal("edit", profileItem)}>Edit</button>
                <button className="mt-2" onClick={() => handleDelete(profileItem._id)}>Delete</button>
              </>
            )}
          </li>
        ))
      ) : (
        <p className="text-center mt-4">No profiles available</p>
      )}
    </ul>
      {token && (
        <button
        className="mt-2 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
          font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
          shadow-white tracking-wide py-2 px-4 rounded-lg"
          onClick={() => handleOpenModal("add")}
      >
        Add Profile
      </button>
      )}

      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto">
      <h2 className="text-2xl font-semibold mb-4">
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
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
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:border file:border-gray-300 file:rounded-md file:text-sm file:font-medium file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Qualifications
          </label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Designation
          </label>
          <input
            type="text"
            name="designation"
            value={formData.designation}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Area of Interest
          </label>
          <input
            type="text"
            name="AreaofInterest"
            value={formData.AreaofInterest}
            onChange={handleInputChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Social Links
          </label>
          {formData.socialLinks.map((link, index) => (
            <div key={index} className="flex mb-2 items-center">
              <input
                type="text"
                name={`socialLinkName-${index}`}
                placeholder="Name"
                value={link.name}
                onChange={(e) =>
                  handleSocialLinkChange(index, "name", e.target.value)
                }
                className="mr-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="text"
                name={`socialLinkUrl-${index}`}
                placeholder="URL"
                value={link.url}
                onChange={(e) =>
                  handleSocialLinkChange(index, "url", e.target.value)
                }
                className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleRemoveSocialLink(index)}
                className="ml-2 bg-red-500 text-white px-3 py-1 rounded-md text-sm"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={handleAddSocialLink}
            className="bg-green-500 text-white px-4 py-2 rounded-md mt-2 text-sm"
          >
            Add Social Link
          </button>
        </div>
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={handleCloseModal}
            className="bg-gray-500 text-white px-4 py-2 rounded-md"
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

export default ProfileList;
