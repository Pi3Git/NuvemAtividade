import api from "./api"

export const listarGestores  = ()      => api.get("/gestor")
export const buscarGestor    = (cpf)   => api.get(`/gestor/${cpf}`)
export const cadastrarGestor = (body)  => api.post("/gestor", body)
