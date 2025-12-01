// Importações de estilos
import css from "./CSS/tela1_cliente.module.css"

// Importações da API (Axios)
import { cadastrarCliente } from "../services/Cliente.js"

// Importações do React
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Tela1_Cliente() {
    const navigate = useNavigate()

    const [nome, setNome]           = useState()
    const [descricao, setDescricao] = useState()

    return (
        <div className={css.container}>
            <div className="menu">
            </div>
            <h2>Solicitar Serviço</h2>

            <input placeholder="Nome do cliente"      onChange={evt => setNome(evt.currentTarget.value)} />
            <input placeholder="Descrição do serviço" onChange={evt => setDescricao(evt.currentTarget.value)} />

            {/* Cadastra a solicitação do cliente */}
            <button onClick={async () => {
                try {
                    
                    console.log("nome -> " + nome)
                    console.log("descricao -> " + descricao)

                    await cadastrarCliente({
                        nome      : nome,
                        descricao : descricao
                    })
                    alert("Solicitação enviada com sucesso!")
                }
                catch(erro) {
                    alert("Erro ao tentar enviar solicitação!")
                    console.log("Erro ao tentar enviar solicitação: " + erro)
                }
            }}>Solicitar Serviço</button>

            {/* Passa para a próxima tela */}
            <button onClick={() => navigate("/Login")}>LOGIN</button>

        </div>
    );
}
export default Tela1_Cliente;