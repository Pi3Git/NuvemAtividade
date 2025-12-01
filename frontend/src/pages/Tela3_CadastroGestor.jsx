// Importações de estilos
import css from "./CSS/tela3_cadastrogestor.module.css"

// Importações da API (Axios)
import { cadastrarGestor } from "../services/Gestor.js"

// Importações do React
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function Tela3_CadastroGestor() {
    const navigate = useNavigate()

    // Guarda os dados do input //
    const [nome, setNome]   = useState()
    const [email, setEmail] = useState()
    const [cpf, setCpf]     = useState()
    const [senha, setSenha] = useState()

    return (
        <div className={css.container}>
            <h2>Cadastrar Gestor</h2>
            <input placeholder="Nome"                  onChange={evt => setNome(evt.currentTarget.value)} />
            <input placeholder="Email"                 onChange={evt => setEmail(evt.currentTarget.value)} />
            <input placeholder="Cpf"                   onChange={evt => setCpf(evt.currentTarget.value)} />
            <input type="password" placeholder="Senha" onChange={evt => setSenha(evt.currentTarget.value)} />

            {/* Cadastra o gestor no banco */}
            <button onClick={async () => {
                try {
                    await cadastrarGestor({
                        "nome"  : nome,
                        "email" : email,
                        "cpf"   : cpf,
                        "senha" : senha
                    })
                    
                    alert("Usuário cadastrado com sucesso!")
                    navigate("/Login")
                }
                catch(erro) {
                    alert("Não foi possível cadastrar o usuário!")
                    console.log("Não foi possível cadastrar o usuário: " + erro)
                }

            }}>Cadastrar</button>
        </div>
    );
}
export default Tela3_CadastroGestor;