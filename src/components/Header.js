/* Import react-router-dom */
import { Link } from "react-router-dom";

/* Import images */
import logo from "../assets/img/vinted-logo.png";

/* Import Components */
import Signup from "../containers/Signup";

const Header = ({ setUser, userToken, setShow, show }) => {
  return (
    <header>
      <div className="wrapper">
        <Link to="/">
          <img src={logo} alt="Logo Vinted" />
        </Link>

        <input
          type="search"
          placeholder="Rechercher des articles"
          className="search-bar"
        />
        <div>
          {userToken ? (
            <button
              className="btn-disco"
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup" className="btn-white">
                S'inscrire
              </Link>
              <Link
                to="/login"
                className="btn-white"
                onClick={() => {
                  setShow(true);
                }}
              >
                Se connecter
              </Link>
              <Signup onClose={() => setShow(false)} show={show} />
            </>
          )}
          <button className="btn-green">Vends tes articles</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
