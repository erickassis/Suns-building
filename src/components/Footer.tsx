import '../styles/Footer.css'
import unifacs from '../assets/Logomarca-da-Universidade-Salvador-UNIFACS-201911201.jpg'

function Footer() {
  return (
    <div className="container-footer">
      <div className="container-img-unifacs">
        <img src={unifacs} alt="" />
      </div>
      <div className="container-nome-footer">
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