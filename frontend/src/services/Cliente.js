import api from "./api"

export const listarClientes   = ()     => api.get("/cliente")
export const buscarCliente    = (id)   => api.get(`/cliente/${id}`)
export const cadastrarCliente = (body) => api.post("/cliente", body)
