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
      <div className="signUpBox">
        <input onChange={(e) => {setEmail(e.target.value)}} id="logarEmail" placeholder="Email..." type="text" />
          <br></br>
        <input onChange={(e) => {setSenha(e.target.value)}} id="logarSenha" placeholder="Senha..." type="password" />
          <br></br>
        <button onClick={logar}>Logar</button>
      </div>    
    </>
  )
}