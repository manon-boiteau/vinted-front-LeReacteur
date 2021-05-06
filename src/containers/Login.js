/* Import react-router-dom */
import { Link } from "react-router-dom";

/* Import hooks from React */
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
  };

  return (
    <>
      <h2>Se connecter</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" onChange={handleEmail} />
        <input type="password" onChange={handlePassword} />
        <input type="submit" value="Se connecter" />
        <Link to="/signup">Pas encore de compte ? Inscrit toi !</Link>
      </form>
    </>
  );
};

export default Login;
