/* Import */
import hero from "../assets/img/hero-banner.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Banner" />
      <div>
        <h1>Prêts à faire du tri dans vos plaquards ?</h1>
        <button className="btn-green">Commencer à vendre</button>
      </div>
    </div>
  );
};

export default Hero;
