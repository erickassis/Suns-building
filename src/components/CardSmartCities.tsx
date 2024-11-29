import '../styles/CardSmartCities.css'
import { buscarImagem } from './buscarImagem'

const CardSmartCities = () => {
  return (
    <div className='container-cardsmartcities'>


        <div className='container-img-cardsmartcities'>
            <img className='imagens-pequenas' src={buscarImagem('smartCity')} alt="" />
        </div>

        <div className='container-text-cardsmartcities'>
            
            <ul className='lista-smartcities'>
                <li id='titulo-lista-smartcities'><h1>SMART CITIES...</h1></li>
                <li>
                  <p> As smart-cities utilizam tecnologias avançadas como inteligência artificial, IoT (Internet das Coisas) e big data, 
                  para promover o desenvolvimento sustentável e melhorar a qualidade de vida na cidade.
                  Otimizando áreas como transporte, energia e infraestrutura.</p> <br />
                  <p>As smart-cities reduzem emissões de carbono, melhoram a mobilidade e gerenciam melhor os recursos naturais. <br />
                  Clique em um dos <span>links</span> abaixo para saber mais.</p>
                <li/>
                <li className='links-t'><a href="#postes-inteligentes">Postes Inteligentes</a></li>
                <li className='links-t'><a href="#coleta-lixo-inteligente">Coleta de Lixo Inteligente</a></li>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default CardSmartCities