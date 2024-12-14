import axios from 'axios';

const API_URL = "http://localhost:8000"; // Указываем URL бэкенда

export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks/`);
    return response.data;
};

export const addTask = async (task) => {
    const response = await axios.post(`${API_URL}/tasks/`, task);
    return response.data;
};

export const deleteTask = async (taskId) => {
    try {
        const response = await axios.delete(`${API_URL}/tasks/${taskId}/`);
        return response.data;
    } catch (error) {
        console.error("Error deleting task:", error);
        throw error;
    }
};

export const toggleTaskStatus = async (taskId) => {
    try {
        const response = await axios.patch(`${API_URL}/tasks/${taskId}/toggle-status`);
        return response.data;
    } catch (error) {
        console.error("Error toggling task status:", error);
        throw error;
    }
};