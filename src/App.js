import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { checkCookieAndUpdateState } from "./utility/check-cookie-and-update-state";
// Components
import Nav from "./components/Nav";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import NotCodedYet from "./components/NotCodedYet";
import UnAuth from "./components/UnAuth";
import RequireAuth from "./components/RequireAuth";
// styles
import "./styles/styles.css";

const App = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const auth = useSelector((s) => s.auth);
  useEffect(() => {
    (async () => {
      await checkCookieAndUpdateState(dispatch);
      setIsLoading(false);
    })();
  }, [dispatch]);
  if (isLoading === true) return <h1>Loading...</h1>;

  return (
    <div id="main">
      <Nav />
      <div id="body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/sign-up"
            element={
              <UnAuth auth={auth}>
                <SignUp />
              </UnAuth>
            }
          />
          <Route
            path="/sign-in"
            element={
              <UnAuth auth={auth}>
                <SignIn />
              </UnAuth>
            }
          />
          <Route
            path="/protected-route"
            element={
              <RequireAuth auth={auth}>
                <h1>This is a protected route.</h1>
              </RequireAuth>
            }
          />
          <Route path="/forgot-password" element={<NotCodedYet />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
