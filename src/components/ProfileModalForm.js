import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { addProfile, updateProfile } from '../services/operations/profileAPI';

Modal.setAppElement('#root');

const ProfileModalForm = ({ isOpen, onRequestClose, profileData, isEdit, token }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    about: '',
    socialLinks: [{ name: '', url: '' }],
    profilePic: null,
  });

  useEffect(() => {
    if (profileData) {
      setFormData(profileData);
    }
  }, [profileData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSocialLinkChange = (index, e) => {
    const { name, value } = e.target;
    const newSocialLinks = formData.socialLinks.map((link, i) =>
      i === index ? { ...link, [name]: value } : link
    );
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: newSocialLinks,
    }));
  };

  const handleAddSocialLink = () => {
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: [...prevData.socialLinks, { name: '', url: '' }],
    }));
  };

  const handleRemoveSocialLink = (index) => {
    const newSocialLinks = formData.socialLinks.filter((_, i) => i !== index);
    setFormData((prevData) => ({
      ...prevData,
      socialLinks: newSocialLinks,
    }));
  };

  const handleFileChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      profilePic: e.target.files[0],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, about, socialLinks, profilePic } = formData;
    const formDataObj = new FormData();
    formDataObj.append('name', name);
    formDataObj.append('email', email);
    formDataObj.append('about', about);
    socialLinks.forEach((link, index) => {
      formDataObj.append(`socialLinks[${index}][name]`, link.name);
      formDataObj.append(`socialLinks[${index}][url]`, link.url);
    });
    if (profilePic) {
      formDataObj.append('profilePic', profilePic);
    }
    console.log('FORM DATA:', formDataObj);

    try {
      let response;

      if (isEdit) {
        formDataObj.append('profileId', profileData._id); // Ensure profile ID is included for updates
        response = await dispatch(updateProfile(formDataObj, token));
      } else {
        response = await dispatch(addProfile(formDataObj, token));
      }

      if (response) {
        toast.success(isEdit ? 'Profile updated successfully' : 'Profile created successfully');
        onRequestClose();
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel="Profile Form">
      <h2>{isEdit ? 'Update Profile' : 'Create Profile'}</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          About:
          <textarea name="about" value={formData.about} onChange={handleChange} required></textarea>
        </label>
        <label>
          Profile Picture:
          <input type="file" onChange={handleFileChange} />
        </label>
        <div>
          <h3>Social Links:</h3>
          {formData.socialLinks.map((link, index) => (
            <div key={index}>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={link.name}
                  onChange={(e) => handleSocialLinkChange(index, e)}
                  required
                />
              </label>
              <label>
                URL:
                <input
                  type="url"
                  name="url"
                  value={link.url}
                  onChange={(e) => handleSocialLinkChange(index, e)}
                  required
                />
              </label>
              {index > 0 && (
                <button type="button" onClick={() => handleRemoveSocialLink(index)}>
                  Remove
                </button>
              )}
            </div>
          ))}
          <button type="button" onClick={handleAddSocialLink}>
            Add Social Link
          </button>
        </div>
        <button type="submit">{isEdit ? 'Update Profile' : 'Create Profile'}</button>
      </form>
    </Modal>
  );
};

export default ProfileModalForm;
