import axios from 'axios';

const API_URL = '您的后端API地址'; // 例如: http://localhost:3001

export const trackVisit = async () => {
    try {
        const response = await axios.post(`${API_URL}/track-visit`);
        return response.data;
    } catch (error) {
        console.error('Error tracking visit:', error);
        throw error;
    }
};
