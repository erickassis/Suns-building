import '../styles/CardIcones.css';
import { buscarImagem } from './buscarImagem'

const CardIcones = () => {
  return (
    <div className='container-cardicones'>
        <div className='container-img-cardicones'>
            <img src={buscarImagem('energiasRenovaveis')} alt="" id='background-img-cardicones'/>

            <ul className='list-cardicones'>
                <li>
                    <img src={buscarImagem('illustracaoBiomassa')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('illustrcaoBarragem')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('illustracaoTurbina')} alt="" />
                </li>
                <li>
                    <img src={buscarImagem('illustracaoPainelSolar')} alt="" />
                </li>
            </ul>
        </div>

    </div>
  )
}

export default CardIcones