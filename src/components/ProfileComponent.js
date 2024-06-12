import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProfile, deleteProfile } from '../services/operations/profileAPI';
import ProfileModalForm from './ProfileModalForm';
import { toast } from 'react-hot-toast';

const ProfileComponent = () => {
    const dispatch = useDispatch();
    const { profiles, loading } = useSelector((state) => state.profile);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProfile, setSelectedProfile] = useState(null);
    const [isEdit, setIsEdit] = useState(false);
    const token = useSelector((state) => state.auth.token);
  
    useEffect(() => {
      dispatch(getAllProfile());
    }, [dispatch]);
  
    const openCreateProfileModal = () => {
      setSelectedProfile(null);
      setIsEdit(false);
      setIsModalOpen(true);
    };
  
    const openEditProfileModal = (profile) => {
      setSelectedProfile(profile);
      setIsEdit(true);
      setIsModalOpen(true);
    };
  
    const handleDeleteProfile = async (profileId) => {
      try {
        await dispatch(deleteProfile(profileId, token));
        toast.success('Profile deleted successfully');
      } catch (error) {
        toast.error('Failed to delete profile');
      }
    };
  
    if (loading) return <p>Loading...</p>;
  
    return (
      <div>
        <button onClick={openCreateProfileModal}>Create Profile</button>
        <ul>
          {profiles && profiles.length > 0 ? (
            profiles.map((profile) => (
              <li key={profile._id}>
                <h3>{profile.name}</h3>
                <button onClick={() => openEditProfileModal(profile)}>Edit</button>
                <button onClick={() => handleDeleteProfile(profile._id)}>Delete</button>
              </li>
            ))
          ) : (
            <p>No profiles available</p>
          )}
        </ul>
        <ProfileModalForm
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          profileData={selectedProfile}
          isEdit={isEdit}
          token={token}
        />
      </div>
    );
  };
export default ProfileComponent;
