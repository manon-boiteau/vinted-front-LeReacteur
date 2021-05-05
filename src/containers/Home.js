/* Import react-router-dom */
// import { Link } from "react-router-dom";

/* Import */
import Header from "../components/Header";
import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = ({ data }) => {
  const id = data.offers.map((elem, index) => {
    return elem._id;
  });
  console.log(id);
  return (
    <div>
      <Header />
      <Hero />
      <Offers data={data} id={id} />
    </div>
  );
};
export default Home;
