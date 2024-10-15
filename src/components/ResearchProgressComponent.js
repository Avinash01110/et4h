import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  createResearchProgress,
  updateResearchProgress,
  deleteResearchProgress,
  deleteSingleImage,
  getResearchProgress,
} from "../services/operations/researchProgressAPI";
import { getAllProfile } from "../services/operations/profileAPI";
import Modal from "react-modal";

const ResearchProgressComponent = ({ postId, token }) => {
  const dispatch = useDispatch();
  const [researchProgressList, setResearchProgressList] = useState([]); // List of research progress entries
  const [selectedResearchProgress, setSelectedResearchProgress] = useState(null);
  const [description, setDescription] = useState("");
  const [contributors, setContributors] = useState([]);
  const [images, setImages] = useState([]);
  const [newImages, setNewImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Select all profiles from the Redux state
  const profileState = useSelector((state) => state.profile);
  const allContributors = profileState?.profile || [];
  const loading = profileState?.loading;

  // Fetch all profiles (contributors)
  useEffect(() => {
    dispatch(getAllProfile());
  }, [dispatch]);

  // Fetch Research Progress List
  // Fetch Research Progress List
useEffect(() => {
  async function fetchResearchProgressList() {
    const result = await getResearchProgress(postId);
    if (Array.isArray(result)) {
      setResearchProgressList(result);
    } else {
      setResearchProgressList([]); // Default to an empty array if the response is not as expected
    }
  }

  fetchResearchProgressList();
}, [postId]);

const handleDeleteImage = async (researchProgressId, imageUrl) => {
  const result = await deleteSingleImage({ id: researchProgressId, url: imageUrl }, token);
  if (result) {
      // Refresh the research progress list after deleting the image
      setResearchProgressList(await getResearchProgress(postId));
      toast.success("Image deleted successfully");
  }
};

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setNewImages([...newImages, ...files]);
  };

  // Handle Research Progress Creation/Update
  const handleSaveResearchProgress = async () => {
    const formData = new FormData();

    // Add the non-file data
    formData.append("postId", postId);
    formData.append("description", description);
    formData.append("contributors", JSON.stringify(contributors)); // Sending contributors as JSON string

    // Add new images to formData
    newImages.forEach((image) => {
      formData.append("images", image); // 'images' is the field name in the backend
    });

    let result;
    if (selectedResearchProgress) {
      formData.append("id", selectedResearchProgress._id); // Add the ID when updating
      result = await updateResearchProgress(formData, token); // Ensure the API accepts FormData
    } else {
      result = await createResearchProgress(formData, token);
    }

    if (result) {
      toast.success("Research Progress saved successfully");
      setResearchProgressList(await getResearchProgress(postId)); // Refresh the list
      resetForm();
      setIsModalOpen(false);
    }
  };

  // Reset form fields
  const resetForm = () => {
    setSelectedResearchProgress(null);
    setDescription("");
    setContributors([]);
    setImages([]);
    setNewImages([]);
  };

  // Handle Delete Research Progress
  const handleDeleteResearchProgress = async (researchProgressId) => {
    const result = await deleteResearchProgress({ postId, researchProgressId }, token);
    if (result) {
      setResearchProgressList(researchProgressList.filter(rp => rp._id !== researchProgressId));
      toast.success("Research Progress deleted successfully");
    }
  };

  // Handle Open Modal for Add/Update
  const handleOpenModal = (researchProgress = null) => {
    if (researchProgress) {
      setSelectedResearchProgress(researchProgress);
      setDescription(researchProgress.description || "");
      setContributors(researchProgress.contributors.map(c => c._id));
      setImages(researchProgress.imageUrls || []);
    }
    setIsModalOpen(true);
  };

  return (
    <div className="research-progress-component flex flex-col gap-4">
      <h2 className="text-white">Research Progress:</h2>

      {/* Add Research Progress Button */}
      <button
        className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
            font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
            shadow-white tracking-wide rounded-lg"
        onClick={() => handleOpenModal()}
      >
        Add Research Progress
      </button>

      {/* List of Research Progress */}
    {/* List of Research Progress */}
    <div className="research-progress-list">
  {Array.isArray(researchProgressList) && researchProgressList.length > 0 ? (
    researchProgressList.map((researchProgress, index) => (
      <div key={researchProgress._id} className="research-progress-item bg-gray-800 p-4 rounded-lg mb-4">
        <h3 className="text-white">Research Progress {index + 1}</h3>
        <p><strong>Description:</strong> {researchProgress.description || "No description available."}</p>
        <p><strong>Contributors:</strong></p>
        
        {researchProgress.contributors.length > 0 ? (
          researchProgress.contributors.map(contributor => (
            <p key={contributor._id}>{contributor.name || "Unnamed Contributor"}</p>
          ))
        ) : (
          <p>No contributors available.</p>
        )}
        
        {/* Display Images with Delete Button */}
        <div className="image-list">
          {researchProgress.imageUrls && researchProgress.imageUrls.length > 0 ? (
            researchProgress.imageUrls.map((url, idx) => (
              <div key={idx} className="flex items-center">
                <img src={url} alt={`Research Progress Image ${idx + 1}`} className="w-16 h-16 mr-2" />
                <button
                  className="w-fit py-1 px-2 bg-red-500 hover:bg-red-700 text-white text-sm rounded-lg mt-2"
                  onClick={() => handleDeleteImage(researchProgress._id, url)}
                >
                  Delete Image
                </button>
              </div>
            ))
          ) : (
            <p>No images available.</p>
          )}
        </div>

        {/* Delete Button */}
        <button
          className="w-fit py-2 px-4 bg-red-500 hover:bg-red-700 text-white text-md font-semibold rounded-lg mt-2"
          onClick={() => handleDeleteResearchProgress(researchProgress._id)}
        >
          Delete
        </button>
        {/* Update Button */}
        <button
          className="w-fit py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white text-md font-semibold rounded-lg mt-2 ml-2"
          onClick={() => handleOpenModal(researchProgress)}
        >
          Update
        </button>
      </div>
    ))
  ) : (
    <p className="text-white">No research progress entries available.</p>
  )}
</div>



      {/* Modal for Add/Update */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Research Progress Modal"
        className={
          "flex flex-col gap-4 bg-black w-[80%] h-[80%] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        <h2 className="text-white">
          {selectedResearchProgress ? "Update" : "Add"} Research Progress
        </h2>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="bg-black text-white border border-solid border-white p-2"
        />

        {/* Pre-select contributors */}
        <select
          multiple
          value={contributors}
          className="bg-black text-white border border-solid border-white p-2"
          onChange={(e) =>
            setContributors(
              [...e.target.selectedOptions].map((option) => option.value)
            )
          }
        >
          {loading ? (
            <option>Loading contributors...</option>
          ) : allContributors.length > 0 ? (
            allContributors.map((profile) => (
              <option key={profile._id} value={profile._id}>
                {profile.name || "Unnamed Contributor"}
              </option>
            ))
          ) : (
            <option>No contributors available</option>
          )}
        </select>

        <input
          className="bg-black text-white border border-solid border-white p-2"
          type="file"
          multiple
          onChange={handleImageUpload}
        />
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={handleSaveResearchProgress}
        >
          {selectedResearchProgress ? "Update" : "Create"} Research Progress
        </button>
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={() => setIsModalOpen(false)}
        >
          Cancel
        </button>
      </Modal>
    </div>
  );
};

export default ResearchProgressComponent;
