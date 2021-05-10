import "./App.css";

/* Import react-router-dom */
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

/* Import js-cookie */
import Cookies from "js-cookie";

/* Import hooks from React */
import { useState } from "react";

/* Import containers */
import Home from "./containers/Home";
import Login from "./containers/Login";
import Offer from "./containers/Offer";
import NoMatch from "./containers/NoMatch";

/* Import components */
import Header from "./components/Header";
import Signup from "./components/Signup";
import Publish from "./components/Publish";

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
      <Signup setUser={setUser} />
      <Switch>
        <Route path="/login">
          <Login setUser={setUser} setShow={setShow} />
        </Route>
        <Route path="/offer/:id">
          <Offer />
        </Route>
        <Route path="/publish">
          {userToken ? (
            <Publish userToken={userToken} setUserToken={setUserToken} />
          ) : (
            <Redirect to="/login" />
          )}
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
