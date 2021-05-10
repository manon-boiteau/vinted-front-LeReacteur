/* Import react-router-dom */
import { Link } from "react-router-dom";

/* Import images */
import logo from "../assets/img/vinted-logo.png";

/* Import Components */
import Signup from "../components/Signup";

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
              <Link
                className="btn-white"
                onClick={() => {
                  setShow(true);
                }}
              >
                S'inscrire
              </Link>
              <Signup
                onClose={() => setShow(false)}
                show={show}
                setUser={setUser}
              />
              <Link to="/login" className="btn-white">
                Se connecter
              </Link>
            </>
          )}
          <Link to="/publish" className="btn-green">
            Vends tes articles
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
