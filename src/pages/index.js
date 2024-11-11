import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Inicio from "./pages/Início"; 
import Login from "./pages/Login";
import Cadastro from "./pages/Cadastro"; 
import Contato from "./pages/Contato"; 
import Sobre from "./pages/Sobre"; 
import NoPage from "./pages/NoPage";

export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>

            <Route index element={<Inicio />} />
  
            <Route path="login" element={<Login />} />
  
            <Route path="cadastro" element={<Cadastro />} />

            <Route path="contato" element={<Contato />} />

            <Route path="sobre" element={<Sobre />} />

            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
