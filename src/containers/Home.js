import { useState, useEffect } from "react";
import axios from "axios";
import Hero from "../components/Hero";
import Offers from "../components/Offers";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faSpinner, faPlus);

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // My Api : https://vinted--le-reacteur.herokuapp.com/offers
  // Le Reacteur API : https://lereacteur-vinted-api.herokuapp.com/offers

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
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
