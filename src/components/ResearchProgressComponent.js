import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
  createResearchProgress,
  updateResearchProgress,
  deleteSingleImage,
  getResearchProgress,
} from "../services/operations/researchProgressAPI";
import { getAllProfile } from "../services/operations/profileAPI";
import Modal from "react-modal";

const ResearchProgressComponent = ({ postId, token }) => {
  const dispatch = useDispatch();
  const [researchProgress, setResearchProgress] = useState(null); // Change to single object or null
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

  // Fetch Research Progress if exists
  useEffect(() => {
    async function fetchResearchProgress() {
      const result = await getResearchProgress(postId);
      if (result) {
        setResearchProgress(result);
        setDescription(result.description || ""); // Pre-fill description
        setContributors(result.contributors.map((c) => c._id)); // Pre-select contributors (only _id is needed)
        setImages(result.imageUrls || []); // Set existing images
      }
    }

    fetchResearchProgress();
  }, [postId]);

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
    if (researchProgress) {
      formData.append("id", researchProgress._id); // Add the ID when updating
      result = await updateResearchProgress(formData, token); // Ensure the API accepts FormData
    } else {
      result = await createResearchProgress(formData, token);
    }

    if (result) {
      toast.success("Research Progress saved successfully");
      setResearchProgress(result); // Set updated research progress
      setDescription("");
      setContributors([]);
      setImages([]);
      setNewImages([]);
      setIsModalOpen(false);
    }
  };

  // Handle Delete Image
  const handleDeleteImage = async (url) => {
    const result = await deleteSingleImage(
      { id: researchProgress._id, url },
      token
    );
    if (result) {
      setImages(images.filter((img) => img !== url));
      toast.success("Image deleted successfully");
    }
  };

  return (
    <div className="research-progress-component flex flex-col gap-4">
      <h2 className="text-white">Research Progress:</h2>

      {/* Show Add or Update Button based on the presence of research progress */}
      {researchProgress ? (
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Update Research Progress
        </button>
      ) : (
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={() => setIsModalOpen(true)}
        >
          Add Research Progress
        </button>
      )}

      {/* Modal */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Research Progress Modal"
        className={
          "flex flex-col gap-4 bg-black w-[80%] h-[80%] p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        }
      >
        <h2 className="text-white">
          {researchProgress ? "Update" : "Add"} Research Progress
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
              <option
                key={profile._id}
                value={profile._id}
                selected={contributors.includes(profile._id)} // Pre-select contributor
              >
                {profile.name || "Unnamed Contributor"}
              </option>
            ))
          ) : (
            <option className="text-white">No contributors available</option>
          )}
        </select>

        <input className="bg-black text-white border border-solid border-white p-2" type="file" multiple onChange={handleImageUpload} />
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={handleSaveResearchProgress}
        >
          {researchProgress ? "Update" : "Create"} Research Progress
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

      {/* Show uploaded images with delete option */}
      {images.length > 0 && (
        <div>
          <h3>Uploaded Images</h3>
          {images.map((url, index) => (
            <div key={index} className="image-item">
              <img src={url} alt="Research progress" className="w-[300px]" />
              <button onClick={() => handleDeleteImage(url)}>Delete</button>
            </div>
          ))}
        </div>
      )}

      {/* Display Research Progress Data */}
      {researchProgress ? (
        <div>
          <p>
            <strong>Description:</strong>{" "}
            {researchProgress.description || "No description available."}
          </p>
          <p>
            <strong>Contributors:</strong>
          </p>
          {researchProgress.contributors &&
          researchProgress.contributors.length > 0 ? (
            researchProgress.contributors.map((contributor) => (
              <div key={contributor._id} className="contributor-item">
                <p>
                  <strong>Name:</strong> {contributor.name}
                </p>
              </div>
            ))
          ) : (
            <p>No contributors available.</p>
          )}
          {/* <p><strong>Images:</strong></p>
                    {researchProgress.imageUrls && researchProgress.imageUrls.length > 0 ? (
                        researchProgress.imageUrls.map((img, imgIndex) => (
                            <img key={imgIndex} src={img} alt="Progress" className='w-[600px]' />
                        ))
                    ) : (
                        <p>No images available.</p>
                    )} */}
        </div>
      ) : (
        <p className="text-white">No research progress available.</p>
      )}
    </div>
  );
};

export default ResearchProgressComponent;
