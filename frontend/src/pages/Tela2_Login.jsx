// Importações de estilos
import css from "./CSS/tela2_login.module.css"

// Importações da API (Axios)
import { buscarGestor } from "../services/Gestor.js"

// Importações do React
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function Tela2_Login() {
    const navigate = useNavigate()

    const [cpf, setCpf]                   = useState()
    const [senha, setSenha]               = useState()
    const [usuario, setUsuarioEncontrado] = useState(null)

    // Valida senha //
    useEffect(() => {
        if (usuario != null) {

            /////////////////////////////
            console.log("Senha informada -> " + senha)
            console.log("Senha correta -> " + usuario.senha)

            if (usuario.senha === senha)
                navigate("/Gestor")
            else
                alert("Informe usuário e senha válidos!")
        }
    }, [usuario])


    return (
        <div className={css.container}>
            <h2>Login Gestor</h2>
            <input placeholder="Usuário (CPF)"               onChange={evt => setCpf(evt.currentTarget.value)} />
            <input type="password" placeholder="Senha" onChange={evt => setSenha(evt.currentTarget.value)} />

            {/* Checa se o usuário realmente existe */}
            <button onClick={ async () => {
                try {
                    
                    //////////////////////////
                    console.log("Cpf -> " + cpf)

                    const promisse = await buscarGestor(cpf)
                    setUsuarioEncontrado(promisse.data)
                }
                catch(erro) {
                    alert("Informe usuário e senha válidos!")
                    console.log("Informe usuário e senha válidos: " + erro)
                }
            }}>Entrar</button>

            <button onClick={() => navigate("/Cadastro")}>Criar Conta</button>
        </div>
    );
}
export default Tela2_Login;