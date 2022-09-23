import axios from 'axios';

const apiInstance = (baseURL: string) => {
    return axios.create({
        baseURL,
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

export const apiCN = apiInstance('https://api.chucknorris.io');