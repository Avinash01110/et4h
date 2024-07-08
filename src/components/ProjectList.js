import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPosts,
  createPost,
  deletePost,
  updatePost,
} from "../services/operations/postAPI";
import { getAllCategory } from "../services/operations/categoryAPI";
import { getAllProfile } from "../services/operations/profileAPI";
import { useNavigate } from "react-router-dom";
import "../style/ProjectList.css";

const ProjectList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { post = [], loading, error } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);
  const { profile } = useSelector((state) => state.profile);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [currentPostId, setCurrentPostId] = useState(null);
  const token = useSelector((state) => state.auth.token);
  const [formData, setFormData] = useState({
    title: "",
    shortDesc: "",
    content: "",
    references: [],
    category: "",
    contributors: [],
    grant: "",
  });

  const createPostAction = (data, token) => async (dispatch) => {
    const result = await createPost(data, token);
    if (result) {
      dispatch({ type: "CREATE_POST_SUCCESS", payload: result });
    } else {
      dispatch({
        type: "CREATE_POST_FAILURE",
        payload: "Failed to create post",
      });
    }
  };

  const deletePostAction = (postId, categoryId, token) => async (dispatch) => {
    const result = await deletePost({ postId, categoryId }, token);
    if (result) {
      dispatch({ type: "DELETE_POST_SUCCESS", payload: postId });
    } else {
      dispatch({
        type: "DELETE_POST_FAILURE",
        payload: "Failed to delete post",
      });
    }
  };

  const updatePostAction = (data, token) => async (dispatch) => {
    const result = await updatePost(data, token);
    if (result) {
      dispatch({ type: "UPDATE_POST_SUCCESS", payload: result });
    } else {
      dispatch({
        type: "UPDATE_POST_FAILURE",
        payload: "Failed to update post",
      });
    }
  };

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  useEffect(() => {
    if (isModalOpen || isUpdateModalOpen) {
      dispatch(getAllCategory());
      dispatch(getAllProfile());
    }
  }, [isModalOpen, isUpdateModalOpen, dispatch]);

  const handlePostClick = (postId) => {
    navigate(`/post/${postId}`);
  };

  const handleDeletePostClick = (postId, categoryId) => {
    dispatch(deletePostAction(postId, categoryId, token));
  };

  const handleCreatePostClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCloseUpdateModal = () => {
    setIsUpdateModalOpen(false);
    setCurrentPostId(null);
  };

  // Modify handleInputChange function
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "references") {
      const referencesArray = value.split(",").map((ref) => ref.trim());
      setFormData((prev) => ({ ...prev, [name]: referencesArray }));
    } else if (name === "image" && files.length > 0) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };
  

  const handleContributorsChange = (e) => {
    const options = e.target.options;
    const selectedContributors = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        selectedContributors.push(options[i].value);
      }
    }
    setFormData((prev) => ({ ...prev, contributors: selectedContributors }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSubmit = new FormData();
    Object.keys(formData).forEach((key) => {
      if (key === "contributors" || key === "references") {
        formDataToSubmit.append(key, JSON.stringify(formData[key]));
      } else {
        formDataToSubmit.append(key, formData[key]);
      }
    });
  
    if (isUpdateModalOpen) {
      formDataToSubmit.append("postId", currentPostId);
      dispatch(updatePostAction(formDataToSubmit, token));
    } else {
      dispatch(createPostAction(formDataToSubmit, token));
    }
  
    setIsModalOpen(false);
    setIsUpdateModalOpen(false);
  };
  

  const handleEditPostClick = (postItem) => {
    setFormData({
      title: postItem.title,
      shortDesc: postItem.shortDesc,
      content: postItem.content,
      references: postItem.references,
      category: postItem.category,
      contributors: postItem.contributors,
      grant: postItem.grant,
    });
    setCurrentPostId(postItem._id);
    setIsUpdateModalOpen(true);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post || post.length === 0) {
    return <div>No posts available</div>;
  }

  return (
    <div>
      <button onClick={handleCreatePostClick} className="
      text-white font-bold py-2 px-4 rounded bg-blue-700 hover:bg-blue-700">Create Post</button>
      <ul>
        {post.map((postItem) => (
          <li key={postItem._id}>
            <span onClick={() => handlePostClick(postItem._id)}>
              {postItem.title}
            </span>
            <button
              className="bg-blue-700 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-2"
              onClick={() => handleEditPostClick(postItem)}
            >
              Edit
            </button>
            <button
            className="bg-blue-700 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-2"
              onClick={() =>
                handleDeletePostClick(postItem._id, postItem.category)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      {(isModalOpen || isUpdateModalOpen) && (
        <div className="modal">
          <div className="modal-content">
            <span
              className="close"
              onClick={isModalOpen ? handleCloseModal : handleCloseUpdateModal}
            >
              &times;
            </span>
            <h2>{isUpdateModalOpen ? "Update Post" : "Create New Post"}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Title:</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Short Description:</label>
                <input
                  type="text"
                  name="shortDesc"
                  value={formData.shortDesc}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Content:</label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <div>
    <label>Image:</label>
    <input
      type="file"
      name="image"
      onChange={handleInputChange}
    />
  </div>
              <div>
                <label>References:</label>
                <input
                  type="text"
                  name="references"
                  value={formData.references.join(", ")}
                  onChange={handleInputChange}
                  placeholder="Enter references separated by commas"
                  required
                />
              </div>
              <div>
                <label>Grant:</label>
                <input
                  type="text"
                  name="grant"
                  value={formData.grant}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div>
                <label>Category:</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Category</option>
                  {categories?.map((cat) => (
                    <option key={cat._id} value={cat._id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label>Contributors:</label>
                <select
                  name="contributors"
                  multiple
                  value={formData.contributors}
                  onChange={handleContributorsChange}
                  required
                >
                  {(profile?.profiles || []).map((profile) => (
                    <option key={profile._id} value={profile._id}>
                      {profile.name}
                    </option>
                  ))}
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
