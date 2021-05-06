import "./App.css";

/* Import react-router-dom */
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

/* Import js-cookie */
import Cookies from "js-cookie";

/* Import hooks from React */
import { useState } from "react";

/* Import containers */
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Offer from "./containers/Offer";
import NoMatch from "./containers/NoMatch";

/* Import components */
import Header from "./components/Header";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [show, setShow] = useState(false);

  const setUser = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      setUserToken(token);
    } else {
      Cookies.remove("token");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header
        setUser={setUser}
        userToken={userToken}
        setShow={setShow}
        show={show}
      />
      <Switch>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
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
