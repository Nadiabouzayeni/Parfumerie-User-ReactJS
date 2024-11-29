import React, { createContext, useContext } from 'react';
import axios from 'axios';

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
    const apiBaseURL = process.env.REACT_APP_API_BASE_URL;

    const apiRequest = async (method, endpoint, data = {}, options = {}) => {
        try {
            const response = await axios({
                method,
                url: `${apiBaseURL}${endpoint}`,
                data,
                ...options,
            });
            return response.data;
        } catch (error) {
            throw error.response?.data || error.message;
        }
    };

    return (
        <ApiContext.Provider value={{ apiRequest }}>
            {children}
        </ApiContext.Provider>
    );
};

export const useApi = () => {
    const context = useContext(ApiContext);
    if (!context) {
        throw new Error('useApi must be used within an ApiProvider');
    }
    return context;
};