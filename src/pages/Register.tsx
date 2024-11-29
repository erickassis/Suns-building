import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/LoginCadastro.css'
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function Autenticar() { 
  //Serve pra atualizar o estado dos inputs.
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const cadastrar = async () => {
    try {
    await createUserWithEmailAndPassword(auth, email, senha)
    } catch (err) {
      console.error(err);
    }
  }

  const logout = async () => {
    try {
    await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <div className="bkground">
        <div className="login">
          <Link to="/" className="back-arrow">
            <FaArrowLeft size={34} />
          </Link>
          <h1>Entrar na Suns Building</h1>
          <div className="form">
            <input onChange={(e) => {setEmail(e.target.value)}} id="email" placeholder="Email..." type="text" />
            <input onChange={(e) => {setSenha(e.target.value)}} id="senha" placeholder="Senha..." type="password" />
            <button onClick={cadastrar}>Cadastrar-se</button>
            <button onClick={logout}>Logout</button>
          </div>
          <footer className="footerLogin">
          <p>Já possui conta? <Link to="/Login">Faça login aqui</Link></p>
          </footer>
        </div>
        </div>
    </>
  )
}

