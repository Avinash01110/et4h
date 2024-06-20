import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCategory, addCategory, updateCategory, deleteCategory } from '../services/operations/categoryAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CategoryList = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { categories, loading, error } = useSelector((state) => state.category);
    const { token } = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState('');
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [formData, setFormData] = useState({ name: '', description: '' });

    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch]);

    const handleCategoryClick = (categoryId) => {
        navigate(`/category/${categoryId}`);
    };

    const handleOpenModal = (type, category = null) => {
        setModalType(type);
        setSelectedCategory(category);
        setFormData(category ? { name: category.name, description: category.description } : { name: '', description: '' });
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedCategory(null);
        setFormData({ name: '', description: '' });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async () => {
        if (modalType === 'add') {
            await addCategory(formData, token);
        } else if (modalType === 'edit') {
            await updateCategory({ categoryId: selectedCategory._id, ...formData }, token);
        }
        dispatch(getAllCategory());
        handleCloseModal();
    };

    const handleDelete = async (categoryId) => {
        if (window.confirm('Are you sure you want to delete this category?')) {
            await deleteCategory({ categoryId }, token);
            dispatch(getAllCategory());
        }
    };

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>;

    return (
        <div className="mt-4">
            <ul className="text-black">
                {categories && categories.length > 0 ? (
                    categories.map((category) => (
                        <li
                            key={category._id}
                            className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-blue-500 text-black hover:bg-blue-600 flex justify-between items-center"
                        >
                            <div onClick={() => handleCategoryClick(category._id)}>
                                <p>{category.name}</p>
                                <p>{category.description}</p>
                                {category.projects.length > 0 ? (
                                    <p className="text-sm text-gray-500">{category.projects.length} project(s)</p>
                                ) : (
                                    <p className="text-sm text-gray-500">No projects</p>
                                )}
                            </div>
                            {token && (
                                <div>
                                    <button
                                        onClick={() => handleOpenModal('edit', category)}
                                        className="bg-yellow-500 text-black px-2 py-1 rounded-md ml-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(category._id)}
                                        className="bg-red-500 text-black px-2 py-1 rounded-md ml-2"
                                    >
                                        Delete
                                    </button>
                                </div>
                            )}
                        </li>
                    ))
                ) : (
                    <p className="text-center mt-4">No categories available</p>
                )}
            </ul>
            {token && (
                <button
                    onClick={() => handleOpenModal('add')}
                    className="bg-green-500 text-black px-4 py-2 rounded-md mt-4"
                >
                    Add Category
                </button>
            )}

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded-md">
                        <h2 className="text-xl mb-4">{modalType === 'add' ? 'Add Category' : 'Edit Category'}</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Description</label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    onClick={handleCloseModal}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="button"
                                    onClick={handleSubmit}
                                    className="bg-blue-500 text-black px-4 py-2 rounded-md"
                                >
                                    {modalType === 'add' ? 'Save' : 'Update'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryList;
