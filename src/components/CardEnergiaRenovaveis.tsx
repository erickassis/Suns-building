import '../styles/CardEnergiaRenovaveis.css'
import { buscarImagem } from './buscarImagem'

const CardEnergiaRenovaveis = () => {
  return (
    <div className='container-cardenergiarenovaveis'>
              
        <div className='container-img-cardenergiarenovaveis'>
            <img className='imagens-pequenas' src={buscarImagem('energiaRenovavelPainel')} alt="" />
        </div>


        <div className='container-text-cardenergiarenovaveis'>
            
            <ul className='lista-energiarenovaveis'>
                <li id='titulo-lista-energiarenovaveis'><h1>ENERGIA RENOVAVEIS...</h1></li>
                <li>
                  As energias renováveis são geradas a partir de fontes naturais e são utilizadas como alternativas sustentáveis aos combustíveis fósseis, que, por sua vez, aumentam os gases do efeito estufa. <br />
                  A principal vantagem ao usá-las é o menor impacto ambiental, pois reduzem a emissão de poluentes. <br />
                  Algumas delas: <br />
                <ul>
                  <li>Éolica</li>
                  <li>Solar</li>
                  <li>Geotérmica</li>
                </ul>
              </li>
            </ul>
        </div>

    </div>
  )
}

export default CardEnergiaRenovaveis