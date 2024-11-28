import '../styles/CardIcones.css';
import { buscarImagem } from './buscarImagem'

const CardIcones = () => {
  return (
    <div className='container-cardicones'>
        <div className='container-img-cardicones'>
            <img src={buscarImagem('painelSolar')} alt="" id='background-img-cardicones'/>

            <ul className='list-cardicones'>
                <li>
                    <img src={buscarImagem('solarPanelTechnician')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('smartcity2')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('windmill')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('ecoBricks')} alt="" />
                </li>
            </ul>
        </div>

    </div>
  )
}

export default CardIcones