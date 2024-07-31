import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';
import {
    addPublication,
    updatePublication,
    deletePublication,
    getAllPublications
} from '../services/operations/publicationAPI';
import './publication.css'
const Publications = () => {
    const [publications, setPublications] = useState([]);
    const [form, setForm] = useState({
        title: '',
        authors: '',
        publicationDate: '',
        publicationType: '',
        publicationLink: '',
        publicationSummary: ''
    });
    const [isUpdate, setIsUpdate] = useState(false);
    const [updateId, setUpdateId] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const token = useSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    useEffect(() => {
        fetchPublications();
    }, []);

    const fetchPublications = async () => {
        const result = await getAllPublications();
        if (result) {
            setPublications(result);
        }
    };

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isUpdate) {
            await updatePublication({ ...form, id: updateId }, token);
            setIsUpdate(false);
            setUpdateId(null);
        } else {
            await addPublication(form, token);
        }
        setForm({
            title: '',
            authors: '',
            publicationDate: '',
            publicationType: '',
            publicationLink: '',
            publicationSummary: ''
        });
        setIsModalOpen(false);
        fetchPublications();
    };

    const handleUpdate = (publication) => {
        setForm({
            title: publication.title,
            authors: publication.authors,
            publicationDate: publication.publicationDate.split('T')[0],
            publicationType: publication.publicationType,
            publicationLink: publication.publicationLink,
            publicationSummary: publication.publicationSummary
        });
        setIsUpdate(true);
        setUpdateId(publication._id);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        await deletePublication({ id }, token);
        fetchPublications();
    };

    const openModal = () => {
        setIsModalOpen(true);
        setIsUpdate(false);
        setForm({
            title: '',
            authors: '',
            publicationDate: '',
            publicationType: '',
            publicationLink: '',
            publicationSummary: ''
        });
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setIsUpdate(false);
        setUpdateId(null);
    };

    return (
        <div>
            <h1>Publications</h1>
            <div className='bg-white'>

            <button onClick={openModal}>Add New Publication</button>
            </div>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <h2>{isUpdate ? 'Update' : 'Add'} Publication</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="title"
                                placeholder="Title"
                                value={form.title}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="authors"
                                placeholder="Authors"
                                value={form.authors}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="date"
                                name="publicationDate"
                                value={form.publicationDate}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="text"
                                name="publicationType"
                                placeholder="Publication Type"
                                value={form.publicationType}
                                onChange={handleChange}
                                required
                            />
                            <input
                                type="url"
                                name="publicationLink"
                                placeholder="Publication Link"
                                value={form.publicationLink}
                                onChange={handleChange}
                                required
                            />
                            <textarea
                                name="publicationSummary"
                                placeholder="Publication Summary"
                                value={form.publicationSummary}
                                onChange={handleChange}
                                required
                            ></textarea>
                            <button type="submit">{isUpdate ? 'Update' : 'Create'} Publication</button>
                        </form>
                    </div>
                </div>
            )}

            <ul>
                {publications.map((publication) => (
                    <li key={publication.id}>
                        <h2>{publication.title}</h2>
                        <p>{publication.authors}</p>
                        <p>{publication.publicationDate}</p>
                        <p>{publication.publicationType}</p>
                        <p><a href={publication.publicationLink} target="_blank" rel="noopener noreferrer">Link</a></p>
                        <p>{publication.publicationSummary}</p>
                        <button onClick={() => handleUpdate(publication)}>Update</button>
                        <button onClick={() => handleDelete(publication._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Publications;