/* Import hooks from React */
import { useState, useEffect } from "react";

/* Import axios */
import axios from "axios";

/* Import components */
import Hero from "../components/Hero";
import Offers from "../components/Offers";

/* Import Fontawsome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSpinner);

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
          // "https://vinted--le-reacteur.herokuapp.com/offers"
        );

        setData(response.data);
        setIsLoading(false);
      } catch (e) {
        console.log(e.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <div className="loading">
      <span className="spin">
        <FontAwesomeIcon icon="spinner" spin />
      </span>

      <span>En cours de chargement...</span>
    </div>
  ) : (
    <div>
      <Hero />
      <Offers data={data} />
    </div>
  );
};
export default Home;
