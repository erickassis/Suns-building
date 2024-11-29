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
            AMANDA BEATRIZ DE JESUS SOUZA - 12723120167
          </li>
         <li>
              ERICK FONSECA DANTAS DE ASSIS -  12723124540
          </li>
          <li>
             GUILHERME SANTANA EVANGELISTA - 12723135956
          </li>
          <li>
              HÉLDER ARION DE BRITO LIMA - 12724130585 
          </li>
          <li>
              KAWAN OLIVEIRA CARNEIRO - 12724119606
          </li>
          <li>
             VITOR CERQUEIRA BRANDÃO PITANGUEIRA - 12722123592
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;