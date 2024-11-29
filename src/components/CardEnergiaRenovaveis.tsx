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
                <li id='titulo-lista-energiarenovaveis'><h1>ENERGIAS RENOVAVEIS...</h1></li>
                <li>
                  <p>As energias renováveis são geradas a partir de fontes naturais e são utilizadas como alternativas sustentáveis aos combustíveis fósseis, que, por sua vez, aumentam os gases do efeito estufa.</p> <br />
                  <p>A principal vantagem ao usá-las é o menor impacto ambiental, pois reduzem a emissão de poluentes.</p><br />
                  <p>Clique nos <span>links</span> abaixo para se informar sobre algumas delas:</p><li />
                <ul>
                  <li className='links-t'>
                    <a href="https://abeeolica.org.br" target='_black' rel="noopener noreferrer">Éolica</a></li>
                  <li className='links-t'>
                    <a href="https://www.portalsolar.com.br/painel-solar" target='_black' rel="noopener noreferrer">Solar</a></li>
                  <li className='links-t'>
                  <a href="https://www.portalsolar.com.br/energia-geotermica" target="_blank" rel="noopener noreferrer">Geotérmica</a>
                  </li>
                </ul>
              </li>
            </ul>
        </div>

    </div>
  )
}

export default CardEnergiaRenovaveis;