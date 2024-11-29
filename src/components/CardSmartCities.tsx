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
                As smart-cities utilizam tecnologias avançadas como inteligência artificial, IoT (Internet das Coisas) e big data, 
                para promover o desenvolvimento sustentável e melhorar a qualidade de vida na cidade. <br />
                Otimizando áreas como transporte, energia e infraestrutura. <br />
                As smart-cities reduzem emissões de carbono, melhoram a mobilidade e gerenciam melhor os recursos naturais. <br />
                Clique em um dos links abaixo para saber mais. <br />
    
                <a href="#postes-inteligentes">Postes Inteligentes</a><br />
                <a href="#coleta-lixo-inteligente">Coleta de Lixo Inteligente</a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default CardSmartCities