import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import '../styles/LoginCadastro.css'
import { useState } from "react";
import { auth } from "../firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  console.log(auth?.currentUser?.email)
  
  const logar = async () => {
    await signInWithEmailAndPassword(auth, email, senha)
  }

  return (
    <>
      <div className="bkground">
        <div className="login">
          <Link to="/" className="back-arrow">
            <FaArrowLeft size={30} />
          </Link>
            <h1>Entrar na Suns Building</h1>
            <div className="form">
              <input onChange={(e) => {setEmail(e.target.value)}} id="logarEmail" placeholder="Email..." type="text" />
              <input onChange={(e) => {setSenha(e.target.value)}} id="logarSenha" placeholder="Senha..." type="password" />
              <button onClick={logar}>Logar</button> 
            </div>
            <footer className="footerLogin">
            <p>Não possui conta? <Link to="/Register">Cadastre-se aqui</Link></p>
            </footer>
        </div>
    </div>
    </>
  )
}