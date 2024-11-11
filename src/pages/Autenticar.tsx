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
      <div className="signUpBox">
        <input onChange={(e) => {setEmail(e.target.value)}} id="email" placeholder="Email..." type="text" />
          <br></br>
        <input onChange={(e) => {setSenha(e.target.value)}} id="senha" placeholder="Senha..." type="password" />
          <br></br>
        <button onClick={cadastrar}>Cadastrar-se</button>
        <button onClick={logout}>Logout</button>
      </div>    
    </>
  )
}

