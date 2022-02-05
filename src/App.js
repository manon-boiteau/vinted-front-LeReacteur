import "./App.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Cookies from "js-cookie";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Offer from "./containers/Offer";
import Publish from "./containers/Publish";
import Payment from "./containers/Payment";
import NoMatch from "./containers/NoMatch";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [show, setShow] = useState(false);

  const setUser = (token, id) => {
    if (token) {
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("userId", id);
      setUserToken(token);
    } else {
      Cookies.remove("token");
      Cookies.remove("id");
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
          <Offer userToken={userToken} setUser={setUser} />
        </Route>
        <Route path="/publish">
          {userToken ? (
            <Publish userToken={userToken} setUserToken={setUserToken} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
