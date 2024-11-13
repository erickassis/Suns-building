import '../styles/Header.css'
import back from '../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg'

function Header() {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src= {back} alt="Logo Suns-Building" />
        <h1>Sun's Building</h1>
      </div>
      
      <div className="header-right">
        <nav>
          <ul>
            <a className='link-toolbar' href=""><li>Pagina Incial</li></a>
            <a className='link-toolbar' href=""><li>Sobre</li></a>
            <a className='link-toolbar' href=""><li>Contato</li></a>
            <a className='link-toolbar' href=""><li>Login</li></a>
            <a className='link-toolbar' href=""><li>Cadstre-se</li></a>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;