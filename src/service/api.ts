import axios from 'axios'
import { Task } from '../types';

const api = axios.create({
    baseURL: 'https://localhost:3000/',
    timeout: 3000,
});
//buscar/listar todos
export async function getAll() {
    const tasks = await api.get('tasks')
    return(tasks.data)
}
//buscar por id
export async function getById(id:number) {
    const tasks = await api.get(`tasks/${id}`)
    return(tasks.data)
}
//salvar 
export async function save(task:Task) {
    const tasks = await api.post('tasks',{
        ...task
    })
    return(tasks.data)
}
//atualizar 
export async function update(task:Task) {
    const response = await api.put(`tasks/${task.id}`,{
        ...task
    })
    return(response.data)
}
// excluir tarefa/registro
export async function exclude(id:number) {
    const tasks = await api.delete(`tasks/${id}`)
    return(tasks.data)
}