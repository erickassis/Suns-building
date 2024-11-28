import { db } from '../firebaseConfig';
import { collection, getDocs} from 'firebase/firestore';

const querySnapshot = await getDocs(collection(db, "imagens"));

export const buscarImagem = (nomeImagem: String) => {
    for (let i = 0; i < querySnapshot.size; i++) {
      const documentos = querySnapshot.docs[i];

      if (documentos.id === nomeImagem) {
        const url = documentos.data().url;
        return url;
      }
    }  
  };