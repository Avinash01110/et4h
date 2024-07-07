import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { getSinglePost, createMilestone, updateMilestone, deleteMilestone } from '../services/operations/postAPI'; // Adjust the import path accordingly
import { useSelector } from "react-redux";
import Modal from 'react-modal';

Modal.setAppElement('#root');

const SinglePost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [milestoneTitle, setMilestoneTitle] = useState('');
  const [milestoneDescription, setMilestoneDescription] = useState('');
  const [milestoneDueDate, setMilestoneDueDate] = useState('');
  const [milestoneStatus, setMilestoneStatus] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editingMilestone, setEditingMilestone] = useState(null);
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
    const data = { postId, title: milestoneTitle, description: milestoneDescription, dueDate: milestoneDueDate, status: milestoneStatus };
    const result = await createMilestone(data, token);
    if (result) {
      setPost(prevPost => ({ ...prevPost, milestones: [...prevPost.milestones, result] }));
      closeModal();
    }
  };

  const handleUpdateMilestone = async (milestoneId) => {
    const data = { milestoneId, title: milestoneTitle, description: milestoneDescription, dueDate: milestoneDueDate, status: milestoneStatus };
    const result = await updateMilestone(data, token);
    if (result) {
      setPost(prevPost => ({
        ...prevPost,
        milestones: prevPost.milestones.map(milestone => milestone._id === milestoneId ? result : milestone)
      }));
      closeModal();
    }
  };

  const handleDeleteMilestone = async (milestoneId) => {
    const result = await deleteMilestone({ postId, milestoneId }, token);
    if (result) {
      setPost(prevPost => ({
        ...prevPost,
        milestones: prevPost.milestones.filter(milestone => milestone._id !== milestoneId)
      }));
    }
  };

  const openModal = (milestone = null) => {
    setEditingMilestone(milestone);
    if (milestone) {
      setMilestoneTitle(milestone.title);
      setMilestoneDescription(milestone.description);
      setMilestoneDueDate(milestone.dueDate ? milestone.dueDate.split('T')[0] : '');
      setMilestoneStatus(milestone.status);
    } else {
      setMilestoneTitle('');
      setMilestoneDescription('');
      setMilestoneDueDate('');
      setMilestoneStatus('');
    }
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setEditingMilestone(null);
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
    <div className="p-4">
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="mt-2">{post.content}</p>
      <p className="mt-2"><strong>Short Description:</strong> {post.shortDesc}</p>
      <p className="mt-2"><strong>Grant:</strong> {post.grant}</p>
      <p className="mt-2"><strong>Category:</strong> {post.category.name}</p>
      
      <div className="mt-4">
        <strong>References:</strong>
        <ul className="list-disc ml-5">
          {post.references.map((reference, index) => (
            <li key={index}>{reference}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Contributors:</strong>
        <ul className="list-disc ml-5">
          {post.contributors.map((contributor) => (
            <li key={contributor._id}>{contributor.name}</li>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Sub Posts:</strong>
        <ul className="list-disc ml-5">
          {post.subPost.map((subPost) => (
            <div key={subPost._id}>
              <li>{subPost.sectionName}</li>
              <li>{subPost.subSectionContent}</li>
            </div>
          ))}
        </ul>
      </div>
      
      <div className="mt-4">
        <strong>Milestones:</strong>
        <ul className="list-disc ml-5">
          {post.milestones.map((milestone) => (
            <li key={milestone._id}>
              {milestone.title}
              <button className="ml-2 bg-yellow-500 text-white px-2 py-1 rounded" onClick={() => openModal(milestone)}>Update</button>
              <button className="ml-2 bg-red-500 text-white px-2 py-1 rounded" onClick={() => handleDeleteMilestone(milestone._id)}>Delete</button>
            </li>
          ))}
        </ul>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded" onClick={() => openModal()}>Add Milestone</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Milestone Modal"
        className="modal"
        overlayClassName="modal-overlay"
      >
        <h2>{editingMilestone ? 'Update Milestone' : 'Add Milestone'}</h2>
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Milestone Title"
          value={milestoneTitle}
          onChange={(e) => setMilestoneTitle(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Milestone Description"
          value={milestoneDescription}
          onChange={(e) => setMilestoneDescription(e.target.value)}
        />
        <input
          type="date"
          className="border border-gray-300 p-2 rounded"
          placeholder="Milestone Due Date"
          value={milestoneDueDate}
          onChange={(e) => setMilestoneDueDate(e.target.value)}
        />
        <input
          type="text"
          className="border border-gray-300 p-2 rounded"
          placeholder="Milestone Status"
          value={milestoneStatus}
          onChange={(e) => setMilestoneStatus(e.target.value)}
        />
        <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded" onClick={editingMilestone ? () => handleUpdateMilestone(editingMilestone._id) : handleCreateMilestone}>
          {editingMilestone ? 'Update' : 'Add'}
        </button>
        <button className="ml-2 bg-gray-500 text-white px-4 py-2 rounded" onClick={closeModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default SinglePost;
