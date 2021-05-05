/* Import */
import logo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="Logo Vinted" />
        <input type="search" placeholder="Rechercher des articles" />
        <div>
          <button className="btn-white">S'inscrire</button>
          <button className="btn-white">Se connecter</button>
          <button className="btn-green">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
