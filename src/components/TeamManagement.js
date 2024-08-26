import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import {
    getAllTeams,
    addTeam,
    updateTeam,
    deleteTeam,
} from "../services/operations/teamAPI";
import { getAllProfile } from "../services/operations/profileAPI";

const TeamManagement = () => {
    const dispatch = useDispatch();
    const { teams, loading, error } = useSelector((state) => state.team);
    const { profile } = useSelector((state) => state.profile);
    const { token } = useSelector((state) => state.auth);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("");
    const [selectedTeam, setSelectedTeam] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        peoples: [],
    });

    useEffect(() => {
        dispatch(getAllTeams());
        dispatch(getAllProfile());
    }, [dispatch]);

    const handleOpenModal = (type, team = null) => {
        setModalType(type);
        setSelectedTeam(team);
        setFormData(
            team
                ? {
                    name: team.name,
                    peoples: team.peoples.map(profile => profile._id) || [],
                }
                : { name: "", peoples: [] }
        );
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setSelectedTeam(null);
        setFormData({ name: "", peoples: [] });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleProfileSelection = (e) => {
        const selectedIds = Array.from(e.target.selectedOptions, option => option.value);
        setFormData((prevFormData) => ({
            ...prevFormData,
            peoples: selectedIds,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (modalType === "add") {
                await dispatch(addTeam(formData, token));
            } else if (modalType === "edit") {
                await dispatch(updateTeam({ ...formData, teamId: selectedTeam._id }, token));
            }
            handleCloseModal();
        } catch (error) {
            console.error("Error managing team:", error);
        }
    };

    const handleDelete = async (teamId) => {
        if (window.confirm("Are you sure you want to delete this team?")) {
            try {
                await dispatch(deleteTeam(teamId, token));
            } catch (error) {
                console.error("Error deleting team:", error);
            }
        }
    };

    if (loading) return <p className="text-center mt-4">Loading...</p>;
    if (error) return <p className="text-center mt-4 text-red-500">Error: {error}</p>;

    return (
        <div className="flex items-center justify-center min-h-screen py-24 bg-gray-100">
            <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">Team Management</h1>
                <ul className="text-black">
                    {teams && teams.length > 0 ? (
                        teams.map((team) => (
                            <li
                                key={team._id}
                                className="cursor-pointer py-2 px-4 mb-2 rounded-md bg-blue-500 text-black hover:bg-blue-600 flex justify-between items-center"
                            >
                                <div>
                                    <p>{team.name}</p>
                                    <p>Profiles: {team.peoples.map(profile => profile.name).join(", ")}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleOpenModal("edit", team)} className="bg-yellow-500 text-black px-3 py-1 rounded-md mr-2 hover:bg-yellow-600">
                                        Edit
                                    </button>
                                    <button onClick={() => handleDelete(team._id)} className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600">
                                        Delete
                                    </button>
                                </div>
                            </li>
                        ))
                    ) : (
                        <p className="text-center mt-4">No teams available</p>
                    )}
                </ul>
                <button
                    onClick={() => handleOpenModal("add")}
                    className="bg-green-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-green-600"
                >
                    Add Team
                </button>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                            <h2 className="text-xl mb-4 text-center">
                                {modalType === "add" ? "Add Team" : "Edit Team"}
                            </h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Team Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">
                                        Select Profiles
                                    </label>
                                    <select
                                        multiple
                                        value={formData.peoples}
                                        onChange={handleProfileSelection}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
                                    >
                                        {profile &&
                                            profile.profiles &&
                                            profile.profiles.map((prof) => (
                                                <option key={prof._id} value={prof._id}>
                                                    {prof.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="button"
                                        onClick={handleCloseModal}
                                        className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-gray-600"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                    >
                                        {modalType === "add" ? "Add" : "Update"}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamManagement;
