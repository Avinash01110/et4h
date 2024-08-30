import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-hot-toast';
import { addVideo, deleteVideo, getVideos } from '../services/operations/postAPI';

Modal.setAppElement('#root'); // Set the root element for accessibility

const VideoManagement = ({ subPostId, token }) => {
  const [videos, setVideos] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [videoData, setVideoData] = useState({ title: '', description: '', videoUrl: '' });
    console.log(subPostId)
  // Fetch videos when the component mounts
  useEffect(() => {
    fetchVideos();
  }, [subPostId, token]);

  const fetchVideos = async () => {
    const result = await getVideos({subPostId});
    console.log("Result  ",result)
    if (result) {
      console.log("Fetched videos:", result); // Add this line
      setVideos(result.videos); // Change this line
    }
  };

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleInputChange = (e) => {
    setVideoData({ ...videoData, [e.target.name]: e.target.value });
  };

  const handleAddVideo = async () => {
    const result = await addVideo({ ...videoData, subPostId }, token);
    if (result) {
      setVideos([...videos, result]);
      closeModal();
    }
  };

  const handleDeleteVideo = async (videoId) => {
    const result = await deleteVideo({ subPostId, videoId }, token);
    if (result) {
      setVideos(videos.filter((video) => video._id !== videoId));
    }
  };
  useEffect(() => {
    console.log("Current videos state:", videos);
  }, [videos]);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Video Management</h2>
      <button onClick={openModal} className="bg-blue text-white py-2 px-4 rounded mb-4">
        Add Video
      </button>

      {/* Conditional rendering for videos */}
      {videos && videos.length > 0 ? (
  <div className="space-y-4">
    {videos.map((video) => (
      <div key={video._id} className="flex justify-between items-center p-2 border-b ">
        <div>
          <h3 className="font-medium">{video.title}</h3>
          <p>{video.description}</p>
          <a href={video.videoUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600">
            Watch Video
          </a>
        </div>
        <button
          onClick={() => handleDeleteVideo(video._id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Delete
        </button>
      </div>
    ))}
  </div>
) : (
  <p>No videos available.</p>
)}

      {/* Modal for adding video */}
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Add Video">
        <h2 className="text-xl font-semibold mb-4">Add New Video</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Title:</label>
          <input
            type="text"
            name="title"
            value={videoData.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <textarea
            name="description"
            value={videoData.description}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Video URL:</label>
          <input
            type="text"
            name="videoUrl"
            value={videoData.videoUrl}
            onChange={handleInputChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <button onClick={handleAddVideo} className="bg-green-500 text-white py-2 px-4 rounded mr-2">
          Add Video
        </button>
        <button onClick={closeModal} className="bg-gray-500 text-white py-2 px-4 rounded">
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default VideoManagement;
