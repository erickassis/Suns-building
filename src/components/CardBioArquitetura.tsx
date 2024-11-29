import '../styles/CardBioArquitetura.css'
import { buscarImagem } from './buscarImagem'

const CardBioArquitetura = () => {
  return (
    <div className='container-cardbioarquitetura'>
          <div className='container-img-cardbioarquitetura'>
              <img className='imagens-pequenas' src={buscarImagem('bioArchitecture2')} alt="" />
          </div>
          
        <div className='container-text-cardbioarquitetura'>

              
            <ul className='lista-bioarquitetura'>
                <li id='titulo-lista-bioarquitetura'><h1>BIO-ARQUITETURA...</h1></li>
                <li>
                  <p>A bio-arquitetura é uma abordagem sustentável que integra técnicas de construção ecológicas e materiais naturais, minimizando o impacto ambiental e criando espaços mais harmoniosos com o meio ambiente.</p> <br />
                  <p>Clique em um dos <span>links</span> abaixo para saber mais:</p>
                 <li/>
                 <li className='links-t'><a href="https://www.orcafascio.com/papodeengenheiro/ecotelhado" target='_black' rel="noopener noreferrer">Ecotelhados</a></li>
                 <li className='links-t'>
                  <a href="https://www.archdaily.com.br/br/920314/drenagem-urbana-sustentavel-para-a-concretizacao-de-metas-de-ods-onu" target='_black' rel="noopener noreferrer">Sistema de Drenagem Sustentável</a></li><br />
                 <li className='links-t'>
                  <a href="https://www.escolaengenharia.com.br/tijolo-ecologico/" target='_black' rel="noopener noreferrer">Tijolos Ecológicos</a></li>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default CardBioArquitetura;