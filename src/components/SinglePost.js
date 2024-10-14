import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import {
  getSinglePost,
  createMilestone,
  updateMilestone,
  deleteMilestone,
  createSubpost,
  updateSubpost,
  deleteSubpost,
} from "../services/operations/postAPI";
import { useSelector } from "react-redux";
import Modal from "react-modal";
import ResearchProgressComponent from "./ResearchProgressComponent";

Modal.setAppElement("#root");

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [milestoneTitle, setMilestoneTitle] = useState("");
  const [milestoneDescription, setMilestoneDescription] = useState("");
  const [milestoneDueDate, setMilestoneDueDate] = useState("");
  const [milestoneStatus, setMilestoneStatus] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState(null);
  const [subPost, setSubPost] = useState({
    sectionName: "",
    subSectionContent: "",
    images: [],
  });
  const [subPostModalIsOpen, setSubPostModalIsOpen] = useState(false);
  const [editingSubPost, setEditingSubPost] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const result = await getSinglePost(postId, toast);
        if (result) {
          setPost(result);
          setError(null);
        } else {
          setError("Could not fetch the post.");
        }
      } catch (error) {
        setError("Failed to fetch post.");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  const handleCreateMilestone = async () => {
    const data = {
      postId,
      title: milestoneTitle,
      description: milestoneDescription,
      dueDate: milestoneDueDate,
      status: milestoneStatus,
    };
    const result = await createMilestone(data, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        milestones: [...prevPost.milestones, result],
      }));
      closeModal();
    }
  };

  const handleUpdateMilestone = async (milestoneId) => {
    const data = {
      milestoneId,
      title: milestoneTitle,
      description: milestoneDescription,
      dueDate: milestoneDueDate,
      status: milestoneStatus,
    };
    const result = await updateMilestone(data, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        milestones: prevPost.milestones.map((milestone) =>
          milestone._id === milestoneId ? result : milestone
        ),
      }));
      closeModal();
    }
  };

  const handleDeleteMilestone = async (milestoneId) => {
    const result = await deleteMilestone({ postId, milestoneId }, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        milestones: prevPost.milestones.filter(
          (milestone) => milestone._id !== milestoneId
        ),
      }));
    }
  };

  const handleCreateSubPost = async () => {
    const formData = new FormData();
    formData.append("postId", postId);
    formData.append("sectionName", subPost.sectionName);
    formData.append("subSectionContent", subPost.subSectionContent);
    subPost.images.forEach((image, index) => {
      formData.append("images", image);
    });

    const result = await createSubpost(formData, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        subPost: [...prevPost.subPost, result],
      }));
      closeSubPostModal();
    }
  };

  const handleUpdateSubPost = async (subPostId) => {
    const formData = new FormData();
    formData.append("subPostId", subPostId);
    formData.append("sectionName", subPost.sectionName);
    formData.append("subSectionContent", subPost.subSectionContent);
    subPost.images.forEach((image, index) => {
      formData.append("images", image);
    });

    const result = await updateSubpost(formData, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        subPost: prevPost.subPost.map((sub) =>
          sub._id === subPostId ? result : sub
        ),
      }));
      closeSubPostModal();
    }
  };

  const handleDeleteSubPost = async (subPostId) => {
    const result = await deleteSubpost({ postId, subPostId }, token);
    if (result) {
      setPost((prevPost) => ({
        ...prevPost,
        subPost: prevPost.subPost.filter((sub) => sub._id !== subPostId),
      }));
    }
  };

  const handleFileChange = (e) => {
    setSubPost({ ...subPost, images: Array.from(e.target.files) });
  };

  const openModal = (milestone = null) => {
    setEditingMilestone(milestone);
    if (milestone) {
      setMilestoneTitle(milestone.title);
      setMilestoneDescription(milestone.description);
      setMilestoneDueDate(
        milestone.dueDate ? milestone.dueDate.split("T")[0] : ""
      );
      setMilestoneStatus(milestone.status);
    } else {
      setMilestoneTitle("");
      setMilestoneDescription("");
      setMilestoneDueDate("");
      setMilestoneStatus("");
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingMilestone(null);
  };

  const openSubPostModal = (subPost = null) => {
    setEditingSubPost(subPost);
    if (subPost) {
      setSubPost({
        sectionName: subPost.sectionName,
        subSectionContent: subPost.subSectionContent,
        images: [],
      });
    } else {
      setSubPost({ sectionName: "", subSectionContent: "", images: [] });
    }
    setSubPostModalIsOpen(true);
  };

  const closeSubPostModal = () => {
    setSubPostModalIsOpen(false);
    setEditingSubPost(null);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!post) {
    return <div>No post found.</div>;
  }

  return (
    <div className="p-4 bg-black">
      <h1 className="text-2xl font-bold text-white">{post.title}</h1>
      <p className="mt-2 text-white">{post.content}</p>
      <p className="mt-2 text-white">
        <strong>Short Description:</strong> {post.shortDesc}
      </p>
      <p className="mt-2 text-white">
        <strong>Grant:</strong> {post.grant}
      </p>
      <p className="mt-2 text-white">
        <strong>Category:</strong> {post.category.name}
      </p>

      <div className="mt-4">
        <span className="text-white">References:</span>
        <ul className="list-none">
          {post.references.map((reference, index) => (
            <li className="bg-black text-white border border-solid border-white hover:bg-black" key={index}>{reference}</li>
          ))}
        </ul>
      </div>
      <ResearchProgressComponent postId={postId} token={token} />
      <div className="mt-4">
        <span className="text-white">Contributors:</span>
        <ul className="list-none">
          {post.contributors.map((contributor) => (
            <li className="bg-black text-white border border-solid border-white hover:bg-black" key={contributor._id}>{contributor.name}</li>
          ))}
        </ul>
      </div>

      <div className="mt-4">
        <span className="text-white">Sub Posts:</span>
        <ul className="list-none flex flex-col gap-4">
          {post.subPost.map((subPost) => (
            <div className="flex flex-col gap-2" key={subPost._id}>
              <li className="bg-black text-white border border-solid border-white hover:bg-black">{subPost.sectionName}</li>
              <li className="bg-black text-white border border-solid border-white hover:bg-black">{subPost.subSectionContent}</li>
              {subPost.imageUrls.map((imageUrl, index) => (
                <img
                  key={index}
                  src={imageUrl}
                  alt="subpost"
                  className="w-1/4"
                />
              ))}
              <button
                className="w-fit bg-green-600 hover:bg-green-500 text-white px-2 py-1 rounded"
                onClick={() => openSubPostModal(subPost)}
              >
                Update
              </button>
              <button
                className="w-fit bg-red-600 hover:bg-red-600 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteSubPost(subPost._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </ul>
        <button
          className="mt-4 w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={() => openSubPostModal()}
        >
          Add SubPost
        </button>
      </div>

      <div className="mt-4">
        <strong>Milestones:</strong>
        <ul className="list-disc ml-5">
          {post.milestones.map((milestone) => (
            <li key={milestone._id}>
              {milestone.title}
              <button
                className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded"
                onClick={() => openModal(milestone)}
              >
                Update
              </button>
              <button
                className="ml-2 bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleDeleteMilestone(milestone._id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
        <button
          className="w-fit py-2 px-4 bg-black hover:bg-black border border-solid border-white/20 text-white text-md font-semibold menu-item 
              font-sans hover:[text-shadow:1px_3px_15px_var(--tw-shadow-color)] 
              shadow-white tracking-wide rounded-lg"
          onClick={() => openModal()}
        >
          Add Milestone
        </button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Milestone Modal"
      >
        <h2>{editingMilestone ? "Update Milestone" : "Add Milestone"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editingMilestone) {
              handleUpdateMilestone(editingMilestone._id);
            } else {
              handleCreateMilestone();
            }
          }}
        >
          <div className="mt-4">
            <label className="block">Title</label>
            <input
              type="text"
              value={milestoneTitle}
              onChange={(e) => setMilestoneTitle(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block">Description</label>
            <textarea
              value={milestoneDescription}
              onChange={(e) => setMilestoneDescription(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block">Due Date</label>
            <input
              type="date"
              value={milestoneDueDate}
              onChange={(e) => setMilestoneDueDate(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block">Status</label>
            <input
              type="text"
              value={milestoneStatus}
              onChange={(e) => setMilestoneStatus(e.target.value)}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {editingMilestone ? "Update Milestone" : "Create Milestone"}
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>

      <Modal
        isOpen={subPostModalIsOpen}
        onRequestClose={closeSubPostModal}
        contentLabel="SubPost Modal"
      >
        <h2>{editingSubPost ? "Update SubPost" : "Add SubPost"}</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (editingSubPost) {
              handleUpdateSubPost(editingSubPost._id);
            } else {
              handleCreateSubPost();
            }
          }}
        >
          <div className="mt-4">
            <label className="block">Section Name</label>
            <input
              type="text"
              value={subPost.sectionName}
              onChange={(e) =>
                setSubPost({ ...subPost, sectionName: e.target.value })
              }
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block">Content</label>
            <textarea
              value={subPost.subSectionContent}
              onChange={(e) =>
                setSubPost({ ...subPost, subSectionContent: e.target.value })
              }
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <label className="block">Images</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="border rounded p-2 w-full"
            />
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              {editingSubPost ? "Update SubPost" : "Create SubPost"}
            </button>
            <button
              type="button"
              className="ml-2 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={closeSubPostModal}
            >
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default SinglePost;
