/* Import react-router-dom */
// import { Link } from "react-router-dom";

/* Import */
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = ({ data }) => {
  const ids = data.offers.map((elem) => {
    return elem._id;
  });

  const affectId = (arr) => {
    for (let i = 0; i < arr.length; i++) {
      return arr[i];
    }
  };

  return (
    <div>
      <Header />
      <Hero />
      <Offers data={data} ids={ids} affectId={affectId} />
    </div>
  );
};
export default Home;
