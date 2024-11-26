import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg';
import '../styles/CardsTopicos.css';
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

const CardsTopicos = () => {
  return (
    <div className='container-cardstopicos'>
        <div className='conatainer-img-cardstopicos'>
            <h2>Bioarquitetura</h2>
            <img src={buscarImagem('ecotelhado')} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Smart-cities</h2>
            <img src={buscarImagem('painelSolar')} alt="" className='img-cardstopicos'/>
        </div>
        <div className='conatainer-img-cardstopicos'>
            <h2>Energíes Renováveis</h2>
            <img src={buscarImagem('testeTelhado')} alt="" className='img-cardstopicos'/>
        </div>

    </div>
  )
}

export default CardsTopicos