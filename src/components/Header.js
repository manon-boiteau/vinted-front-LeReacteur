/* Import */
import logo from "../assets/img/vinted-logo.png";

const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <img src={logo} alt="Logo Vinted" />
        <input type="search" />
        <button>s'inscrire</button>
        <button>se connecter</button>
        <button>vends tes articles</button>
      </div>
    </header>
  );
};

export default Header;
