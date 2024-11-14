// src/index.tsx
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../components/Header"; 
import Inicio from "../pages/Inicio"; 
import Login from "../pages/Login";
import Cadastro from "../pages/cadastro";
import Contato from "../pages/contato";
import Sobre from "../pages/sobre";
import NoPage from "../pages/nopage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
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
};

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(<App />);
