// Importações de telas
import Tela1_Cliente from "../pages/Tela1_Cliente";
import Tela2_Login from "../pages/Tela2_Login";
import Tela3_CadastroGestor from "../pages/Tela3_CadastroGestor";
import Tela4_Gestor from "../pages/Tela4_Gestor";

// Importações do React
import { BrowserRouter, Route, Routes } from "react-router-dom";


function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route index              element={ <Tela1_Cliente/> } />
                <Route path={"/Cliente"}  element={ <Tela1_Cliente/> } />
                <Route path={"/Login"}    element={ <Tela2_Login/> } />
                <Route path={"/Cadastro"} element={ <Tela3_CadastroGestor/> } />
                <Route path={"/Gestor"}   element={ <Tela4_Gestor/> } />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas;