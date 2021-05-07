import notFound from "../assets/img/not-found.svg";

const NoMatch = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="404 not found" />
      <h1>La page n'existe pas</h1>
      <p>
        Désolé, mais on dirait que cette page n'existe plus. Pourquoi ne pas
        revenir en arrière et essayer autre chose ?
      </p>
    </div>
  );
};

export default NoMatch;
