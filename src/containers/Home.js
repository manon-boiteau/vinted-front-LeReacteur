/* Import react-router-dom */
// import { Link } from "react-router-dom";

/* Import */
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = ({ data }) => {
  return (
    <div>
      <Header />
      <Hero />
      <Offers data={data} />
    </div>
  );
};
export default Home;
