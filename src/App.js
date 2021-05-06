import "./App.css";

/* Import react-router-dom */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import containers */
import Home from "./containers/Home";
// import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Offer from "./containers/Offer";
import NoMatch from "./containers/NoMatch";

/* Import components */
import Header from "./components/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        {/* <Route>
          <Signup path="/signup" />
        </Route> */}
        <Route>
          <Login path="/login" />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
