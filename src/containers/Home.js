/* Import hooks from React */
import { useState, useEffect } from "react";

/* Import axios */
import axios from "axios";

/* Import components */
import Hero from "../components/Hero";
import Offers from "../components/Offers";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>En cours de chargement...</span>
  ) : (
    <div>
      <Hero />
      <Offers data={data} />
    </div>
  );
};
export default Home;
