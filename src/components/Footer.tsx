import '../styles/Footer.css'
import unifacs from '../assets/unifacs.png'

function Footer() {
  return (
    <div className="container-footer">
      <div className="container-img-unifacs">
        <a href="https://www.unifacs.br/"><img className='logoUni' src={unifacs} alt="Logo da UNIFACS" /></a>
      </div>
      <div className="container-nome-footer">
        DESENVOLVEDORES:
        <ul className='lista-nome'>
          <li>
            AMANDA BEATRIZ DE JESUS SOUZA 
          </li>
         <li>
              ERICK FONSECA DANTAS DE ASSIS 
          </li>
          <li>
             GUILHERME SANTANA EVANGELISTA 
          </li>
          <li>
              HÉLDER ARION DE BRITO LIMA  
          </li>
          <li>
              KAWAN OLIVEIRA CARNEIRO 
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;