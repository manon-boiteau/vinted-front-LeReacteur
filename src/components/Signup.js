import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const { setUser, show } = props;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

  if (!show) {
    return null;
  }

  const handleName = (event) => {
    const result = event.target.value;
    setName(result);
  };

  const handleEmail = (event) => {
    const result = event.target.value;
    setEmail(result);
  };

  const handlePassword = (event) => {
    const result = event.target.value;
    setPassword(result);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://lereacteur-vinted-api.herokuapp.com/user/signup",
          {
            username: name,
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          const token = response.data.token;
          setUser(token, response.data._id);
          history.push("/");
        } else {
          setErrorMessage("une erreur est survenue");
        }
      } catch (error) {
        if (error.response.status === 409) {
          setErrorMessage("🤭 Cet email existe déjà.");
        }
      }
    };
    fetchData();
  };

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2 className="modal-title">S'inscrire</h2>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="input-form">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                onChange={handleName}
              />
              <input type="email" placeholder="Email" onChange={handleEmail} />
              <input
                type="password"
                placeholder="Mot de passe"
                onChange={handlePassword}
              />
            </div>

            <div className="newsletter">
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">S'inscrire à notre newsletter</label>
            </div>

            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
            <input
              type="submit"
              value="S'inscrire"
              className="btn-green"
              onClick={props.onSubmit}
            />
            <span>{errorMessage}</span>
            <Link to="/login" onClick={props.onClose}>
              Tu as déjà un compte ? Connecte-toi !
            </Link>
          </form>
        </div>
        <div className="modal-footer">
          <button className="close" onClick={props.onClose}>
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
