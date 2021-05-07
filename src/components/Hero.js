/* Import images */
import hero from "../assets/img/hero-banner.jpg";
import whiteCut from "../assets/img/banner-cut.svg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={hero} alt="Banner" className="banner" />
      <div>
        <h1>Prêts à faire du tri dans vos plaquards ?</h1>
        <button className="btn-green">Commencer à vendre</button>
      </div>
      <img src={whiteCut} alt="End banner" className="banner-cut" />
    </div>
  );
};

export default Hero;
