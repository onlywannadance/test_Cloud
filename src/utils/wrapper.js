import axios from 'axios';

const checkResponse = (response) => response.data;
const catchError = (error) => error;

export const wrapper = (method, url, data) => axios.request({method, url, data}).then(checkResponse).catch(catchError);
