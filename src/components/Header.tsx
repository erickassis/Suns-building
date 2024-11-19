import { Link, Outlet } from "react-router-dom";
import "../styles/Header.css";
import back from "../assets/fb51434f75f4513fd43833fba4c4f2d6.jpg";

function Header() {
  return (
    <div>
      {/* Cabeçalho com navegação */}
      <div className="header-container">
        <div className="header-left">
          <img src={back} alt="Logo Suns-Building" />
          <h1>Sun's Building</h1>
        </div>

        <div className="header-right">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/About">Sobre</Link>
              </li>
              <li>
                <Link to="/Contact">Contato</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Cadastre-se</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
}

export default Header;
