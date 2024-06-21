import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPosts, createPost } from '../services/operations/postAPI';
import { getAllCategory } from '../services/operations/categoryAPI';
import { getAllProfile } from '../services/operations/profileAPI';
import { useNavigate } from 'react-router-dom';
import '../style/ProjectList.css';

const ProjectList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { post = [], loading, error } = useSelector((state) => state.post);
    const { categories } = useSelector((state) => state.category);
    const { profile } = useSelector((state) => state.profile);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = useSelector((state) => state.auth.token);
    const [formData, setFormData] = useState({
        title: '',
        shortDesc: '',
        content: '',
        references: '',
        category: '',
        contributors: [],
        grant: ''
    });
    const createPostAction = (data, token) => async (dispatch) => {
        const result = await createPost(data, token);
        if (result) {
          dispatch({ type: 'CREATE_POST_SUCCESS', payload: result });
        } else {
          dispatch({ type: 'CREATE_POST_FAILURE', payload: 'Failed to create post' });
        }
      };
    useEffect(() => {
        dispatch(getAllPosts());
    }, [dispatch]);

    useEffect(() => {
        if (isModalOpen) {
            dispatch(getAllCategory());
            dispatch(getAllProfile());
        }
    }, [isModalOpen, dispatch]);

    const handlePostClick = (postId) => {
        navigate(`/post/${postId}`);
    };

    const handleCreatePostClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
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
        dispatch(createPostAction(formData, token));
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
            <button onClick={handleCreatePostClick}>Create Post</button>
            <ul>
                {post.map((postItem) => (
                    <li key={postItem._id} onClick={() => handlePostClick(postItem._id)}>
                        {postItem.title}
                    </li>
                ))}
            </ul>
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={handleCloseModal}>&times;</span>
                        <h2>Create New Post</h2>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Title:</label>
                                <input type="text" name="title" value={formData.title} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Short Description:</label>
                                <input type="text" name="shortDesc" value={formData.shortDesc} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Content:</label>
                                <textarea name="content" value={formData.content} onChange={handleInputChange} required></textarea>
                            </div>
                            <div>
                                <label>References:</label>
                                <input type="text" name="references" value={formData.references} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Grant:</label>
                                <input type="text" name="grant" value={formData.grant} onChange={handleInputChange} required />
                            </div>
                            <div>
                                <label>Category:</label>
                                <select name="category" value={formData.category} onChange={handleInputChange} required>
                                    <option value="">Select Category</option>
                                    {categories?.map((cat) => (
                                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <label>Contributors:</label>
                                <select name="contributors" multiple value={formData.contributors} onChange={handleContributorsChange} required>
                                    {(profile?.profiles || []).map((profile) => (
                                        <option key={profile._id} value={profile._id}>{profile.name}</option>
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
