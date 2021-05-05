/* Import react-router-dom */
import { Link } from "react-router-dom";

/* Import */
import hero from "../assets/img/hero-banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Banner" />
      <div>
        <h1>Prêts à faire du tri dans vos plaquards ?</h1>
        <button>Commencer à vendre</button>
        <Link>Découvrir comment ça marche</Link>
      </div>
    </div>
  );
};

export default Hero;
