/* Import react-router-dom */
import { Link } from "react-router-dom";

/* Import images */
import logo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="Logo Vinted" />
        <input type="search" placeholder="Rechercher des articles" />
        <div>
          <button>S'inscrire</button>
          {/* <Link to="/signup" className="btn-white">
            S'inscrire
          </Link> */}
          <Link to="/login" className="btn-white">
            Se connecter
          </Link>
          <button className="btn-green">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
