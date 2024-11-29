import { Link, Outlet } from "react-router-dom";
import "../styles/Header.css";
import Logo from "../assets/logo_suns_building.jpg";

function Header() {
  return (
    <div>
      {/* Cabeçalho com navegação */}
      <div className="header-container">
        <div className="header-left">
          <img src={Logo} alt="Logo Suns-Building" />
          <h1>Sun's Building</h1>
        </div>

        <div className="header-right">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
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

        <Outlet />
      </div>
  );
}

export default Header;