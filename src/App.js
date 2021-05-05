import "./App.css";

/* Import react-router-dom */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import hooks */
import { useState, useEffect } from "react";

/* Import axios */
import axios from "axios";

/* Import */
import Home from "./containers/Home";
import Offer from "./containers/Offer";

function App() {
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
    <Router>
      <Switch>
        <Route path="/offer:id">
          <Offer />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
