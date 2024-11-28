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
            <h1>Entrar na Suns Building</h1>
            <div className="form">
              <input onChange={(e) => {setEmail(e.target.value)}} id="logarEmail" placeholder="Email..." type="text" />
              <input onChange={(e) => {setSenha(e.target.value)}} id="logarSenha" placeholder="Senha..." type="password" />
              <button onClick={logar}>Logar</button> 
            </div>
            <footer className="footerLogin">
                <p>Não possui conta? <a href="#">Cadastre-se aqui</a></p>
            </footer>
        </div>
    </div>
    </>
  )
}