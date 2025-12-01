// Importações de estilos
import css from "./CSS/tela4_gestor.module.css"

// Importações da API (Axios)
import { listarClientes } from "../services/Cliente.js"

// Importações do React
import { replace, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Tela4_Gestor() {
    const navigate = useNavigate()

    // =================== Puxando dados do banco =================== //
    const [solicitacoes, setSolicitacoes] = useState()

    const puxarSolicitacoes = async () => {
        try {
            const promisse = await listarClientes()
            setSolicitacoes( promisse.data )
        }
        catch(erro) {
            alert("Erro ao puxar solicitações!")
            console.log("Erro ao puxar solicitações: " + erro)
        }
    }

    useEffect(() => {
        puxarSolicitacoes()
    }, [])
    // ============================================================= //


    return (
        <div className={css.container}>
            <div className={css.menu}>
            </div>
            <h2>Solicitações de Clientes</h2>

            {/* <div className="card">Cliente João — Troca de peça</div> */}
            {/* <div className="card">Cliente Maria — Manutenção</div>
            <div className="card">Cliente Carlos — Orçamento</div> */}


            { solicitacoes &&
                solicitacoes.map((registro, i) => {
                    return <div key={i} className={css.card}> <strong>{registro.nome}</strong> - {registro.descricao} </div>
                })
            }


            <button onClick={() => navigate("/Login", {replace: true})}>Sair</button>
        </div>
    );
}
export default Tela4_Gestor;