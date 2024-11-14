import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-left">
          <img src="#" alt="Logo Suns-Building" />
          <h1>Sun's Building</h1>
        </div>
        <div className="header-right">
          <nav>
            <ul>
              <li>
                <Link to="/">Início</Link>
              </li>
              <li>
                <Link to="/sobre">Sobre</Link>
              </li>
              <li>
                <Link to="/contato">Contato</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/cadastro">Cadastre-se</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Header;
