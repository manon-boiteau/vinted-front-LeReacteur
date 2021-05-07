/* Import react-router-dom */
import { Link, useHistory } from "react-router-dom";

/* Import hooks from React */
import { useState } from "react";

/* Import Axios */
import axios from "axios";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const history = useHistory();

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
          "https://lereacteur-vinted-api.herokuapp.com/user/login",
          {
            email: email,
            password: password,
          }
        );
        if (response.data.token) {
          // console.log("token ", response.data.token);
          const token = response.data.token;
          setUser(token);

          history.push("/"); // user can enter - redirect to home page
        }
      } catch (error) {
        if (error.response.status === 400) {
          setErrorMessage("⛔️ Mauvais email et/ou mot de passe.");
        }
      }
    };
    fetchData();
  };

  return (
    <main className="login-form">
      <div className="login-form wrapper">
        <h2>Se connecter</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Adresse email"
            onChange={handleEmail}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            onChange={handlePassword}
          />
          <input type="submit" value="Se connecter" className="btn-green" />
          <span>{errorMessage}</span>
          <Link to="/signup">Pas encore de compte ? Inscrit toi !</Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
