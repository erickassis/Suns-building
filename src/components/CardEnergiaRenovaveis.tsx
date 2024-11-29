import '../styles/CardEnergiaRenovaveis.css'
import { buscarImagem } from './buscarImagem'

const CardEnergiaRenovaveis = () => {
  return (
    <div className='container-cardenergiarenovaveis'>
              
        <div className='container-img-cardenergiarenovaveis'>
            <img className='imagens-pequenas' src={buscarImagem('geothermalEnergy')} alt="" />
        </div>


        <div className='container-text-cardenergiarenovaveis'>
            
            <ul className='lista-energiarenovaveis'>
                <li id='titulo-lista-energiarenovaveis'><h1>ENERGIA RENOVAVEIS...</h1></li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate maxime placeat ut fugiat soluta assumenda aliquam dignissimos inventore? Commodi id recusandae odio, illo voluptatum maiores vitae ipsa! Sapiente, quasi esse! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo laudantium in illo culpa impedit accusamus necessitatibus omnis assumenda dicta delectus eaque optio atque perspiciatis nostrum obcaecati amet voluptatibus, maiores maxime.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, aliquid quos dolorum perspiciatis maxime eveniet aperiam reprehenderit repellendus quam pari</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
                <li>Lorem ipsum dolor</li>
            </ul>
        </div>

    </div>
  )
}

export default CardEnergiaRenovaveis