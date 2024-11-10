import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

function Login() {
  //Funcao para adicionar usuario no banco de dados.
  const addUser = async (userData: { nome: string; email: string; senha: string }) => {
    try {
      // Referência à coleção "usuarios"
      const usersCollection = collection(db, "usuarios");
  
      // Adiciona um novo documento com os dados do usuário
      const docRef = await addDoc(usersCollection, userData);
      console.log("Usuário adicionado com ID: ", docRef.id);
    } catch (e) {
      console.error("Erro ao adicionar usuário: ", e);
    }
  };

  return (
    <>
    
    </>
  )
}

export default Login;
