// actas.js
import axios from 'axios';

const actsapi = axios.create({
    baseURL: "http://127.0.0.1:8000/api/act"
});

export const getacts = () => actsapi.get('/');
export const createact = (act) => actsapi.post('/', act);
export const deleteact = (id) => actsapi.delete(`/${id}/`);
export const getact = (id) => actsapi.get(`/${id}/`); // Para obtener un acta específica
export const updateact = (id, act) => actsapi.put(`/${id}/`, act); // Para editar
