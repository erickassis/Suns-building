import React from 'react'

//Estilo
import '../styles/CardBioArquitetura.css'
//img 
import backGrey from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'
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
                  A bio-arquitetura é uma abordagem sustentável que integra técnicas de construção ecológicas e materiais naturais, minimizando o impacto ambiental e criando espaços mais harmoniosos com o meio ambiente. <br />
                  Clique em um dos links abaixo para saber mais: <br />
                 <a href="#ecotelhados">Ecotelhados</a><br />
                 <a href="#drenagem-sustentavel">Sistema de Drenagem Sustentável</a><br />
                 <a href="#tijolos-ecologicos">Tijolos Ecológicos</a>
                </li>
            </ul>
        </div>


    </div>
  )
}

export default CardBioArquitetura